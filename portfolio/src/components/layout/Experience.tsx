import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ExperienceItem {
  id: string;
  title: string;
  company?: string;
  date: string;
  type: 'work' | 'education' | 'project';
  content: string[];
  skills?: string[];
}

const Experience: React.FC = () => {
  const [openItems, setOpenItems] = useState<string[]>(['kainos']);

  const toggleItem = (id: string) => {
    setOpenItems(prev => 
      prev.includes(id)
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const experiences: ExperienceItem[] = [
    {
      id: 'kainos',
      title: 'Software Engineer',
      company: 'Kainos',
      date: 'September 2024 - Present',
      type: 'work',
      content: [
        'I joined Kainos after leaving school through the Earn As You Learn scheme. It has been very rewarding and I have met many nice people, while vastly improving my software engineer capabilities!',
        'After joining Kainos, I was immediately placed into a team of eight, all of us participating in the Earn As You Learn scheme. Together, we embarked on a 16-week engineering academy where we were introduced to the fundamentals of software engineering. Rather than focusing on specific programming languages, the academy emphasised learning how to think critically and solve problems as a developer - teaching us to programme, not just code.',
        'We started with the data layer, using MySQL to design and manage databases. After presenting our work, we moved on to the logic layer, where we developed backend functionality using Java. Finally, we tackled the presentation layer, creating user interfaces with TypeScript and Nunjucks. Along the way, we also learned automated testing, covering unit tests, integration tests, and UI testing. We explored accessibility testing using Pa11y and performance testing with JMeter, which gave us a deeper understanding of how to ensure quality and scalability in our work. The academy culminated in a two-week project where we built a job application website, combining all the skills we had learned throughout the course. The tickets were assigned to us, and we successfully delivered the MVP.',
        'In addition to our core learning, we had the privilege of attending amazing talks from skilled professionals within the company. Their insights and experiences were incredibly inspiring. We also participated in workshops run by these experts, which helped us deepen our knowledge on specific topics and further refine our skills.',
        'Presenting our project to senior staff was nerve-racking, but everyone was so lovely and encouraging. Their support made me realise my anxiety was completely unnecessary.',
        'Looking back, I\'m incredibly proud of my progress during the academy. I\'ve never had so much fun learning, and I feel like I gained an incredible amount from the experience. We achieved so much in just 16 weeks, and I even surprised myself with what I was capable of.'
      ],
      skills: ['Java', 'TypeScript', 'MySQL', 'Testing', 'Agile', 'Playwright', 'Pa11y']
    },
    {
      id: 'aws',
      title: 'Cloud Practitioner Essentials Course',
      company: 'AWS',
      date: 'February 2024',
      type: 'education',
      content: [
        'After an AWS talk at Kainos CodeCamp 2023 I was really intrigued and later found AWS Skill Builder. I wanted to follow a course such as this one, as I felt this was a bit of a knowledge gap for me and also something that interested me. I was taught a great deal about AWS and was able to get a good understanding of its uses in the workplace and its benefits.'
      ],
      skills: ['AWS', 'Cloud Computing', 'DevOps']
    },
    {
      id: 'coding-club',
      title: 'Coding Club Creator',
      company: 'Ashfield Boys\' High School',
      date: 'November 2023 - July 2024',
      type: 'project',
      content: [
        'Having a passion for computing and programming for years made me realise that I wanted to share something so great and try to spark a passion within younger people. Therefore I created the coding club at my school, completely independently and made lesson plans, advertising graphics, brought on helpers and even spoke at assemblies to spread the word about the club.'
      ],
      skills: ['Leadership', 'Teaching', 'Web Development']
    },
    {
      id: 'work-experience',
      title: '3 Day Work Experience',
      company: 'Kainos',
      date: 'November 2023 and January 2024',
      type: 'work',
      content: [
        'I have completed a multitude of Kainos Work Experiences, in which I was put in groups of 3-4 and had to pick 2 words from a list of IT related words and make a website based on those, then go on to present it. This was really fun and further improved my teamwork, communication and people skills.'
      ],
      skills: ['Teamwork', 'Web Development', 'Presentation']
    },
    {
      id: 'codecamp',
      title: 'CodeCamp',
      company: 'Kainos',
      date: 'August 2023',
      type: 'education',
      content: [
        'During the 5 day CodeCamp I was tasked with creating and presenting a website, I chose to create one on gaming and it was focused around giving simple tutorials and introductions to games, I also added quizzes for each game. This vastly improved my web development skills and got me hooked on HTML, CSS & JS. There were also some amazing talks that gave me further insight into the IT world.'
      ],
      skills: ['HTML', 'CSS', 'JavaScript']
    },
    {
      id: 'generation-innovation',
      title: '5 Day Work Experience',
      company: 'Generation Innovation',
      date: 'June 2023',
      type: 'work',
      content: [
        'Myself and a diverse group of 8 were given a problem by a local Belfast company, Instil Software, and to solve it created an Edtech website using ChatGPTs API to give students a list of topics with descriptions based on a prompted subject. We also grew our social media from 0 to 200 followers in 5 days and used polls to better understand our target market!'
      ],
      skills: ['API Integration', 'Social Media', 'Market Research']
    },
    {
      id: 'queens',
      title: 'Pathway Opportunity Programme',
      company: 'Queen\'s University Belfast',
      date: 'January - November 2023',
      type: 'education',
      content: [
        'This year-long programme gave me a look into University life and helped me better understand it. During the programme, I participated in a Summer School in which I was taught game development in Java and had to sit an exam to determine if I would get 0-2 grade reductions for a guaranteed conditional offer and ended up receiving 2 grade reductions!'
      ],
      skills: ['Java', 'Game Development', 'Academic']
    }
  ];

  return (
    <section id="experience" className="max-w-4xl mx-auto py-12 px-4 text-center">
      <div className="relative mb-16">
        <h2 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-primary-dark via-accent to-primary bg-clip-text text-transparent mb-4 relative inline-block font-rubik">
          Experience
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-gradient-to-r from-primary-dark via-accent to-primary rounded-full"></div>
        </h2>
        <p className="text-text-secondary text-lg font-medium mt-6">My professional journey</p>
      </div>

      <div className="relative">
        <ul className="list-none p-0 m-0 space-y-6">
          {experiences.map((experience, index) => (
            <li
              key={experience.id}
              className="relative animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className={`max-w-4xl mx-auto ${index % 2 === 0 ? 'pr-8 md:pr-1/2' : 'pl-8 md:pl-1/2 md:ml-auto'}`}>
                <div
                  className={`${index % 2 === 0 
                    ? 'bg-gradient-to-r from-primary-light/80 via-primary-light/70 to-accent/80' 
                    : 'bg-gradient-to-l from-primary-light/80 via-primary-light/70 to-accent/80'
                  } rounded-2xl overflow-hidden transition-all duration-500 shadow-soft-lg border border-primary/30 hover:border-primary/50 hover:shadow-glow group cursor-pointer backdrop-blur-lg`}
                  onClick={() => toggleItem(experience.id)}
                >
                  <div className={`p-6 ${index % 2 === 0 
                    ? 'bg-gradient-to-r from-primary-light/70 to-accent/80 hover:from-primary-light/80 hover:to-accent/70' 
                    : 'bg-gradient-to-l from-primary-light/70 to-accent/80 hover:from-primary-light/80 hover:to-accent/70'
                  } transition-all duration-300 text-left group-hover:shadow-soft relative overflow-hidden backdrop-blur-lg border-t-2 border-primary/30`}>
                    <div className={`absolute inset-0 ${index % 2 === 0 
                      ? 'bg-gradient-to-r from-purple-500/8 via-primary/6 to-purple-600/4' 
                      : 'bg-gradient-to-l from-purple-500/8 via-primary/6 to-purple-600/4'
                    } opacity-80`}></div>
                    <div className="absolute inset-0 opacity-10">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary to-primary-dark rounded-full blur-2xl group-hover:blur-xl transition-all duration-300"></div>
                    </div>
                    
                    <div className="relative z-10 flex flex-col md:flex-row md:justify-between md:items-start gap-3">
                      <div className="flex-1">
                        <h3 className="text-lg md:text-xl m-0 font-bold text-primary group-hover:text-primary-dark transition-colors duration-300 mb-1">
                          {experience.title}
                        </h3>
                        {experience.company && (
                          <p className="text-sm md:text-base text-primary-dark font-semibold mb-2">
                            @ {experience.company}
                          </p>
                        )}
                        <p className="text-sm text-text-secondary flex items-center gap-2">
                          <span className="w-2 h-2 bg-primary-dark rounded-full animate-pulse-slow"></span>
                          {experience.date}
                        </p>
                      </div>
                      <span className={`transition-all duration-500 p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 ${
                        openItems.includes(experience.id) ? 'rotate-180 bg-primary-dark/20' : ''
                      }`}>
                        <ChevronDown size={20} className="text-primary group-hover:text-primary-dark transition-colors duration-300" />
                      </span>
                    </div>
                  </div>

                  <div
                    className={`overflow-hidden transition-all duration-500 ${
                      openItems.includes(experience.id) 
                        ? 'max-h-[2000px] pb-6 px-6 pt-4' 
                        : 'max-h-0 p-0'
                    } bg-gradient-to-br from-primary-light to-accent-light text-left border-t border-primary/10`}
                  >
                    <div className="animate-fade-in">
                      {experience.content.map((paragraph, paragraphIndex) => (
                        <p key={paragraphIndex} className="text-sm md:text-base mb-4 last:mb-4 leading-relaxed text-text-secondary hover:text-text-primary transition-colors duration-300">
                          {paragraph}
                        </p>
                      ))}
                      
                      {experience.skills && (
                        <div className="mt-4 pt-4 border-t border-primary/20">
                          <h4 className="text-sm font-semibold text-primary mb-2">Skills & Technologies:</h4>
                          <div className="flex flex-wrap gap-2">
                            {experience.skills.map((skill, skillIndex) => (
                              <span
                                key={skillIndex}
                                className="bg-gradient-to-r from-primary to-primary-dark text-white px-3 py-1 rounded-full text-xs font-medium shadow-soft hover:shadow-glow transition-all duration-300 hover:scale-105"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Experience;
