import React, { useState } from 'react';
import { Laptop, GraduationCap, Camera, Users, Code, Heart, Zap, Target } from 'lucide-react';

const About: React.FC = () => {
  const [activeSkills, setActiveSkills] = useState<Set<number>>(new Set());

  const handleSkillHover = (index: number) => {
    setActiveSkills(prev => new Set(prev).add(index));
  };

  const handleSkillLeave = (index: number) => {
    setTimeout(() => {
      setActiveSkills(prev => {
        const newSet = new Set(prev);
        newSet.delete(index);
        return newSet;
      });
    }, 2000);
  };
  const highlights = [
    {
      icon: Laptop,
      title: 'Software Engineer',
      description: 'I develop efficient solutions to complex problems with a passion for clean code and innovative technologies',
      color: 'from-blue-500/20 to-blue-600/20'
    },
    {
      icon: GraduationCap,
      title: 'Lifelong Learner',
      description: 'I continuously expand my technical knowledge through education, practice, and staying current with industry trends',
      color: 'from-green-500/20 to-green-600/20'
    },
    {
      icon: Camera,
      title: 'Creative Vision',
      description: 'I capture meaningful moments and create visual stories, bringing creativity to both photography and development',
      color: 'from-purple-500/20 to-purple-600/20'
    },
    {
      icon: Users,
      title: 'Team Collaborator',
      description: 'I thrive in collaborative environments, mentoring others and building strong relationships across diverse teams',
      color: 'from-orange-500/20 to-orange-600/20'
    }
  ];

  const values = [
    { icon: Code, title: 'Clean Code', description: 'Writing maintainable, readable code' },
    { icon: Heart, title: 'Passion', description: 'Love for technology and innovation' },
    { icon: Zap, title: 'Efficiency', description: 'Optimising performance and workflow' },
    { icon: Target, title: 'Focus', description: 'Delivering quality results on time' }
  ];

  const skills = [
    {
      name: 'HTML5',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg',
      category: 'Frontend'
    },
    {
      name: 'CSS3',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg',
      category: 'Frontend'
    },
    {
      name: 'JavaScript',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
      category: 'Frontend'
    },
    {
      name: 'TypeScript',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      category: 'Frontend'
    },
    {
      name: 'React',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
      category: 'Frontend'
    },
    {
      name: 'Next.js',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
      category: 'Frontend'
    },
    {
      name: 'Java',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg',
      category: 'Backend'
    },
    {
      name: 'Node.js',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      category: 'Backend'
    },
    {
      name: 'MySQL',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg',
      category: 'Database'
    },
    {
      name: 'PostgreSQL',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
      category: 'Database'
    },
    {
      name: 'Linux',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
      category: 'Tools'
    },
    {
      name: 'VS Code',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg',
      category: 'Tools'
    },
    {
      name: 'IntelliJ',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/intellij/intellij-original.svg',
      category: 'Tools'
    },
    {
      name: 'DataGrip',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/datagrip/datagrip-original.svg',
      category: 'Tools'
    },
    {
      name: 'Vite',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg',
      category: 'Frontend'
    },
    {
      name: 'Playwright',
      src: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/playwright/playwright-original.svg',
      category: 'Testing'
    },
  ];

  return (
    <section id="about" className="max-w-6xl mx-auto text-center py-12 px-4">
      <div className="relative mb-16">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary via-primary-dark to-accent bg-clip-text text-transparent mb-4 relative inline-block font-rubik">
          About Me
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-primary via-accent to-primary-dark rounded-full"></div>
        </h2>
        <p className="text-text-secondary text-lg font-medium mt-6">Get to know me better</p>
      </div>

      <div className="my-8 animate-fade-in">
        <div className="w-full max-w-5xl mx-auto">
          <p className="text-center mb-8 leading-relaxed text-lg md:text-xl max-w-4xl mx-auto px-4 text-text-secondary hover:text-text-primary transition-colors duration-300">
            I'm currently a Software Engineer at Kainos and a part-time
            Computing Systems student at Ulster University. My fascination with
            computing started at a young age, and I've been exploring new
            technologies and building innovative solutions ever since.
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 max-w-4xl mx-auto">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary-light/60 to-accent-light/80 rounded-xl p-4 text-center transition-all duration-300 shadow-soft hover:shadow-glow hover:-translate-y-2 group animate-fade-in relative overflow-hidden backdrop-blur-md border border-primary/20"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-purple-500/5 to-accent/15 opacity-70"></div>
                  <IconComponent className="text-primary-dark group-hover:text-primary transition-colors duration-300 mx-auto mb-2 group-hover:animate-bounce-gentle relative z-10" size={24} />
                  <h4 className="text-sm font-semibold text-primary mb-1 relative z-10">{value.title}</h4>
                  <p className="text-xs text-text-secondary relative z-10">{value.description}</p>
                </div>
              );
            })}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 my-9 max-w-5xl mx-auto">
            {highlights.map((highlight, index) => {
              const IconComponent = highlight.icon;
              return (
                <div
                  key={index}
                  className="bg-gradient-to-br from-primary-light/60 to-accent/70 rounded-2xl p-6 text-center transition-all duration-300 shadow-soft-lg border-b-4 border-primary-dark hover:-translate-y-2 hover:shadow-glow-lg hover:border-primary group animate-slide-up relative overflow-hidden backdrop-blur-lg"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/12 via-primary/15 to-purple-600/18 opacity-80"></div>
                  <div className="bg-gradient-to-br from-primary-light/70 to-accent-light/80 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:animate-bounce-gentle transition-all duration-300 group-hover:shadow-glow relative z-10 backdrop-blur-sm border border-primary/30">
                    <IconComponent className="text-primary-dark group-hover:text-primary transition-colors duration-300" size={36} />
                  </div>
                  <h4 className="text-xl md:text-2xl mb-4 text-primary font-bold group-hover:text-primary-dark transition-colors duration-300 relative z-10">
                    {highlight.title}
                  </h4>
                  <p className="text-sm md:text-base text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-300 relative z-10">
                    {highlight.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <section className="mt-12 animate-fade-in">
        <div className="relative mb-12">
          <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-accent via-primary to-primary-dark bg-clip-text text-transparent mb-4 relative inline-block font-rubik">
            Skills & Technologies
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-accent via-primary to-primary-dark rounded-full"></div>
          </h2>
          <p className="text-text-secondary text-lg font-medium mt-6">Technologies I work with</p>
        </div>

        <div className="bg-gradient-to-br from-primary-light/70 to-accent/80 rounded-2xl p-8 shadow-soft-lg border border-primary/30 max-w-5xl mx-auto transition-all duration-300 hover:shadow-glow-lg hover:border-primary/50 group relative overflow-hidden backdrop-blur-lg">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-500/6 via-primary/8 to-purple-600/10 opacity-90"></div>
          <div className="grid grid-cols-3 md:grid-cols-7 gap-6 justify-items-center items-center relative z-10">
            {skills.map((skill, index) => {
              const isActive = activeSkills.has(index);
              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center w-full cursor-pointer animate-fade-in relative group/skill"
                  style={{ animationDelay: `${index * 0.05}s` }}
                  onMouseEnter={() => handleSkillHover(index)}
                  onMouseLeave={() => handleSkillLeave(index)}
                >
                  <div className="relative">
                    <img
                      src={skill.src}
                      alt={skill.name}
                      className={`w-12 h-12 md:w-16 md:h-16 mx-auto transition-all duration-500 ${
                        isActive 
                          ? 'grayscale-0 scale-125 drop-shadow-lg -translate-y-3' 
                          : 'grayscale-[30%] scale-100 translate-y-0'
                      }`}
                    />
                    <div className={`absolute inset-0 bg-gradient-to-r from-primary/30 to-primary-dark/30 rounded-lg blur-lg -z-10 transition-all duration-500 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                  </div>
                  
                  <span className={`mt-3 text-xs md:text-sm text-center font-medium transition-all duration-500 ${
                    isActive 
                      ? 'text-primary font-bold -translate-y-3' 
                      : 'text-text-primary font-medium translate-y-0'
                  }`}>
                    {skill.name}
                  </span>
                  
                  <span className={`text-xs text-primary-dark mt-1 bg-primary/10 px-2 py-1 rounded-full transition-all duration-500 ${
                    isActive 
                      ? 'opacity-100 -translate-y-3' 
                      : 'opacity-0 translate-y-0'
                  }`}>
                    {skill.category}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </section>
  );
};

export default About;
