"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, Copy, Check, ExternalLink, Mail, MessageSquare, Sparkles, ArrowUp } from 'lucide-react';
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

/* WhatsApp icon inline SVG */
function WhatsAppIcon({ className = "" }: { className?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
    </svg>
  );
}

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({ name: '', email: '', message: '' });
  const [copiedField, setCopiedField] = useState<string | null>(null);
  const [activeAction, setActiveAction] = useState<string | null>(null);

  const validateEmail = (email: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  const validateForm = () => {
    const nameErr = !formData.name.trim() ? 'Please enter your name' : '';
    const emailErr = !formData.email.trim()
      ? 'Please enter your email'
      : (!validateEmail(formData.email) ? 'Please enter a valid email address' : '');
    const msgErr = !formData.message.trim() ? 'Please write your message' : '';

    setErrors({ name: nameErr, email: emailErr, message: msgErr });
    return !(nameErr || emailErr || msgErr);
  };

  const handleSendGmail = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const subject = encodeURIComponent(`Portfolio Message from ${formData.name.trim()}`);
    const body = encodeURIComponent(
      `Hello Vedant,\n\n${formData.message.trim()}\n\nBest regards,\n${formData.name.trim()}\nEmail: ${formData.email.trim()}`
    );
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=vedantripathi05@gmail.com&su=${subject}&body=${body}`;

    window.open(gmailUrl, '_blank', 'noopener,noreferrer');
    setActiveAction('gmail');
    setTimeout(() => setActiveAction(null), 7000);
  };

  const handleSendWhatsApp = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const text = encodeURIComponent(
      `Hi Vedant, I saw your portfolio!\n\nName: ${formData.name.trim()}\nEmail: ${formData.email.trim()}\n\nMessage:\n${formData.message.trim()}`
    );
    const waUrl = `https://wa.me/918815471744?text=${text}`;

    window.open(waUrl, '_blank', 'noopener,noreferrer');
    setActiveAction('whatsapp');
    setTimeout(() => setActiveAction(null), 7000);
  };

  const handleSendDefaultMail = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const subject = encodeURIComponent(`Portfolio Message from ${formData.name.trim()}`);
    const body = encodeURIComponent(
      `Hello Vedant,\n\n${formData.message.trim()}\n\nBest regards,\n${formData.name.trim()}\nEmail: ${formData.email.trim()}`
    );
    window.location.href = `mailto:vedantripathi05@gmail.com?subject=${subject}&body=${body}`;
    setActiveAction('mail');
    setTimeout(() => setActiveAction(null), 7000);
  };

  const handleCopyMessage = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    const fullText = `To: vedantripathi05@gmail.com\nFrom: ${formData.name.trim()} (${formData.email.trim()})\n\n${formData.message.trim()}`;
    navigator.clipboard.writeText(fullText);
    setCopiedField('message');
    setTimeout(() => setCopiedField(null), 3000);
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
            Have a project, job opportunity or collaboration in mind? Reach out directly using any Option below.
          </p>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:gap-16 items-start">
          
          {/* Left Column: Direct Message Form */}
          <div className="bg-zinc-900/50 border border-zinc-800/80 rounded-3xl p-6 sm:p-8 backdrop-blur-sm shadow-xl">
            <h3 className="text-lg font-semibold text-white mb-1 flex items-center gap-2">
              <MessageSquare className="w-5 h-5 text-cyan-400" />
              Compose a Message
            </h3>
            <p className="text-xs text-zinc-400 mb-6">
              Write your note below and select your preferred sending method.
            </p>

            <form onSubmit={handleSendGmail} className="space-y-5">
              
              {/* Name field */}
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  value={formData.name}
                  onChange={(e) => {
                    setFormData({ ...formData, name: e.target.value });
                    if (errors.name) setErrors({ ...errors, name: '' });
                  }}
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

              {/* Email field */}
              <div className="relative">
                <input
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={(e) => {
                    setFormData({ ...formData, email: e.target.value });
                    if (errors.email) setErrors({ ...errors, email: '' });
                  }}
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

              {/* Message field */}
              <div className="relative">
                <textarea
                  id="message"
                  value={formData.message}
                  onChange={(e) => {
                    setFormData({ ...formData, message: e.target.value });
                    if (errors.message) setErrors({ ...errors, message: '' });
                  }}
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

              {/* Action Buttons: 2 Primary Channels */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
                
                {/* 1. Send via Gmail Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex items-center justify-center gap-2 overflow-hidden bg-gradient-to-r from-cyan-500 via-cyan-400 to-teal-400 text-zinc-950 font-bold py-3.5 px-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_32px_rgba(6,182,212,0.5)] cursor-pointer text-sm"
                  title="Open Gmail with pre-filled message"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send via Gmail</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </motion.button>

                {/* 2. Send via WhatsApp Button */}
                <motion.button
                  type="button"
                  onClick={handleSendWhatsApp}
                  whileHover={{ scale: 1.02, y: -1 }}
                  whileTap={{ scale: 0.98 }}
                  className="group relative flex items-center justify-center gap-2 overflow-hidden bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3.5 px-4 rounded-xl transition-all duration-300 shadow-[0_0_20px_rgba(16,185,129,0.25)] hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] cursor-pointer text-sm"
                  title="Chat instantly on WhatsApp"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  <span>Send via WhatsApp</span>
                  <ExternalLink className="w-3.5 h-3.5 opacity-70" />
                </motion.button>
              </div>
            </form>

            {/* Notification / Feedback Banner */}
            <AnimatePresence>
              {activeAction && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mt-4 p-4 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 rounded-xl text-xs space-y-1"
                >
                  <p className="font-semibold flex items-center gap-2 text-cyan-400">
                    <Sparkles className="w-4 h-4" />
                    Opening your message composer!
                  </p>
                  <p className="text-zinc-300">
                    Your note has been formatted and placed into the composer. Simply hit send!
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Direct Contact & Social Links */}
          <div className="space-y-4">
            
            {/* Email Direct Action Card */}
            <motion.a 
              href="https://mail.google.com/mail/?view=cm&fs=1&to=vedantripathi05@gmail.com&su=Portfolio%20Inquiry"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.01 }}
              className="surface-card group flex cursor-pointer items-center justify-between p-5 border border-zinc-800 hover:border-cyan-500/40 transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-500/20 group-hover:scale-105 transition-all">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium">Direct Email</p>
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

            {/* WhatsApp Card */}
            <motion.a 
              href="https://wa.me/918815471744?text=Hi%20Vedant,%20I%20saw%20your%20portfolio"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -3, scale: 1.01 }}
              className="surface-card group flex cursor-pointer items-center justify-between p-5 border border-zinc-800 hover:border-emerald-500/40 transition-all"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:bg-emerald-500/20 group-hover:scale-105 transition-all">
                  <WhatsAppIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-zinc-500 font-medium">WhatsApp / Chat</p>
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

            {/* Clean 2-column Social Links: LinkedIn & GitHub */}
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

            {/* Back to Top button in right-hand side empty space */}
            <div className="pt-2">
              <motion.button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group w-full flex items-center justify-center gap-2 p-3.5 bg-zinc-900/40 hover:bg-zinc-900/80 border border-zinc-800 hover:border-cyan-400/50 rounded-2xl text-zinc-400 hover:text-cyan-300 hover:shadow-[0_0_20px_rgba(6,182,212,0.15)] transition-all duration-300 cursor-pointer text-xs font-semibold"
                aria-label="Back to top"
              >
                <span>Back to Top</span>
                <ArrowUp className="w-4 h-4 transition-transform duration-300 group-hover:-translate-y-1 text-cyan-400" />
              </motion.button>
            </div>
          </div>
          
        </div>
      </motion.div>
    </section>
  );
}
