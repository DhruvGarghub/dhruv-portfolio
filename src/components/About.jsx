import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  const fadeInVariants = {
    hidden: { opacity: 0, y: 25 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    <section id="about" className="py-24 px-6 md:px-12 lg:px-24 xl:px-32 max-w-7xl mx-auto z-10 relative">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        variants={fadeInVariants}
        className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start"
      >
        {/* Section Title */}
        <div className="lg:col-span-4">
          <span className="font-mono text-xs tracking-widest text-brand-accent uppercase block mb-3">
            01. Background
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white">
            About Me
          </h2>
          <div className="h-0.5 w-12 bg-brand-accent mt-4" />
        </div>

        {/* Narrative Copy */}
        <div className="lg:col-span-8 space-y-6 text-gray-400 text-base md:text-lg leading-relaxed font-sans">
          <p>
            I am a third-year Computer Science Engineering undergraduate at{' '}
            <span className="text-white">VIT Vellore</span>. My academic focus centers on backend architectures, systems engineering, and database management systems. I prefer building structured systems where performance, resource usage, and API clarity are prioritized.
          </p>
          <p>
            Instead of jumping between fleeting frontend frameworks, I aim to master software engineering core principles: writing clean object-oriented code, designing robust databases, optimizing SQL queries, and understanding how data flows across networks.
          </p>
          <p>
            Currently, I am exploring backend development with Spring Boot, studying the patterns of high-availability system designs, and building concurrent utilities. I look forward to working with teams that build robust and scalable systems.
          </p>

          {/* Highlights / Principles Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
            <div className="bg-[#111827] border border-gray-800/80 p-5 rounded-xl hover:border-brand-accent/50 transition-colors duration-300">
              <h3 className="text-white font-semibold mb-2">Technical Core</h3>
              <p className="text-sm text-gray-500">
                Focused on data structures, algorithms, operating systems, and DBMS fundamentals.
              </p>
            </div>
            <div className="bg-[#111827] border border-gray-800/80 p-5 rounded-xl hover:border-brand-accent/50 transition-colors duration-300">
              <h3 className="text-white font-semibold mb-2">Systems Interest</h3>
              <p className="text-sm text-gray-500">
                Building multi-threaded Java applications and understanding network execution patterns.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
