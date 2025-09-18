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
  Settings
} from 'lucide-react';

// Move phrases outside component to avoid re-render issues
const TYPING_PHRASES = [
  "Building Scalable Enterprise Solutions",
  "Creating Seamless User Experiences", 
  "Architecting Cloud-Native Applications",
  "Optimizing Performance & Security",
  "Transforming Ideas into Reality"
];

const Portfolio = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [typingText, setTypingText] = useState('');
  const [currentPhraseIndex, setCurrentPhraseIndex] = useState(0);
  const [isTyping, setIsTyping] = useState(true);

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
    alert('Resume download will be available soon! Please contact me directly for now.');
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  // Rest of your Portfolio component code stays the same...
  // (keeping the existing styles and JSX structure)

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
    // ... (rest of styles remain the same)
  };

  // Your existing skills, projects, and component JSX code goes here
  // For now, let's return a simple working version:
  
  return (
    <div style={styles.container}>
      <div style={{ padding: '2rem', textAlign: 'center' }}>
        <h1 style={{ fontSize: '3rem', marginBottom: '1rem' }}>
          Onkar Dehane
        </h1>
        <h2 style={{ fontSize: '1.5rem', marginBottom: '2rem' }}>
          Senior Full-Stack Developer
        </h2>
        <div style={{ fontSize: '1.2rem', color: '#8b5cf6', marginBottom: '2rem' }}>
          {typingText}<span style={{ animation: 'blink 1s infinite' }}>|</span>
        </div>
        <p style={{ fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
          Building enterprise-grade applications with modern technologies. 
          Specialized in Java Spring Boot, Angular, and cloud-native solutions.
        </p>
      </div>
      
      <style>{`
        @keyframes blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
      `}</style>
    </div>
  );
};

export default Portfolio;
