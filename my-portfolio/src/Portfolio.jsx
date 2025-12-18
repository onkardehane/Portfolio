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
  Send,
  ChevronRight,
  Award,
  Users,
  Target,
  Zap,
  Globe,
  Layers,
  Coffee,
  Heart,
  Star,
  Sparkles,
  Rocket,
  Terminal,
  Check
} from 'lucide-react';

import { translations } from './translations';

// Move phrases outside component to avoid re-render issues - defaulting to English initially, but we'll use state inside
const DEFAULT_PHRASES = translations.en.hero.typingPhrases;

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [language, setLanguage] = useState('en'); // 'en' or 'de'
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);
  const [activeSection, setActiveSection] = useState('home');

  const t = translations[language]; // Translation helper

  useEffect(() => {
    let timeout;
    const currentPhrases = t.hero.typingPhrases;
    const currentPhrase = currentPhrases[currentPhraseIndex % currentPhrases.length];

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
        setCurrentPhraseIndex((prev) => (prev + 1) % currentPhrases.length);
        setIsTyping(true);
      }
    }

    return () => clearTimeout(timeout);
  }, [typingText, currentPhraseIndex, isTyping, t]);

  // Track scroll position for active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleDownloadResume = () => {
    // Download the actual PDF resume
    const link = document.createElement('a');
    link.href = '/assets/documents/Onkar_Dehane_Resume.pdf';
    link.download = 'Onkar_Dehane_Resume.pdf';
    link.target = '_blank';
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

  // Define creative color schemes for light mode
  const colors = {
    primary: isDarkMode ? '#8b5cf6' : '#6366f1',
    secondary: isDarkMode ? '#a78bfa' : '#8b5cf6',
    accent: isDarkMode ? '#06b6d4' : '#ec4899',
    dark: isDarkMode ? '#0f172a' : '#ffffff',
    darkLight: isDarkMode ? '#1e293b' : '#f8fbff',
    gray: isDarkMode ? '#64748b' : '#64748b',
    light: isDarkMode ? '#e2e8f0' : '#1e293b',
    background: isDarkMode
      ? 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)'
      : 'linear-gradient(180deg, #ffffff 0%, #fafbff 100%)',
    cardBg: isDarkMode ? '#1e293b' : 'rgba(255, 255, 255, 0.95)',
    border: isDarkMode ? 'rgba(139, 92, 246, 0.2)' : 'rgba(99, 102, 241, 0.08)',
    navBg: isDarkMode
      ? 'rgba(15, 23, 42, 0.95)'
      : 'rgba(255, 255, 255, 0.85)',
    textSecondary: isDarkMode ? '#9ca3af' : '#475569',
    shadow: isDarkMode
      ? '0 20px 60px rgba(139, 92, 246, 0.3)'
      : '0 20px 60px rgba(99, 102, 241, 0.08)',
    gradientText: isDarkMode
      ? 'linear-gradient(135deg, #a78bfa, #06b6d4)'
      : 'linear-gradient(135deg, #6366f1, #ec4899)',
    heroGradient: isDarkMode
      ? 'radial-gradient(circle at 30% 107%, #7c3aed 0%, #0f172a 60%)'
      : 'linear-gradient(180deg, #ffffff 0%, #fef3f3 50%, #f0f9ff 100%)'
  };

  const stats = [
    { number: '5+', label: t.about.stats.years, icon: <Award size={24} />, color: '#6366f1' },
    { number: '25+', label: t.about.stats.projects, icon: <Rocket size={24} />, color: '#8b5cf6' },
    { number: '1M+', label: t.about.stats.lines, icon: <Terminal size={24} />, color: '#ec4899' },
    { number: '4', label: t.about.stats.companies, icon: <Users size={24} />, color: '#10b981' }
  ];

  const skills = [
    {
      icon: <Code size={48} />,
      title: t.skills.frontend,
      color: isDarkMode ? '#a78bfa' : '#6366f1',
      bgGradient: 'linear-gradient(135deg, #6366f1, #a78bfa)',
      skills: ["Angular (Expert)", "React & TypeScript", "HTML5 / CSS3 / Sass", "Responsive Design", "Bootstrap / Material UI"]
    },
    {
      icon: <Server size={48} />,
      title: t.skills.backend,
      color: isDarkMode ? '#06b6d4' : '#8b5cf6',
      bgGradient: 'linear-gradient(135deg, #8b5cf6, #c084fc)',
      skills: ["Java / Spring Boot", "REST APIs / Microservices", "Node.js / Express", "Python / Django", "Hibernate / JPA"]
    },
    {
      icon: <Database size={48} />,
      title: t.skills.database,
      color: isDarkMode ? '#10b981' : '#ec4899',
      bgGradient: 'linear-gradient(135deg, #ec4899, #f472b6)',
      skills: ["PostgreSQL / MySQL", "MongoDB / NoSQL", "AWS / Azure", "Docker / Kubernetes", "CI/CD Pipelines"]
    },
    {
      icon: <Settings size={48} />,
      title: t.skills.tools,
      color: isDarkMode ? '#f59e0b' : '#10b981',
      bgGradient: 'linear-gradient(135deg, #10b981, #34d399)',
      skills: ["Git / GitHub / GitLab", "Jenkins / CircleCI", "Agile / Scrum", "JIRA / Confluence", "IntelliJ IDEA / VS Code"]
    }
  ];

  const projects = [
    {
      title: t.projects.items[0].title,
      description: t.projects.items[0].description,
      tech: ["FastAPI", "React", "OpenRouter", "Python"],
      icon: <Users size={48} />,
      gradient: 'linear-gradient(135deg, #7c3aed, #4f46e5)',
      emoji: '🧠',
      image: '/projects/llm_council_mockup.png',
      github: 'https://github.com/onkardehane/LLM-Councile_OD.git',
      live: 'https://github.com/onkardehane/LLM-Councile_OD.git'
    },
    {
      title: t.projects.items[1].title,
      description: t.projects.items[1].description,
      tech: ["Angular", "TypeScript", "SCSS", "RxJS"],
      icon: <Check size={48} />,
      gradient: 'linear-gradient(135deg, #10b981, #3b82f6)',
      emoji: '✅',
      image: '/projects/todo_app_mockup.png',
      github: 'https://github.com/onkardehane/TODO-app.git',
      live: 'https://github.com/onkardehane/TODO-app.git'
    },
    {
      title: t.projects.items[2].title,
      description: t.projects.items[2].description,
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS"],
      icon: <Terminal size={48} />,
      gradient: 'linear-gradient(135deg, #2563eb, #3b82f6)',
      emoji: '⌨️',
      image: '/projects/vscode_portfolio_mockup.png',
      github: 'https://github.com/onkardehane/vscode-portfolio.git',
      live: 'https://vscode-portfolio-tau-neon.vercel.app'
    },
    {
      title: t.projects.items[3].title,
      description: t.projects.items[3].description,
      tech: ["Angular", "Spring Boot", "PostgreSQL", "Stripe API"],
      icon: <Calendar size={48} />,
      gradient: 'linear-gradient(135deg, #6366f1, #a78bfa)',
      emoji: '📅',
      github: 'https://github.com/onkardehane',
      live: 'https://github.com/onkardehane'
    },
    {
      title: t.projects.items[4].title,
      description: t.projects.items[4].description,
      tech: ["Java", "Spring Boot", "Angular", "AWS"],
      icon: <GraduationCap size={48} />,
      gradient: 'linear-gradient(135deg, #8b5cf6, #c084fc)',
      emoji: '🎓',
      github: 'https://github.com/onkardehane',
      live: 'https://github.com/onkardehane'
    },
    {
      title: t.projects.items[5].title,
      description: t.projects.items[5].description,
      tech: ["Node.js", "Socket.io", "React", "MongoDB"],
      icon: <MessageSquare size={48} />,
      gradient: 'linear-gradient(135deg, #ec4899, #f472b6)',
      emoji: '💬',
      github: 'https://github.com/onkardehane',
      live: 'https://github.com/onkardehane'
    },
    {
      title: t.projects.items[6].title,
      description: t.projects.items[6].description,
      tech: ["React", "D3.js", "Python", "Redis"],
      icon: <TrendingUp size={48} />,
      gradient: 'linear-gradient(135deg, #10b981, #34d399)',
      emoji: '📊',
      github: 'https://github.com/onkardehane',
      live: 'https://github.com/onkardehane'
    },
    {
      title: t.projects.items[7].title,
      description: t.projects.items[7].description,
      tech: ["Python", "FastAPI", "TensorFlow", "Docker"],
      icon: <Bot size={48} />,
      gradient: 'linear-gradient(135deg, #f59e0b, #fbbf24)',
      emoji: '🤖',
      github: 'https://github.com/onkardehane',
      live: 'https://github.com/onkardehane'
    },
    {
      title: t.projects.items[8].title,
      description: t.projects.items[8].description,
      tech: ["MERN Stack", "Redux", "Stripe", "AWS"],
      icon: <ShoppingCart size={48} />,
      gradient: 'linear-gradient(135deg, #06b6d4, #0ea5e9)',
      emoji: '🛒',
      github: 'https://github.com/onkardehane',
      live: 'https://github.com/onkardehane'
    }
  ];

  const experience = [
    {
      date: "Dec 2023 - Aug 2025",
      title: t.experience.items[0].title,
      company: "Meetingmasters.de | Cologne, Germany",
      description: t.experience.items[0].description,
      highlights: t.experience.items[0].highlights,
      tech: ["TypeScript", "Angular", "RxJS", "Node.js", "SQL"],
      color: '#6366f1'
    },
    {
      date: "January 2022 - July 2023",
      title: t.experience.items[1].title,
      company: "IMC AG | Germany",
      description: t.experience.items[1].description,
      highlights: t.experience.items[1].highlights,
      tech: ["Java", "Spring Boot", "Angular", "PostgreSQL"],
      color: '#8b5cf6'
    },
    {
      date: "November 2020 - October 2021",
      title: t.experience.items[2].title,
      company: "SAP | Walldorf, Germany",
      description: t.experience.items[2].description,
      highlights: t.experience.items[2].highlights,
      tech: ["Mendix", "Cloud", "Microservices"],
      color: '#ec4899'
    }
  ];

  // Profile Image Component with actual photo
  const ProfileImage = () => (
    <img
      src="/profile-photo.jpg"
      alt="Onkar Dehane - Senior Full-Stack Developer"
      style={{
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        objectPosition: '55% 20%'
      }}
    />
  );

  return (
    <div style={{
      minHeight: '100vh',
      background: colors.background,
      color: colors.light,
      fontFamily: 'Inter, -apple-system, BlinkMacSystemFont, sans-serif',
      lineHeight: 1.6,
      transition: 'all 0.3s ease',
      position: 'relative',
      overflow: 'hidden'
    }}>
      {/* Creative Background Elements for Light Mode */}
      {!isDarkMode && (
        <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, zIndex: 0, pointerEvents: 'none' }}>
          <div style={{
            position: 'absolute',
            top: '-20%',
            left: '-10%',
            width: '40%',
            height: '40%',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, transparent 70%)',
            animation: 'float 20s ease-in-out infinite'
          }} />
          <div style={{
            position: 'absolute',
            top: '50%',
            right: '-10%',
            width: '35%',
            height: '35%',
            background: 'radial-gradient(circle, rgba(236, 72, 153, 0.05) 0%, transparent 70%)',
            animation: 'float 25s ease-in-out infinite reverse'
          }} />
          <div style={{
            position: 'absolute',
            bottom: '-10%',
            left: '30%',
            width: '30%',
            height: '30%',
            background: 'radial-gradient(circle, rgba(139, 92, 246, 0.05) 0%, transparent 70%)',
            animation: 'float 30s ease-in-out infinite'
          }} />
        </div>
      )}

      {/* Navigation with Glass Morphism */}
      <nav style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        background: colors.navBg,
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        zIndex: 1000,
        padding: '1rem 0',
        transition: 'all 0.3s ease',
        borderBottom: `1px solid ${colors.border}`,
        boxShadow: isDarkMode ? 'none' : '0 1px 3px rgba(0, 0, 0, 0.05)'
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
            fontSize: '1.75rem',
            fontWeight: '800',
            backgroundImage: colors.gradientText,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: isDarkMode ? '#a78bfa' : '#6366f1',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            gap: '0.5rem'
          }}>
            <Code size={28} />
            OD<span style={{ color: colors.accent, fontSize: '2rem' }}>.</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <ul style={{
              display: window.innerWidth > 768 ? 'flex' : 'none',
              gap: '2rem',
              listStyle: 'none',
              margin: 0,
              padding: 0
            }}>
              {['home', 'about', 'skills', 'projects', 'experience', 'contact'].map(section => (
                <li key={section}>
                  <a
                    onClick={() => scrollToSection(section)}
                    style={{
                      color: activeSection === section ? colors.primary : colors.textSecondary,
                      textDecoration: 'none',
                      cursor: 'pointer',
                      transition: 'all 0.3s ease',
                      fontWeight: activeSection === section ? '600' : '500',
                      fontSize: '0.95rem',
                      textTransform: 'capitalize',
                      position: 'relative',
                      padding: '0.5rem 0'
                    }}
                  >
                    {t.nav[section]}
                    {activeSection === section && (
                      <span style={{
                        position: 'absolute',
                        bottom: '0',
                        left: '50%',
                        transform: 'translateX(-50%)',
                        width: '30px',
                        height: '3px',
                        background: colors.primary,
                        borderRadius: '2px'
                      }} />
                    )}
                  </a>
                </li>
              ))}
            </ul>

            <div style={{ display: 'flex', gap: '1rem' }}>
              {/* Language Toggle */}
              <button
                onClick={() => setLanguage(language === 'en' ? 'de' : 'en')}
                style={{
                  padding: '0.6rem',
                  borderRadius: '12px',
                  background: isDarkMode
                    ? 'linear-gradient(135deg, #1e293b, #334155)'
                    : 'linear-gradient(135deg, #fff3cd, #ffe4a1)',
                  border: `1px solid ${colors.border}`,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  color: isDarkMode ? '#fbbf24' : '#f59e0b',
                  boxShadow: isDarkMode
                    ? '0 2px 8px rgba(139, 92, 246, 0.2)'
                    : '0 2px 8px rgba(251, 191, 36, 0.15)',
                  fontWeight: 'bold',
                  fontSize: '0.9rem',
                  minWidth: '40px'
                }}
                aria-label="Toggle language"
              >
                {language === 'en' ? 'DE' : 'EN'}
              </button>

              {/* Theme Toggle with Animation */}
              <button
                onClick={() => setIsDarkMode(!isDarkMode)}
                style={{
                  padding: '0.6rem',
                  borderRadius: '12px',
                  background: isDarkMode
                    ? 'linear-gradient(135deg, #1e293b, #334155)'
                    : 'linear-gradient(135deg, #fff3cd, #ffe4a1)',
                  border: `1px solid ${colors.border}`,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  transition: 'all 0.3s ease',
                  color: isDarkMode ? '#fbbf24' : '#f59e0b',
                  boxShadow: isDarkMode
                    ? '0 2px 8px rgba(139, 92, 246, 0.2)'
                    : '0 2px 8px rgba(251, 191, 36, 0.15)',
                  transform: 'scale(1)'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.1) rotate(10deg)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1) rotate(0)'}
                aria-label="Toggle theme"
              >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section with Creative Animations */}
      <section id="home" style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        background: colors.heroGradient,
        paddingTop: '80px'
      }}>
        {/* Animated Shapes */}
        {!isDarkMode && (
          <>
            <div style={{
              position: 'absolute',
              top: '10%',
              left: '5%',
              width: '100px',
              height: '100px',
              background: 'linear-gradient(135deg, #fbbf24, #f59e0b)',
              borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
              opacity: 0.1,
              animation: 'morph 8s ease-in-out infinite'
            }} />

            <div style={{
              position: 'absolute',
              bottom: '15%',
              right: '10%',
              width: '120px',
              height: '120px',
              background: 'linear-gradient(135deg, #ec4899, #f472b6)',
              borderRadius: '70% 30% 30% 70% / 70% 70% 30% 30%',
              opacity: 0.1,
              animation: 'morph 10s ease-in-out infinite reverse'
            }} />

            <div style={{
              position: 'absolute',
              top: '40%',
              right: '20%',
              width: '80px',
              height: '80px',
              background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
              borderRadius: '50%',
              opacity: 0.1,
              animation: 'float 15s ease-in-out infinite'
            }} />
          </>
        )}

        <div style={{ textAlign: 'center', zIndex: 1, padding: '0 2rem', maxWidth: '1000px' }}>
          {/* Profile Picture with Creative Border */}
          <div style={{ marginBottom: '2rem' }}>
            <div style={{
              width: '200px',
              height: '200px',
              margin: '0 auto',
              borderRadius: '50%',
              background: colors.gradientText,
              padding: '4px',
              marginBottom: '1rem',
              boxShadow: isDarkMode
                ? '0 20px 60px rgba(139, 92, 246, 0.4)'
                : '0 20px 60px rgba(99, 102, 241, 0.15)',
              position: 'relative',
              animation: 'pulse 3s ease-in-out infinite'
            }}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                overflow: 'hidden',
                position: 'relative',
                background: colors.dark
              }}>
                <ProfileImage />
              </div>
              {/* Status Indicator with Pulse */}
              <div style={{
                position: 'absolute',
                bottom: '15px',
                right: '15px',
                width: '30px',
                height: '30px',
                background: '#10b981',
                border: `4px solid ${colors.dark}`,
                borderRadius: '50%',
                animation: 'pulse 2s ease-in-out infinite',
                boxShadow: '0 0 20px rgba(16, 185, 129, 0.5)'
              }} />
            </div>
          </div>

          <h1 style={{
            fontSize: 'clamp(3rem, 8vw, 5rem)',
            fontWeight: '800',
            marginBottom: '1rem',
            backgroundImage: colors.gradientText,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: isDarkMode ? '#a78bfa' : '#6366f1',
            letterSpacing: '-2px'
          }}>
            Onkar Dehane
          </h1>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            marginBottom: '1rem'
          }}>
            <span style={{
              width: '60px',
              height: '2px',
              background: colors.gradientText
            }} />
            <p style={{
              fontSize: 'clamp(1.25rem, 3vw, 1.75rem)',
              color: colors.textSecondary,
              fontWeight: '500'
            }}>
              {t.hero.title}
            </p>
            <span style={{
              width: '60px',
              height: '2px',
              background: colors.gradientText
            }} />
          </div>

          <div style={{
            fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
            backgroundImage: colors.gradientText,
            WebkitBackgroundClip: 'text',
            backgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            color: isDarkMode ? '#a78bfa' : '#6366f1',
            marginBottom: '2rem',
            minHeight: '2rem',
            fontFamily: 'monospace',
            fontWeight: '500'
          }}>
            <span style={{ opacity: 0.8 }}>&lt;</span>
            {typingText}
            <span style={{ animation: 'blink 1s infinite' }}>|</span>
            <span style={{ opacity: 0.8 }}>/&gt;</span>
          </div>

          {/* CTA Buttons with Hover Effects */}
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '1rem',
            justifyContent: 'center',
            marginBottom: '2rem'
          }}>
            <button
              onClick={() => scrollToSection('projects')}
              style={{
                padding: '1rem 2.5rem',
                border: 'none',
                borderRadius: '50px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: colors.gradientText,
                color: '#fff',
                boxShadow: isDarkMode
                  ? '0 10px 30px rgba(139, 92, 246, 0.3)'
                  : '0 10px 30px rgba(99, 102, 241, 0.2)',
                transform: 'translateY(0)',
                fontSize: '1rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-3px)';
                e.currentTarget.style.boxShadow = isDarkMode
                  ? '0 15px 40px rgba(139, 92, 246, 0.4)'
                  : '0 15px 40px rgba(99, 102, 241, 0.3)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = isDarkMode
                  ? '0 10px 30px rgba(139, 92, 246, 0.3)'
                  : '0 10px 30px rgba(99, 102, 241, 0.2)';
              }}
            >
              <Layers size={20} /> {t.hero.viewProjects}
            </button>

            <button
              onClick={handleDownloadResume}
              style={{
                padding: '1rem 2.5rem',
                border: `2px solid ${colors.primary}`,
                borderRadius: '50px',
                fontWeight: '600',
                cursor: 'pointer',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                textDecoration: 'none',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                background: isDarkMode ? 'transparent' : 'white',
                color: colors.primary,
                fontSize: '1rem',
                position: 'relative',
                overflow: 'hidden'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = colors.primary;
                e.currentTarget.style.color = '#fff';
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = isDarkMode ? 'transparent' : 'white';
                e.currentTarget.style.color = colors.primary;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              <Download size={20} /> {t.hero.downloadResume}
            </button>
          </div>

          {/* Social Links with Creative Hover */}
          <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
            {[
              { icon: <Github size={20} />, href: "https://github.com/onkardehane", label: "GitHub", color: '#333' },
              { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/onkar-dehane-5a9631136", label: "LinkedIn", color: '#0077b5' },
              { icon: <Mail size={20} />, href: "mailto:onkar.dehane24@gmail.com", label: "Email", color: '#ea4335' },
              { icon: <Phone size={20} />, href: "tel:+4915225457768", label: "Phone", color: '#25d366' }
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
                  background: isDarkMode ? colors.darkLight : 'white',
                  borderRadius: '50%',
                  color: isDarkMode ? colors.primary : social.color,
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  textDecoration: 'none',
                  boxShadow: '0 2px 10px rgba(0, 0, 0, 0.08)',
                  border: `2px solid ${isDarkMode ? colors.border : 'transparent'}`
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-5px) rotate(5deg)';
                  e.currentTarget.style.boxShadow = `0 8px 25px ${social.color}30`;
                  e.currentTarget.style.borderColor = social.color;
                  e.currentTarget.style.background = social.color;
                  e.currentTarget.style.color = 'white';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) rotate(0)';
                  e.currentTarget.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.08)';
                  e.currentTarget.style.borderColor = isDarkMode ? colors.border : 'transparent';
                  e.currentTarget.style.background = isDarkMode ? colors.darkLight : 'white';
                  e.currentTarget.style.color = isDarkMode ? colors.primary : social.color;
                }}
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* About Section with Creative Cards */}
      <section id="about" style={{
        padding: '5rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '3rem',
          backgroundImage: colors.gradientText,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: isDarkMode ? '#a78bfa' : '#6366f1',
          position: 'relative'
        }}>
          <Sparkles size={30} style={{
            position: 'absolute',
            left: '-40px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: colors.accent,
            opacity: 0.5
          }} />
          {t.about.title}
          <Sparkles size={30} style={{
            position: 'absolute',
            right: '-40px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: colors.accent,
            opacity: 0.5
          }} />
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: window.innerWidth > 768 ? '1fr 2fr' : '1fr',
          gap: '4rem',
          alignItems: 'center'
        }}>
          <div style={{ position: 'relative' }}>
            <div style={{
              width: '100%',
              height: '450px',
              background: colors.gradientText,
              borderRadius: '20px',
              padding: '4px',
              boxShadow: isDarkMode
                ? '0 20px 60px rgba(139, 92, 246, 0.3)'
                : '0 20px 60px rgba(99, 102, 241, 0.1)',
              position: 'relative',
              transform: 'rotate(-2deg)',
              transition: 'transform 0.3s ease'
            }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'rotate(0)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'rotate(-2deg)'}>
              <div style={{
                width: '100%',
                height: '100%',
                borderRadius: '16px',
                overflow: 'hidden',
                position: 'relative',
                background: isDarkMode ? colors.dark : 'white'
              }}>
                <ProfileImage />
              </div>
            </div>

            {/* Floating Elements */}
            <div style={{
              position: 'absolute',
              top: '-20px',
              right: '-20px',
              width: '60px',
              height: '60px',
              background: 'linear-gradient(135deg, #ec4899, #f472b6)',
              borderRadius: '50%',
              opacity: 0.2,
              animation: 'float 6s ease-in-out infinite'
            }} />
            <div style={{
              position: 'absolute',
              bottom: '-15px',
              left: '-15px',
              width: '40px',
              height: '40px',
              background: 'linear-gradient(135deg, #6366f1, #a78bfa)',
              borderRadius: '50%',
              opacity: 0.2,
              animation: 'float 8s ease-in-out infinite reverse'
            }} />
          </div>

          <div>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              marginBottom: '1.5rem',
              color: colors.textSecondary
            }}>
              {t.about.p1.part1} <strong style={{
                color: colors.primary,
                background: `${colors.primary}10`,
                padding: '2px 6px',
                borderRadius: '4px'
              }}>{t.about.p1.highlight1}</strong> {t.about.p1.part2}
            </p>
            <p style={{
              fontSize: '1.1rem',
              lineHeight: '1.8',
              marginBottom: '1.5rem',
              color: colors.textSecondary
            }}>
              {t.about.p2.part1} <strong style={{
                color: colors.primary,
                background: `${colors.primary}10`,
                padding: '2px 6px',
                borderRadius: '4px'
              }}>{t.about.p2.highlight1}</strong> {t.about.p2.part2} <strong style={{
                color: colors.primary,
                background: `${colors.primary}10`,
                padding: '2px 6px',
                borderRadius: '4px'
              }}>{t.about.p2.highlight2}</strong>{t.about.p2.part3} <strong style={{ color: colors.primary }}>{t.about.p2.highlight3}</strong>, <strong style={{ color: colors.primary }}>{t.about.p2.highlight4}</strong> {t.about.p2.part4} <strong style={{ color: colors.primary }}>{t.about.p2.highlight5}</strong>{t.about.p2.part5}
            </p>

            {/* Stats Grid with Glassmorphism */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '1.5rem',
              marginTop: '2rem'
            }}>
              {stats.map((stat, index) => (
                <div key={index} style={{
                  background: isDarkMode
                    ? `linear-gradient(135deg, ${colors.darkLight}, ${colors.primary}10)`
                    : 'rgba(255, 255, 255, 0.8)',
                  backdropFilter: 'blur(10px)',
                  WebkitBackdropFilter: 'blur(10px)',
                  padding: '1.5rem',
                  borderRadius: '15px',
                  textAlign: 'center',
                  border: `1px solid ${colors.border}`,
                  boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)',
                  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  position: 'relative',
                  overflow: 'hidden'
                }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.transform = 'translateY(-5px) scale(1.02)';
                    e.currentTarget.style.boxShadow = `0 10px 30px ${stat.color}20`;
                    e.currentTarget.style.borderColor = stat.color;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.transform = 'translateY(0) scale(1)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.03)';
                    e.currentTarget.style.borderColor = colors.border;
                  }}>
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '3px',
                    background: `linear-gradient(90deg, transparent, ${stat.color}, transparent)`,
                    animation: 'slide 3s ease-in-out infinite'
                  }} />
                  <div style={{ color: stat.color, marginBottom: '0.5rem' }}>
                    {stat.icon}
                  </div>
                  <div style={{
                    fontSize: '2rem',
                    fontWeight: '700',
                    backgroundImage: `linear-gradient(135deg, ${stat.color}, ${colors.primary})`,
                    WebkitBackgroundClip: 'text',
                    backgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    color: stat.color
                  }}>
                    {stat.number}
                  </div>
                  <div style={{
                    color: colors.textSecondary,
                    marginTop: '0.5rem',
                    fontSize: '0.9rem',
                    fontWeight: '500'
                  }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section with Creative Cards */}
      <section id="skills" style={{
        padding: '5rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '3rem',
          backgroundImage: colors.gradientText,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: isDarkMode ? '#a78bfa' : '#6366f1'
        }}>
          {t.skills.title}
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '2rem'
        }}>
          {skills.map((skill, index) => (
            <div key={index} style={{
              background: isDarkMode ? colors.cardBg : 'white',
              padding: '2rem',
              borderRadius: '20px',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              border: `2px solid transparent`,
              textAlign: 'center',
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)',
              cursor: 'pointer',
              position: 'relative',
              overflow: 'hidden'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) scale(1.02)';
                e.currentTarget.style.boxShadow = `0 15px 40px ${skill.color}25`;
                e.currentTarget.style.borderColor = skill.color;
                e.currentTarget.style.background = isDarkMode
                  ? colors.cardBg
                  : `linear-gradient(135deg, white, ${skill.color}05)`;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) scale(1)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.03)';
                e.currentTarget.style.borderColor = 'transparent';
                e.currentTarget.style.background = isDarkMode ? colors.cardBg : 'white';
              }}>
              {/* Top Gradient Bar */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '4px',
                background: skill.bgGradient
              }} />

              {/* Icon with Background */}
              <div style={{
                width: '80px',
                height: '80px',
                margin: '0 auto 1rem',
                borderRadius: '20px',
                background: `${skill.color}10`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: skill.color,
                transition: 'all 0.3s ease'
              }}>
                {skill.icon}
              </div>

              <h3 style={{
                fontSize: '1.3rem',
                fontWeight: '600',
                marginBottom: '1rem',
                color: colors.light
              }}>
                {skill.title}
              </h3>

              <ul style={{ listStyle: 'none', padding: 0 }}>
                {skill.skills.map((item, idx) => (
                  <li key={idx} style={{
                    padding: '0.5rem 0',
                    color: colors.textSecondary,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.95rem',
                    transition: 'all 0.3s ease'
                  }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.color = skill.color;
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.color = colors.textSecondary;
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}>
                    <ChevronRight size={16} style={{ color: skill.color }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section with Creative Cards */}
      <section id="projects" style={{
        padding: '5rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '3rem',
          backgroundImage: colors.gradientText,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: isDarkMode ? '#a78bfa' : '#6366f1'
        }}>
          {t.projects.title}
        </h2>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '2rem'
        }}>
          {projects.map((project, index) => (
            <div key={index} style={{
              background: isDarkMode ? colors.cardBg : 'white',
              borderRadius: '20px',
              overflow: 'hidden',
              transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
              border: `2px solid ${colors.border}`,
              boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)',
              cursor: 'pointer',
              position: 'relative'
            }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px) rotate(1deg)';
                e.currentTarget.style.boxShadow = '0 20px 50px rgba(99, 102, 241, 0.15)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0) rotate(0)';
                e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.03)';
              }}>
              {/* Project Header with Gradient */}
              <div style={{
                height: '200px',
                background: project.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      opacity: 0.9,
                      transition: 'all 0.3s ease'
                    }}
                  />
                ) : (
                  <div style={{
                    fontSize: '4rem',
                    animation: 'float 4s ease-in-out infinite',
                    filter: 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.2))'
                  }}>
                    {project.emoji}
                  </div>
                )}
                <div style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  height: '50%',
                  background: 'linear-gradient(to top, rgba(0,0,0,0.3), transparent)'
                }} />
              </div>

              {/* Project Content */}
              <div style={{ padding: '2rem' }}>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '1rem',
                  color: colors.light
                }}>
                  {project.title}
                </h3>
                <p style={{
                  color: colors.textSecondary,
                  marginBottom: '1.5rem',
                  fontSize: '0.95rem',
                  lineHeight: '1.6'
                }}>
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem',
                  marginBottom: '1.5rem'
                }}>
                  {project.tech.map((tech, idx) => (
                    <span key={idx} style={{
                      background: `linear-gradient(135deg, ${colors.primary}20, ${colors.secondary}20)`,
                      color: colors.primary,
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      border: `1px solid ${colors.primary}20`
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div style={{ display: 'flex', gap: '1rem' }}>
                  <button
                    onClick={() => window.open(project.live, '_blank')}
                    style={{
                      color: colors.primary,
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.95rem',
                      fontWeight: '500',
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${colors.primary}10`;
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}>
                    <ExternalLink size={16} /> {t.projects.liveDemo}
                  </button>
                  <button
                    onClick={() => window.open(project.github, '_blank')}
                    style={{
                      color: colors.primary,
                      background: 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '0.5rem',
                      fontSize: '0.95rem',
                      fontWeight: '500',
                      padding: '0.5rem 1rem',
                      borderRadius: '8px',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = `${colors.primary}10`;
                      e.currentTarget.style.transform = 'translateX(5px)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = 'transparent';
                      e.currentTarget.style.transform = 'translateX(0)';
                    }}>
                    <Github size={16} /> {t.projects.github}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" style={{
        padding: '5rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '3rem',
          backgroundImage: colors.gradientText,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: isDarkMode ? '#a78bfa' : '#6366f1'
        }}>
          {t.experience.title}
        </h2>

        <div style={{ position: 'relative', paddingLeft: '2rem' }}>
          <div style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: '3px',
            background: colors.gradientText,
            borderRadius: '2px'
          }}></div>

          {experience.map((exp, index) => (
            <div key={index} style={{
              position: 'relative',
              paddingBottom: '3rem'
            }}>
              <div style={{
                position: 'absolute',
                left: '-2.5rem',
                top: 0,
                width: '24px',
                height: '24px',
                background: exp.color,
                borderRadius: '50%',
                border: `4px solid ${colors.dark}`,
                boxShadow: `0 0 20px ${exp.color}40`,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
              }}>
                <div style={{
                  width: '8px',
                  height: '8px',
                  background: 'white',
                  borderRadius: '50%'
                }} />
              </div>

              <div style={{
                background: isDarkMode ? colors.cardBg : 'white',
                padding: '2rem',
                borderRadius: '15px',
                border: `2px solid ${colors.border}`,
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)',
                transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateX(10px)';
                  e.currentTarget.style.boxShadow = `0 10px 30px ${exp.color}20`;
                  e.currentTarget.style.borderColor = exp.color;
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateX(0)';
                  e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.03)';
                  e.currentTarget.style.borderColor = colors.border;
                }}>
                <div style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  height: '3px',
                  background: exp.color
                }} />

                <div style={{
                  color: exp.color,
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  fontSize: '0.9rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem'
                }}>
                  <Calendar size={16} />
                  {exp.date}
                </div>
                <h3 style={{
                  fontSize: '1.5rem',
                  fontWeight: '600',
                  marginBottom: '0.5rem',
                  color: colors.light
                }}>
                  {exp.title}
                </h3>
                <p style={{
                  color: colors.textSecondary,
                  marginBottom: '1rem',
                  fontSize: '1rem',
                  fontWeight: '500'
                }}>
                  {exp.company}
                </p>
                <p style={{
                  marginBottom: '1rem',
                  color: colors.textSecondary,
                  fontSize: '0.95rem',
                  lineHeight: '1.6'
                }}>
                  {exp.description}
                </p>

                {exp.highlights && (
                  <ul style={{
                    marginBottom: '1rem',
                    paddingLeft: '1rem'
                  }}>
                    {exp.highlights.map((highlight, idx) => (
                      <li key={idx} style={{
                        color: colors.textSecondary,
                        marginBottom: '0.5rem',
                        fontSize: '0.9rem',
                        lineHeight: '1.5'
                      }}>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}

                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  gap: '0.5rem'
                }}>
                  {exp.tech.map((tech, idx) => (
                    <span key={idx} style={{
                      background: `${exp.color}15`,
                      color: exp.color,
                      padding: '0.25rem 0.75rem',
                      borderRadius: '20px',
                      fontSize: '0.875rem',
                      fontWeight: '500',
                      border: `1px solid ${exp.color}30`
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
      <section id="contact" style={{
        padding: '5rem 2rem',
        maxWidth: '1200px',
        margin: '0 auto',
        position: 'relative',
        zIndex: 1
      }}>
        <h2 style={{
          fontSize: '3rem',
          fontWeight: '700',
          textAlign: 'center',
          marginBottom: '3rem',
          backgroundImage: colors.gradientText,
          WebkitBackgroundClip: 'text',
          backgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          color: isDarkMode ? '#a78bfa' : '#6366f1'
        }}>
          {t.contact.title}
        </h2>

        <div style={{
          background: isDarkMode
            ? `linear-gradient(135deg, ${colors.darkLight}, ${colors.primary}10)`
            : 'linear-gradient(135deg, #f0f9ff, #fef3f3)',
          borderRadius: '30px',
          padding: '3rem',
          textAlign: 'center',
          boxShadow: '0 10px 40px rgba(0, 0, 0, 0.03)',
          position: 'relative',
          overflow: 'hidden'
        }}>
          {/* Background Pattern */}
          {!isDarkMode && (
            <div style={{
              position: 'absolute',
              top: '-50px',
              right: '-50px',
              width: '200px',
              height: '200px',
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.05) 0%, transparent 70%)',
              borderRadius: '50%'
            }} />
          )}

          <p style={{
            fontSize: '1.2rem',
            marginBottom: '3rem',
            color: colors.textSecondary,
            maxWidth: '600px',
            margin: '0 auto 3rem'
          }}>
            {t.contact.description}
          </p>

          {/* Contact Cards */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            marginBottom: '3rem'
          }}>
            {[
              {
                icon: <Mail size={24} />,
                title: t.contact.email,
                value: "onkar.dehane24@gmail.com",
                href: "mailto:onkar.dehane24@gmail.com",
                color: '#ea4335'
              },
              {
                icon: <Phone size={24} />,
                title: t.contact.phone,
                value: "+49 152 2545 7768",
                href: "tel:+4915225457768",
                color: '#25d366'
              },
              {
                icon: <MapPin size={24} />,
                title: t.contact.location,
                value: t.contact.locationValue,
                href: null,
                color: '#4285f4'
              }
            ].map((contact, index) => (
              <div key={index} style={{
                background: isDarkMode ? colors.dark : 'white',
                padding: '2rem',
                borderRadius: '20px',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.03)',
                border: `2px solid ${colors.border}`,
                transition: 'all 0.3s ease',
                cursor: contact.href ? 'pointer' : 'default'
              }}
                onClick={() => contact.href && window.open(contact.href, contact.href.startsWith('http') ? '_blank' : '_self')}
                onMouseEnter={(e) => {
                  if (contact.href) {
                    e.currentTarget.style.transform = 'translateY(-5px)';
                    e.currentTarget.style.boxShadow = `0 10px 30px ${contact.color}20`;
                    e.currentTarget.style.borderColor = contact.color;
                  }
                }}
                onMouseLeave={(e) => {
                  if (contact.href) {
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.03)';
                    e.currentTarget.style.borderColor = colors.border;
                  }
                }}>
                <div style={{
                  width: '60px',
                  height: '60px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  background: `linear-gradient(135deg, ${contact.color}20, ${contact.color}10)`,
                  borderRadius: '50%',
                  color: contact.color,
                  margin: '0 auto 1rem'
                }}>
                  {contact.icon}
                </div>
                <h3 style={{
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: colors.light,
                  marginBottom: '0.5rem'
                }}>
                  {contact.title}
                </h3>
                <p style={{
                  color: contact.href ? contact.color : colors.textSecondary,
                  fontSize: '0.95rem',
                  fontWeight: contact.href ? '500' : '400'
                }}>
                  {contact.value}
                </p>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <button
            onClick={() => window.open('mailto:onkar.dehane24@gmail.com', '_self')}
            style={{
              padding: '1rem 3rem',
              border: 'none',
              borderRadius: '50px',
              fontWeight: '600',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              display: 'inline-flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              background: colors.gradientText,
              color: '#fff',
              boxShadow: `0 10px 30px ${colors.primary}20`,
              fontSize: '1.1rem'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-3px)';
              e.currentTarget.style.boxShadow = `0 15px 40px ${colors.primary}30`;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = `0 10px 30px ${colors.primary}20`;
            }}>
            <Send size={20} /> {t.contact.getInTouch}
          </button>
        </div>
      </section>

      {/* Footer with Creative Design */}
      <footer style={{
        textAlign: 'center',
        padding: '3rem 2rem',
        background: isDarkMode
          ? colors.darkLight
          : 'linear-gradient(180deg, #fafbff 0%, #f0f9ff 100%)',
        position: 'relative',
        zIndex: 1,
        borderTop: `1px solid ${colors.border}`
      }}>
        <div style={{
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center',
          marginBottom: '2rem'
        }}>
          {[
            { icon: <Github size={20} />, href: "https://github.com/onkardehane", color: '#333' },
            { icon: <Linkedin size={20} />, href: "https://linkedin.com/in/onkar-dehane-5a9631136", color: '#0077b5' },
            { icon: <Mail size={20} />, href: "mailto:onkar.dehane24@gmail.com", color: '#ea4335' }
          ].map((social, index) => (
            <a
              key={index}
              href={social.href}
              target={social.href.startsWith('http') ? '_blank' : undefined}
              rel={social.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              style={{
                color: colors.textSecondary,
                transition: 'all 0.3s ease',
                textDecoration: 'none',
                padding: '0.5rem'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = social.color;
                e.currentTarget.style.transform = 'translateY(-3px)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = colors.textSecondary;
                e.currentTarget.style.transform = 'translateY(0)';
              }}
            >
              {social.icon}
            </a>
          ))}
        </div>

        <p style={{
          marginBottom: '0.5rem',
          color: colors.textSecondary,
          fontWeight: '500'
        }}>
          © 2024 Onkar Dehane | Built with passion and code
        </p>

        <p style={{
          color: colors.gray,
          fontSize: '0.9rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.5rem'
        }}>
          Made with <Heart size={16} style={{ color: colors.accent, animation: 'pulse 2s infinite' }} /> using modern web technologies
        </p>
      </footer>

      {/* CSS Animations */}
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes morph {
          0%, 100% { 
            border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%; 
          }
          50% { 
            border-radius: 70% 30% 30% 70% / 70% 70% 30% 30%; 
          }
        }
        
        @keyframes pulse {
          0%, 100% { 
            opacity: 1;
            transform: scale(1);
          }
          50% { 
            opacity: 0.8;
            transform: scale(1.05);
          }
        }
        
        @keyframes slide {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
        
        * {
          margin: 0;
          padding: 0;
          box-sizing: border-box;
        }
        
        body {
          overflow-x: hidden;
        }
        
        ::selection {
          background: ${colors.primary}30;
          color: ${colors.primary};
        }
        
        /* Smooth scrollbar */
        ::-webkit-scrollbar {
          width: 10px;
        }
        
        ::-webkit-scrollbar-track {
          background: ${isDarkMode ? '#1e293b' : '#f0f9ff'};
        }
        
        ::-webkit-scrollbar-thumb {
          background: ${colors.primary};
          border-radius: 5px;
        }
        
        ::-webkit-scrollbar-thumb:hover {
          background: ${colors.secondary};
        }
      `}</style>
    </div>
  );
};

export default Portfolio;