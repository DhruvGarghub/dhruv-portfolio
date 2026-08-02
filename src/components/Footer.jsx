import React from 'react';
import { Mail } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-gray-800/80 bg-slate-950/20 py-8 px-6 md:px-12 lg:px-24 xl:px-32 max-w-7xl mx-auto z-10 relative">
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
        {/* Branding / Copy */}
        <div className="text-center sm:text-left font-mono text-xs text-gray-500">
          <span>&copy; {currentYear} Dhruv Garg. All rights reserved.</span>
          <span className="block mt-1 sm:inline sm:mt-0 sm:before:content-['|'] sm:before:mx-2 text-[10px]">
            Designed &amp; Handcrafted
          </span>
        </div>

        {/* Social Icons */}
        <div className="flex items-center space-x-5 text-gray-500">
          <a
            href="https://github.com/DhruvGarghub"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
            aria-label="GitHub Profile"
          >
            <Github size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/dhruv-garg-a62365322/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white transition-colors duration-200"
            aria-label="LinkedIn Profile"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="mailto:dhruv.garg.placeholder@gmail.com"
            className="hover:text-white transition-colors duration-200"
            aria-label="Send Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
