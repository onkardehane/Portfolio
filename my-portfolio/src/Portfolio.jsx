import React, { useState, useEffect } from 'react';
import { 
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
  Server,
  Database,
  Settings,
  Calendar,
  GraduationCap,
  MessageSquare,
  TrendingUp,
  Bot,
  ShoppingCart,
  ExternalLink,
  MapPin,
  Send
} from 'lucide-react';

// Move phrases outside component to avoid re-render issues
const TYPING_PHRASES = [
  "Building Scalable Enterprise Solutions",
  "Creating Seamless User Experiences",
  "Architecting Cloud-Native Applications",
  "Optimizing Performance & Security"
];

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  useEffect(() => {
    let timeout;
    const currentPhrase = TYPING_PHRASES[currentPhraseIndex];
    
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
        setCurrentPhraseIndex((prev) => (prev + 1) % TYPING_PHRASES.length);
        setIsTyping(true);
      }
    }
    
    return () => clearTimeout(timeout);
  }, [typingText, currentPhraseIndex, isTyping]);

  const handleDownloadResume = () => {
    // Create a link element and trigger download
    const link = document.createElement('a');
    link.href = '/assets/documents/Onkar_Dehane_Resume.pdf'; // Update this path to your actual resume
    link.download = 'Onkar_Dehane_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! I will get back to you soon.');
    setFormData({ name: '', email: '', message: '' });
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Define color schemes
  const colors = {
    primary: isDarkMode ? '#6366f1' : '#4f46e5',
    secondary: isDarkMode ? '#8b5cf6' : '#7c3aed',
    accent: isDarkMode ? '#06b6d4' : '#0891b2',
    dark: isDarkMode ? '#0f172a' : '#ffffff',
    darkLight: isDarkMode ? '#1e293b' : '#f8fafc',
    gray: isDarkMode ? '#64748b' : '#6b7280',
    light: isDarkMode ? '#f8fafc' : '#1f2937',
    background: isDarkMode ? 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)' : 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
    cardBg: isDarkMode ? '#1e293b' : '#ffffff',
    border: isDarkMode ? 'rgba(99, 102, 241, 0.2)' : 'rgba(79, 70, 229, 0.15)',
    navBg: isDarkMode ? 'rgba(15, 23, 42, 0.95)' : 'rgba(255, 255, 255, 0.95)',
    textSecondary: isDarkMode ? '#9ca3af' : '#6b7280',
    shadow: isDarkMode ? '0 20px 60px rgba(99, 102, 241, 0.3)' : '0 20px 60px rgba(79, 70, 229, 0.2)'
  };

  const stats = [
    { number: '5+', label: 'Years Experience' },
    { number: '25+', label: 'Projects Delivered' },
    { number: '1M+', label: 'Lines of Code' },
    { number: '4', label: 'Companies' }
  ];

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
      icon: <Calendar size={48} />
    },
    {
      title: "Learning Management System", 
      description: "Enterprise LMS serving 10,000+ users with video streaming, progress tracking, and interactive assessments. Implemented GDPR compliance features.",
      tech: ["Java", "Spring Boot", "Angular", "AWS"],
      icon: <GraduationCap size={48} />
    },
    {
      title: "Real-time Chat Application",
      description: "WebSocket-based chat with video calling, file sharing, and end-to-end encryption. Supports 1000+ concurrent users with minimal latency.",
      tech: ["Node.js", "Socket.io", "React", "MongoDB"],
      icon: <MessageSquare size={48} />
    },
    {
      title: "Analytics Dashboard",
      description: "Real-time business intelligence dashboard with custom KPIs, data visualization, and automated reporting. Processes 1M+ data points daily.",
      tech: ["React", "D3.js", "Python", "Redis"],
      icon: <TrendingUp size={48} />
    },
    {
      title: "AI-Powered API Service",
      description: "RESTful microservices architecture with ML integration for predictive analytics. Handles 10K+ requests per minute with 99.9% uptime.",
      tech: ["Python", "FastAPI", "TensorFlow", "Docker"],
      icon: <Bot size={48} />
    },
    {
      title: "E-Commerce Platform",
      description: "Full-stack e-commerce solution with inventory management, payment processing, and admin dashboard. Generated $500K+ in transactions.",
      tech: ["MERN Stack", "Redux", "Stripe", "AWS"],
      icon: <ShoppingCart size={48} />
    }
  ];

  const experience = [
    {
      date: "Dec 2023 - Aug 2025",
      title: "Senior Fullstack Developer",
      company: "Meetingmasters.de | Cologne, Germany",
      description: "Led development of complex TypeScript/Angular applications with advanced component architecture and RxJS state management. Achieved 30% improvement in user interaction performance and 40% improvement in SQL query performance through systematic optimization.",
      highlights: [
        "Built complex TypeScript/Angular applications with advanced component architecture",
        "Achieved 30% improvement in user interaction performance through optimization",
        "Delivered 40% performance improvement in SQL queries through optimization and indexing",
        "Mentored junior developers on TypeScript best practices and Angular architecture",
        "Collaborated with Product Management and UI/UX teams for customer-centric solutions"
      ],
      tech: ["TypeScript", "Angular", "RxJS", "Node.js", "SQL", "REST APIs"]
    },
    {
      date: "January 2022 - July 2023",
      title: "Software Developer",
      company: "IMC AG | Germany",
      description: "Led development of enterprise learning management systems using Java Spring Boot and Angular. Enhanced application performance by 40% through optimization and framework migration. Implemented GDPR compliance features and automated testing pipelines.",
      highlights: [
        "Led development of enterprise LMS serving 10,000+ users",
        "Enhanced application performance by 40% through optimization",
        "Implemented GDPR compliance features",
        "Automated testing pipelines and deployment processes"
      ],
      tech: ["Java", "Spring Boot", "Angular", "PostgreSQL"]
    },
    {
      date: "November 2020 - October 2021",
      title: "Developer (Working Student)",
      company: "SAP | Walldorf, Germany",
      description: "Built internal training platform using Mendix Studio Pro with cloud deployment. Managed microflows for seamless backend integration and improved user onboarding process by 60%. Collaborated with cross-functional teams in Agile environment.",
      highlights: [
        "Built internal training platform with cloud deployment",
        "Improved user onboarding process by 60%",
        "Managed microflows for seamless backend integration",
        "Collaborated in Agile cross-functional teams"
      ],
      tech: ["Mendix", "Cloud", "Microservices"]
    },
    {
      date: "April 2018 - September 2019",
      title: "Software Engineer",
      company: "Hathway Company | India",
      description: "Implemented REST microservices using Spring Boot, translating complex business requirements into efficient technical solutions. Reduced API response time by 35% through optimization and caching strategies.",
      highlights: [
        "Implemented REST microservices using Spring Boot",
        "Reduced API response time by 35% through optimization",
        "Translated complex business requirements into technical solutions",
        "Implemented caching strategies for performance improvement"
      ],
      tech: ["Spring Boot", "REST APIs", "MySQL"]
    }
  ];

  return (
    <div style={{ 
      minHeight: '100vh',
      background: colors.background,
      color: colors.light,
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
      lineHeight: 1.6,
      transition: 'all 0.3s ease'
    }}>
      {/* Navigation */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: colors.navBg,
        backdropFilter: 'blur(10px)',
        zIndex: 1000,
        padding: '1rem 0',
        transition: 'all 0.3s ease',
        borderBottom: `1px solid ${colors.border}`,
        boxShadow: isDarkMode ? 'none' : '0 4px 20px rgba(0, 0, 0, 0.08)'
      }}>
        <div style={{
          maxWidth: '1200px',
          margin: '0 auto',
          padding: '0 2rem',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <div style={{
            fontSize: '1.5rem',
            fontWeight: '700',
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            OD.
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <ul style={{ display: 'flex', gap: '2rem', listStyle: 'none', margin: 0, padding: 0 }}>
              <li><a onClick={() => scrollToSection('home')} style={{ color: colors.light, textDecoration: 'none', cursor: 'pointer', transition: 'color 0.3s ease', fontWeight: '500' }}>Home</a></li>
              <li><a onClick={() => scrollToSection('about')} style={{ color: colors.light, textDecoration: 'none', cursor: 'pointer', transition: 'color 0.3s ease', fontWeight: '500' }}>About</a></li>
              <li><a onClick={() => scrollToSection('skills')} style={{ color: colors.light, textDecoration: 'none', cursor: 'pointer', transition: 'color 0.3s ease', fontWeight: '500' }}>Skills</a></li>
              <li><a onClick={() => scrollToSection('projects')} style={{ color: colors.light, textDecoration: 'none', cursor: 'pointer', transition: 'color 0.3s ease', fontWeight: '500' }}>Projects</a></li>
              <li><a onClick={() => scrollToSection('experience')} style={{ color: colors.light, textDecoration: 'none', cursor: 'pointer', transition: 'color 0.3s ease', fontWeight: '500' }}>Experience</a></li>
              <li><a onClick={() => scrollToSection('contact')} style={{ color: colors.light, textDecoration: 'none', cursor: 'pointer', transition: 'color 0.3s ease', fontWeight: '500' }}>Contact</a></li>
            </ul>
            
            {/* Theme Toggle */}
            <button 
              onClick={() => setIsDarkMode(!isDarkMode)}
              style={{
                padding: '0.5rem',
                borderRadius: '50%',
                background: colors.darkLight,
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                transition: 'all 0.3s ease',
                color: colors.light
              }}
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={{ 
        minHeight: '100vh', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center',
        position: 'relative',
        background: `linear-gradient(135deg, ${colors.primary}10, ${colors.secondary}10)`,
        overflow: 'hidden',
        paddingTop: '80px'
      }}>
        <div style={{ textAlign: 'center', zIndex: 1, padding: '0 2rem' }}>
          {/* Profile Picture */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{
              width: '200px',
              height: '200px',
              margin: '0 auto',
              borderRadius: '50%',
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
              padding: '6px',
              marginBottom: '1rem',
              boxShadow: colors.shadow
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img 
                  src="/assets/images/projects/onkar-photo.jpg"
                  alt="Onkar Dehane - Senior Full-Stack Developer"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block'
                  }}
                />
              </div>
            </div>
          </div>

          <h1 style={{ 
            fontSize: 'clamp(3rem, 8vw, 6rem)', 
            fontWeight: '800',
            marginBottom: '1rem',
            background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary}, ${colors.accent})`,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            Onkar Dehane
          </h1>
          <p style={{ fontSize: 'clamp(1.25rem, 3vw, 2rem)', color: colors.gray, marginBottom: '0.5rem' }}>
            Senior Full-Stack Developer
          </p>
          <div style={{ fontSize: 'clamp(1rem, 2.5vw, 1.5rem)', color: colors.accent, marginBottom: '2rem', minHeight: '2rem' }}>
            {typingText}<span style={{ animation: 'blink 1s infinite' }}>|</span>
          </div>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginBottom: '2rem' }}>
            <button 
              onClick={() => scrollToSection('projects')} 
              style={{
                padding: '1rem 2rem',
                border: 'none',
                borderRadius: '50px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                color: '#fff',
                boxShadow: `0 10px 30px ${colors.primary}30`
              }}
            >
              <Code size={20} /> View Projects
            </button>
            <button 
              onClick={handleDownloadResume}
              style={{
                padding: '1rem 2rem',
                border: `2px solid ${colors.primary}`,
                borderRadius: '50px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: 'transparent',
                color: colors.primary
              }}
            >
              <Download size={20} /> Download Resume
            </button>
          </div>

          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            {[
              { icon: <Github size={20} />, href: "https://github.com/onkardehane", label: "GitHub" },
              { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/onkar-dehane-5a9631136", label: "LinkedIn" },
              { icon: <Mail size={20} />, href: "mailto:onkar.dehane24@gmail.com", label: "Email" },
              { icon: <Phone size={20} />, href: "tel:+4915225457768", label: "Phone" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith('http') ? '_blank' : undefined}
                rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                style={{
                  width: '50px',
                  height: '50px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: colors.darkLight,
                  borderRadius: '50%',
                  color: colors.light,
                  transition: 'all 0.3s ease',
                  textDecoration: 'none'
                }}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{ padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '3rem',
          background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          About Me
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: window.innerWidth > 768 ? '1fr 2fr' : '1fr', gap: '4rem', alignItems: 'center' }}>
          <div style={{ position: 'relative' }}>
            <div style={{ 
              width: '100%', 
              height: '450px', 
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
              borderRadius: '20px',
              padding: '8px',
              boxShadow: colors.shadow
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '12px',
                overflow: 'hidden',
                position: 'relative'
              }}>
                <img 
                  src="/assets/images/projects/onkar-photo.jpg"
                  alt="Onkar Dehane - Senior Full-Stack Developer"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center top',
                    display: 'block'
                  }}
                />
              </div>
            </div>
          </div>
          <div>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              I'm a passionate Full-Stack Developer with <strong style={{ color: colors.primary }}>5+ years of experience</strong> building 
              enterprise-grade applications. My expertise spans from creating intuitive user interfaces to 
              architecting robust backend systems that scale.
            </p>
            <p style={{ fontSize: '1.1rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
              Specialized in <strong style={{ color: colors.primary }}>Java Spring Boot</strong> and <strong style={{ color: colors.primary }}>Angular</strong>, I've delivered 
              solutions for companies like <strong style={{ color: colors.primary }}>Meetingmasters.de</strong>, <strong style={{ color: colors.primary }}>IMC AG</strong> and <strong style={{ color: colors.primary }}>SAP</strong>, focusing on 
              performance optimization, cloud deployment, and GDPR compliance.
            </p>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '2rem', marginTop: '2rem' }}>
              {stats.map((stat, index) => (
                <div key={index} style={{
                  background: `linear-gradient(135deg, ${colors.darkLight}, ${colors.primary}10)`,
                  padding: '1.5rem',
                  borderRadius: '15px',
                  textAlign: 'center',
                  border: `1px solid ${colors.border}`
                }}>
                  <div style={{ fontSize: '2rem', fontWeight: '700', color: colors.primary }}>
                    {stat.number}
                  </div>
                  <div style={{ color: colors.gray, marginTop: '0.5rem' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" style={{ padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '3rem',
          background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Technical Expertise
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {skills.map((skill, index) => (
            <div key={index} style={{
              background: colors.cardBg,
              padding: '2rem',
              borderRadius: '20px',
              transition: 'all 0.3s ease',
              border: `1px solid ${colors.border}`,
              textAlign: 'center',
              boxShadow: isDarkMode ? 'none' : '0 8px 25px rgba(0, 0, 0, 0.08)',
              cursor: 'pointer'
            }}>
              <div style={{ 
                color: colors.primary,
                marginBottom: '1rem'
              }}>
                {skill.icon}
              </div>
              <h3 style={{ fontSize: '1.3rem', fontWeight: '600', marginBottom: '1rem' }}>
                {skill.title}
              </h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {skill.skills.map((item, idx) => (
                  <li key={idx} style={{ 
                    padding: '0.5rem 0', 
                    color: colors.gray,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}>
                    <span style={{ color: colors.accent }}>▹</span> {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={{ padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '3rem',
          background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Featured Projects
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
          {projects.map((project, index) => (
            <div key={index} style={{
              background: colors.cardBg,
              borderRadius: '20px',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              border: `1px solid ${colors.border}`
            }}>
              <div style={{
                height: '200px',
                background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff'
              }}>
                {project.icon}
              </div>
              <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '1rem' }}>
                  {project.title}
                </h3>
                <p style={{ color: colors.gray, marginBottom: '1.5rem' }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {project.tech.map((tech, idx) => (
                    <span key={idx} style={{
                      background: `${colors.primary}20`,
                      color: colors.primary,
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.875rem'
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <a href="#" style={{ color: colors.primary, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <ExternalLink size={16} /> Live Demo
                  </a>
                  <a href="#" style={{ color: colors.primary, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <Github size={16} /> GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" style={{ padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '3rem',
          background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Professional Journey
        </h2>
        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: '2px',
            background: `linear-gradient(180deg, ${colors.primary}, ${colors.secondary})`
          }}></div>
          
          {experience.map((exp, index) => (
            <div key={index} style={{ position: 'relative', paddingBottom: '3rem' }}>
              <div style={{
                position: 'absolute',
                left: '-2.5rem',
                top: 0,
                width: '20px',
                height: '20px',
                background: colors.primary,
                borderRadius: '50%',
                border: `4px solid ${colors.dark}`
              }}></div>
              
              <div style={{
                background: colors.cardBg,
                padding: '2rem',
                borderRadius: '15px',
                border: `1px solid ${colors.border}`
              }}>
                <div style={{ color: colors.accent, fontWeight: '600', marginBottom: '0.5rem' }}>
                  {exp.date}
                </div>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '600', marginBottom: '0.5rem' }}>
                  {exp.title}
                </h3>
                <p style={{ color: colors.gray, marginBottom: '1rem' }}>
                  {exp.company}
                </p>
                <p style={{ marginBottom: '1rem' }}>
                  {exp.description}
                </p>
                
                {exp.highlights && (
                  <ul style={{ marginBottom: '1rem', paddingLeft: '1rem' }}>
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} style={{ color: colors.gray, marginBottom: '0.5rem' }}>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                  {exp.tech.map((tech, idx) => (
                    <span key={idx} style={{
                      background: `${colors.primary}20`,
                      color: colors.primary,
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
      <section id="contact" style={{ padding: '5rem 2rem', maxWidth: '1200px', margin: '0 auto' }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '3rem',
          background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent'
        }}>
          Let's Connect
        </h2>
        <div style={{
          background: `linear-gradient(135deg, ${colors.darkLight}, ${colors.primary}10)`,
          borderRadius: '30px',
          padding: '3rem',
          textAlign: 'center'
        }}>
          <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
            I'm always interested in discussing new opportunities and challenging projects. Feel free to reach out!
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            {[
              { icon: <Mail size={24} />, title: "Email", value: "onkar.dehane24@gmail.com", href: "mailto:onkar.dehane24@gmail.com" },
              { icon: <Phone size={24} />, title: "Phone", value: "+49 152 2545 7768", href: "tel:+4915225457768" },
              { icon: <MapPin size={24} />, title: "Location", value: "Germany", href: null }
            ].map((contact, index) => (
              <div key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1rem' }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
                  borderRadius: '50%',
                  color: '#fff'
                }}>
                  {contact.icon}
                </div>
                <h3>{contact.title}</h3>
                {contact.href ? (
                  <a href={contact.href} style={{ color: colors.primary, textDecoration: 'none' }}>
                    {contact.value}
                  </a>
                ) : (
                  <span>{contact.value}</span>
                )}
              </div>
            ))}
          </div>

          <form onSubmit={handleFormSubmit} style={{ maxWidth: '600px', margin: '0 auto' }}>
            <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
              <label htmlFor="name" style={{ display: 'block', marginBottom: '0.5rem', color: colors.gray }}>
                Your Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: colors.dark,
                  border: `1px solid ${colors.border}`,
                  borderRadius: '10px',
                  color: colors.light,
                  outline: 'none'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
              <label htmlFor="email" style={{ display: 'block', marginBottom: '0.5rem', color: colors.gray }}>
                Your Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: colors.dark,
                  border: `1px solid ${colors.border}`,
                  borderRadius: '10px',
                  color: colors.light,
                  outline: 'none'
                }}
              />
            </div>
            
            <div style={{ marginBottom: '1.5rem', textAlign: 'left' }}>
              <label htmlFor="message" style={{ display: 'block', marginBottom: '0.5rem', color: colors.gray }}>
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows="5"
                value={formData.message}
                onChange={handleInputChange}
                required
                style={{
                  width: '100%',
                  padding: '1rem',
                  background: colors.dark,
                  border: `1px solid ${colors.border}`,
                  borderRadius: '10px',
                  color: colors.light,
                  outline: 'none',
                  resize: 'vertical'
                }}
              />
            </div>
            
            <button type="submit" style={{
              width: '100%',
              padding: '1rem 2rem',
              border: 'none',
              borderRadius: '50px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              background: `linear-gradient(135deg, ${colors.primary}, ${colors.secondary})`,
              color: '#fff',
              boxShadow: `0 10px 30px ${colors.primary}30`
            }}>
              <Send size={20} /> Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer style={{ textAlign: 'center', padding: '3rem 2rem', background: colors.darkLight }}>
        <p style={{ marginBottom: '1rem' }}>© 2024 Onkar Dehane | Built with passion and code</p>
        <p style={{ color: colors.gray }}>Made with ❤️ using modern web technologies</p>
      </footer>

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
      `}</style>
    </div>
  );
};

export default Portfolio;