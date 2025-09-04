import React, { useState, useEffect } from 'react';
import { ChevronDown } from 'lucide-react'; 

const PortfolioInline = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);

  const YOUR_PHOTO_URL = "/images/onkar-photo.jpg";
  const YOUR_RESUME_URL = "/documents/onkar-dehane-resume.pdf";

  const phrases = [
    "Building Scalable Enterprise Solutions",
    "Creating Seamless User Experiences",
    "Architecting Cloud-Native Applications",
    "Optimizing Performance & Security",
    "Transforming Ideas into Reality"
  ];

  useEffect(() => {
    let timeout;
    const typePhrase = () => {
      const currentPhrase = phrases[currentPhraseIndex];
      if (typingText.length < currentPhrase.length) {
        setTypingText(currentPhrase.substring(0, typingText.length + 1));
        timeout = setTimeout(typePhrase, 100);
      } else {
        timeout = setTimeout(() => {
          setTypingText('');
          setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        }, 2000);
      }
    };
    typePhrase();
    return () => clearTimeout(timeout);
  }, [typingText, currentPhraseIndex, phrases]);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = YOUR_RESUME_URL;
    link.download = 'Onkar-Dehane-Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // Dynamic Styles based on theme
  const styles = {
    container: {
      minHeight: '100vh',
      background: isDarkMode 
        ? 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)' 
        : 'linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%)',
      color: isDarkMode ? '#ffffff' : '#1f2937',
      transition: 'all 0.5s ease',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      overflow: 'hidden'
    },
    nav: {
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      background: isDarkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
      backdropFilter: 'blur(10px)',
      zIndex: 1000,
      borderBottom: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
      transition: 'all 0.3s ease'
    },
    navContainer: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '1rem 2rem',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    },
    logo: {
      fontSize: '1.5rem',
      fontWeight: 'bold',
      background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    navLinks: {
      display: 'flex',
      gap: '2rem',
      alignItems: 'center',
      listStyle: 'none',
      margin: 0,
      padding: 0
    },
    navLink: {
      color: isDarkMode ? '#9ca3af' : '#6b7280',
      textDecoration: 'none',
      transition: 'color 0.3s ease',
      cursor: 'pointer',
      fontSize: '1rem'
    },
    navLinkHover: {
      color: isDarkMode ? '#8b5cf6' : '#3b82f6'
    },
    themeToggle: {
      padding: '0.5rem',
      borderRadius: '50%',
      background: isDarkMode ? '#374151' : '#e5e7eb',
      border: 'none',
      cursor: 'pointer',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      marginLeft: '1rem'
    },
    hero: {
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem',
      position: 'relative',
      marginTop: '60px'
    },
    heroTitle: {
      fontSize: 'clamp(3rem, 8vw, 6rem)',
      fontWeight: '800',
      marginBottom: '1rem',
      background: isDarkMode 
        ? 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 50%, #06b6d4 100%)'
        : 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 50%, #10b981 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text',
      textAlign: 'center',
      lineHeight: 1.2
    },
    heroSubtitle: {
      fontSize: 'clamp(1.25rem, 3vw, 2rem)',
      color: isDarkMode ? '#9ca3af' : '#6b7280',
      marginBottom: '1rem',
      textAlign: 'center'
    },
    typingContainer: {
      fontSize: 'clamp(1rem, 2.5vw, 1.5rem)',
      color: isDarkMode ? '#a78bfa' : '#3b82f6',
      marginBottom: '2rem',
      minHeight: '2rem',
      textAlign: 'center'
    },
    buttonContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      gap: '1rem',
      justifyContent: 'center',
      marginBottom: '2rem'
    },
    button: {
      padding: '0.875rem 2rem',
      borderRadius: '9999px',
      fontWeight: '600',
      cursor: 'pointer',
      display: 'inline-flex',
      alignItems: 'center',
      gap: '0.5rem',
      transition: 'all 0.3s ease',
      fontSize: '1rem',
      border: 'none',
      textDecoration: 'none'
    },
    primaryButton: {
      background: isDarkMode 
        ? 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)'
        : 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
      color: 'white',
      boxShadow: isDarkMode 
        ? '0 10px 30px rgba(139, 92, 246, 0.3)'
        : '0 10px 30px rgba(59, 130, 246, 0.3)'
    },
    outlineButton: {
      background: 'transparent',
      border: `2px solid ${isDarkMode ? '#8b5cf6' : '#3b82f6'}`,
      color: isDarkMode ? '#8b5cf6' : '#3b82f6'
    },
    socialLinks: {
      display: 'flex',
      gap: '1.5rem',
      justifyContent: 'center',
      marginTop: '2rem'
    },
    socialLink: {
      width: '50px',
      height: '50px',
      borderRadius: '50%',
      background: isDarkMode ? '#374151' : '#e5e7eb',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      transition: 'all 0.3s ease',
      cursor: 'pointer',
      textDecoration: 'none',
      color: isDarkMode ? '#ffffff' : '#1f2937'
    },
    mobileMenu: {
      display: mobileMenuOpen ? 'block' : 'none',
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      background: isDarkMode ? '#1e293b' : '#ffffff',
      borderTop: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
      padding: '1rem'
    },
    mobileNavLink: {
      display: 'block',
      padding: '0.75rem 1rem',
      color: isDarkMode ? '#9ca3af' : '#6b7280',
      textDecoration: 'none',
      borderRadius: '0.5rem',
      marginBottom: '0.5rem',
      transition: 'background 0.3s ease'
    },
    section: {
      padding: '5rem 2rem',
      maxWidth: '1200px',
      margin: '0 auto'
    },
    sectionTitle: {
      fontSize: 'clamp(2rem, 5vw, 3rem)',
      fontWeight: '700',
      textAlign: 'center',
      marginBottom: '3rem',
      background: isDarkMode 
        ? 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)'
        : 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
      WebkitBackgroundClip: 'text',
      WebkitTextFillColor: 'transparent',
      backgroundClip: 'text'
    },
    aboutGrid: {
      display: 'grid',
      gridTemplateColumns: window.innerWidth > 768 ? '1fr 2fr' : '1fr',
      gap: '3rem',
      alignItems: 'center'
    },
    aboutImage: {
      width: '100%',
      maxWidth: '400px',
      height: '400px',
      borderRadius: '20px',
      overflow: 'hidden',
      background: isDarkMode 
        ? 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)'
        : 'linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      boxShadow: isDarkMode 
        ? '0 20px 60px rgba(139, 92, 246, 0.2)'
        : '0 20px 60px rgba(59, 130, 246, 0.2)'
    },
    aboutText: {
      fontSize: '1.125rem',
      lineHeight: '1.8',
      color: isDarkMode ? '#d1d5db' : '#4b5563',
      marginBottom: '1.5rem'
    }
  };

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>OD.</div>
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Desktop Navigation */}
            {window.innerWidth > 768 && (
              <div style={styles.navLinks}>
                <a href="#home" style={styles.navLink}>Home</a>
                <a href="#about" style={styles.navLink}>About</a>
                <a href="#skills" style={styles.navLink}>Skills</a>
                <a href="#projects" style={styles.navLink}>Projects</a>
                <a href="#contact" style={styles.navLink}>Contact</a>
              </div>
            )}
            
            {/* Theme Toggle Button - NOW VISIBLE! */}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)} 
              style={styles.themeToggle}
              aria-label="Toggle theme"
            >
              {isDarkMode ? 
                <Sun size={20} color="#fbbf24" /> : 
                <Moon size={20} color="#6b7280" />
              }
            </button>
            
            {/* Mobile Menu Toggle */}
            {window.innerWidth <= 768 && (
              <button 
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                style={{ ...styles.themeToggle, marginLeft: '0.5rem' }}
                aria-label="Toggle mobile menu"
              >
                {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            )}
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && window.innerWidth <= 768 && (
          <div style={styles.mobileMenu}>
            <a href="#home" style={styles.mobileNavLink}>Home</a>
            <a href="#about" style={styles.mobileNavLink}>About</a>
            <a href="#skills" style={styles.mobileNavLink}>Skills</a>
            <a href="#projects" style={styles.mobileNavLink}>Projects</a>
            <a href="#contact" style={styles.mobileNavLink}>Contact</a>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" style={styles.hero}>
        <h1 style={styles.heroTitle}>Onkar Dehane</h1>
        <p style={styles.heroSubtitle}>Senior Full-Stack Developer</p>
        <div style={styles.typingContainer}>
          {typingText}<span style={{ animation: 'blink 1s infinite' }}>|</span>
        </div>
        
        <div style={styles.buttonContainer}>
          <a href="#projects" style={{ ...styles.button, ...styles.primaryButton }}>
            <Code size={20} /> View Projects
          </a>
          <button 
            onClick={handleDownloadResume}
            style={{ ...styles.button, ...styles.outlineButton }}
          >
            <Download size={20} /> Download Resume
          </button>
        </div>
        
        <div style={styles.socialLinks}>
          <a href="https://github.com/onkardehane" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
            <Github size={20} />
          </a>
          <a href="https://linkedin.com/in/onkar-dehane-5a9631136" target="_blank" rel="noopener noreferrer" style={styles.socialLink}>
            <Linkedin size={20} />
          </a>
          <a href="mailto:onkar.dehane24@gmail.com" style={styles.socialLink}>
            <Mail size={20} />
          </a>
          <a href="tel:+4915225457768" style={styles.socialLink}>
            <Phone size={20} />
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={styles.section}>
        <h2 style={styles.sectionTitle}>About Me</h2>
        <div style={styles.aboutGrid}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {YOUR_PHOTO_URL && YOUR_PHOTO_URL !== "/api/placeholder/400/400" ? (
              <img 
                src={YOUR_PHOTO_URL} 
                alt="Onkar Dehane"
                style={{ ...styles.aboutImage, objectFit: 'cover' }}
              />
            ) : (
              <div style={styles.aboutImage}>
                <span style={{ fontSize: '6rem' }}>👨‍💻</span>
              </div>
            )}
          </div>
          
          <div>
            <p style={styles.aboutText}>
              I'm a passionate Full-Stack Developer with <strong style={{ color: isDarkMode ? '#8b5cf6' : '#3b82f6' }}>5+ years of experience</strong> building 
              enterprise-grade applications. My expertise spans from creating intuitive user interfaces to architecting 
              robust backend systems that scale.
            </p>
            <p style={styles.aboutText}>
              Specialized in <strong style={{ color: isDarkMode ? '#8b5cf6' : '#3b82f6' }}>Java Spring Boot</strong> and <strong style={{ color: isDarkMode ? '#8b5cf6' : '#3b82f6' }}>Angular</strong>, 
              I've delivered solutions for companies like <strong style={{ color: isDarkMode ? '#8b5cf6' : '#3b82f6' }}>IMC AG</strong> and <strong style={{ color: isDarkMode ? '#8b5cf6' : '#3b82f6' }}>SAP</strong>, 
              focusing on performance optimization, cloud deployment, and GDPR compliance.
            </p>
            
            {/* Stats Grid */}
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(2, 1fr)', 
              gap: '1rem',
              marginTop: '2rem'
            }}>
              {[
                { number: '5+', label: 'Years Experience' },
                { number: '20+', label: 'Projects Delivered' },
                { number: '100K+', label: 'Users Served' },
                { number: '15+', label: 'Technologies' }
              ].map((stat, index) => (
                <div key={index} style={{
                  background: isDarkMode ? 'rgba(55, 65, 81, 0.5)' : 'rgba(219, 234, 254, 0.5)',
                  padding: '1rem',
                  borderRadius: '12px',
                  textAlign: 'center'
                }}>
                  <div style={{ 
                    fontSize: '1.875rem', 
                    fontWeight: 'bold',
                    color: isDarkMode ? '#8b5cf6' : '#3b82f6'
                  }}>{stat.number}</div>
                  <div style={{ 
                    color: isDarkMode ? '#9ca3af' : '#6b7280',
                    fontSize: '0.875rem'
                  }}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Add CSS for animations */}
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          overflow-x: hidden;
        }
        
        a:hover {
          opacity: 0.8;
        }
        
        button:hover {
          transform: translateY(-2px);
        }
      `}</style>
    </div>
  );
};

export default PortfolioInline;