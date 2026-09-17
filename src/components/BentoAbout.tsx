"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
// BentoAbout component
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

const scannerStates = [
  "Initializing camera feed...",
  "Detecting face... match found, verifying identity",
  "Computing biometric data.... user verification in progess",
  "✓ MATCH CONFIRMED — Vedant Tripathi (Open to network)",
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
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
    <section id="about" className="container mx-auto py-20 px-4 sm:px-6">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="flex flex-col gap-12"
      >
        <motion.h2 
          variants={itemVariants}
          className="text-4xl md:text-5xl font-bold gradient-text text-center"
        >
          About Me
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          {/* Card 1: Personal Bio Card */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="rounded-2xl p-6 md:p-8 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 flex flex-col justify-center gap-4 group cursor-default"
          >
            <div className="text-zinc-300 space-y-4 text-base leading-relaxed">
              <p>
                Hi, I'm <span className="text-white font-semibold">Vedant Tripathi</span>, a B.Tech Graduate Student From Shriram College Institute of Technology with a strong interest To Keep Enhancing My Skills In Software Development.
              </p>
              <p className="text-zinc-400">
                Improving logic building for placements. And I enjoy turning ideas into smooth, interactive user experiences By Tech skills using clean and responsive code but I'm always open to learning new technologies and collaborating on real-world projects that's give strength to the Real World Task And Gain Experience.
              </p>
            </div>
          </motion.div>

          {/* Card 2: Interactive Biometric Scanner Simulator */}
          <motion.div 
            variants={itemVariants}
            whileHover={{ y: -4 }}
            className="rounded-2xl p-6 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 hover:border-cyan-400/60 hover:shadow-[0_0_30px_rgba(6,182,212,0.15)] transition-all duration-300 flex flex-col gap-4 overflow-hidden relative cursor-default"
          >
            <div className="flex items-center gap-3 pb-2 border-b border-zinc-800">
              <div className="w-3 h-3 rounded-full bg-red-500" />
              <div className="w-3 h-3 rounded-full bg-yellow-500" />
              <div className="w-3 h-3 rounded-full bg-green-500" />
            </div>
            
            <div className="flex-1 bg-black/60 rounded-xl p-4 font-mono text-sm relative overflow-hidden flex flex-col border border-zinc-800/50">
              <motion.div 
                className="absolute left-0 right-0 h-[2px] bg-cyan-500/50 shadow-[0_0_8px_2px_rgba(6,182,212,0.5)] z-10"
                animate={{ top: ["0%", "100%", "0%"] }}
                transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              />
              
              <div className="flex items-center gap-2 mb-4 text-cyan-400">
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                <span>BIOMETRIC SCANNER</span>
              </div>
              
              <div className="flex-1 border-2 border-dashed border-cyan-500/30 rounded-lg p-4 flex items-center justify-center relative">
                <div className="text-left w-full h-full flex flex-col justify-center gap-2">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={scannerIndex}
                      initial={{ opacity: 0, y: 5 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -5 }}
                      transition={{ duration: 0.2 }}
                      className={cn(
                        "text-sm md:text-base",
                        scannerIndex === scannerStates.length - 1 ? "text-green-400 font-bold" : "text-zinc-300"
                      )}
                    >
                      {scannerStates[scannerIndex]}
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>
            </div>
            
            <p className="text-xs text-zinc-500 text-center mt-2">
              Simulated biometric scanner for demonstration purposes.
            </p>
          </motion.div>


        </div>
      </motion.div>
    </section>
  );
}
