import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Twitter, Mail, Copy, Check, MessageCircle } from 'lucide-react';

const Contact: React.FC = () => {
  const [iconSize, setIconSize] = useState(64);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const updateIconSize = () => {
      setIconSize(window.innerWidth < 768 ? 40 : 64);
    };

    updateIconSize();
    window.addEventListener('resize', updateIconSize);

    return () => window.removeEventListener('resize', updateIconSize);
  }, []);

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText('dylan20061@outlook.com');
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy email:', err);
    }
  };

  const socialLinks = [
    {
      icon: Github,
      href: 'https://github.com/dylanmckenzie',
      label: 'GitHub',
      description: 'Check out my code'
    },
    {
      icon: Linkedin,
      href: 'https://www.linkedin.com/in/dylanmck/',
      label: 'LinkedIn',
      description: 'Connect professionally'
    },
    {
      icon: Twitter,
      href: 'https://twitter.com/dylsomck',
      label: 'X (Twitter)',
      description: 'Follow my journey'
    }
  ];

  return (
    <section id="contact" className="max-w-4xl mx-auto py-16 px-4 text-center">
      <div className="mb-12">
        <div className="relative mb-8">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-accent to-primary-dark bg-clip-text text-transparent mb-4 relative inline-block font-rubik">
            Let's Connect
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-primary via-accent to-primary-dark rounded-full"></div>
          </h2>
          <p className="text-text-secondary text-lg font-medium mt-6">Let's have a conversation</p>
        </div>
        
        <p className="text-lg md:text-xl text-text-secondary max-w-2xl mx-auto leading-relaxed">
          I'm always excited to discuss new opportunities, collaborate on interesting projects, or just have a chat about technology. 
          Feel free to reach out through any of these platforms!
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
        {socialLinks.map((social, index) => {
          const IconComponent = social.icon;
          return (
            <div
              key={social.label}
              className="bg-gradient-to-br from-primary-light/70 to-accent/80 rounded-2xl p-6 shadow-soft-lg border border-primary/30 hover:border-primary/50 transition-all duration-300 hover:shadow-glow-lg hover:-translate-y-2 group animate-fade-in relative overflow-hidden backdrop-blur-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/12 via-primary/10 to-purple-600/15 opacity-80"></div>
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block relative z-10"
                aria-label={social.label}
              >
                <div className="relative mb-4">
                  <IconComponent 
                    size={iconSize * 0.6} 
                    className="mx-auto text-primary group-hover:text-primary-dark transition-all duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/30 to-primary-dark/30 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-lg -z-10"></div>
                </div>
                
                <h3 className="text-lg font-bold text-primary group-hover:text-primary-dark transition-colors duration-300 mb-2">
                  {social.label}
                </h3>
                
                <p className="text-sm text-text-secondary group-hover:text-text-primary transition-colors duration-300">
                  {social.description}
                </p>
              </a>
            </div>
          );
        })}
      </div>

            <div className="bg-gradient-to-br from-primary-light/70 to-accent/80 rounded-2xl p-8 shadow-soft-lg max-w-3xl mx-auto relative overflow-hidden backdrop-blur-lg border border-primary/30">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/8 via-primary/6 to-purple-600/10 opacity-80"></div>
        <div className="flex items-center justify-center gap-3 mb-6 relative z-10">
          <MessageCircle className="text-primary-dark group-hover:text-primary transition-colors duration-300" size={32} />
          <h3 className="text-xl md:text-2xl font-bold text-primary group-hover:text-primary-dark transition-colors duration-300">
            Quick Contact
          </h3>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
          <a 
            href="mailto:dylan20061@outlook.com"
            className="flex items-center gap-3 bg-white/20 backdrop-blur-sm rounded-xl px-4 py-3 border border-primary/20 hover:bg-white/30 transition-all duration-300 group"
          >
            <Mail size={20} className="text-primary group-hover:text-primary-dark transition-colors duration-300" />
            <span className="text-text-primary font-medium group-hover:text-primary-dark transition-colors duration-300">
              dylan20061@outlook.com
            </span>
          </a>
          
          <button
            onClick={copyEmail}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-xl font-semibold transition-all duration-300 hover:shadow-glow hover:scale-105 group/btn"
          >
            {copied ? (
              <>
                <Check size={16} className="group-hover/btn:animate-bounce-gentle" />
                Copied!
              </>
            ) : (
              <>
                <Copy size={16} className="group-hover/btn:animate-bounce-gentle" />
                Copy Email
              </>
            )}
          </button>
        </div>
        
        <p className="text-sm text-text-secondary mt-4 opacity-80">
          Usually respond within 24 hours
        </p>
      </div>

      <div className="mt-12 animate-fade-in">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-primary/10 to-primary-dark/10 rounded-full px-6 py-3 border border-primary/20">
          <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
          <span className="text-sm text-text-secondary">
            Available for freelance work and exciting opportunities
          </span>
        </div>
      </div>
    </section>
  );
};

export default Contact;
