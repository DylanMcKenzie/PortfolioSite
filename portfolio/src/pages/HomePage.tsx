import React from 'react';
import Navigation from '../components/layout/Navigation';
import Hero from '../components/layout/Hero';
import About from '../components/layout/About';
import Projects from '../components/layout/Projects';
import Experience from '../components/layout/Experience';
import Contact from '../components/layout/Contact';
import Divider from '../components/ui/Divider';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen bg-primary-light font-rubik">
      <Navigation />
      <main>
        <div className="pt-20">
          <Hero />
        </div>
        <Divider />
        <About />
        <Divider />
        <Projects />
        <Divider />
        <Experience />
        <Divider />
        <Contact />
      </main>
    </div>
  );
};

export default HomePage;
