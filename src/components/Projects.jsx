import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Code, Layers, Play } from 'lucide-react';
import { Github } from './BrandIcons';

export default function Projects() {
  const projects = [
    {
      title: 'Distributed Job Queue System',
      description:
        'A backend system that distributes jobs across multiple workers while handling asynchronous processing, task scheduling and execution efficiently. Designed to explore scalable backend architecture and concurrent task management.',
      tech: ['Java', 'Spring Boot', 'MySQL', 'Git', 'GitHub'],
      status: 'In Progress',
      github: 'https://github.com/DhruvGarghub', // Main account link as placeholder
      demo: '#',
      // Inline visual placeholder representing a queue and nodes
      visual: (
        <div className="w-full h-full bg-slate-950 rounded-xl border border-gray-800/60 p-4 flex flex-col justify-between font-mono text-xs overflow-hidden select-none">
          <div className="flex items-center justify-between border-b border-gray-800 pb-2 text-gray-500 text-[10px]">
            <span>DISTRIBUTED_QUEUE_SERVICE</span>
            <span className="text-brand-accent animate-pulse">● RUNNING</span>
          </div>
          <div className="flex items-center justify-center space-x-2 py-4">
            <div className="flex flex-col items-center bg-[#111827] border border-gray-800 p-2 rounded-lg">
              <span className="text-gray-400">Queue</span>
              <div className="flex space-x-1 mt-1">
                <span className="w-2.5 h-4 bg-brand-accent/40 rounded-sm block" />
                <span className="w-2.5 h-4 bg-brand-accent/60 rounded-sm block animate-pulse" />
                <span className="w-2.5 h-4 bg-brand-accent/80 rounded-sm block" />
              </div>
            </div>
            <span className="text-gray-700">→</span>
            <div className="flex flex-col space-y-1">
              <div className="bg-[#111827] border border-brand-accent/30 px-2 py-1 rounded text-[10px] text-brand-accent flex items-center space-x-2">
                <span>Worker_01</span>
                <span className="h-1.5 w-1.5 rounded-full bg-brand-accent animate-ping" />
              </div>
              <div className="bg-[#111827] border border-gray-800 px-2 py-1 rounded text-[10px] text-gray-500">
                <span>Worker_02</span>
              </div>
              <div className="bg-[#111827] border border-gray-800 px-2 py-1 rounded text-[10px] text-gray-500">
                <span>Worker_03</span>
              </div>
            </div>
          </div>
          <div className="bg-[#0F172A] border border-gray-850 p-2 rounded text-[9px] text-gray-400 font-mono">
            <span className="text-blue-400">root@queue:~$</span> job-dispatch --active --workers=3
          </div>
        </div>
      ),
    },
    {
      title: 'Arcade Hub',
      description:
        'A web-based gaming platform developed as a collaborative university project featuring multiple mini-games including Flappy Bird and Snake. Built with a modern frontend and cloud backend to provide an interactive gaming experience.',
      tech: ['React', 'Vite', 'Supabase', 'JavaScript', 'CSS'],
      status: 'Completed',
      github: 'https://github.com/DhruvGarghub',
      demo: '#',
      visual: (
        <div className="w-full h-full bg-slate-950 rounded-xl border border-gray-800/60 p-4 flex flex-col justify-between font-mono text-xs overflow-hidden select-none">
          <div className="flex items-center justify-between border-b border-gray-800 pb-2 text-gray-500 text-[10px]">
            <span>ARCADE_HUB_CLIENT</span>
            <span className="text-emerald-400">● LIVE</span>
          </div>
          <div className="relative flex-1 flex items-center justify-center py-2">
            {/* Small Snake representation */}
            <div className="w-full h-24 bg-[#111827] rounded-lg border border-gray-800/50 relative overflow-hidden flex items-center justify-center">
              <span className="absolute top-2 left-2 text-[8px] text-gray-600">SNAKE_GAME_MODE</span>
              <div className="flex space-x-1 absolute bottom-4 left-6">
                <span className="w-2 h-2 bg-emerald-400 rounded-sm" />
                <span className="w-2 h-2 bg-emerald-500 rounded-sm" />
                <span className="w-2 h-2 bg-emerald-600 rounded-sm" />
                <span className="w-2 h-2 bg-emerald-400 rounded-sm animate-pulse" />
              </div>
              <div className="w-2.5 h-2.5 bg-rose-500 rounded-full absolute top-6 right-10 animate-bounce" />
              <span className="text-[10px] text-emerald-400/80 font-bold absolute bottom-2 right-2">SCORE: 24</span>
            </div>
          </div>
          <div className="flex justify-between items-center text-[10px] text-gray-500 pt-1">
            <span>Mini-games: 2 active</span>
            <span className="text-emerald-400">Supabase Connected</span>
          </div>
        </div>
      ),
    },
    {
      title: 'Textile Marketplace',
      description:
        'A responsive bilingual marketplace website for textile products developed as part of a university coursework project. Features modern UI, product listings and user-friendly navigation.',
      tech: ['HTML', 'CSS', 'JavaScript'],
      status: 'Completed',
      github: 'https://github.com/DhruvGarghub',
      demo: '#',
      visual: (
        <div className="w-full h-full bg-slate-950 rounded-xl border border-gray-800/60 p-4 flex flex-col justify-between font-mono text-xs overflow-hidden select-none">
          <div className="flex items-center justify-between border-b border-gray-800 pb-2 text-gray-500 text-[10px]">
            <span>TEXTILE_PORTAL</span>
            <span className="text-blue-400">● STATIC_PAGE</span>
          </div>
          <div className="flex-1 flex flex-col justify-center py-2 space-y-2">
            <div className="flex justify-between items-center bg-[#111827] p-1.5 rounded border border-gray-800/50">
              <span className="text-[9px] text-gray-300">Modern Weaver</span>
              <span className="text-[8px] bg-brand-accent/20 text-brand-accent px-1 rounded">Bilingual</span>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <div className="bg-[#111827] p-1 rounded border border-gray-800/30 flex flex-col space-y-1">
                <div className="h-6 bg-slate-800/50 rounded flex items-center justify-center text-[7px] text-gray-500">Fabric A</div>
                <div className="h-2 bg-slate-800 w-3/4 rounded" />
              </div>
              <div className="bg-[#111827] p-1 rounded border border-gray-800/30 flex flex-col space-y-1">
                <div className="h-6 bg-slate-800/50 rounded flex items-center justify-center text-[7px] text-gray-500">Fabric B</div>
                <div className="h-2 bg-slate-800 w-1/2 rounded" />
              </div>
            </div>
          </div>
          <div className="text-[9px] text-gray-500 text-right">
            Coursework: Textile Commerce
          </div>
        </div>
      ),
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const projectVariants = {
    hidden: { opacity: 0, y: 30 },
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
    <section id="projects" className="py-24 px-6 md:px-12 lg:px-24 xl:px-32 max-w-7xl mx-auto z-10 relative">
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-16">
        <div>
          <span className="font-mono text-xs tracking-widest text-brand-accent uppercase block mb-3">
            03. Ported Code
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white">
            Featured Projects
          </h2>
          <div className="h-0.5 w-12 bg-brand-accent mt-4" />
        </div>
        <p className="text-gray-500 text-sm mt-4 md:mt-0 font-mono">
          Handcrafted backend &amp; frontend implementations
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="space-y-16"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={projectVariants}
            className="group grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-[#111827]/40 border border-gray-800/65 rounded-2xl p-6 md:p-8 hover:border-brand-accent/30 transition-all duration-300 hover:shadow-[0_10px_40px_rgba(0,0,0,0.4)]"
          >
            {/* Interactive/Mockup Representation - Left Column */}
            {/* INSTRUCTIONS TO CUSTOMIZE IMAGE SCREENSHOT:
                To replace this visual mockup with a screenshot image, comment out or delete the {project.visual} block, 
                and uncomment the <img> element below. Remember to place your screenshot in public/assets/.
            */}
            <div className="lg:col-span-5 flex items-center justify-center bg-gray-900/50 p-4 rounded-xl relative min-h-[200px]">
              {project.visual}
              
              {/* <img 
                src={`/assets/project-${index + 1}.png`} 
                alt={`${project.title} Screenshot`} 
                className="w-full h-full object-cover rounded-xl border border-gray-850" 
              /> */}
            </div>

            {/* Project Details - Right Column */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-6 lg:pl-4">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="font-mono text-xs text-brand-accent uppercase tracking-wider">
                    {project.status}
                  </span>
                </div>
                <h3 className="font-display text-2xl font-bold text-white group-hover:text-brand-accent transition-colors duration-200">
                  {project.title}
                </h3>
                <p className="mt-4 text-gray-400 text-sm md:text-base leading-relaxed font-sans">
                  {project.description}
                </p>
              </div>

              <div>
                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="px-2.5 py-1 bg-gray-900 border border-gray-800 rounded-md text-xs text-gray-400 font-mono"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTAs */}
                <div className="flex items-center space-x-4 border-t border-gray-850 pt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-1.5 text-xs font-mono text-gray-400 hover:text-white transition-colors duration-200"
                  >
                    <Github size={14} />
                    <span>View Repository</span>
                  </a>

                  {project.status !== 'In Progress' && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-1.5 text-xs font-mono text-gray-400 hover:text-white transition-colors duration-200"
                    >
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* Placeholder Card for future projects */}
        {/* INSTRUCTIONS TO ADD MORE PROJECTS:
            To add a project, simply append an object to the 'projects' array defined above. 
            The map function will automatically render it as a full-size featured card.
        */}
        <motion.div
          variants={projectVariants}
          className="border border-dashed border-gray-800 rounded-2xl p-8 flex flex-col items-center justify-center text-center space-y-4 hover:border-brand-accent/50 transition-colors duration-300 min-h-[160px]"
        >
          <Code className="text-gray-600" size={32} />
          <div>
            <h4 className="text-white font-medium">Have a new repository or tool?</h4>
            <p className="text-sm text-gray-500 mt-1 max-w-sm">
              Add it to the <code>projects</code> array inside <code>Projects.jsx</code> to feature it in this timeline.
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}
