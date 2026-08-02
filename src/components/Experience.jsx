import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, ArrowRight } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 lg:px-24 xl:px-32 max-w-7xl mx-auto z-10 relative">
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-16">
        <div>
          <span className="font-mono text-xs tracking-widest text-brand-accent uppercase block mb-3">
            05. Experience
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white">
            Professional Path
          </h2>
          <div className="h-0.5 w-12 bg-brand-accent mt-4" />
        </div>
        <p className="text-gray-500 text-sm mt-4 md:mt-0 font-mono">
          Ready for contributions
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-100px' }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="bg-[#111827] border border-gray-800/80 p-8 rounded-2xl max-w-3xl hover:border-brand-accent/40 transition-all duration-300"
      >
        <div className="flex items-center space-x-3 mb-6">
          <div className="p-2.5 bg-brand-accent/10 rounded-lg text-brand-accent">
            <Briefcase size={22} />
          </div>
          <span className="font-mono text-sm text-brand-accent font-semibold tracking-wide">
            Internship Search
          </span>
        </div>

        <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
          Looking for Software Engineering Internship opportunities.
        </h3>

        <p className="text-gray-400 text-sm md:text-base leading-relaxed mb-6 font-sans">
          I am eager to apply my knowledge of systems engineering, backend patterns, and database operations to real-world products. I am looking for a team where I can solve actual problems, write clean and tested code, and learn from experienced engineers.
        </p>

        <div className="flex flex-wrap gap-y-3 gap-x-6 text-sm text-gray-500 font-mono mb-8">
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
            Available: Summer / Fall 2026/2027
          </span>
          <span className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-brand-accent" />
            Roles: Backend / Software Engineer Intern
          </span>
        </div>

        <a
          href="#contact"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
          }}
          className="inline-flex items-center space-x-2 text-sm font-semibold text-white hover:text-brand-accent group transition-colors duration-200"
        >
          <span>Get in touch for opportunities</span>
          <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform duration-200" />
        </a>
      </motion.div>
    </section>
  );
}
