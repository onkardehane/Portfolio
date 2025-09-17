import React from 'react';
import { personalInfo } from '../../../data/personal';

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-5xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
          About Me
        </h2>
        
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-xl leading-relaxed text-gray-300">
              {personalInfo.bio.short}
            </p>
            
            <p className="text-lg leading-relaxed text-gray-400">
              {personalInfo.bio.detailed}
            </p>
          </div>

          <div className="flex justify-center">
            <div className="relative">
              <div className="w-80 h-80 rounded-2xl bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-sm border border-purple-500/30 flex items-center justify-center text-8xl">
                👨‍💻
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
