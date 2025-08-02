import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

interface NavigationProps {
  className?: string;
}

const Navigation: React.FC<NavigationProps> = ({ className = '' }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Projects', id: 'projects' },
    { label: 'Experience', id: 'experience' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 bg-primary-light/95 backdrop-blur-sm shadow-soft-lg border-b border-primary/10 transition-all duration-300 ${className}`}>
      <div className="flex justify-between items-center px-6 py-4 md:px-8">
        <h1 className="m-0 text-2xl md:text-3xl">
          <a 
            href="#"
            className="text-primary font-bold transition-all duration-300 px-3 py-2 rounded-lg hover:text-primary-dark hover:scale-105 hover:bg-accent-light/50 hover:shadow-glow"
          >
            Dylan McKenzie
          </a>
        </h1>
        
        <ul className="hidden md:flex list-none m-0 p-0 gap-3">
          {navItems.map((item) => (
            <li key={item.id} className="relative">
              <button
                onClick={() => scrollToSection(item.id)}
                className="text-primary font-semibold px-6 py-3 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-accent-light hover:to-primary-light hover:text-primary-dark hover:-translate-y-2 hover:shadow-primary-hover hover:scale-110 relative overflow-hidden group border-2 border-transparent hover:border-primary/30"
              >
                <span className="relative z-10 transition-all duration-300 group-hover:font-bold">{item.label}</span>
                {/* Animated background */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 via-primary-dark/10 to-primary/5 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-110"></div>
                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-1/2 w-0 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-full transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
                {/* Side glow effects */}
                <div className="absolute top-0 left-0 w-0 h-full bg-gradient-to-r from-primary-dark/20 to-transparent opacity-0 transition-all duration-300 group-hover:w-2 group-hover:opacity-100"></div>
                <div className="absolute top-0 right-0 w-0 h-full bg-gradient-to-l from-primary-dark/20 to-transparent opacity-0 transition-all duration-300 group-hover:w-2 group-hover:opacity-100"></div>
              </button>
            </li>
          ))}
        </ul>

        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          onTouchEnd={() => {
            setTimeout(() => {
              const button = document.activeElement as HTMLElement;
              button?.blur();
            }, 100);
          }}
          className="md:hidden relative z-50 p-3 rounded-2xl bg-gradient-to-r from-accent-light to-primary-light backdrop-blur-sm transition-all duration-300 md:hover:bg-gradient-to-r md:hover:from-primary-light md:hover:to-accent md:hover:shadow-primary md:hover:scale-110 md:hover:-translate-y-1 group border-2 border-primary/20 md:hover:border-primary/40 active:scale-95 active:shadow-none"
          aria-label="Toggle menu"
        >
          <div className="w-7 h-7 relative">
            <Menu 
              size={28} 
              className={`absolute inset-0 text-primary transition-all duration-300 md:group-hover:text-primary-dark ${
                isMenuOpen ? 'opacity-0 rotate-90 scale-75' : 'opacity-100 rotate-0 scale-100'
              }`} 
            />
            <X 
              size={28} 
              className={`absolute inset-0 text-primary transition-all duration-300 md:group-hover:text-primary-dark ${
                isMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-75'
              }`} 
            />
          </div>
          <div className="absolute inset-0 rounded-2xl bg-primary/20 opacity-0 transition-all duration-300 md:group-hover:opacity-100 md:group-hover:scale-110"></div>
        </button>
      </div>

      <div className={`md:hidden fixed inset-0 z-40 transition-all duration-300 ${
        isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
      }`}>
        <div 
          className="absolute inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsMenuOpen(false)}
        ></div>
        
        <div className={`fixed top-0 right-0 h-screen w-72 max-w-[80vw] bg-primary-light border-l border-primary/30 shadow-glow-lg transition-all duration-300 ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}>
          
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-10 right-10 w-24 h-24 bg-gradient-to-br from-primary to-primary-dark rounded-full blur-2xl"></div>
            <div className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-dark to-primary rounded-full blur-3xl"></div>
          </div>
          
          <div className="relative z-10 pt-24 pb-8 px-6 h-full">
            <ul className="space-y-4">
              {navItems.map((item, index) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`w-full text-left text-primary font-bold px-8 py-5 rounded-2xl transition-all duration-300 hover:bg-gradient-to-r hover:from-primary-light/80 hover:to-accent-light/80 hover:text-primary-dark hover:shadow-primary hover:scale-105 hover:-translate-y-1 group animate-fade-in bg-gradient-to-r from-primary-light/60 to-accent-light/60 backdrop-blur-sm border-2 border-primary/30 shadow-soft relative overflow-hidden`}
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-primary-dark/5 to-primary/10 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:animate-pulse-slow"></div>
                    
                    <span className="text-xl relative flex items-center">
                      <span className="w-3 h-3 bg-gradient-to-r from-primary-dark to-primary rounded-full mr-4 transition-all duration-300 group-hover:scale-150 group-hover:shadow-glow relative">
                        <span className="absolute inset-0 bg-gradient-to-r from-primary to-primary-dark rounded-full animate-pulse-slow opacity-0 group-hover:opacity-100"></span>
                      </span>
                      
                      <span className="transition-all duration-300 group-hover:text-primary group-hover:font-extrabold group-hover:tracking-wide">
                        {item.label}
                      </span>
                      
                      <span className="ml-auto text-primary-dark opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-2 text-2xl">→</span>
                    </span>
                    
                    <div className="absolute bottom-2 left-8 w-0 h-1 bg-gradient-to-r from-primary via-primary-dark to-primary rounded-full transition-all duration-500 group-hover:w-[calc(100%-4rem)]"></div>
                    
                    <div className="absolute top-3 right-3 w-2 h-2 bg-primary-dark rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-125"></div>
                    <div className="absolute bottom-3 left-3 w-1 h-1 bg-primary rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:scale-150" style={{ animationDelay: '0.1s' }}></div>
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
