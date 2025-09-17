import React, { useState } from 'react';
import { useTheme } from '../../../contexts/ThemeContext';
import { useScrollSpy } from '../../../hooks/useScrollSpy';
import { scrollToSection } from '../../../utils/helpers';
import { SECTION_IDS } from '../../../utils/constants';
import styles from './Header.module.css';

const Header = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const activeSection = useScrollSpy(SECTION_IDS);

  const handleNavClick = (sectionId) => {
    scrollToSection(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <div className={styles.container}>
          <div className={styles.logo}>
            <span>OD.</span>
          </div>
          
          <div className={styles.desktop}>
            {SECTION_IDS.map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={`${styles.navLink} ${
                  activeSection === section ? styles.active : ''
                }`}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
          
          <div className={styles.actions}>
            <button
              onClick={toggleTheme}
              className={styles.themeToggle}
              aria-label="Toggle theme"
            >
              {isDarkMode ? '☀️' : '🌙'}
            </button>
            
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={styles.mobileToggle}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? '✕' : '☰'}
            </button>
          </div>
        </div>
        
        {mobileMenuOpen && (
          <div className={styles.mobileMenu}>
            {SECTION_IDS.map((section) => (
              <button
                key={section}
                onClick={() => handleNavClick(section)}
                className={styles.mobileLink}
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </button>
            ))}
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
