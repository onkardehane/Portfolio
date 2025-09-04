import React, { useState, useEffect } from 'react';
import { 
  ChevronDown, 
  Sun, 
  Moon, 
  Menu, 
  X, 
  Code, 
  Download, 
  Github, 
  Linkedin, 
  Mail, 
  Phone,
  ExternalLink,
  User,
  Server,
  Database,
  Settings
} from 'lucide-react';

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

  const phrases = [
    "Building Scalable Enterprise Solutions",
    "Creating Seamless User Experiences",
    "Architecting Cloud-Native Applications",
    "Optimizing Performance & Security",
    "Transforming Ideas into Reality"
  ];

  useEffect(() => {
    let timeout;
    const currentPhrase = phrases[currentPhraseIndex];
    
    if (isTyping) {
      if (typingText.length < currentPhrase.length) {
        timeout = setTimeout(() => {
          setTypingText(currentPhrase.substring(0, typingText.length + 1));
        }, 100);
      } else {
        timeout = setTimeout(() => {
          setIsTyping(false);
        }, 2000);
      }
    } else {
      if (typingText.length > 0) {
        timeout = setTimeout(() => {
          setTypingText(typingText.substring(0, typingText.length - 1));
        }, 50);
      } else {
        setCurrentPhraseIndex((prev) => (prev + 1) % phrases.length);
        setIsTyping(true);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [typingText, currentPhraseIndex, isTyping, phrases]);

  const handleDownloadResume = () => {
    // Create a simple resume download (you'll need to add the actual PDF file)
    alert('Resume download will be available soon! Please contact me directly for now.');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const styles = {
    container: {
      minHeight: '100vh',
      background: isDarkMode 
        ? 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)' 
        : 'linear-gradient(180deg, #f0f9ff 0%, #ffffff 100%)',
      color: isDarkMode ? '#ffffff' : '#1f2937',
      transition: 'all 0.5s ease',
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
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
    skillsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
      gap: '2rem',
      marginTop: '3rem'
    },
    skillCard: {
      background: isDarkMode ? 'rgba(55, 65, 81, 0.5)' : 'rgba(219, 234, 254, 0.3)',
      padding: '2rem',
      borderRadius: '20px',
      transition: 'all 0.3s ease',
      border: `1px solid ${isDarkMode ? 'rgba(139, 92, 246, 0.2)' : 'rgba(59, 130, 246, 0.2)'}`,
      textAlign: 'center'
    },
    projectsGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
      gap: '2rem',
      marginTop: '3rem'
    },
    projectCard: {
      background: isDarkMode ? '#374151' : '#ffffff',
      borderRadius: '20px',
      overflow: 'hidden',
      transition: 'all 0.3s ease',
      border: `1px solid ${isDarkMode ? '#4b5563' : '#e5e7eb'}`,
      boxShadow: isDarkMode ? '0 4px 6px rgba(0, 0, 0, 0.1)' : '0 4px 6px rgba(0, 0, 0, 0.05)'
    },
    projectImage: {
      height: '200px',
      background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '3rem',
      color: 'white'
    },
    contactGrid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
      gap: '2rem',
      marginTop: '3rem',
      textAlign: 'center'
    }
  };

  const skills = [
    {
      icon: <Code size={48} />,
      title: "Frontend Development",
      skills: ["Angular (Expert)", "React & TypeScript", "HTML5 / CSS3 / Sass", "Responsive Design", "Bootstrap / Material UI"]
    },
    {
      icon: <Server size={48} />,
      title: "Backend Development", 
      skills: ["Java / Spring Boot", "REST APIs / Microservices", "Node.js / Express", "Python / Django", "Hibernate / JPA"]
    },
    {
      icon: <Database size={48} />,
      title: "Database & Cloud",
      skills: ["PostgreSQL / MySQL", "MongoDB / NoSQL", "AWS / Azure", "Docker / Kubernetes", "CI/CD Pipelines"]
    },
    {
      icon: <Settings size={48} />,
      title: "Tools & Practices",
      skills: ["Git / GitHub / GitLab", "Jenkins / CircleCI", "Agile / Scrum", "JIRA / Confluence", "IntelliJ IDEA / VS Code"]
    }
  ];

  const projects = [
    {
      title: "Event Management Platform",
      description: "Full-featured platform with automated workflows, secure payment integration, and real-time analytics. Migrated legacy system to Angular, improving performance by 40%.",
      tech: ["Angular", "Spring Boot", "PostgreSQL", "Stripe API"],
      icon: "📅"
    },
    {
      title: "Learning Management System", 
      description: "Enterprise LMS serving 10,000+ users with video streaming, progress tracking, and interactive assessments. Implemented GDPR compliance features.",
      tech: ["Java", "Spring Boot", "Angular", "AWS"],
      icon: "🎓"
    },
    {
      title: "Real-time Chat Application",
      description: "WebSocket-based chat with video calling, file sharing, and end-to-end encryption. Supports 1000+ concurrent users with minimal latency.",
      tech: ["Node.js", "Socket.io", "React", "MongoDB"],
      icon: "💬"
    }
  ];

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.nav}>
        <div style={styles.navContainer}>
          <div style={styles.logo}>OD.</div>
          
          <div style={{ display: 'flex', alignItems: 'center' }}>
            {/* Desktop Navigation */}
            <div style={{ ...styles.navLinks, display: window.innerWidth > 768 ? 'flex' : 'none' }}>
              <span onClick={() => scrollToSection('home')} style={styles.navLink}>Home</span>
              <span onClick={() => scrollToSection('about')} style={styles.navLink}>About</span>
              <span onClick={() => scrollToSection('skills')} style={styles.navLink}>Skills</span>
              <span onClick={() => scrollToSection('projects')} style={styles.navLink}>Projects</span>
              <span onClick={() => scrollToSection('contact')} style={styles.navLink}>Contact</span>
            </div>
            
            {/* Theme Toggle */}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)} 
              style={styles.themeToggle}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} color="#fbbf24" /> : <Moon size={20} color="#6b7280" />}
            </button>
            
            {/* Mobile Menu Toggle */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              style={{ ...styles.themeToggle, marginLeft: '0.5rem', display: window.innerWidth <= 768 ? 'flex' : 'none' }}
              aria-label="Toggle mobile menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            right: 0,
            background: isDarkMode ? '#1e293b' : '#ffffff',
            borderTop: `1px solid ${isDarkMode ? '#374151' : '#e5e7eb'}`,
            padding: '1rem'
          }}>
            {['home', 'about', 'skills', 'projects', 'contact'].map((section) => (
              <div 
                key={section}
                onClick={() => scrollToSection(section)}
                style={{
                  padding: '0.75rem 1rem',
                  cursor: 'pointer',
                  borderRadius: '0.5rem',
                  marginBottom: '0.5rem',
                  textTransform: 'capitalize'
                }}
              >
                {section}
              </div>
            ))}
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
          <button 
            onClick={() => scrollToSection('projects')} 
            style={{ ...styles.button, ...styles.primaryButton }}
          >
            <Code size={20} /> View Projects
          </button>
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
        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth > 768 ? '1fr 2fr' : '1fr',
          gap: '3rem',
          alignItems: 'center'
        }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{
              width: '300px',
              height: '300px',
              borderRadius: '20px',
              background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '6rem'
            }}>
              👨‍💻
            </div>
          </div>
          
          <div>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: '1.8',
              color: isDarkMode ? '#d1d5db' : '#4b5563',
              marginBottom: '1.5rem'
            }}>
              I'm a passionate Full-Stack Developer with <strong style={{ color: isDarkMode ? '#8b5cf6' : '#3b82f6' }}>5+ years of experience</strong> building 
              enterprise-grade applications. My expertise spans from creating intuitive user interfaces to architecting 
              robust backend systems that scale.
            </p>
            <p style={{
              fontSize: '1.125rem',
              lineHeight: '1.8',
              color: isDarkMode ? '#d1d5db' : '#4b5563',
              marginBottom: '1.5rem'
            }}>
              Specialized in <strong style={{ color: isDarkMode ? '#8b5cf6' : '#3b82f6' }}>Java Spring Boot</strong> and <strong style={{ color: isDarkMode ? '#8b5cf6' : '#3b82f6' }}>Angular</strong>, 
              I've delivered solutions for companies like <strong style={{ color: isDarkMode ? '#8b5cf6' : '#3b82f6' }}>IMC AG</strong> and <strong style={{ color: isDarkMode ? '#8b5cf6' : '#3b82f6' }}>SAP</strong>, 
              focusing on performance optimization, cloud deployment, and GDPR compliance.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={styles.section}>
        <h2 style={styles.sectionTitle}>Technical Expertise</h2>
        <div style={styles.skillsGrid}>
          {skills.map((skill, index) => (
            <div key={index} style={styles.skillCard}>
              <div style={{ 
                color: isDarkMode ? '#8b5cf6' : '#3b82f6',
                marginBottom: '1rem'
              }}>
                {skill.icon}
              </div>
              <h3 style={{ 
                fontSize: '1.25rem',
                fontWeight: '600',
                marginBottom: '1rem'
              }}>
                {skill.title}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {skill.skills.map((item, idx) => (
                  <li key={idx} style={{
                    padding: '0.25rem 0',
                    color: isDarkMode ? '#9ca3af' : '#6b7280'
                  }}>
                    ▹ {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={styles.section}>
        <h2 style={styles.sectionTitle}>Featured Projects</h2>
        <div style={styles.projectsGrid}>
          {projects.map((project, index) => (
            <div key={index} style={styles.projectCard}>
              <div style={styles.projectImage}>
                <span style={{ fontSize: '4rem' }}>{project.icon}</span>
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '1rem'
                }}>
                  {project.title}
                </h3>
                <p style={{
                  color: isDarkMode ? '#9ca3af' : '#6b7280',
                  marginBottom: '1.5rem',
                  lineHeight: '1.6'
                }}>
                  {project.description}
                </p>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  {project.tech.map((tech, idx) => (
                    <span key={idx} style={{
                      background: isDarkMode ? 'rgba(139, 92, 246, 0.2)' : 'rgba(59, 130, 246, 0.1)',
                      color: isDarkMode ? '#a78bfa' : '#3b82f6',
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.875rem'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.section}>
        <h2 style={styles.sectionTitle}>Let's Connect</h2>
        <div style={{ textAlign: 'center' }}>
          <p style={{
            fontSize: '1.2rem',
            marginBottom: '2rem',
            color: isDarkMode ? '#d1d5db' : '#4b5563'
          }}>
            I'm always interested in discussing new opportunities and challenging projects. Feel free to reach out!
          </p>
          <div style={styles.contactGrid}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <Mail size={24} />
              </div>
              <h3>Email</h3>
              <a href="mailto:onkar.dehane24@gmail.com" style={{
                color: isDarkMode ? '#8b5cf6' : '#3b82f6',
                textDecoration: 'none'
              }}>
                onkar.dehane24@gmail.com
              </a>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                <Phone size={24} />
              </div>
              <h3>Phone</h3>
              <a href="tel:+4915225457768" style={{
                color: isDarkMode ? '#8b5cf6' : '#3b82f6',
                textDecoration: 'none'
              }}>
                +49 152 2545 7768
              </a>
            </div>
            
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
              <div style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'linear-gradient(135deg, #8b5cf6 0%, #3b82f6 100%)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: 'white'
              }}>
                🌍
              </div>
              <h3>Location</h3>
              <span>Germany</span>
            </div>
          </div>
        </div>
      </section>

      {/* CSS Animations */}
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
        
        button:hover, a:hover {
          transform: translateY(-2px);
          opacity: 0.9;
        }
        
        ${styles.skillCard}:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(139, 92, 246, 0.2);
        }
        
        ${styles.projectCard}:hover {
          transform: translateY(-5px);
          box-shadow: 0 20px 40px rgba(139, 92, 246, 0.2);
        }
      `}</style>
    </div>
  );
};

export default Portfolio;