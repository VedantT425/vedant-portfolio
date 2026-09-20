"use client";

import { motion } from 'framer-motion';
import { ArrowUp } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <motion.footer 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="mt-12 px-6 py-8"
    >
      {/* Gradient top border */}
      <div className="h-px w-full bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-8" />

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <p className="text-zinc-400 text-sm text-center md:text-left">
          © {new Date().getFullYear()} Vedant Tripathi. Crafted with precision.
        </p>

        <p className="text-zinc-600 text-sm text-center">
          Built with Next.js, Tailwind CSS & Framer Motion
        </p>

        <motion.button
          onClick={scrollToTop}
          whileHover={{ scale: 1.12, y: -3 }}
          whileTap={{ scale: 0.9 }}
          className="group p-3 bg-zinc-900 border border-zinc-800 rounded-full text-zinc-400 hover:text-cyan-400 hover:border-cyan-400/50 hover:shadow-[0_0_18px_rgba(6,182,212,0.3)] transition-all duration-300 cursor-pointer"
          aria-label="Back to top"
        >
          <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
        </motion.button>
        
      </div>
    </motion.footer>
  );
}
