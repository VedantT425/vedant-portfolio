"use client";

import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowDown, CheckCircle2, AlertTriangle, ExternalLink } from "lucide-react";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";

function cn(...inputs: (string | undefined | null | false)[]) {
  return twMerge(clsx(inputs));
}

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  project: {
    title: string;
    description: string;
    techStack: string[];
    highlights: string[];
    challenges: string[];
    architecture: { step: string; detail: string }[];
    github?: string;
    live?: string;
  } | null;
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  // Prevent body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  return (
    <AnimatePresence>
      {isOpen && project && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl max-h-[85vh] overflow-y-auto bg-zinc-950/90 border border-zinc-800 rounded-2xl shadow-2xl backdrop-blur-md"
          >
            {/* Header */}
            <div className="sticky top-0 z-10 flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md">
              <h2 className="text-xl font-bold text-zinc-100">{project.title}</h2>
              <div className="flex items-center gap-3">
                {project.live && project.live !== "#" && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/25 rounded-full transition-colors"
                  >
                    <span>Live Website</span>
                    <ExternalLink size={13} />
                  </a>
                )}
                <button
                  onClick={onClose}
                  className="p-2 text-zinc-400 hover:text-zinc-100 hover:bg-zinc-800/50 rounded-full transition-colors cursor-pointer"
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Body */}
            <div className="p-6 space-y-10">
              {/* Description */}
              <div className="space-y-4">
                <p className="text-zinc-300 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.techStack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 text-xs font-medium text-cyan-300 bg-cyan-950/30 border border-cyan-800/30 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Architecture Section */}
              {project.architecture && project.architecture.length > 0 && (
                <div className="space-y-6">
                  <h3 className="text-lg font-semibold text-zinc-100 flex items-center gap-2">
                    System Architecture
                  </h3>
                  <div className="relative py-4 flex flex-col items-center">
                    {project.architecture.map((item, idx) => (
                      <div key={idx} className="flex flex-col items-center w-full max-w-md relative">
                        <motion.div
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: 0.1 * idx, duration: 0.3 }}
                          className={cn(
                            "w-full bg-zinc-900/50 border border-zinc-700/50 rounded-xl p-4 flex flex-col items-center text-center",
                            idx % 2 === 0 ? "sm:translate-x-4" : "sm:-translate-x-4"
                          )}
                        >
                          <span className="font-bold text-zinc-200">{item.step}</span>
                          <span className="text-sm text-zinc-400 mt-1">{item.detail}</span>
                        </motion.div>
                        {idx < project.architecture.length - 1 && (
                          <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.1 * idx + 0.15 }}
                            className="py-3 text-zinc-600"
                          >
                            <ArrowDown size={20} />
                          </motion.div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Highlights */}
                {project.highlights && project.highlights.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-zinc-100">
                      Technical Highlights
                    </h3>
                    <ul className="space-y-3">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2
                            size={18}
                            className="text-emerald-500 shrink-0 mt-0.5"
                          />
                          <span className="text-sm text-zinc-300">
                            {highlight}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Challenges */}
                {project.challenges && project.challenges.length > 0 && (
                  <div className="space-y-4">
                    <h3 className="text-lg font-semibold text-zinc-100">
                      Challenges Solved
                    </h3>
                    <ul className="space-y-3">
                      {project.challenges.map((challenge, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <AlertTriangle
                            size={18}
                            className="text-amber-500 shrink-0 mt-0.5"
                          />
                          <span className="text-sm text-zinc-300">
                            {challenge}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
