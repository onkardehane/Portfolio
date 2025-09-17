import React from 'react';
import { useTypewriter } from '../../../hooks/useTypewriter';
import { personalInfo } from '../../../data/personal';

const Hero = () => {
  const phrases = [
    "Building Scalable Enterprise Solutions",
    "Creating Seamless User Experiences",
    "Architecting Cloud-Native Applications",
    "Optimizing Performance & Security"
  ];
  
  const { currentText } = useTypewriter(phrases);

  const handleDownloadResume = () => {
    const link = document.createElement('a');
    link.href = personalInfo.resume.url;
    link.download = 'Onkar_Dehane_Resume.pdf';
    link.click();
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse delay-1000"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <div className="space-y-6">
          <div className="mb-8">
            <div className="w-48 h-48 mx-auto rounded-full bg-gradient-to-r from-purple-500 to-blue-500 p-1">
              <div className="w-full h-full rounded-full bg-slate-900 flex items-center justify-center text-6xl">
                👨‍💻
              </div>
            </div>
          </div>

          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-purple-400 via-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
            {personalInfo.name}
          </h1>
          
          <h2 className="text-2xl md:text-4xl font-light text-gray-300">
            {personalInfo.title}
          </h2>

          <div className="h-12 flex items-center justify-center">
            <span className="text-xl md:text-2xl text-purple-400 font-mono">
              {currentText}<span className="animate-pulse">|</span>
            </span>
          </div>

          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <button
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full font-semibold hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-2"
            >
              �� View Projects
            </button>
            <button
              onClick={handleDownloadResume}
              className="px-8 py-4 border-2 border-purple-500 rounded-full font-semibold hover:bg-purple-500 transition-all duration-300 flex items-center gap-2"
            >
              📄 Download Resume
            </button>
          </div>

          <div className="flex justify-center space-x-6 mt-8">
            {[
              { icon: "🐙", href: personalInfo.social.github, label: "GitHub" },
              { icon: "💼", href: personalInfo.social.linkedin, label: "LinkedIn" },
              { icon: "📧", href: `mailto:${personalInfo.social.email}`, label: "Email" },
              { icon: "📱", href: `tel:${personalInfo.social.phone}`, label: "Phone" }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-500 transition-all duration-300 hover:scale-110 text-2xl"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
