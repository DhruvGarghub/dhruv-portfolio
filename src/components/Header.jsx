import React, { useState, useEffect } from 'react';
import { Menu, X, FileText } from 'lucide-react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setIsOpen(false);
    const targetElement = document.querySelector(href);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0F172A]/85 backdrop-blur-md border-b border-gray-800/80 py-4 shadow-lg shadow-black/10'
          : 'bg-transparent py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 xl:px-32 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => handleClick(e, '#')}
          className="font-display font-bold text-xl text-white tracking-wide hover:text-brand-accent transition-colors duration-200"
        >
          DG<span className="text-brand-accent">.</span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          <ul className="flex items-center space-x-8 text-sm font-medium">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Quick Resume Link */}
          <a
            href="/resume_placeholder.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center space-x-1 px-4 py-2 border border-brand-accent/40 text-brand-accent rounded-lg text-xs font-semibold hover:bg-brand-accent/10 hover:border-brand-accent transition-all duration-200 font-mono"
          >
            <FileText size={14} />
            <span>Resume</span>
          </a>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-400 hover:text-white transition-colors duration-200 outline-none"
            aria-label="Toggle navigation menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[#0F172A] border-b border-gray-800/90 shadow-2xl py-6 px-8 space-y-6">
          <ul className="space-y-4">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <a
                  href={link.href}
                  onClick={(e) => handleClick(e, link.href)}
                  className="block text-gray-300 hover:text-white text-base font-medium py-1"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <div className="pt-4 border-t border-gray-850">
            <a
              href="/resume_placeholder.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 w-full justify-center px-4 py-3 bg-brand-accent text-white rounded-lg text-sm font-semibold transition-all duration-200"
            >
              <FileText size={16} />
              <span>View Resume</span>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
