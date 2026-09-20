"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { clsx } from 'clsx';
import { GraduationCap, BookOpen, Award } from 'lucide-react';

const experienceData = [
  {
    role: "Full Stack Web Developer (MERN)",
    type: "Project-Based Experience",
    period: "2023 – 2024",
    description: "Built end-to-end web applications using the MERN stack. Developed modular REST APIs, implemented JWT-based authentication, optimized MongoDB queries, and delivered responsive React UIs.",
    skills: ["MongoDB", "Express.js", "React.js", "Node.js", "JWT", "REST APIs"]
  },
  {
    role: "Data Analytics & Generative AI",
    type: "Project-Based Experience",
    period: "2024",
    description: "Worked with Python-based data analytics tools (Pandas, NumPy) and Power BI for visualization. Explored practical Generative AI workflows for automated insight generation.",
    skills: ["Python", "Pandas", "NumPy", "Power BI", "Generative AI"]
  }
];

const educationData = [
  {
    degree: "B.Tech in Computer Science & Engineering",
    institution: "Shri Ram Institute of Technology",
    location: "Jabalpur, Madhya Pradesh",
    period: "2021 – 2025",
    icon: GraduationCap,
    score: ""
  },
  {
    degree: "Higher Secondary (Class XII)",
    institution: "Senior Secondary School",
    location: "Madhya Pradesh",
    period: "2020 – 2021",
    icon: BookOpen,
    score: "88%"
  },
  {
    degree: "High School (Class X)",
    institution: "High School",
    location: "Madhya Pradesh",
    period: "2018 – 2019",
    icon: Award,
    score: "60%"
  }
];

