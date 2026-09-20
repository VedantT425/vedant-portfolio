"use client";

import React, { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight, CheckCircle2, Mail, ChevronDown } from "lucide-react";

const typewriterStrings = [
  "Full-Stack Developer",
  "MERN Stack Builder",
  "Open Source Enthusiast",
];

const badges = [
  { name: "React", top: "20%", left: "9%", delay: 0, duration: 4.2 },
  { name: "Python", top: "16%", right: "13%", delay: 1.2, duration: 4.8 },
  { name: "OpenCV", bottom: "28%", left: "5%", delay: 0.5, duration: 5.1 },
  { name: "Node.js", bottom: "23%", right: "9%", delay: 2, duration: 4.5 },
  { name: "MongoDB", top: "45%", right: "4%", delay: 1.5, duration: 5.3 },
  { name: "Flask", top: "42%", left: "3%", delay: 0.8, duration: 4.7 },
];

export function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [stringIndex, setStringIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const currentString = typewriterStrings[stringIndex];
    let timer: NodeJS.Timeout;

    if (!isDeleting && displayText === currentString) {
      timer = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayText === "") {
      timer = setTimeout(() => {
        setIsDeleting(false);
        setStringIndex((previous) => (previous + 1) % typewriterStrings.length);
      }, 250);
    } else {
      timer = setTimeout(() => {
        setDisplayText((previous) =>
          isDeleting
            ? previous.slice(0, -1)
            : currentString.slice(0, previous.length + 1),
        );
      }, isDeleting ? 45 : 85);
    }

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, stringIndex]);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.14, delayChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: shouldReduceMotion ? 0 : 24 },
    show: {
      opacity: 1,
      y: 0,
      transition: { type: "spring" as const, stiffness: 260, damping: 20 },
    },
  };

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pb-16 pt-28 md:pt-24"
    >
      {/* Animated ambient gradient orbs */}
      <motion.div
        className="pointer-events-none absolute -right-32 -top-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-cyan-500/15 blur-[120px]"
        animate={shouldReduceMotion ? undefined : {
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.08, 0.95, 1],
        }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute -bottom-40 -left-32 -z-10 h-[32rem] w-[32rem] rounded-full bg-sky-500/12 blur-[140px]"
        animate={shouldReduceMotion ? undefined : {
          x: [0, -30, 25, 0],
          y: [0, 20, -15, 0],
          scale: [1, 0.96, 1.06, 1],
        }}
        transition={{ duration: 26, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="pointer-events-none absolute left-1/3 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-emerald-500/8 blur-[100px]"
        animate={shouldReduceMotion ? undefined : {
          x: [0, 20, -15, 0],
          y: [0, -20, 25, 0],
        }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Subtle dot grid */}
      <div className="pointer-events-none absolute inset-0 -z-10 dot-grid-bg opacity-40" />

      {/* Floating tech badges */}
      {badges.map((badge) => (
        <motion.div
          key={badge.name}
          aria-hidden="true"
          className="absolute z-10 hidden select-none items-center justify-center rounded-full border border-white/[0.08] bg-zinc-900/60 backdrop-blur-md px-4 py-2 text-xs font-semibold text-gray-400 shadow-lg transition-all duration-300 hover:border-cyan-400/50 hover:bg-cyan-950/30 hover:text-cyan-300 hover:shadow-[0_0_24px_rgba(6,182,212,0.3)] md:flex"
          style={{
            top: badge.top,
            bottom: badge.bottom,
            left: badge.left,
            right: badge.right,
          }}
          animate={
            shouldReduceMotion
              ? undefined
              : { y: [0, -8, 0], opacity: [0.6, 0.9, 0.6] }
          }
          transition={{
            repeat: Infinity,
            duration: badge.duration,
            delay: badge.delay,
            ease: "easeInOut",
          }}
          whileHover={{ scale: 1.12, y: -6 }}
        >
          {badge.name}
        </motion.div>
      ))}

      {/* Main content */}
      <motion.div
        className="relative z-10 mx-auto flex w-full max-w-4xl flex-col items-center text-center"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {/* Open to opportunities badge */}
        <motion.div
          variants={itemVariants}
          whileHover={{ scale: 1.04 }}
          className="mb-8 inline-flex cursor-default select-none items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-4 py-1.5 transition-all duration-300 hover:border-emerald-500/40 hover:bg-emerald-500/15 hover:shadow-[0_0_20px_rgba(16,185,129,0.15)]"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-emerald-500" />
          </span>
          <span className="text-xs font-medium tracking-wide text-emerald-400">
            Open to opportunities
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          variants={itemVariants}
          className="mb-6 text-5xl font-extrabold leading-tight tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          Hey, I&apos;m{" "}
          <span className="gradient-text inline-block">Vedant!</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          variants={itemVariants}
          className="mx-auto mb-7 max-w-2xl text-base font-light leading-relaxed text-zinc-400 sm:text-lg"
        >
          I build reliable, high-performance applications with modern web
          technologies and a curiosity for intelligent systems.
        </motion.p>

        {/* Typewriter */}
        <motion.div
          variants={itemVariants}
          className="mb-10 flex h-8 items-center justify-center font-mono text-lg text-cyan-300 sm:text-xl"
          aria-live="polite"
        >
          <span className="mr-2 text-zinc-600">&gt;</span>
          <span>{displayText}</span>
          <span className="ml-1 inline-block h-6 w-[3px] rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.6)] animate-pulse" />
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={itemVariants}
          className="flex w-full flex-col items-center justify-center gap-4 sm:w-auto sm:flex-row"
        >
          {/* Primary CTA with shimmer */}
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.96 }}
            onClick={() => scrollToSection("projects")}
            className="group relative flex w-full cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-cyan-500 via-cyan-400 to-teal-400 px-8 py-3.5 font-bold text-slate-900 shadow-[0_0_24px_rgba(6,182,212,0.35)] transition-all duration-300 hover:shadow-[0_0_40px_rgba(6,182,212,0.5)] sm:w-auto"
          >
            {/* Shimmer sweep */}
            <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
            <span className="relative z-10 flex items-center gap-2">
              View my work
              <ArrowRight
                size={18}
                className="transition-transform duration-300 group-hover:translate-x-1.5"
              />
            </span>
          </motion.button>

          {/* Secondary CTA */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => scrollToSection("contact")}
            className="group relative flex w-full cursor-pointer items-center justify-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-6 py-3.5 font-medium text-gray-400 transition-all duration-300 hover:border-zinc-600 hover:text-white hover:bg-zinc-800/60 sm:w-auto"
          >
            <Mail size={18} />
            Let&apos;s connect
          </motion.button>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          variants={itemVariants}
          className="mt-9 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs text-zinc-500"
        >
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={14} className="text-emerald-400/70" />
            Clean, scalable code
          </span>
          <span className="hidden h-1 w-1 rounded-full bg-zinc-700 sm:block" />
          <span className="flex items-center gap-1.5">
            <CheckCircle2 size={14} className="text-emerald-400/70" />
            Always learning
          </span>
        </motion.div>
      </motion.div>

      {/* Scroll indicator with bounce */}
      <motion.div 
        className="absolute bottom-7 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-1 md:flex"
        animate={{ y: [0, 6, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <span className="text-[10px] uppercase tracking-[0.25em] text-zinc-600">
          Scroll to explore
        </span>
        <ChevronDown size={16} className="text-cyan-400/50" />
      </motion.div>
    </section>
  );
}
