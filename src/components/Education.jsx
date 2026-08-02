import React from 'react';
import { motion } from 'framer-motion';
import { Award, BookOpen, Calendar, MapPin } from 'lucide-react';

export default function Education() {
  const educationTimeline = [
    {
      degree: 'B.Tech in Computer Science & Engineering',
      institution: 'Vellore Institute of Technology (VIT)',
      location: 'Vellore, Tamil Nadu, India',
      duration: '2023 - 2027 (Expected)',
      status: 'Current: 3rd Year',
      details: [
        'Core Academic Focus: Data Structures and Algorithms, Object-Oriented Programming, Database Management Systems, Operating Systems, and Theory of Computation.',
        'Actively implementing practical models for database normalization, socket programming, and multi-threaded systems during lab courses.',
      ],
    },
  ];

  return (
    <section id="education" className="py-24 px-6 md:px-12 lg:px-24 xl:px-32 max-w-7xl mx-auto z-10 relative">
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-16">
        <div>
          <span className="font-mono text-xs tracking-widest text-brand-accent uppercase block mb-3">
            04. Academics
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white">
            Education
          </h2>
          <div className="h-0.5 w-12 bg-brand-accent mt-4" />
        </div>
        <p className="text-gray-500 text-sm mt-4 md:mt-0 font-mono">
          VIT Vellore CSE Undergraduate
        </p>
      </div>

      <div className="relative border-l border-gray-800 ml-3 md:ml-6 space-y-12">
        {educationTimeline.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.6, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="relative pl-8 md:pl-12"
          >
            {/* Timeline bullet */}
            <div className="absolute -left-[9px] top-1.5 h-4.5 w-4.5 rounded-full border border-gray-800 bg-[#0F172A] flex items-center justify-center">
              <div className="h-2 w-2 rounded-full bg-brand-accent animate-pulse" />
            </div>

            {/* Content Card */}
            <div className="bg-[#111827] border border-gray-800/80 p-6 md:p-8 rounded-2xl hover:border-brand-accent/40 transition-all duration-300">
              <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div>
                  <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-brand-accent/10 text-brand-accent mb-3 font-mono">
                    {item.status}
                  </span>
                  <h3 className="font-display text-xl md:text-2xl font-bold text-white">
                    {item.degree}
                  </h3>
                  <p className="text-gray-300 font-medium mt-1 font-sans flex items-center">
                    {item.institution}
                  </p>
                </div>
                <div className="flex flex-col text-sm text-gray-500 font-mono space-y-1 md:items-end">
                  <span className="flex items-center md:justify-end gap-1.5">
                    <Calendar size={13} />
                    {item.duration}
                  </span>
                  <span className="flex items-center md:justify-end gap-1.5">
                    <MapPin size={13} />
                    {item.location}
                  </span>
                </div>
              </div>

              <div className="mt-6 border-t border-gray-850 pt-6 space-y-4">
                <h4 className="text-white text-sm font-semibold uppercase tracking-wider font-mono flex items-center gap-2">
                  <BookOpen size={14} className="text-brand-accent" />
                  Key Coursework &amp; Focus
                </h4>
                <ul className="list-none space-y-2 text-gray-400 text-sm md:text-base font-sans">
                  {item.details.map((detail, dIdx) => (
                    <li key={dIdx} className="flex items-start">
                      <span className="text-brand-accent mr-2.5">•</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
