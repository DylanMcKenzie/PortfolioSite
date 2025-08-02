import React from 'react';
import { Globe, Github } from 'lucide-react';
import playingABHSON from '../../assets/images/playingABHSON.jpg';
import lumos from '../../assets/images/lumos.png';
import donezo from '../../assets/images/donezo.png';
import igloocode from '../../assets/images/igloocode.png';

interface Project {
  id: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  links: {
    demo?: string;
    source?: string;
    website?: string;
  };
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 'open-night-game',
      title: 'Open Night Game',
      description: 'A simple yet engaging game for P6 and P7 students to demonstrate what could be created in the coding club that I used to run after school.',
      image: playingABHSON,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      links: {
        demo: 'https://abhsgame.dmck.dev/',
        source: 'https://github.com/DylanMcKenzie/ABHSOpenNightGame'
      }
    },
    {
      id: 'lumos-maxima',
      title: 'LumosMaxima',
      description: 'There was no way to only switch app colour in Windows automatically. So I made this basic script to automatically swap app theme colour between Light and Dark mode based on the time of day.',
      image: lumos,
      technologies: ['PowerShell'],
      links: {
        source: 'https://github.com/DylanMcKenzie/LumosMaxima'
      }
    },
    {
      id: 'donezo',
      title: 'donezo',
      description: 'This web extension helps users block access to chosen websites. It\'s currently under development as the foundational piece for a future productivity suite.',
      image: donezo,
      technologies: ['HTML', 'CSS', 'JavaScript'],
      links: {
        demo: '#'
      }
    },
    {
      id: 'igloocode',
      title: 'IglooCode 2025',
      description: 'I worked on a few tickets for a kids\' coding competition, where participants competed to solve coding problems. It was a fun and rewarding experience.',
      image: igloocode,
      technologies: ['React', 'TypeScript', 'Vite'],
      links: {
        website: 'https://verglas.io/'
      }
    }
  ];

  return (
    <section id="projects" className="max-w-5xl mx-auto py-12 px-4">
      <div className="relative mb-16 text-center">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-accent via-primary-dark to-primary bg-clip-text text-transparent mb-4 relative inline-block font-rubik">
          My Projects
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-accent via-primary-dark to-primary rounded-full"></div>
        </h2>
        <p className="text-text-secondary text-lg font-medium mt-6">Projects and tools I've built</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8 max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="bg-gradient-to-br from-primary-light/60 to-accent/70 rounded-2xl overflow-hidden shadow-soft-lg transition-all duration-500 hover:-translate-y-4 hover:shadow-glow-lg flex flex-col h-full group border border-primary/30 hover:border-primary/50 animate-fade-in backdrop-blur-lg"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="h-48 overflow-hidden relative">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>

            <div className="p-5 flex flex-col h-full relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/12 via-primary/10 to-purple-600/15 opacity-90"></div>
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary to-primary-dark rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                <h3 className="text-lg md:text-xl mb-2 text-primary font-bold group-hover:text-primary-dark transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-sm md:text-base mb-3 text-text-secondary leading-relaxed group-hover:text-text-primary transition-colors duration-300">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={tech}
                      className="bg-gradient-to-r from-primary to-primary-dark text-white px-2 py-1 rounded-full text-xs md:text-sm font-medium shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105 animate-fade-in"
                      style={{ animationDelay: `${(index * 0.2) + (techIndex * 0.1)}s` }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex-grow"></div>

                <div className="flex flex-col gap-2 mt-auto">
                  {project.links.demo && (
                    <a
                      href={project.links.demo}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg text-sm md:text-base transition-all duration-300 hover:shadow-glow hover:scale-105 justify-center group/btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe size={16} className="group-hover/btn:animate-bounce-gentle" />
                      {project.links.demo === '#' ? 'WIP' : 'Live Demo'}
                    </a>
                  )}

                  {project.links.source && (
                    <a
                      href={project.links.source}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-text-primary to-text-secondary text-white rounded-lg text-sm md:text-base transition-all duration-300 hover:shadow-glow hover:scale-105 justify-center group/btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github size={16} className="group-hover/btn:animate-bounce-gentle" />
                      Source Code
                    </a>
                  )}

                  {project.links.website && !project.links.demo && (
                    <a
                      href={project.links.website}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-primary to-primary-dark text-white rounded-lg text-sm md:text-base transition-all duration-300 hover:shadow-glow hover:scale-105 justify-center group/btn"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Globe size={16} className="group-hover/btn:animate-bounce-gentle" />
                      Website
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
