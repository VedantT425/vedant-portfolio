"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Copy, Check, ExternalLink, Download } from 'lucide-react';
import { clsx } from 'clsx';

/* GitHub icon inline SVG */
function GithubIcon({ className = "" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleBlur = (field: string) => {
    let error = '';
    if (field === 'name' && !formData.name.trim()) error = 'Name is required';
    if (field === 'email' && !validateEmail(formData.email)) error = 'Invalid email address';
    if (field === 'message' && formData.message.trim().length < 10) error = 'Please add at least 10 characters';
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const isFormValid = Boolean(
    formData.name.trim() &&
    validateEmail(formData.email) &&
    formData.message.trim().length >= 10,
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) return;

    const subject = encodeURIComponent(`Portfolio enquiry from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\n${formData.message}`,
    );
    window.location.href = `mailto:vedantripathi05@gmail.com?subject=${subject}&body=${body}`;
  };

  const handleCopy = (text: string, field: string) => {
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  return (
    <section id="contact" className="section-shell relative max-w-6xl">
      {/* Ambient glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/[0.06] blur-[100px]" />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12 text-center">
          <p className="section-kicker">Start a conversation</p>
          <h2 className="section-heading gradient-text">
            Let&apos;s Connect
          </h2>
          <p className="section-intro mx-auto">Have an idea, opportunity or simply want to talk tech? Send a message and I&apos;ll get back to you.</p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:gap-20">
          
          {/* Left Column: Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onBlur={() => handleBlur('name')}
                  className={clsx(
                    "peer w-full rounded-xl border bg-zinc-900/80 px-4 pb-2 pt-6 text-zinc-100 transition-all duration-300 focus:outline-none",
                    errors.name 
                      ? "border-red-500" 
                      : "border-zinc-800 focus:border-cyan-400 focus:shadow-[0_0_16px_rgba(6,182,212,0.12)]"
                  )}
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-4 text-zinc-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan-400"
                  style={formData.name ? { top: '0.5rem', fontSize: '0.75rem' } : {}}
                >
                  Name
                </label>
                {errors.name && <p className="text-red-500 text-xs mt-1 ml-1">{errors.name}</p>}
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onBlur={() => handleBlur('email')}
                  className={clsx(
                    "peer w-full rounded-xl border bg-zinc-900/80 px-4 pb-2 pt-6 text-zinc-100 transition-all duration-300 focus:outline-none",
                    errors.email 
                      ? "border-red-500" 
                      : "border-zinc-800 focus:border-cyan-400 focus:shadow-[0_0_16px_rgba(6,182,212,0.12)]"
                  )}
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-4 text-zinc-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan-400"
                  style={formData.email ? { top: '0.5rem', fontSize: '0.75rem' } : {}}
                >
                  Email
                </label>
                {errors.email && <p className="text-red-500 text-xs mt-1 ml-1">{errors.email}</p>}
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  onBlur={() => handleBlur('message')}
                  rows={5}
                  className={clsx(
                    "peer w-full resize-none rounded-xl border bg-zinc-900/80 px-4 pb-3 pt-6 text-zinc-100 transition-all duration-300 focus:outline-none",
                    errors.message
                      ? "border-red-500"
                      : "border-zinc-800 focus:border-cyan-400 focus:shadow-[0_0_16px_rgba(6,182,212,0.12)]",
                  )}
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 top-4 text-zinc-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan-400"
                  style={formData.message ? { top: '0.5rem', fontSize: '0.75rem' } : {}}
                >
                  Message
                </label>
                {errors.message && <p className="text-red-500 text-xs mt-1 ml-1">{errors.message}</p>}
              </div>

              {/* Gradient submit button with shimmer */}
              <motion.button
                type="submit"
                disabled={!isFormValid}
                whileHover={isFormValid ? { scale: 1.02, y: -1 } : {}}
                whileTap={isFormValid ? { scale: 0.98 } : {}}
                className="group relative w-full flex items-center justify-center gap-2 overflow-hidden bg-gradient-to-r from-cyan-500 via-teal-400 to-cyan-500 text-zinc-950 font-bold py-3.5 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.25)] hover:shadow-[0_0_32px_rgba(6,182,212,0.45)] disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
              >
                {/* Shimmer sweep */}
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative z-10 flex items-center gap-2">
                  Open Email & Send
                  <Send className="w-4 h-4" />
                </span>
              </motion.button>
            </form>

            <p className="mt-4 text-xs leading-relaxed text-zinc-500">
              This opens your default email app with the message pre-filled. No data is stored on this website.
            </p>
          </div>

          {/* Right Column: Cards */}
          <div className="space-y-4">
            {/* Email Card */}
            <motion.div 
              whileHover={{ y: -3, scale: 1.01 }}
              className="surface-card group flex cursor-pointer items-center justify-between p-5"
            >
              <div>
                <p className="text-sm text-zinc-500 mb-1">Email</p>
                <p className="text-zinc-200 group-hover:text-white transition-colors">{`vedantripathi05@gmail.com`}</p>
              </div>
              <button 
                onClick={() => handleCopy('vedantripathi05@gmail.com', 'email')}
                className="p-2.5 bg-zinc-800 rounded-lg hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all cursor-pointer hover:scale-105 hover:shadow-[0_0_10px_rgba(6,182,212,0.15)]"
                title="Copy Email"
              >
                {copiedField === 'email' ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
              </button>
            </motion.div>

            {/* Phone Card */}
            <motion.div 
              whileHover={{ y: -3, scale: 1.01 }}
              className="surface-card group flex cursor-pointer items-center justify-between p-5"
            >
              <div>
                <p className="text-sm text-zinc-500 mb-1">Phone</p>
                <p className="text-zinc-200 group-hover:text-white transition-colors">+91 8815471744</p>
              </div>
              <button 
                onClick={() => handleCopy('+918815471744', 'phone')}
                className="p-2.5 bg-zinc-800 rounded-lg hover:bg-zinc-700 text-zinc-400 hover:text-white transition-all cursor-pointer hover:scale-105 hover:shadow-[0_0_10px_rgba(6,182,212,0.15)]"
                title="Copy Phone"
              >
                {copiedField === 'phone' ? <Check className="w-5 h-5 text-green-400" /> : <Copy className="w-5 h-5" />}
              </button>
            </motion.div>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <motion.a
                href="/Vedant-Tripathi-Resume.pdf"
                download="Vedant-Tripathi-Resume.pdf"
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-2xl flex items-center justify-center gap-2 text-emerald-300 hover:border-emerald-400/60 hover:bg-emerald-500/20 transition-all duration-300 cursor-pointer"
              >
                <Download className="w-5 h-5" />
                <span className="font-medium">Resume</span>
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/vedant-tripathi-800896273"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 bg-zinc-900/60 border border-zinc-800 p-4 rounded-2xl flex items-center justify-center gap-2 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:text-white transition-all duration-300 cursor-pointer group"
              >
                <span className="text-zinc-300 font-medium group-hover:text-white transition-colors">LinkedIn</span>
                <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
              </motion.a>
              
              <motion.a
                href="https://github.com/VedantT425"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -3 }}
                whileTap={{ scale: 0.97 }}
                className="flex-1 bg-zinc-900/60 border border-zinc-800 p-4 rounded-2xl flex items-center justify-center gap-2 hover:border-cyan-400/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:text-white transition-all duration-300 cursor-pointer group"
              >
                <GithubIcon className="w-5 h-5 text-zinc-300 group-hover:text-white transition-colors" />
                <span className="text-zinc-300 font-medium group-hover:text-white transition-colors">GitHub</span>
                <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
              </motion.a>
            </div>
          </div>
          
        </div>
      </motion.div>
    </section>
  );
}
