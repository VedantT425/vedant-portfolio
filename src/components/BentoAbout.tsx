"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const scannerStates = [
  "Initializing camera feed...",
  "Detecting face... match found, verifying identity",
  "Computing biometric data.... user verification in progress",
  "MATCH CONFIRMED — Vedant Tripathi (Open to network)",
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 260, damping: 20 } }
};

export default function BentoAbout() {
  const [scannerIndex, setScannerIndex] = useState(0);

  useEffect(() => {
    let timeout: NodeJS.Timeout;
    
    if (scannerIndex < scannerStates.length - 1) {
      timeout = setTimeout(() => {
        setScannerIndex((prev) => prev + 1);
      }, 2000);
    } else {
      timeout = setTimeout(() => {
        setScannerIndex(0);
      }, 4000);
    }

    return () => clearTimeout(timeout);
  }, [scannerIndex]);

  return (
    <section id="about" className="section-shell">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="flex flex-col gap-12"
      >
        <div className="text-center">
          <motion.p variants={itemVariants} className="section-kicker">A little context</motion.p>
          <motion.h2 
            variants={itemVariants}
            className="section-heading gradient-text"
          >
            About Me
          </motion.h2>
          <motion.p variants={itemVariants} className="section-intro mx-auto">
            I enjoy turning practical problems into clear, usable software—from responsive interfaces to real-time computer vision systems.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-6 md:grid-cols-2">
          {/* Card 1: Personal Bio Card with gradient left border */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="surface-card group relative flex cursor-default flex-col justify-center gap-4 overflow-hidden p-6 md:p-8"
          >
            {/* Gradient left accent bar */}
            <div className="absolute left-0 top-0 bottom-0 w-[3px] bg-gradient-to-b from-cyan-400 via-sky-400 to-emerald-400 opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="text-zinc-300 space-y-4 text-base leading-relaxed pl-2">
              <p>
                Hi, I&apos;m <span className="font-semibold text-white">Vedant Tripathi</span>, a B.Tech graduate with a strong interest in building useful software and continuously improving my engineering fundamentals.
              </p>
              <p className="text-zinc-400">
                I enjoy turning ideas into smooth, interactive user experiences with clean, responsive code. I&apos;m always open to learning new technologies and collaborating on real-world projects.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Interactive Biometric Scanner Simulator */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="surface-card relative flex cursor-default flex-col gap-4 overflow-hidden p-6"
          >
            {/* Terminal window header with breathing dots */}
            <div className="flex items-center gap-3 pb-2 border-b border-zinc-800">
              <motion.div 
                className="w-3 h-3 rounded-full bg-red-500/90"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              />
              <motion.div 
                className="w-3 h-3 rounded-full bg-yellow-500/90"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              />
              <motion.div 
                className="w-3 h-3 rounded-full bg-green-500/90"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
              />
              <span className="ml-auto text-[10px] font-mono text-zinc-600 tracking-wider">biometric.scanner.v2</span>
            </div>
            
            {/* Scanner screen */}
            <div className="flex-1 bg-black/60 rounded-xl p-4 font-mono text-sm relative overflow-hidden flex flex-col border border-zinc-800/50">
              {/* Scanning laser line — dual-color */}
              <motion.div 
                className="absolute left-0 right-0 h-[2px] z-10"
                style={{
                  background: "linear-gradient(90deg, transparent, rgba(6, 182, 212, 0.6), rgba(16, 185, 129, 0.5), transparent)",
                  boxShadow: "0 0 12px 3px rgba(6, 182, 212, 0.3)"
                }}
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />

              {/* Subtle horizontal scan lines overlay */}
              <div 
                className="absolute inset-0 pointer-events-none opacity-[0.03]"
                style={{
                  backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, rgba(255,255,255,0.1) 2px, rgba(255,255,255,0.1) 4px)",
                }}
              />
              
              <div className="flex items-center gap-2 mb-4 text-cyan-400">
                <motion.div 
                  className="w-2 h-2 rounded-full bg-green-500"
                  animate={{ opacity: [0.5, 1, 0.5], scale: [0.9, 1.1, 0.9] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                />
                <span className="text-xs tracking-widest">BIOMETRIC SCANNER</span>
              </div>
              
              <div className="flex-1 border-2 border-dashed border-cyan-500/20 rounded-lg p-4 flex items-center justify-center relative">
                <div className="text-left w-full h-full flex flex-col justify-center gap-2">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={scannerIndex}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.25 }}
                      className={cn(
                        "text-sm md:text-base",
                        scannerIndex === scannerStates.length - 1 ? "text-green-400 font-bold" : "text-zinc-400"
                      )}
                    >
                      {scannerStates[scannerIndex]}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
            
            <p className="text-[11px] text-zinc-600 text-center mt-1 tracking-wide">
              Simulated biometric scanner for demonstration purposes
            </p>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
