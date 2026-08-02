import React from 'react';
import Header from './components/Header';
import InteractiveBackground from './components/InteractiveBackground';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="relative min-h-screen selection:bg-brand-accent/20 selection:text-white antialiased">
      {/* Dynamic Animated Node Link Canvas Background */}
      <InteractiveBackground />

      {/* Navigation Header */}
      <Header />

      {/* Page Sections Layout */}
      <main className="relative z-10">
        <Hero />
        
        {/* Decorative thin separators to align sections cleanly */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="h-px bg-gray-900" />
        </div>
        
        <About />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="h-px bg-gray-900" />
        </div>

        <Skills />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="h-px bg-gray-900" />
        </div>

        <Projects />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="h-px bg-gray-900" />
        </div>

        <Education />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="h-px bg-gray-900" />
        </div>

        <Experience />

        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 xl:px-32">
          <div className="h-px bg-gray-900" />
        </div>

        <Contact />
      </main>

      {/* Global Footer */}
      <Footer />
    </div>
  );
}
