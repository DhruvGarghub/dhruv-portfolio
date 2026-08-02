import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Cpu, Database, Wrench, GraduationCap } from 'lucide-react';

export default function Skills() {
  const categories = [
    {
      title: 'Programming Languages',
      icon: <Code2 className="text-brand-accent" size={24} />,
      skills: ['C++', 'Java', 'Python', 'JavaScript', 'HTML', 'CSS', 'SQL'],
    },
    {
      title: 'Currently Learning',
      icon: <GraduationCap className="text-emerald-400" size={24} />,
      skills: ['Spring Boot', 'System Design', 'Backend Development'],
    },
    {
      title: 'Developer Tools',
      icon: <Wrench className="text-orange-400" size={24} />,
      skills: ['Git', 'GitHub', 'VS Code', 'IntelliJ IDEA', 'MySQL', 'Postman'],
    },
    {
      title: 'Computer Science Concepts',
      icon: <Cpu className="text-indigo-400" size={24} />,
      skills: [
        'Data Structures',
        'Algorithms',
        'Object Oriented Programming',
        'Database Management Systems',
        'Operating Systems',
        'REST APIs',
      ],
    },
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    },
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12 lg:px-24 xl:px-32 max-w-7xl mx-auto z-10 relative">
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-12">
        <div>
          <span className="font-mono text-xs tracking-widest text-brand-accent uppercase block mb-3">
            02. Expertise
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white">
            Skills &amp; Toolkit
          </h2>
          <div className="h-0.5 w-12 bg-brand-accent mt-4" />
        </div>
        <p className="text-gray-500 text-sm mt-4 md:mt-0 font-mono">
          Focused on backend architecture &amp; CS foundations
        </p>
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {categories.map((category, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            className="bg-[#111827] border border-gray-800/80 p-6 md:p-8 rounded-2xl hover:border-brand-accent/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_10px_30px_rgba(0,0,0,0.3)] flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-2.5 bg-gray-800/50 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-white text-lg font-semibold font-display">
                  {category.title}
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, sIdx) => (
                  <span
                    key={sIdx}
                    className="px-3.5 py-1.5 bg-[#1F2937]/50 border border-gray-800/60 rounded-lg text-sm text-gray-300 font-sans hover:text-white hover:border-brand-accent/30 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
