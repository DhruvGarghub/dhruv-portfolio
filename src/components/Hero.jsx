import React from 'react';
import { motion } from 'framer-motion';
import { FileText, ArrowDown } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

export default function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1], // Custom cubic-bezier for premium feel
      },
    },
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-start px-6 md:px-12 lg:px-24 xl:px-32 max-w-7xl mx-auto z-10 select-none">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="w-full space-y-8"
      >
        {/* Intro badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center space-x-2">
          <span className="h-1.5 w-1.5 rounded-full bg-brand-accent animate-pulse" />
          <span className="font-mono text-sm tracking-widest text-gray-400 uppercase">
            Systems &amp; Backend Engineering
          </span>
        </motion.div>

        {/* Large Name */}
        <motion.h1
          variants={itemVariants}
          className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-white leading-[1.1]"
        >
          Dhruv Garg
        </motion.h1>

        {/* Professional Headline */}
        <motion.p
          variants={itemVariants}
          className="max-w-2xl text-lg md:text-xl text-gray-400 leading-relaxed font-sans text-balance"
        >
          Computer Science Engineering student at{' '}
          <span className="text-white hover:text-brand-accent transition-colors duration-200">
            VIT Vellore
          </span>
          . Focus on backend systems, concurrency, and designing structured, scalable software architecture.
        </motion.p>

        {/* Actions */}
        <motion.div
          variants={itemVariants}
          className="flex flex-wrap gap-4 pt-4"
        >
          <a
            href="/resume_placeholder.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 bg-white text-[#0F172A] px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:bg-brand-accent hover:text-white hover:shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:-translate-y-0.5 active:translate-y-0"
          >
            <FileText size={18} className="transition-transform duration-300" />
            <span>Download Resume</span>
          </a>

          <a
            href="https://github.com/DhruvGarghub"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 bg-[#111827] border border-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:border-brand-accent hover:-translate-y-0.5 active:translate-y-0"
          >
            <Github size={18} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
            <span>GitHub</span>
          </a>

          <a
            href="https://www.linkedin.com/in/dhruv-garg-a62365322/" // Placeholder as requested
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center space-x-2 bg-[#111827] border border-gray-800 text-white px-6 py-3 rounded-lg font-medium transition-all duration-300 hover:border-brand-accent hover:-translate-y-0.5 active:translate-y-0"
          >
            <Linkedin size={18} className="text-gray-400 group-hover:text-white transition-colors duration-300" />
            <span>LinkedIn</span>
          </a>
        </motion.div>
      </motion.div>

      {/* Down Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-10 left-6 md:left-12 lg:left-24 xl:left-32 flex items-center space-x-3 text-gray-500 text-xs font-mono tracking-widest uppercase cursor-pointer"
        onClick={() => {
          document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
        }}
      >
        <span className="animate-bounce">
          <ArrowDown size={14} />
        </span>
        <span>Scroll to Explore</span>
      </motion.div>
    </section>
  );
}
