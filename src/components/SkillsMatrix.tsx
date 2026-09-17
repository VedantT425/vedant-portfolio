"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

type Category = 'Languages' | 'Frontend' | 'Backend & APIs' | 'Databases & Cloud' | 'AI & Analytics';

const categories: Category[] = [
  'Languages', 'Frontend', 'Backend & APIs', 'Databases & Cloud', 'AI & Analytics'
];

interface Skill {
  name: string;
  category: Category;
}

const skillsData: Skill[] = [
  // Languages
  { name: 'Python', category: 'Languages' },
  { name: 'JavaScript', category: 'Languages' },
  { name: 'TypeScript', category: 'Languages' },
  { name: 'C', category: 'Languages' },
  { name: 'SQL', category: 'Languages' },
  { name: 'HTML5', category: 'Languages' },
  { name: 'CSS3', category: 'Languages' },
  
  // Frontend
  { name: 'React.js', category: 'Frontend' },
  { name: 'Next.js', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Frontend' },
  { name: 'Bootstrap', category: 'Frontend' },
  { name: 'EJS', category: 'Frontend' },
  { name: 'Responsive Design', category: 'Frontend' },
  
  // Backend & APIs
  { name: 'Node.js', category: 'Backend & APIs' },
  { name: 'Express.js', category: 'Backend & APIs' },
  { name: 'Flask', category: 'Backend & APIs' },
  { name: 'REST APIs', category: 'Backend & APIs' },
  { name: 'JWT Authentication', category: 'Backend & APIs' },
  { name: 'Gunicorn', category: 'Backend & APIs' },
  
  // Databases & Cloud
  { name: 'MongoDB', category: 'Databases & Cloud' },
  { name: 'SQLite', category: 'Databases & Cloud' },
  { name: 'MySQL', category: 'Databases & Cloud' },
  { name: 'Render', category: 'Databases & Cloud' },
  { name: 'Vercel', category: 'Databases & Cloud' },
  { name: 'Git', category: 'Databases & Cloud' },
  { name: 'GitHub', category: 'Databases & Cloud' },
  
  // AI & Analytics
  { name: 'OpenCV', category: 'AI & Analytics' },
  { name: 'dlib', category: 'AI & Analytics' },
  { name: 'face_recognition', category: 'AI & Analytics' },
  { name: 'NumPy', category: 'AI & Analytics' },
  { name: 'Pandas', category: 'AI & Analytics' },
  { name: 'Power BI', category: 'AI & Analytics' },
  { name: 'Chart.js', category: 'AI & Analytics' },
  { name: 'Generative AI', category: 'AI & Analytics' },
];

const categoryStyles: Record<Category, { dot: string, badge: string }> = {
  'Languages': { 
    dot: 'bg-cyan-400 group-hover:scale-125 group-hover:shadow-[0_0_10px_#22d3ee]', 
    badge: 'hover:border-cyan-400 hover:bg-cyan-950/40 hover:shadow-[0_0_20px_rgba(6,182,212,0.35)] text-zinc-300 hover:text-white' 
  },
  'Frontend': { 
    dot: 'bg-violet-400 group-hover:scale-125 group-hover:shadow-[0_0_10px_#a78bfa]', 
    badge: 'hover:border-violet-400 hover:bg-violet-950/40 hover:shadow-[0_0_20px_rgba(139,92,246,0.35)] text-zinc-300 hover:text-white' 
  },
  'Backend & APIs': { 
    dot: 'bg-emerald-400 group-hover:scale-125 group-hover:shadow-[0_0_10px_#34d399]', 
    badge: 'hover:border-emerald-400 hover:bg-emerald-950/40 hover:shadow-[0_0_20px_rgba(16,185,129,0.35)] text-zinc-300 hover:text-white' 
  },
  'Databases & Cloud': { 
    dot: 'bg-blue-400 group-hover:scale-125 group-hover:shadow-[0_0_10px_#60a5fa]', 
    badge: 'hover:border-blue-400 hover:bg-blue-950/40 hover:shadow-[0_0_20px_rgba(59,130,246,0.35)] text-zinc-300 hover:text-white' 
  },
  'AI & Analytics': { 
    dot: 'bg-rose-400 group-hover:scale-125 group-hover:shadow-[0_0_10px_#fb7185]', 
    badge: 'hover:border-rose-400 hover:bg-rose-950/40 hover:shadow-[0_0_20px_rgba(244,63,94,0.35)] text-zinc-300 hover:text-white' 
  },
};

export default function SkillsMatrix() {
  const [activeFilter, setActiveFilter] = useState<Category>('Languages');

  const filteredSkills = skillsData.filter(
    (skill) => skill.category === activeFilter
  );

  return (
    <section id="skills" className="container mx-auto py-20 px-4 sm:px-6">
      <div className="flex flex-col gap-10">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-bold gradient-text text-center"
        >
          Technical Requirement
        </motion.h2>

        {/* Filter Bar */}
        <div className="flex flex-wrap justify-center gap-3">
          {categories.map((cat) => (
            <motion.button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              whileHover={{ scale: 1.06, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                "px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 cursor-pointer select-none",
                activeFilter === cat 
                  ? "bg-cyan-500 text-zinc-950 shadow-[0_0_20px_rgba(6,182,212,0.5)] border border-cyan-400" 
                  : "bg-zinc-900/90 text-zinc-300 border border-zinc-800 hover:bg-zinc-800 hover:text-white hover:border-zinc-600 hover:shadow-[0_0_12px_rgba(255,255,255,0.08)]"
              )}
            >
              {cat}
            </motion.button>
          ))}
        </div>

        {/* Skills Grid */}
        <motion.div 
          layout
          className="flex flex-wrap justify-center gap-4 mt-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill) => {
              const style = categoryStyles[skill.category];
              
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 0.25 }}
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  className={cn(
                    "group relative flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 transition-all duration-200 cursor-pointer select-none",
                    style.badge
                  )}
                >
                  <div className={cn("w-2.5 h-2.5 rounded-full transition-all duration-200", style.dot)} />
                  <span className="text-sm font-medium tracking-wide transition-colors duration-200">{skill.name}</span>
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
