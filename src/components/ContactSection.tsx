"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Copy, Check, ExternalLink, Mail, MessageSquare } from 'lucide-react';
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
  const [isSent, setIsSent] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const handleBlur = (field: string) => {
    let error = '';
    if (field === 'name' && !formData.name.trim()) error = 'Name is required';
    if (field === 'email' && !validateEmail(formData.email)) error = 'Valid email address is required';
    if (field === 'message' && !formData.message.trim()) error = 'Message is required';
    setErrors(prev => ({ ...prev, [field]: error }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check all fields on click
    const nameErr = !formData.name.trim() ? 'Please enter your name' : '';
    const emailErr = !formData.email.trim()
      ? 'Please enter your email'
      : (!validateEmail(formData.email) ? 'Please enter a valid email address' : '');
    const msgErr = !formData.message.trim() ? 'Please enter your message' : '';

    setErrors({ name: nameErr, email: emailErr, message: msgErr });

    if (nameErr || emailErr || msgErr) {
      return;
    }

    const subject = encodeURIComponent(`Portfolio Message from ${formData.name.trim()}`);
    const body = encodeURIComponent(
      `Hello Vedant,\n\n${formData.message.trim()}\n\nBest regards,\n${formData.name.trim()}\nEmail: ${formData.email.trim()}`
    );
    const mailtoUrl = `mailto:vedantripathi05@gmail.com?subject=${subject}&body=${body}`;

    // Reliable cross-platform execution
    const link = document.createElement('a');
    link.href = mailtoUrl;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsSent(true);
    setTimeout(() => setIsSent(false), 8000);
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
          <p className="section-intro mx-auto">
            Have an idea, opportunity or simply want to discuss a project? Send a message directly.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:gap-16 items-start">
          
          {/* Left Column: Form */}
          <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-3xl p-6 sm:p-8 backdrop-blur-sm">
            <h3 className="text-lg font-semibold text-white mb-2 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-cyan-400" />
              Send a Direct Message
            </h3>
            <p className="text-xs text-zinc-400 mb-6">
              Fill the form below and click to compose directly to my inbox.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
                  onBlur={() => handleBlur('name')}
                  className={clsx(
                    "peer w-full rounded-xl border bg-zinc-950/80 px-4 pb-2 pt-6 text-zinc-100 transition-all duration-300 focus:outline-none",
                    errors.name 
                      ? "border-red-500/80 focus:border-red-500 shadow-[0_0_12px_rgba(239,68,68,0.15)]" 
                      : "border-zinc-800 focus:border-cyan-400 focus:shadow-[0_0_16px_rgba(6,182,212,0.15)]"
                  )}
                  placeholder=" "
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-4 text-zinc-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan-400 cursor-text"
                  style={formData.name ? { top: '0.5rem', fontSize: '0.75rem' } : {}}
                >
                  Your Name *
                </label>
                {errors.name && <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.name}</p>}
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
                  onBlur={() => handleBlur('email')}
                  className={clsx(
                    "peer w-full rounded-xl border bg-zinc-950/80 px-4 pb-2 pt-6 text-zinc-100 transition-all duration-300 focus:outline-none",
                    errors.email 
                      ? "border-red-500/80 focus:border-red-500 shadow-[0_0_12px_rgba(239,68,68,0.15)]" 
                      : "border-zinc-800 focus:border-cyan-400 focus:shadow-[0_0_16px_rgba(6,182,212,0.15)]"
                  )}
                  placeholder=" "
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-4 text-zinc-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan-400 cursor-text"
                  style={formData.email ? { top: '0.5rem', fontSize: '0.75rem' } : {}}
                >
                  Your Email *
                </label>
                {errors.email && <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.email}</p>}
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: '' });
                  }}
                  onBlur={() => handleBlur('message')}
                  rows={4}
                  className={clsx(
                    "peer w-full resize-none rounded-xl border bg-zinc-950/80 px-4 pb-3 pt-6 text-zinc-100 transition-all duration-300 focus:outline-none",
                    errors.message
                      ? "border-red-500/80 focus:border-red-500 shadow-[0_0_12px_rgba(239,68,68,0.15)]"
                      : "border-zinc-800 focus:border-cyan-400 focus:shadow-[0_0_16px_rgba(6,182,212,0.15)]",
                  )}
                  placeholder=" "
                />
                <label
                  htmlFor="message"
                  className="absolute left-4 top-4 text-zinc-500 text-sm transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 peer-focus:top-2 peer-focus:text-xs peer-focus:text-cyan-400 cursor-text"
                  style={formData.message ? { top: '0.5rem', fontSize: '0.75rem' } : {}}
                >
                  Your Message *
                </label>
                {errors.message && <p className="text-red-400 text-xs mt-1.5 ml-1">{errors.message}</p>}
              </div>

              {/* Gradient submit button */}
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02, y: -1 }}
                whileTap={{ scale: 0.98 }}
                className="group relative w-full flex items-center justify-center gap-2 overflow-hidden bg-gradient-to-r from-cyan-500 via-cyan-400 to-teal-400 text-zinc-950 font-bold py-3.5 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_32px_rgba(6,182,212,0.5)] cursor-pointer"
              >
                {/* Shimmer sweep */}
                <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                <span className="relative z-10 flex items-center gap-2 text-sm sm:text-base">
                  Open Email & Send
                  <Send className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </span>
              </motion.button>
            </form>

            {/* Notification / Feedback Banner */}
            <AnimatePresence>
              {isSent && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 p-4 bg-emerald-500/15 border border-emerald-500/30 text-emerald-300 rounded-xl text-xs space-y-1.5"
                >
                  <p className="font-semibold flex items-center gap-2 text-emerald-400">
                    <Check className="w-4 h-4" />
                    Opening your email client...
                  </p>
                  <p className="text-zinc-300">
                    If your email client did not launch automatically, you can directly email me at:{" "}
                    <a
                      href={`mailto:vedantripathi05@gmail.com?subject=Portfolio%20Inquiry`}
                      className="text-cyan-400 underline hover:text-cyan-300"
                    >
                      vedantripathi05@gmail.com
                    </a>
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <p className="mt-4 text-[11px] leading-relaxed text-zinc-500">
              💡 Clicking &ldquo;Open Email &amp; Send&rdquo; opens your default email client (like Gmail, Outlook, or Apple Mail) pre-filled with your message.
            </p>
          </div>

          {/* Right Column: Direct Contact & Social Links */}
          <div className="space-y-4">
            
            {/* Email Direct Action Card */}
            <motion.a 
              href="mailto:vedantripathi05@gmail.com"
              whileHover={{ y: -3, scale: 1.01 }}
              className="surface-card group flex cursor-pointer items-center justify-between p-5 border border-zinc-800 hover:border-cyan-500/40 transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-105 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium">Email Directly</p>
                  <p className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                    vedantripathi05@gmail.com
                  </p>
                </div>
              </div>
              <button 
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleCopy('vedantripathi05@gmail.com', 'email');
                }}
                className="p-2.5 bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white rounded-lg transition-all cursor-pointer hover:scale-105 hover:shadow-[0_0_10px_rgba(6,182,212,0.15)]"
                title="Copy Email Address"
              >
                {copiedField === 'email' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </motion.a>

            {/* Phone Card */}
            <motion.a 
              href="tel:+918815471744"
              whileHover={{ y: -3, scale: 1.01 }}
              className="surface-card group flex cursor-pointer items-center justify-between p-5 border border-zinc-800 hover:border-emerald-500/40 transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 group-hover:scale-105 transition-all">
                  <span className="text-sm font-bold">📞</span>
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium">Phone / WhatsApp</p>
                  <p className="text-sm font-semibold text-zinc-200 group-hover:text-white transition-colors">
                    +91 8815471744
                  </p>
                </div>
              </div>
              <button 
                type="button"
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleCopy('+918815471744', 'phone');
                }}
                className="p-2.5 bg-zinc-800/80 hover:bg-zinc-700 text-zinc-400 hover:text-white rounded-lg transition-all cursor-pointer hover:scale-105 hover:shadow-[0_0_10px_rgba(16,185,129,0.15)]"
                title="Copy Phone Number"
              >
                {copiedField === 'phone' ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
              </button>
            </motion.a>

            {/* Clean 2-column Social Links: LinkedIn & GitHub (No resume) */}
            <div className="grid grid-cols-2 gap-4 pt-1">
              <motion.a
                href="https://linkedin.com/in/vedant-tripathi-800896273"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="bg-zinc-900/60 border border-zinc-800 p-4 rounded-2xl flex items-center justify-center gap-2 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:text-white transition-all duration-300 cursor-pointer group"
              >
                <span className="text-zinc-300 font-medium text-sm group-hover:text-white transition-colors">LinkedIn</span>
                <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
              </motion.a>
              
              <motion.a
                href="https://github.com/VedantT425"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.03, y: -2 }}
                whileTap={{ scale: 0.97 }}
                className="bg-zinc-900/60 border border-zinc-800 p-4 rounded-2xl flex items-center justify-center gap-2 hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] hover:text-white transition-all duration-300 cursor-pointer group"
              >
                <GithubIcon className="w-4 h-4 text-zinc-300 group-hover:text-white transition-colors" />
                <span className="text-zinc-300 font-medium text-sm group-hover:text-white transition-colors">GitHub</span>
                <ExternalLink className="w-4 h-4 text-zinc-500 group-hover:text-cyan-400 transition-colors" />
              </motion.a>
            </div>
          </div>
          
        </div>
      </motion.div>
    </section>
  );
}
