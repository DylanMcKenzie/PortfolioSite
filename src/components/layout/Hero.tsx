import React, { useState, useEffect, useMemo } from 'react';
import { Terminal, ArrowDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [currentRole, setCurrentRole] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  
  const roles = useMemo(() => [
    'Software Engineer',
    'Full-Stack Developer', 
    'Problem Solver',
    'Tech Enthusiast'
  ], []);

  useEffect(() => {
    const currentRoleText = roles[currentRole];
    let currentIndex = 0;
    
    if (isTyping) {
      const typeInterval = setInterval(() => {
        if (currentIndex <= currentRoleText.length) {
          setDisplayedText(currentRoleText.slice(0, currentIndex));
          currentIndex++;
        } else {
          clearInterval(typeInterval);
          setTimeout(() => setIsTyping(false), 2000);
        }
      }, 100);
      
      return () => clearInterval(typeInterval);
    } else {
      const deleteInterval = setInterval(() => {
        if (currentIndex >= 0) {
          setDisplayedText(currentRoleText.slice(0, currentIndex));
          currentIndex--;
        } else {
          clearInterval(deleteInterval);
          setCurrentRole((prev) => (prev + 1) % roles.length);
          setIsTyping(true);
        }
      }, 50);
      
      return () => clearInterval(deleteInterval);
    }
  }, [currentRole, isTyping, roles]);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="intro" className="min-h-screen flex items-center justify-center relative overflow-hidden font-rubik">
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-20 right-20 w-96 h-96 bg-gradient-to-br from-primary/10 to-primary-dark/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-accent/20 to-primary/10 rounded-full blur-3xl animate-pulse-slow"></div>
      </div>

      <div className="max-w-6xl w-full mx-auto px-4 flex flex-col-reverse lg:flex-row items-center justify-center gap-8 lg:gap-12">
        <div className="flex-[3] text-center lg:text-left animate-fade-in">
          <div className="mb-6">
            <h3 className="text-lg md:text-2xl mb-4 text-primary flex items-center justify-center lg:justify-start gap-3">
              <Terminal className="animate-blink text-primary-dark" size={24} />
              Hello There, I'm
            </h3>
            
            <h1 className="text-4xl md:text-6xl lg:text-7xl m-0 mb-6 leading-none font-bold tracking-wide animate-slide-up">
              <span className="bg-gradient-to-r from-primary via-primary-dark to-primary bg-clip-text text-transparent">
                Dylan McKenzie
              </span>
            </h1>
            
            <div className="mb-8 h-16 flex items-center justify-center lg:justify-start">
              <span className="text-xl md:text-3xl text-text-secondary">
                I'm a{' '}
                <span className="text-primary-dark font-bold transition-opacity duration-500 inline-block min-w-[200px] text-left">
                  {displayedText}
                  <span className="animate-blink text-primary-dark ml-1">|</span>
                </span>
              </span>
            </div>
            
            <p className="text-lg md:text-xl mb-8 text-text-secondary leading-relaxed max-w-2xl mx-auto lg:mx-0 animate-fade-in">
              Software Engineer @{' '}
              <a 
                href="https://www.kainos.com" 
                className="text-primary font-semibold relative hover:text-primary-dark transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:-bottom-0.5 after:left-0 after:bg-primary-dark after:transition-all after:duration-300 hover:after:w-full hover:shadow-glow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Kainos
              </a>
              <br />
              Chief Operating Officer @{' '}
              <a 
                href="https://verglas.io" 
                className="text-primary font-semibold relative hover:text-primary-dark transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:-bottom-0.5 after:left-0 after:bg-primary-dark after:transition-all after:duration-300 hover:after:w-full hover:shadow-glow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Verglas
              </a>
              <br />
              Computing Systems Student @{' '}
              <a 
                href="https://www.ulster.ac.uk" 
                className="text-primary font-semibold relative hover:text-primary-dark transition-all duration-300 after:content-[''] after:absolute after:w-0 after:h-0.5 after:-bottom-0.5 after:left-0 after:bg-primary-dark after:transition-all after:duration-300 hover:after:w-full hover:shadow-glow"
                target="_blank"
                rel="noopener noreferrer"
              >
                Ulster
              </a>
            </p>

            <div className="flex flex-col items-center lg:items-start mt-8">
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mb-4 opacity-50"></div>
              <button
                onClick={scrollToAbout}
                className="flex items-center gap-2 text-primary hover:text-primary-dark transition-colors duration-300 group animate-bounce-gentle"
              >
                <span className="text-sm">Learn more about me</span>
                <ArrowDown size={16} className="group-hover:animate-bounce-gentle" />
              </button>
              <div className="w-32 h-0.5 bg-gradient-to-r from-transparent via-primary to-transparent mt-4 opacity-50"></div>
            </div>
          </div>
        </div>
        
        <div className="flex-[2] flex justify-center items-center">
          <div className="relative group">
            <img
              src="https://avatars.githubusercontent.com/u/71850587"
              alt="Dylan McKenzie"
              className="w-full max-w-80 border-4 border-primary-dark rounded-organic shadow-primary transition-all duration-500 hover:scale-105 hover:rounded-organic-hover hover:shadow-primary-hover animate-float group-hover:animate-bounce-gentle"
            />
            
            <div className="absolute inset-0 rounded-organic bg-gradient-to-r from-primary to-primary-dark opacity-0 -z-10 blur-xl transition-all duration-500 group-hover:opacity-30 animate-pulse-slow"></div>
            <div className="absolute -inset-4 rounded-organic bg-gradient-to-r from-primary-dark to-accent opacity-0 -z-20 blur-2xl transition-all duration-700 group-hover:opacity-20"></div>
            
            <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-primary to-primary-dark rounded-full animate-bounce-gentle opacity-80"></div>
            <div className="absolute -bottom-6 -left-6 w-6 h-6 bg-gradient-to-r from-accent to-primary rounded-full animate-pulse-slow opacity-60"></div>
            <div className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-r from-primary-dark to-accent rounded-full animate-float opacity-70"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
