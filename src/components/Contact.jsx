import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Send, AlertCircle, CheckCircle2 } from 'lucide-react';
import { Github, Linkedin } from './BrandIcons';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  const validate = () => {
    const tempErrors = {};
    if (!formData.name.trim()) tempErrors.name = 'Name is required.';
    
    if (!formData.email.trim()) {
      tempErrors.email = 'Email is required.';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Invalid email address.';
    }
    
    if (!formData.message.trim()) {
      tempErrors.message = 'Message cannot be empty.';
    } else if (formData.message.trim().length < 10) {
      tempErrors.message = 'Message must be at least 10 characters.';
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus('sending');

    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      setFormData({ name: '', email: '', message: '' });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 lg:px-24 xl:px-32 max-w-7xl mx-auto z-10 relative">
      <div className="flex flex-col md:flex-row md:items-baseline justify-between mb-16">
        <div>
          <span className="font-mono text-xs tracking-widest text-brand-accent uppercase block mb-3">
            06. Communication
          </span>
          <h2 className="font-display text-3xl md:text-4xl font-bold tracking-tight text-white">
            Get In Touch
          </h2>
          <div className="h-0.5 w-12 bg-brand-accent mt-4" />
        </div>
        <p className="text-gray-500 text-sm mt-4 md:mt-0 font-mono">
          Response time: &lt; 24 Hours
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
        {/* Info Column */}
        <div className="lg:col-span-5 space-y-8">
          <h3 className="font-display text-xl md:text-2xl font-bold text-white leading-snug">
            Let's discuss internship opportunities, collaborations, or code.
          </h3>
          <p className="text-gray-400 text-sm md:text-base leading-relaxed font-sans">
            I am always open to discussing new backend projects, technical coursework, or software internship positions. Send a message, or connect with me via social links.
          </p>

          <div className="space-y-4 pt-4">
            <a
              href="mailto:dhruv.garg.placeholder@gmail.com" // Placeholder email as requested
              className="flex items-center space-x-3.5 text-gray-400 hover:text-brand-accent transition-colors duration-200"
            >
              <div className="p-2.5 bg-gray-900 border border-gray-800 rounded-lg text-gray-500">
                <Mail size={18} />
              </div>
              <div className="font-mono text-xs md:text-sm">
                <span className="block text-[10px] text-gray-500 font-sans">EMAIL ME</span>
                dhruv.garg.placeholder@gmail.com
              </div>
            </a>

            <a
              href="https://linkedin.com/in/dhruv-garg-placeholder" // Placeholder as requested
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3.5 text-gray-400 hover:text-brand-accent transition-colors duration-200"
            >
              <div className="p-2.5 bg-gray-900 border border-gray-800 rounded-lg text-gray-500">
                <Linkedin size={18} />
              </div>
              <div className="font-mono text-xs md:text-sm">
                <span className="block text-[10px] text-gray-500 font-sans">LINKEDIN</span>
                linkedin.com/in/dhruv-garg-placeholder
              </div>
            </a>

            <a
              href="https://github.com/DhruvGarghub"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-3.5 text-gray-400 hover:text-brand-accent transition-colors duration-200"
            >
              <div className="p-2.5 bg-gray-900 border border-gray-800 rounded-lg text-gray-500">
                <Github size={18} />
              </div>
              <div className="font-mono text-xs md:text-sm">
                <span className="block text-[10px] text-gray-500 font-sans">GITHUB</span>
                github.com/DhruvGarghub
              </div>
            </a>
          </div>
        </div>

        {/* Form Column */}
        <div className="lg:col-span-7 bg-[#111827] border border-gray-800/85 p-6 md:p-8 rounded-2xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 font-mono">
                  Your Name
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  className={`w-full bg-slate-900/60 border ${
                    errors.name ? 'border-rose-500/70 focus:border-rose-500' : 'border-gray-800 focus:border-brand-accent'
                  } rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors duration-200`}
                  placeholder="Dhruv Garg"
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-sans">
                    <AlertCircle size={12} />
                    {errors.name}
                  </p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 font-mono">
                  Your Email
                </label>
                <input
                  id="email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  className={`w-full bg-slate-900/60 border ${
                    errors.email ? 'border-rose-500/70 focus:border-rose-500' : 'border-gray-800 focus:border-brand-accent'
                  } rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors duration-200`}
                  placeholder="you@example.com"
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-sans">
                    <AlertCircle size={12} />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 font-mono">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                value={formData.message}
                onChange={(e) => {
                  setFormData({ ...formData, message: e.target.value });
                  if (errors.message) setErrors({ ...errors, message: '' });
                }}
                className={`w-full bg-slate-900/60 border ${
                  errors.message ? 'border-rose-500/70 focus:border-rose-500' : 'border-gray-800 focus:border-brand-accent'
                } rounded-lg px-4 py-3 text-white text-sm outline-none transition-colors duration-200 resize-none`}
                placeholder="Say hello, talk about a project, or share an opportunity..."
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-sans">
                  <AlertCircle size={12} />
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === 'sending' || status === 'success'}
              className="w-full flex items-center justify-center space-x-2 bg-brand-accent text-white py-3 rounded-lg font-medium transition-all duration-300 hover:bg-brand-accent-hover disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_20px_rgba(59,130,246,0.2)]"
            >
              {status === 'sending' ? (
                <>
                  <span className="h-4 w-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                  <span>Sending Message...</span>
                </>
              ) : status === 'success' ? (
                <>
                  <CheckCircle2 size={16} />
                  <span>Sent Successfully</span>
                </>
              ) : (
                <>
                  <Send size={16} />
                  <span>Send Message</span>
                </>
              )}
            </button>

            {/* Success Banner */}
            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="p-3 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs md:text-sm rounded-lg flex items-start gap-2.5 font-sans"
                >
                  <CheckCircle2 size={18} className="shrink-0 mt-0.5" />
                  <span>Thank you! Your message has been successfully received. I will reach out as soon as possible.</span>
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </div>
      </div>
    </section>
  );
}
