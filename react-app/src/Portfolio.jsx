import React, { useState, useEffect, useRef } from 'react';
import { ChevronDown, Download, Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Code, Server, Database, Wrench, Menu, X, Star, Calendar, Clock, Award, Coffee, Users, Briefcase, Target, Zap, TrendingUp, BookOpen, MessageSquare, Layers, Globe, Cpu, Shield, Rocket, Check, ArrowRight, Play, Pause, Sun, Moon } from 'lucide-react';

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [typingText, setTypingText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [blogPosts, setBlogPosts] = useState([]);
  const [isPlaying, setIsPlaying] = useState(true);
  const [skillsInView, setSkillsInView] = useState(false);
  const [countersInView, setCountersInView] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isDarkMode, setIsDarkMode] = useState(true);

  // INSTRUCTION: To add your photo, replace this URL with your image URL or path
  // You can use: 
  // 1. A direct URL: "https://your-image-url.com/photo.jpg"
  // 2. A local path: "/images/your-photo.jpg" (put image in public/images folder)
  // 3. Base64 encoded image: "data:image/jpeg;base64,..."
  const YOUR_PHOTO_URL = "/images/onkar-photo.jpg"; // 👈 REPLACE THIS WITH YOUR PHOTO

  // INSTRUCTION: To add your resume, replace this URL with your resume PDF URL
  // You can use:
  // 1. A direct URL: "https://your-site.com/resume.pdf"
  // 2. A local path: "/documents/resume.pdf" (put PDF in public/documents folder)
  // 3. Google Drive link: "https://drive.google.com/file/d/YOUR_FILE_ID"
  const YOUR_RESUME_URL = "/documents/onkar-dehane-resume.pdf"; // 👈 REPLACE THIS WITH YOUR RESUME

  const phrases = [
    "Building Scalable Enterprise Solutions",
    "Creating Seamless User Experiences",
    "Architecting Cloud-Native Applications",
    "Optimizing Performance & Security",
    "Transforming Ideas into Reality"
  ];

  const skills = [
    { name: 'Java/Spring Boot', level: 95, category: 'backend' },
    { name: 'Angular', level: 92, category: 'frontend' },
    { name: 'React/TypeScript', level: 88, category: 'frontend' },
    { name: 'PostgreSQL/MySQL', level: 90, category: 'database' },
    { name: 'AWS/Cloud', level: 85, category: 'devops' },
    { name: 'Docker/Kubernetes', level: 82, category: 'devops' },
    { name: 'Node.js', level: 87, category: 'backend' },
    { name: 'Python', level: 83, category: 'backend' },
    { name: 'MongoDB', level: 80, category: 'database' },
    { name: 'CI/CD', level: 88, category: 'devops' }
  ];

  const projects = [
    {
      id: 1,
      title: 'Event Management Platform',
      category: 'fullstack',
      description: 'Enterprise platform with automated workflows, secure payments, and real-time analytics. Serves 50K+ users.',
      image: '🎯',
      tech: ['Angular', 'Spring Boot', 'PostgreSQL', 'AWS', 'Stripe'],
      metrics: { users: '50K+', performance: '+40%', uptime: '99.9%' },
      featured: true,
      demo: '#',
      github: '#'
    },
    {
      id: 2,
      title: 'Learning Management System',
      category: 'fullstack',
      description: 'Scalable LMS with video streaming, AI-powered recommendations, and GDPR compliance.',
      image: '🎓',
      tech: ['Java', 'Spring Boot', 'Angular', 'AWS S3', 'Redis'],
      metrics: { users: '10K+', courses: '500+', satisfaction: '4.8/5' },
      featured: true,
      demo: '#',
      github: '#'
    },
    {
      id: 3,
      title: 'Real-time Chat Platform',
      category: 'fullstack',
      description: 'WebSocket chat with video calling, file sharing, and end-to-end encryption.',
      image: '💬',
      tech: ['Node.js', 'Socket.io', 'React', 'MongoDB', 'WebRTC'],
      metrics: { concurrent: '1K+', latency: '<100ms', messages: '1M+/day' },
      featured: true,
      demo: '#',
      github: '#'
    },
    {
      id: 4,
      title: 'Analytics Dashboard',
      category: 'frontend',
      description: 'Real-time BI dashboard with custom KPIs and automated reporting.',
      image: '📊',
      tech: ['React', 'D3.js', 'Python', 'Redis', 'PostgreSQL'],
      metrics: { dataPoints: '1M+/day', dashboards: '50+', accuracy: '99.7%' },
      demo: '#',
      github: '#'
    },
    {
      id: 5,
      title: 'AI-Powered API Service',
      category: 'backend',
      description: 'Microservices with ML integration for predictive analytics.',
      image: '🤖',
      tech: ['Python', 'FastAPI', 'TensorFlow', 'Docker', 'Kubernetes'],
      metrics: { requests: '10K+/min', accuracy: '94%', apis: '20+' },
      demo: '#',
      github: '#'
    },
    {
      id: 6,
      title: 'E-Commerce Platform',
      category: 'fullstack',
      description: 'Full-stack solution with inventory management and admin dashboard.',
      image: '🛒',
      tech: ['MERN', 'Redux', 'Stripe', 'AWS', 'ElasticSearch'],
      metrics: { revenue: '$500K+', products: '10K+', orders: '50K+' },
      demo: '#',
      github: '#'
    }
  ];

  const services = [
    {
      icon: <Globe className="w-8 h-8" />,
      title: 'Web Development',
      description: 'Full-stack web applications with modern frameworks and best practices',
      features: ['Progressive Web Apps', 'Single Page Applications', 'Server-Side Rendering', 'API Integration']
    },
    {
      icon: <Cpu className="w-8 h-8" />,
      title: 'Backend Development',
      description: 'Scalable server architecture and microservices design',
      features: ['RESTful APIs', 'Microservices', 'Database Design', 'Cloud Deployment']
    },
    {
      icon: <Shield className="w-8 h-8" />,
      title: 'Security & Compliance',
      description: 'Enterprise-grade security implementation and compliance',
      features: ['GDPR Compliance', 'Authentication Systems', 'Data Encryption', 'Security Audits']
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: 'Performance Optimization',
      description: 'Speed and efficiency improvements for existing applications',
      features: ['Code Optimization', 'Database Tuning', 'Caching Strategies', 'Load Balancing']
    },
    {
      icon: <Layers className="w-8 h-8" />,
      title: 'System Architecture',
      description: 'Design and implementation of complex system architectures',
      features: ['System Design', 'Scalability Planning', 'Tech Stack Selection', 'Migration Strategy']
    },
    {
      icon: <MessageSquare className="w-8 h-8" />,
      title: 'Technical Consulting',
      description: 'Expert guidance on technical decisions and best practices',
      features: ['Code Reviews', 'Architecture Reviews', 'Team Training', 'Best Practices']
    }
  ];

  const testimonials = [
    {
      name: 'Michael Schmidt',
      role: 'CTO at IMC AG',
      company: 'IMC AG',
      image: '👨‍💼',
      text: 'Onkar is an exceptional developer who consistently delivers high-quality solutions. His work on our LMS platform exceeded expectations.',
      rating: 5
    },
    {
      name: 'Sarah Johnson',
      role: 'Product Manager',
      company: 'SAP',
      image: '👩‍💼',
      text: 'Working with Onkar was a pleasure. His technical expertise and problem-solving skills helped us launch our product ahead of schedule.',
      rating: 5
    },
    {
      name: 'David Chen',
      role: 'Lead Developer',
      company: 'Tech Startup',
      image: '👨‍💻',
      text: 'Onkar\'s ability to architect scalable solutions is impressive. He transformed our legacy system into a modern, efficient platform.',
      rating: 5
    }
  ];

  const blogPostsData = [
    {
      id: 1,
      title: 'Building Scalable Microservices with Spring Boot',
      excerpt: 'Learn how to design and implement microservices architecture using Spring Boot and cloud-native patterns.',
      date: '2024-01-15',
      readTime: '8 min',
      category: 'Backend',
      image: '🚀'
    },
    {
      id: 2,
      title: 'Modern State Management in Angular Applications',
      excerpt: 'Exploring different state management solutions and best practices for large-scale Angular applications.',
      date: '2024-01-10',
      readTime: '6 min',
      category: 'Frontend',
      image: '⚡'
    },
    {
      id: 3,
      title: 'Optimizing Database Performance in Production',
      excerpt: 'Practical strategies for improving database performance and reducing query execution time.',
      date: '2024-01-05',
      readTime: '10 min',
      category: 'Database',
      image: '📊'
    }
  ];

  const experience = [
    {
      company: 'IMC AG',
      role: 'Software Developer',
      period: 'Jan 2022 - July 2023',
      location: 'Germany',
      achievements: [
        'Led development of enterprise LMS serving 10K+ users',
        'Improved application performance by 40%',
        'Implemented GDPR compliance features',
        'Mentored 3 junior developers'
      ]
    },
    {
      company: 'SAP',
      role: 'Developer (Working Student)',
      period: 'Nov 2020 - Oct 2021',
      location: 'Walldorf, Germany',
      achievements: [
        'Built internal training platform with Mendix',
        'Reduced onboarding time by 60%',
        'Integrated cloud deployment pipeline',
        'Collaborated with cross-functional teams'
      ]
    },
    {
      company: 'Hathway Company',
      role: 'Software Engineer',
      period: 'April 2018 - Sept 2019',
      location: 'India',
      achievements: [
        'Developed REST microservices architecture',
        'Reduced API response time by 35%',
        'Implemented caching strategies',
        'Handled 1M+ daily transactions'
      ]
    }
  ];

  useEffect(() => {
    setBlogPosts(blogPostsData);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'experience', 'services', 'testimonials', 'blog', 'contact'];
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

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
  }, [typingText, currentPhraseIndex]);

  useEffect(() => {
    if (isPlaying) {
      const interval = setInterval(() => {
        setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [isPlaying, testimonialIndex]);

  const Counter = ({ end, duration, suffix = '', inView }) => {
    const [count, setCount] = useState(0);
    
    useEffect(() => {
      if (!inView) return;
      
      let startTime;
      const animate = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = (timestamp - startTime) / duration;
        
        if (progress < 1) {
          setCount(Math.floor(end * progress));
          requestAnimationFrame(animate);
        } else {
          setCount(end);
        }
      };
      requestAnimationFrame(animate);
    }, [end, duration, inView]);
    
    return <span>{count}{suffix}</span>;
  };

  const SkillBar = ({ skill, inView }) => {
    const [width, setWidth] = useState(0);
    
    useEffect(() => {
      if (inView) {
        setTimeout(() => setWidth(skill.level), 100);
      }
    }, [skill.level, inView]);
    
    return (
      <div className="mb-6">
        <div className="flex justify-between mb-2">
          <span className="font-medium">{skill.name}</span>
          <span className={isDarkMode ? "text-purple-400" : "text-blue-600"}>{skill.level}%</span>
        </div>
        <div className={`h-3 ${isDarkMode ? 'bg-gray-800' : 'bg-gray-200'} rounded-full overflow-hidden`}>
          <div 
            className={`h-full ${isDarkMode ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gradient-to-r from-blue-400 to-cyan-400'} rounded-full transition-all duration-1000 ease-out`}
            style={{ width: `${width}%` }}
          />
        </div>
      </div>
    );
  };

  const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);
    
    return (
      <div 
        className={`group relative ${isDarkMode ? 'bg-gray-900 border-gray-800 hover:border-purple-500' : 'bg-white border-gray-200 hover:border-blue-500 shadow-lg'} rounded-2xl overflow-hidden border transition-all duration-300`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          animation: `fadeInUp 0.6s ease ${index * 0.1}s both`,
          transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
        }}
      >
        {project.featured && (
          <div className="absolute top-4 right-4 z-10">
            <span className={`px-3 py-1 ${isDarkMode ? 'bg-gradient-to-r from-purple-500 to-blue-500' : 'bg-gradient-to-r from-blue-400 to-cyan-400'} text-white text-xs rounded-full`}>
              Featured
            </span>
          </div>
        )}
        
        <div className={`h-48 ${isDarkMode ? 'bg-gradient-to-br from-purple-600 to-blue-600' : 'bg-gradient-to-br from-blue-400 to-cyan-400'} flex items-center justify-center text-6xl`}>
          {project.image}
        </div>
        
        <div className="p-6">
          <h3 className={`text-xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-900'}`}>{project.title}</h3>
          <p className={`${isDarkMode ? 'text-gray-400' : 'text-gray-600'} mb-4`}>{project.description}</p>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech, i) => (
              <span key={i} className={`px-3 py-1 ${isDarkMode ? 'bg-purple-500/20 text-purple-400' : 'bg-blue-100 text-blue-700'} rounded-full text-xs`}>
                {tech}
              </span>
            ))}
          </div>
          
          {project.metrics && (
            <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
              {Object.entries(project.metrics).map(([key, value]) => (
                <div key={key} className="text-center">
                  <div className={`${isDarkMode ? 'text-purple-400' : 'text-blue-600'} font-bold`}>{value}</div>
                  <div className={`${isDarkMode ? 'text-gray-500' : 'text-gray-600'} text-xs`}>{key}</div>
                </div>
              ))}
            </div>
          )}
          
          <div className="flex gap-4">
            <a href={project.demo} className={`flex items-center gap-1 ${isDarkMode ? 'text-purple-400 hover:text-purple-300' : 'text-blue-600 hover:text-blue-700'}`}>
              <ExternalLink size={16} /> Demo
            </a>
            <a href={project.github} className={`flex items-center gap-1 ${isDarkMode ? 'text-purple-400 hover:text-purple-300' : 'text-blue-600 hover:text-blue-700'}`}>
              <Github size={16} /> Code
            </a>
          </div>
        </div>
      </div>
    );
  };

  // Theme toggle handler
  const handleThemeToggle = () => {
    setIsDarkMode(!isDarkMode);
  };

  // Theme-based styles
  const bgPrimary = isDarkMode ? 'bg-gradient-to-b from-gray-950 via-gray-900 to-gray-950' : 'bg-gradient-to-b from-blue-50 via-white to-blue-50';
  const bgSecondary = isDarkMode ? 'bg-gray-900/50' : 'bg-blue-50';
  const textPrimary = isDarkMode ? 'text-white' : 'text-gray-900';
  const textSecondary = isDarkMode ? 'text-gray-400' : 'text-gray-600';
  const borderColor = isDarkMode ? 'border-gray-800' : 'border-gray-200';
  const navBg = isDarkMode ? 'bg-gray-950/90' : 'bg-white/90';
  const cardBg = isDarkMode ? 'bg-gray-800' : 'bg-white';
  const accentGradient = isDarkMode ? 'from-purple-600 to-blue-600' : 'from-blue-500 to-cyan-500';

  // Download resume handler
  const handleDownloadResume = () => {
    // INSTRUCTION: This will download the resume from the URL you specified above
    const link = document.createElement('a');
    link.href = YOUR_RESUME_URL;
    link.download = 'Onkar-Dehane-Resume.pdf';
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className={`min-h-screen ${bgPrimary} ${textPrimary} transition-colors duration-500`}>
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-20px); }
        }
        
        @keyframes pulse {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 1; }
        }
        
        @keyframes slideIn {
          from { transform: translateX(-100%); }
          to { transform: translateX(0); }
        }
        
        .glow {
          box-shadow: 0 0 20px ${isDarkMode ? 'rgba(139, 92, 246, 0.5)' : 'rgba(59, 130, 246, 0.5)'};
        }
        
        .text-gradient {
          background: ${isDarkMode 
            ? 'linear-gradient(135deg, #8b5cf6, #3b82f6, #06b6d4)' 
            : 'linear-gradient(135deg, #3b82f6, #06b6d4, #10b981)'};
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }
        
        .floating {
          animation: float 3s ease-in-out infinite;
        }
        
        .cursor-glow {
          position: fixed;
          width: 20px;
          height: 20px;
          background: radial-gradient(circle, ${isDarkMode ? 'rgba(139, 92, 246, 0.3)' : 'rgba(59, 130, 246, 0.3)'}, transparent);
          border-radius: 50%;
          pointer-events: none;
          z-index: 9999;
          transform: translate(-50%, -50%);
        }
      `}</style>

      {/* Cursor Glow Effect */}
      <div 
        className="cursor-glow"
        style={{ left: mousePosition.x, top: mousePosition.y }}
      />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full ${navBg} backdrop-blur-lg z-50 ${borderColor} border-b transition-all duration-500`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-gradient">OD.</div>
            
            <div className="hidden md:flex space-x-8 items-center">
              {['home', 'about', 'skills', 'projects', 'experience', 'services', 'testimonials', 'blog', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`capitalize transition-colors ${
                    activeSection === item 
                      ? isDarkMode ? 'text-purple-400' : 'text-blue-600' 
                      : isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  {item}
                </a>
              ))}
              
              {/* Theme Toggle Button */}
              <button
                onClick={handleThemeToggle}
                className={`p-2 rounded-full ${isDarkMode ? 'bg-gray-800 hover:bg-gray-700' : 'bg-gray-200 hover:bg-gray-300'} transition-colors`}
              >
                {isDarkMode ? <Sun size={20} className="text-yellow-400" /> : <Moon size={20} className="text-gray-700" />}
              </button>
            </div>
            
            <button 
              className="md:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${isDarkMode ? 'bg-gray-900' : 'bg-white'} ${borderColor} border-t`}>
            <div className="px-2 pt-2 pb-3 space-y-1">
              {['home', 'about', 'skills', 'projects', 'experience', 'services', 'testimonials', 'blog', 'contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item}`}
                  className={`block px-3 py-2 capitalize ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item}
                </a>
              ))}
              <button
                onClick={handleThemeToggle}
                className={`w-full text-left px-3 py-2 ${isDarkMode ? 'text-gray-400 hover:text-white' : 'text-gray-600 hover:text-gray-900'}`}
              >
                {isDarkMode ? '☀️ Light Mode' : '🌙 Dark Mode'}
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="absolute inset-0">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`absolute rounded-full ${isDarkMode ? 'bg-purple-500/20' : 'bg-blue-400/20'}`}
              style={{
                width: Math.random() * 4 + 2 + 'px',
                height: Math.random() * 4 + 2 + 'px',
                left: Math.random() * 100 + '%',
                top: Math.random() * 100 + '%',
                animation: `float ${Math.random() * 10 + 10}s ease-in-out infinite`,
                animationDelay: Math.random() * 5 + 's'
              }}
            />
          ))}
        </div>
        
        <div className="text-center z-10 px-4">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 text-gradient">
            Onkar Dehane
          </h1>
          <p className={`text-2xl md:text-3xl ${textSecondary} mb-2`}>Senior Full-Stack Developer</p>
          <div className={`text-xl md:text-2xl ${isDarkMode ? 'text-purple-400' : 'text-blue-600'} h-8 mb-8`}>
            {typingText}<span className="animate-pulse">|</span>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <a href="#projects" className={`px-8 py-3 bg-gradient-to-r ${accentGradient} rounded-full hover:scale-105 transition-transform inline-flex items-center justify-center gap-2 glow text-white`}>
              <Code size={20} /> View Projects
            </a>
            <button 
              onClick={handleDownloadResume}
              className={`px-8 py-3 border ${isDarkMode ? 'border-purple-500 hover:bg-purple-500/20' : 'border-blue-500 hover:bg-blue-500/10'} rounded-full transition-colors inline-flex items-center justify-center gap-2`}
            >
              <Download size={20} /> Download Resume
            </button>
          </div>
          
          <div className="flex gap-6 justify-center">
            <a href="https://github.com/onkardehane" target="_blank" rel="noopener noreferrer" 
               className={`w-12 h-12 rounded-full ${isDarkMode ? 'bg-gray-800 hover:bg-purple-600' : 'bg-gray-200 hover:bg-blue-500 hover:text-white'} flex items-center justify-center transition-colors`}>
              <Github size={20} />
            </a>
            <a href="https://linkedin.com/in/onkar-dehane-5a9631136" target="_blank" rel="noopener noreferrer"
               className={`w-12 h-12 rounded-full ${isDarkMode ? 'bg-gray-800 hover:bg-purple-600' : 'bg-gray-200 hover:bg-blue-500 hover:text-white'} flex items-center justify-center transition-colors`}>
              <Linkedin size={20} />
            </a>
            <a href="mailto:onkar.dehane24@gmail.com"
               className={`w-12 h-12 rounded-full ${isDarkMode ? 'bg-gray-800 hover:bg-purple-600' : 'bg-gray-200 hover:bg-blue-500 hover:text-white'} flex items-center justify-center transition-colors`}>
              <Mail size={20} />
            </a>
            <a href="tel:+4915225457768"
               className={`w-12 h-12 rounded-full ${isDarkMode ? 'bg-gray-800 hover:bg-purple-600' : 'bg-gray-200 hover:bg-blue-500 hover:text-white'} flex items-center justify-center transition-colors`}>
              <Phone size={20} />
            </a>
          </div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown size={32} className={isDarkMode ? 'text-purple-400' : 'text-blue-600'} />
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="floating">
              {/* ACTUAL PHOTO IMPLEMENTATION */}
              {/* Option 1: Show actual image */}
              {YOUR_PHOTO_URL && YOUR_PHOTO_URL !== "/api/placeholder/400/400" ? (
                <img 
                  src={YOUR_PHOTO_URL} 
                  alt="Onkar Dehane"
                  className="w-full h-96 object-cover rounded-2xl glow"
                />
              ) : (
                /* Option 2: Fallback gradient with icon if no photo provided */
                <div className={`w-full h-96 bg-gradient-to-br ${accentGradient} rounded-2xl flex items-center justify-center glow`}>
                  <div className="text-8xl text-white">👨‍💻</div>
                </div>
              )}
            </div>
            
            <div>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-6`}>
                I'm a passionate Full-Stack Developer with <span className={`${isDarkMode ? 'text-purple-400' : 'text-blue-600'} font-bold`}>5+ years of experience</span> building 
                enterprise-grade applications. My expertise spans from creating intuitive user interfaces to architecting 
                robust backend systems that scale.
              </p>
              <p className={`text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-8`}>
                Specialized in <span className={`${isDarkMode ? 'text-purple-400' : 'text-blue-600'} font-bold`}>Java Spring Boot</span> and <span className={`${isDarkMode ? 'text-purple-400' : 'text-blue-600'} font-bold`}>Angular</span>, 
                I've delivered solutions for companies like <span className={`${isDarkMode ? 'text-purple-400' : 'text-blue-600'} font-bold`}>IMC AG</span> and <span className={`${isDarkMode ? 'text-purple-400' : 'text-blue-600'} font-bold`}>SAP</span>, 
                focusing on performance optimization, cloud deployment, and GDPR compliance.
              </p>
              
              <div 
                className="grid grid-cols-2 gap-4"
                ref={(el) => {
                  if (el && !countersInView) {
                    const observer = new IntersectionObserver(
                      ([entry]) => {
                        if (entry.isIntersecting) setCountersInView(true);
                      },
                      { threshold: 0.1 }
                    );
                    observer.observe(el);
                  }
                }}
              >
                <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-blue-100/50'} p-4 rounded-xl text-center`}>
                  <div className={`text-3xl font-bold ${isDarkMode ? 'text-purple-400' : 'text-blue-600'}`}>
                    <Counter end={5} duration={2000} suffix="+" inView={countersInView} />
                  </div>
                  <div className={textSecondary}>Years Experience</div>
                </div>
                <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-blue-100/50'} p-4 rounded-xl text-center`}>
                  <div className={`text-3xl font-bold ${isDarkMode ? 'text-purple-400' : 'text-blue-600'}`}>
                    <Counter end={20} duration={2000} suffix="+" inView={countersInView} />
                  </div>
                  <div className={textSecondary}>Projects Delivered</div>
                </div>
                <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-blue-100/50'} p-4 rounded-xl text-center`}>
                  <div className={`text-3xl font-bold ${isDarkMode ? 'text-purple-400' : 'text-blue-600'}`}>
                    <Counter end={100} duration={2000} suffix="K+" inView={countersInView} />
                  </div>
                  <div className={textSecondary}>Users Served</div>
                </div>
                <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-blue-100/50'} p-4 rounded-xl text-center`}>
                  <div className={`text-3xl font-bold ${isDarkMode ? 'text-purple-400' : 'text-blue-600'}`}>
                    <Counter end={15} duration={2000} suffix="+" inView={countersInView} />
                  </div>
                  <div className={textSecondary}>Technologies</div>
                </div>
              </div>
              
              <div className="flex gap-4 mt-8">
                <div className="flex items-center gap-2">
                  <Coffee className={isDarkMode ? 'text-purple-400' : 'text-blue-600'} />
                  <span className={textSecondary}>Coffee Addict</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className={isDarkMode ? 'text-purple-400' : 'text-blue-600'} />
                  <span className={textSecondary}>Problem Solver</span>
                </div>
                <div className="flex items-center gap-2">
                  <Rocket className={isDarkMode ? 'text-purple-400' : 'text-blue-600'} />
                  <span className={textSecondary}>Innovation Driver</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`py-20 px-4 ${bgSecondary}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">Technical Skills</h2>
          
          <div 
            className="grid md:grid-cols-2 gap-8"
            ref={(el) => {
              if (el && !skillsInView) {
                const observer = new IntersectionObserver(
                  ([entry]) => {
                    if (entry.isIntersecting) setSkillsInView(true);
                  },
                  { threshold: 0.1 }
                );
                observer.observe(el);
              }
            }}
          >
            {skills.map((skill) => (
              <SkillBar key={skill.name} skill={skill} inView={skillsInView} />
            ))}
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white shadow-lg'} p-6 rounded-xl text-center hover:scale-105 transition-transform`}>
              <Code className={`w-12 h-12 mx-auto mb-3 ${isDarkMode ? 'text-purple-400' : 'text-blue-600'}`} />
              <h3 className="font-bold mb-2">Frontend</h3>
              <p className={`text-sm ${textSecondary}`}>React, Angular, Vue</p>
            </div>
            <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white shadow-lg'} p-6 rounded-xl text-center hover:scale-105 transition-transform`}>
              <Server className={`w-12 h-12 mx-auto mb-3 ${isDarkMode ? 'text-purple-400' : 'text-blue-600'}`} />
              <h3 className="font-bold mb-2">Backend</h3>
              <p className={`text-sm ${textSecondary}`}>Java, Node.js, Python</p>
            </div>
            <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white shadow-lg'} p-6 rounded-xl text-center hover:scale-105 transition-transform`}>
              <Database className={`w-12 h-12 mx-auto mb-3 ${isDarkMode ? 'text-purple-400' : 'text-blue-600'}`} />
              <h3 className="font-bold mb-2">Database</h3>
              <p className={`text-sm ${textSecondary}`}>PostgreSQL, MongoDB</p>
            </div>
            <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white shadow-lg'} p-6 rounded-xl text-center hover:scale-105 transition-transform`}>
              <Wrench className={`w-12 h-12 mx-auto mb-3 ${isDarkMode ? 'text-purple-400' : 'text-blue-600'}`} />
              <h3 className="font-bold mb-2">DevOps</h3>
              <p className={`text-sm ${textSecondary}`}>Docker, K8s, AWS</p>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gradient">Featured Projects</h2>
          <p className={`text-center ${textSecondary} mb-12 max-w-2xl mx-auto`}>
            Showcasing my best work - from enterprise applications to innovative solutions that push boundaries
          </p>
          
          {/* Filter Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {['all', 'fullstack', 'frontend', 'backend'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full capitalize transition-all ${
                  selectedCategory === category
                    ? `bg-gradient-to-r ${accentGradient} text-white`
                    : `${isDarkMode ? 'bg-gray-800 text-gray-400 hover:text-white' : 'bg-gray-200 text-gray-600 hover:text-gray-900'}`
                }`}
              >
                {category}
              </button>
            ))}
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects
              .filter((project) => selectedCategory === 'all' || project.category === selectedCategory)
              .map((project, index) => (
                <ProjectCard key={project.id} project={project} index={index} />
              ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className={`py-20 px-4 ${bgSecondary}`}>
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">Professional Experience</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b ${accentGradient}`} />
            
            {experience.map((job, index) => (
              <div key={index} className={`relative flex items-center mb-12 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}>
                <div className="flex-1" />
                
                {/* Timeline dot */}
                <div className={`absolute left-0 md:left-1/2 transform md:-translate-x-1/2 w-4 h-4 ${isDarkMode ? 'bg-purple-600' : 'bg-blue-600'} rounded-full border-4 ${isDarkMode ? 'border-gray-900' : 'border-white'}`} />
                
                <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'} pl-8 md:pl-0`}>
                  <div className={`${cardBg} rounded-2xl p-6 hover:scale-105 transition-transform ${isDarkMode ? '' : 'shadow-lg'}`}>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className={`text-xl font-bold ${isDarkMode ? 'text-purple-400' : 'text-blue-600'}`}>{job.role}</h3>
                      <span className={`text-sm ${textSecondary}`}>{job.period}</span>
                    </div>
                    <p className={`text-lg mb-1 ${textPrimary}`}>{job.company}</p>
                    <p className={`text-sm ${textSecondary} mb-4`}>{job.location}</p>
                    
                    <ul className="space-y-2">
                      {job.achievements.map((achievement, i) => (
                        <li key={i} className={`flex items-start gap-2 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                          <Check className={`w-4 h-4 ${isDarkMode ? 'text-purple-400' : 'text-blue-600'} mt-0.5 flex-shrink-0`} />
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 px-4">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gradient">Services</h2>
          <p className={`text-center ${textSecondary} mb-12 max-w-2xl mx-auto`}>
            Offering comprehensive technical solutions to help your business thrive in the digital age
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div 
                key={index}
                className={`${isDarkMode ? 'bg-gray-900 border-gray-800 hover:border-purple-500' : 'bg-white shadow-lg hover:shadow-xl'} border rounded-2xl p-8 transition-all duration-300 hover:scale-105`}
              >
                <div className={`w-16 h-16 bg-gradient-to-r ${accentGradient} rounded-xl flex items-center justify-center mb-6 text-white`}>
                  {service.icon}
                </div>
                <h3 className={`text-xl font-bold mb-3 ${textPrimary}`}>{service.title}</h3>
                <p className={`${textSecondary} mb-6`}>{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className={`flex items-center gap-2 text-sm ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`}>
                      <ArrowRight className={`w-4 h-4 ${isDarkMode ? 'text-purple-400' : 'text-blue-600'}`} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="#contact"
              className={`inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r ${accentGradient} rounded-full hover:scale-105 transition-transform glow text-white`}
            >
              <MessageSquare size={20} /> Get a Free Consultation
            </a>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className={`py-20 px-4 ${bgSecondary}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-gradient">Client Testimonials</h2>
          
          <div className="relative">
            <div className={`${cardBg} rounded-2xl p-8 md:p-12 ${isDarkMode ? '' : 'shadow-xl'}`}>
              <div className="flex justify-between items-center mb-6">
                <div className="flex gap-1">
                  {[...Array(testimonials[testimonialIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsPlaying(!isPlaying)}
                    className={`p-2 ${isDarkMode ? 'bg-gray-700 hover:bg-gray-600' : 'bg-gray-200 hover:bg-gray-300'} rounded-lg transition-colors`}
                  >
                    {isPlaying ? <Pause size={16} /> : <Play size={16} />}
                  </button>
                </div>
              </div>
              
              <p className={`text-lg md:text-xl ${isDarkMode ? 'text-gray-300' : 'text-gray-700'} mb-8 italic`}>
                "{testimonials[testimonialIndex].text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="text-4xl">{testimonials[testimonialIndex].image}</div>
                <div>
                  <p className={`font-bold ${textPrimary}`}>{testimonials[testimonialIndex].name}</p>
                  <p className={`text-sm ${textSecondary}`}>{testimonials[testimonialIndex].role}</p>
                  <p className={`text-sm ${isDarkMode ? 'text-purple-400' : 'text-blue-600'}`}>{testimonials[testimonialIndex].company}</p>
                </div>
              </div>
              
              <div className="flex justify-center gap-2 mt-8">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setTestimonialIndex(index)}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === testimonialIndex 
                        ? `w-8 ${isDarkMode ? 'bg-purple-500' : 'bg-blue-600'}` 
                        : `${isDarkMode ? 'bg-gray-600' : 'bg-gray-300'}`
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white shadow-lg'} p-6 rounded-xl text-center`}>
              <Users className={`w-10 h-10 mx-auto mb-3 ${isDarkMode ? 'text-purple-400' : 'text-blue-600'}`} />
              <div className={`text-2xl font-bold mb-1 ${textPrimary}`}>50+</div>
              <p className={`text-sm ${textSecondary}`}>Happy Clients</p>
            </div>
            <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white shadow-lg'} p-6 rounded-xl text-center`}>
              <Award className={`w-10 h-10 mx-auto mb-3 ${isDarkMode ? 'text-purple-400' : 'text-blue-600'}`} />
              <div className={`text-2xl font-bold mb-1 ${textPrimary}`}>4.9/5</div>
              <p className={`text-sm ${textSecondary}`}>Average Rating</p>
            </div>
            <div className={`${isDarkMode ? 'bg-gray-800/50' : 'bg-white shadow-lg'} p-6 rounded-xl text-center`}>
              <Target className={`w-10 h-10 mx-auto mb-3 ${isDarkMode ? 'text-purple-400' : 'text-blue-600'}`} />
              <div className={`text-2xl font-bold mb-1 ${textPrimary}`}>100%</div>
              <p className={`text-sm ${textSecondary}`}>Project Success</p>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section id="blog" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gradient">Latest Articles</h2>
          <p className={`text-center ${textSecondary} mb-12 max-w-2xl mx-auto`}>
            Sharing insights, tutorials, and thoughts on modern software development
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <article 
                key={post.id} 
                className={`${isDarkMode ? 'bg-gray-900 border-gray-800 hover:border-purple-500' : 'bg-white shadow-lg hover:shadow-xl'} rounded-2xl overflow-hidden border transition-all hover:scale-105`}
              >
                <div className={`h-48 bg-gradient-to-br ${accentGradient} flex items-center justify-center text-6xl`}>
                  {post.image}
                </div>
                <div className="p-6">
                  <div className={`flex justify-between items-center mb-3 text-sm ${textSecondary}`}>
                    <span className="flex items-center gap-1">
                      <Calendar size={14} /> {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={14} /> {post.readTime}
                    </span>
                  </div>
                  <span className={`inline-block px-3 py-1 ${isDarkMode ? 'bg-purple-500/20 text-purple-400' : 'bg-blue-100 text-blue-700'} rounded-full text-xs mb-3`}>
                    {post.category}
                  </span>
                  <h3 className={`text-xl font-bold mb-3 ${textPrimary}`}>{post.title}</h3>
                  <p className={`${textSecondary} mb-4`}>{post.excerpt}</p>
                  <a href="#" className={`${isDarkMode ? 'text-purple-400 hover:text-purple-300' : 'text-blue-600 hover:text-blue-700'} inline-flex items-center gap-1`}>
                    Read More <ArrowRight size={16} />
                  </a>
                </div>
              </article>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <a 
              href="#"
              className={`inline-flex items-center gap-2 px-6 py-3 border ${isDarkMode ? 'border-purple-500 hover:bg-purple-500/20' : 'border-blue-500 hover:bg-blue-500/10'} rounded-full transition-colors`}
            >
              <BookOpen size={20} /> View All Articles
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`py-20 px-4 ${bgSecondary}`}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-8 text-gradient">Let's Connect</h2>
          <p className={`text-center ${textSecondary} mb-12 max-w-2xl mx-auto`}>
            I'm always interested in discussing new opportunities and challenging projects. Feel free to reach out!
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className={`w-16 h-16 bg-gradient-to-r ${accentGradient} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                <Mail className="w-8 h-8" />
              </div>
              <h3 className={`font-bold mb-2 ${textPrimary}`}>Email</h3>
              <a href="mailto:onkar.dehane24@gmail.com" className={`${isDarkMode ? 'text-purple-400 hover:text-purple-300' : 'text-blue-600 hover:text-blue-700'}`}>
                onkar.dehane24@gmail.com
              </a>
            </div>
            
            <div className="text-center">
              <div className={`w-16 h-16 bg-gradient-to-r ${accentGradient} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                <Phone className="w-8 h-8" />
              </div>
              <h3 className={`font-bold mb-2 ${textPrimary}`}>Phone</h3>
              <a href="tel:+4915225457768" className={`${isDarkMode ? 'text-purple-400 hover:text-purple-300' : 'text-blue-600 hover:text-blue-700'}`}>
                +49 152 2545 7768
              </a>
            </div>
            
            <div className="text-center">
              <div className={`w-16 h-16 bg-gradient-to-r ${accentGradient} rounded-full flex items-center justify-center mx-auto mb-4 text-white`}>
                <MapPin className="w-8 h-8" />
              </div>
              <h3 className={`font-bold mb-2 ${textPrimary}`}>Location</h3>
              <p className={textSecondary}>Germany</p>
            </div>
          </div>
          
          <div className={`${cardBg} rounded-2xl p-8 ${isDarkMode ? '' : 'shadow-xl'}`}>
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className={`block text-sm font-medium mb-2 ${textPrimary}`}>Your Name</label>
                <input
                  type="text"
                  required
                  className={`w-full px-4 py-3 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-300'} border rounded-lg focus:border-${isDarkMode ? 'purple' : 'blue'}-500 focus:outline-none transition-colors ${textPrimary}`}
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className={`block text-sm font-medium mb-2 ${textPrimary}`}>Your Email</label>
                <input
                  type="email"
                  required
                  className={`w-full px-4 py-3 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-300'} border rounded-lg focus:border-${isDarkMode ? 'purple' : 'blue'}-500 focus:outline-none transition-colors ${textPrimary}`}
                  placeholder="john@example.com"
                />
              </div>
            </div>
            
            <div className="mb-6">
              <label className={`block text-sm font-medium mb-2 ${textPrimary}`}>Subject</label>
              <input
                type="text"
                required
                className={`w-full px-4 py-3 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-300'} border rounded-lg focus:border-${isDarkMode ? 'purple' : 'blue'}-500 focus:outline-none transition-colors ${textPrimary}`}
                placeholder="Project Discussion"
              />
            </div>
            
            <div className="mb-6">
              <label className={`block text-sm font-medium mb-2 ${textPrimary}`}>Message</label>
              <textarea
                required
                rows={5}
                className={`w-full px-4 py-3 ${isDarkMode ? 'bg-gray-900 border-gray-700' : 'bg-gray-50 border-gray-300'} border rounded-lg focus:border-${isDarkMode ? 'purple' : 'blue'}-500 focus:outline-none transition-colors resize-none ${textPrimary}`}
                placeholder="Tell me about your project..."
              />
            </div>
            
            <button
              onClick={() => alert('Contact form will be connected soon!')}
              className={`w-full py-3 bg-gradient-to-r ${accentGradient} rounded-lg hover:scale-105 transition-transform glow font-semibold text-white`}
            >
              Send Message
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={`py-8 px-4 ${borderColor} border-t`}>
        <div className="max-w-6xl mx-auto text-center">
          <p className={`${textSecondary} mb-2`}>© 2024 Onkar Dehane | All rights reserved</p>
          <p className={`text-sm ${isDarkMode ? 'text-gray-500' : 'text-gray-400'}`}>
            Built with React • {isDarkMode ? 'Dark' : 'Light'} Mode • Powered by innovation
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;