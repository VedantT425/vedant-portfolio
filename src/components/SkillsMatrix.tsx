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

const categoryStyles: Record<Category, { dot: string; badge: string; glowColor: string }> = {
  'Languages': { 
    dot: 'bg-cyan-400', 
    badge: 'hover:border-cyan-400/50 hover:bg-cyan-950/30 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)]',
    glowColor: 'rgba(6, 182, 212, 0.12)',
  },
  'Frontend': { 
    dot: 'bg-sky-400', 
    badge: 'hover:border-sky-400/50 hover:bg-sky-950/30 hover:shadow-[0_0_20px_rgba(14,165,233,0.25)]',
    glowColor: 'rgba(14, 165, 233, 0.12)',
  },
  'Backend & APIs': { 
    dot: 'bg-emerald-400', 
    badge: 'hover:border-emerald-400/50 hover:bg-emerald-950/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.25)]',
    glowColor: 'rgba(16, 185, 129, 0.12)',
  },
  'Databases & Cloud': { 
    dot: 'bg-blue-400', 
    badge: 'hover:border-blue-400/50 hover:bg-blue-950/30 hover:shadow-[0_0_20px_rgba(59,130,246,0.25)]',
    glowColor: 'rgba(59, 130, 246, 0.12)',
  },
  'AI & Analytics': { 
    dot: 'bg-rose-400', 
    badge: 'hover:border-rose-400/50 hover:bg-rose-950/30 hover:shadow-[0_0_20px_rgba(244,63,94,0.25)]',
    glowColor: 'rgba(244, 63, 94, 0.12)',
  },
};

export default function SkillsMatrix() {
  const [activeFilter, setActiveFilter] = useState<Category>('Languages');

  const filteredSkills = skillsData.filter(
    (skill) => skill.category === activeFilter
  );

  const skillCount = filteredSkills.length;
  const activeStyle = categoryStyles[activeFilter];

  return (
    <section id="skills" className="section-shell relative">
      {/* Category-colored ambient glow behind skills */}
      <motion.div
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full blur-[120px]"
        animate={{ backgroundColor: activeStyle.glowColor }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      />

      <div className="flex flex-col gap-10">
        <div className="text-center">
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-kicker">My toolkit</motion.p>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-heading gradient-text"
          >
            Technical Skills
          </motion.h2>
          <motion.p initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="section-intro mx-auto">
            The tools I use to design, build, ship and improve full-stack products.
          </motion.p>
        </div>

        {/* Filter Bar with count */}
        <div className="flex flex-wrap justify-center gap-2.5">
          {categories.map((cat) => {
            const count = skillsData.filter(s => s.category === cat).length;
            return (
              <motion.button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.96 }}
                className={cn(
                  "relative px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 cursor-pointer select-none",
                  activeFilter === cat 
                    ? "bg-cyan-500 text-zinc-950 shadow-[0_0_24px_rgba(6,182,212,0.4)] border border-cyan-400" 
                    : "bg-zinc-900/80 text-zinc-400 border border-zinc-800 hover:bg-zinc-800 hover:text-white hover:border-zinc-600"
                )}
              >
                {cat}
                {activeFilter === cat && (
                  <span className="ml-2 inline-flex h-5 w-5 items-center justify-center rounded-full bg-zinc-900/30 text-[11px] font-bold">
                    {count}
                  </span>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Skills Grid with staggered animation */}
        <motion.div 
          layout
          className="flex flex-wrap justify-center gap-3.5 mt-4"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => {
              const style = categoryStyles[skill.category];
              
              return (
                <motion.div
                  key={skill.name}
                  layout
                  initial={{ opacity: 0, scale: 0.85, y: 12 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.85, y: -8 }}
                  transition={{ 
                    duration: 0.3, 
                    delay: index * 0.04,
                    type: "spring",
                    stiffness: 300,
                    damping: 22
                  }}
                  whileHover={{ scale: 1.08, y: -3 }}
                  whileTap={{ scale: 0.96 }}
                  className={cn(
                    "group relative flex items-center gap-3 px-5 py-3 rounded-full bg-zinc-900/70 backdrop-blur-sm border border-zinc-800 transition-all duration-300 cursor-pointer select-none text-zinc-300 hover:text-white",
                    style.badge
                  )}
                >
                  {/* Category-colored left bar accent */}
                  <div className={cn(
                    "h-4 w-[3px] rounded-full transition-all duration-300 group-hover:h-5 group-hover:shadow-[0_0_6px]",
                    style.dot
                  )} />
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
