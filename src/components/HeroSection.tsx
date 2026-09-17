"use client";

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight, Mail } from 'lucide-react';

const typewriterStrings = [
  "Full-Stack Developer(MERN)",
  "Ready To Gain Knowledge And Contribute To Open Source",
  "Grateful To Learn New Tech Stacks"
];

const badges = [
  { name: "React", top: "20%", left: "10%", delay: 0 },
  { name: "Python", top: "15%", right: "15%", delay: 1.2 },
  { name: "OpenCV", bottom: "30%", left: "5%", delay: 0.5 },
  { name: "Node.js", bottom: "25%", right: "10%", delay: 2 },
  { name: "MongoDB", top: "45%", right: "5%", delay: 1.5 },
  { name: "Flask", top: "40%", left: "2%", delay: 0.8 }
];

export function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timer: NodeJS.Timeout;
    const currentString = typewriterStrings[stringIndex];

    if (!isDeleting && displayText === currentString) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      setIsDeleting(false);
      setStringIndex((prev) => (prev + 1) % typewriterStrings.length);
    } else {
      timer = setTimeout(() => {
        setDisplayText((prev) => 
          isDeleting ? prev.slice(0, -1) : currentString.slice(0, prev.length + 1)
        );
      }, isDeleting ? 50 : 100);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, stringIndex]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.3 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0, transition: { type: "spring" as const, stiffness: 300, damping: 24 } }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden dot-grid-bg px-6 pt-20">
      {/* Background Gradients */}
      <div className="absolute top-[-10%] right-[-5%] w-96 h-96 bg-cyan-500/20 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute bottom-[-10%] left-[-5%] w-[30rem] h-[30rem] bg-violet-600/20 rounded-full blur-[120px] -z-10 pointer-events-none" />

      {/* Floating Badges */}
      {badges.map((badge, i) => (
        <motion.div
          key={i}
          className="absolute hidden md:flex items-center justify-center glass px-4 py-2 rounded-full border border-white/10 text-xs font-semibold text-gray-300 shadow-xl z-10 cursor-pointer hover:border-cyan-400 hover:text-cyan-300 hover:bg-cyan-950/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.4)] transition-all duration-200 select-none"
          style={{ top: badge.top, bottom: badge.bottom, left: badge.left, right: badge.right }}
          animate={{ y: [0, -10, 0], opacity: [0.75, 1, 0.75] }}
          transition={{ repeat: Infinity, duration: 3 + Math.random() * 2, delay: badge.delay, ease: "easeInOut" }}
          whileHover={{ scale: 1.15, y: -6 }}
        >
          {badge.name}
        </motion.div>
      ))}

      <motion.div 
        className="max-w-4xl mx-auto w-full flex flex-col items-center text-center z-10"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Status Beacon */}
        <motion.div 
          variants={itemVariants} 
          whileHover={{ scale: 1.05 }}
          className="flex items-center space-x-2 bg-emerald-500/10 border border-emerald-500/20 hover:border-emerald-500/40 hover:bg-emerald-500/20 rounded-full px-4 py-1.5 mb-8 cursor-pointer transition-all duration-200 select-none"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-500"></span>
          </span>
          <span className="text-xs font-medium text-emerald-400 tracking-wide">Available for Opportunities</span>
        </motion.div>

        {/* Main Headline */}
        <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          <span className="block text-white">Hey, I'm Vedant!</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto mb-8 font-light leading-relaxed">
          I build high-performance applications bridging modern web technologies with intelligent data systems.
        </motion.p>

        {/* Typewriter */}
        <motion.div variants={itemVariants} className="h-8 mb-12 flex items-center justify-center text-xl md:text-2xl font-mono text-cyan-300">
          <span>{displayText}</span>
          <span className="w-0.5 h-6 bg-cyan-400 ml-1 animate-pulse"></span>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
          <motion.button
            whileHover={{ scale: 1.06, y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('projects')}
            className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-900 font-bold shadow-[0_0_20px_rgba(6,182,212,0.4)] hover:shadow-[0_0_30px_rgba(6,182,212,0.6)] transition-all flex items-center justify-center gap-2 group cursor-pointer"
          >
            Explore Projects
            <ArrowRight size={18} className="group-hover:translate-x-1.5 transition-transform" />
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection('contact')}
            className="w-full sm:w-auto px-6 py-3.5 text-gray-400 hover:text-white font-medium transition-colors flex items-center justify-center gap-2 relative group"
          >
            <Mail size={18} />
            Get In Touch
            <span className="absolute bottom-2 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-cyan-400 group-hover:w-1/2 transition-all duration-300" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
}