export default function ExperienceTimeline() {
  const [activeTab, setActiveTab] = useState<'experience' | 'education'>('experience');

  return (
    <section id="experience" className="section-shell max-w-5xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        <div className="mb-12 text-center">
          <p className="section-kicker">The journey so far</p>
          <h2 className="section-heading gradient-text">
            Experience & Education
          </h2>
          <p className="section-intro mx-auto">A snapshot of the projects, skills and foundations shaping my path as a developer.</p>
        </div>

        {/* Tab Switcher with sliding indicator */}
        <div className="flex justify-center mb-12">
          <div className="relative flex rounded-full border border-zinc-800 bg-zinc-900/80 p-1">
            {/* Sliding background indicator */}
            <motion.div
              className="absolute top-1 bottom-1 rounded-full bg-zinc-800 border border-cyan-500/30 shadow-[0_0_12px_rgba(6,182,212,0.15)]"
              animate={{
                left: activeTab === 'experience' ? '4px' : '50%',
                right: activeTab === 'experience' ? '50%' : '4px',
              }}
              transition={{ type: "spring", stiffness: 300, damping: 28 }}
            />
            <button
              onClick={() => setActiveTab('experience')}
              className={clsx(
                "relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer",
                activeTab === 'experience' 
                  ? "text-cyan-400" 
                  : "text-zinc-400 hover:text-white"
              )}
            >
              Experience
            </button>
            <button
              onClick={() => setActiveTab('education')}
              className={clsx(
                "relative z-10 px-6 py-2 rounded-full text-sm font-medium transition-colors duration-200 cursor-pointer",
                activeTab === 'education' 
                  ? "text-cyan-400" 
                  : "text-zinc-400 hover:text-white"
              )}
            >
              Education
            </button>
          </div>
        </div>

        {/* Timeline Content */}
        <div className="relative pl-8 md:pl-0">
          {/* Animated vertical line with gradient */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 top-0 bottom-0 w-px">
            <div className="h-full w-full bg-gradient-to-b from-cyan-400/40 via-sky-500/20 to-transparent" />
          </div>

          <AnimatePresence mode="wait">
            {activeTab === 'experience' && (
              <motion.div
                key="experience"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-12"
              >
                {experienceData.map((exp, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40, y: 10 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ type: "spring", stiffness: 220, damping: 20, delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className={clsx(
                      "relative md:w-1/2",
                      index % 2 === 0 ? "md:pr-12 md:mr-auto" : "md:pl-12 md:ml-auto"
                    )}
                  >
                    {/* Glowing timeline dot */}
                    <motion.div 
                      className="absolute -left-10 md:absolute md:top-6 md:left-auto md:right-[-6px] w-3 h-3 rounded-full bg-cyan-400 z-10 shadow-[0_0_8px_rgba(6,182,212,0.5)]"
                      style={{ [index % 2 === 0 ? "right" : "left"]: "-6px" }}
                      animate={{ boxShadow: ["0 0 6px rgba(6,182,212,0.3)", "0 0 14px rgba(6,182,212,0.6)", "0 0 6px rgba(6,182,212,0.3)"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />
                    
                    <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.1)] transition-all duration-300 group cursor-pointer">
                      <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-cyan-400 bg-cyan-400/10 rounded-full border border-cyan-400/20">
                        {exp.period}
                      </span>
                      <h3 className="text-xl font-bold text-zinc-100 group-hover:text-white transition-colors">{exp.role}</h3>
                      <p className="text-sm italic text-zinc-500 mb-4">{exp.type}</p>
                      <p className="text-zinc-400 text-sm leading-relaxed mb-6">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                           <span 
                            key={i} 
                            className="px-2.5 py-1 text-xs text-zinc-300 bg-zinc-800/80 border border-zinc-700/60 rounded-md hover:border-cyan-400/50 hover:text-white hover:bg-cyan-950/30 hover:shadow-[0_0_10px_rgba(6,182,212,0.2)] hover:-translate-y-0.5 transition-all duration-200 cursor-pointer select-none"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}

            {activeTab === 'education' && (
              <motion.div
                key="education"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="space-y-12"
              >
                {educationData.map((edu, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -40 : 40, y: 10 }}
                    whileInView={{ opacity: 1, x: 0, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ type: "spring", stiffness: 220, damping: 20, delay: index * 0.1 }}
                    whileHover={{ y: -4 }}
                    className={clsx(
                      "relative md:w-1/2",
                      index % 2 === 0 ? "md:pr-12 md:mr-auto" : "md:pl-12 md:ml-auto"
                    )}
                  >
                    {/* Glowing timeline dot */}
                    <motion.div 
                      className="absolute -left-10 md:absolute md:top-6 md:left-auto md:right-[-6px] w-3 h-3 rounded-full bg-cyan-400 z-10 shadow-[0_0_8px_rgba(6,182,212,0.5)]"
                      style={{ [index % 2 === 0 ? "right" : "left"]: "-6px" }}
                      animate={{ boxShadow: ["0 0 6px rgba(6,182,212,0.3)", "0 0 14px rgba(6,182,212,0.6)", "0 0 6px rgba(6,182,212,0.3)"] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                    />

                    <div className="bg-zinc-900/60 border border-zinc-800 rounded-2xl p-6 hover:border-cyan-400/40 hover:shadow-[0_0_25px_rgba(6,182,212,0.1)] transition-all duration-300 group cursor-pointer">
                      <span className="inline-block px-3 py-1 mb-4 text-xs font-medium text-cyan-400 bg-cyan-400/10 rounded-full border border-cyan-400/20">
                        {edu.period}
                      </span>
                      <div className="flex items-start gap-4">
                        <div className="p-3 bg-zinc-800/80 group-hover:bg-zinc-700 rounded-xl group-hover:scale-105 transition-all duration-300 group-hover:shadow-[0_0_12px_rgba(6,182,212,0.15)]">
                          <edu.icon className="w-6 h-6 text-zinc-400 group-hover:text-cyan-400 transition-colors duration-300" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-zinc-100 group-hover:text-white transition-colors">{edu.degree}</h3>
                          <p className="text-zinc-400 mt-1">{edu.institution}</p>
                          <p className="text-sm text-zinc-500 mt-1">{edu.location}</p>
                          {edu.score && (
                            <p className="text-sm font-medium text-cyan-400 mt-2">
                              Score: {edu.score}
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}
