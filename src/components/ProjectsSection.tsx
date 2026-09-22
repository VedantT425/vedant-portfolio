"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ExternalLink, 
  Eye, 
  Video, 
  Camera, 
  BarChart3, 
  ShieldCheck, 
  Clock, 
  Sparkles 
} from "lucide-react";
import { ProjectModal } from "./ProjectModal";

const flagshipProject = {
  id: 1,
  title: "Vedant FC Attendance System",
  subtitle: "Autonomous Real-Time Biometric Attendance, 3-Shot Enrollment & Analytics Platform",
  year: "2024",
  status: "Have a look",
  description: "A production-grade contactless biometric attendance system built with Python, OpenCV, dlib, and Flask. Streams real-time camera feed to perform sub-second face verification (< 500ms). Automatically logs Check-In on first arrival and Check-Out on exit with active anti-spoofing protection, instant 3-shot webcam face registration, and an interactive Chart.js analytics dashboard with automated CSV audit exports.",
  techStack: [
    "Python 3.10+", 
    "Flask 3.0", 
    "OpenCV", 
    "dlib HOG", 
    "128-d Embeddings", 
    "WebRTC", 
    "SQLite3", 
    "Chart.js 4", 
    "Gunicorn WSGI", 
    "Render Cloud"
  ],
  highlights: [
    "Live Attendance Camera Feed: Real-time video streaming with dynamic face bounding boxes and confidence score overlay",
    "Smart Check-In & Check-Out: AI automatically marks Check-In on arrival and Check-Out on departure once per person/day",
    "Active Anti-Spoofing Protection: Guard against static photo spoofing attempts with live face landmark verification",
    "Interactive 3-Shot Registration: Multi-angle face enrollment pipeline (Front, Left 15°, Right 15°) generating 128-d vector embeddings",
    "Interactive Analytics Dashboard: Real-time Present vs. Absent ratios, 30-day historical trend graphs, and instant CSV audit exports",
    "Duplicate Attendance Prevention: Robust SQLite UNIQUE constraint architecture preventing redundant check-in records"
  ],
  challenges: [
    "Compensating for ambient lighting shifts across diverse campus and classroom environments",
    "Optimizing recognition frequency (running inference every N frames) to maintain smooth 30 FPS video streaming without CPU starvation",
    "Preventing memory leakage during long-running browser attendance video stream sessions",
    "Overcoming facial pose orientation variances using a synchronized 3-shot multi-angle capture pipeline"
  ],
  architecture: [
    { step: "Webcam Video Stream", detail: "Browser captures real-time video feed via HTML5 & WebRTC" },
    { step: "Frame Preprocessing", detail: "OpenCV processes incoming frames with optimized FPS throttling" },
    { step: "dlib HOG Face Detection", detail: "Localizes facial bounding boxes and 68 facial landmark coordinates" },
    { step: "128-d Vector Extraction", detail: "Deep metric network extracts high-dimensional biometric facial embeddings" },
    { step: "Euclidean Distance Matcher", detail: "Compares face vectors against stored profiles with 0.5 tolerance threshold" },
    { step: "SQLite ACID Storage", detail: "Logs timestamped attendance with UNIQUE constraint duplicate protection" },
    { step: "Chart.js Analytics Suite", detail: "Renders real-time attendance ratios, 30-day trends & single-day/full-history CSV audit exports" }
  ],
  github: "https://github.com/VedantT425",
  live: "https://face-attendance-system-nuu3.onrender.com",
  loginUrl: "https://face-attendance-system-nuu3.onrender.com/login"
};

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState<typeof flagshipProject | null>(null);
  const [activeTab, setActiveTab] = useState<"live" | "register" | "dashboard">("live");

  return (
    <section id="projects" className="section-shell relative z-10 max-w-6xl">
      <div className="mb-12">
        <p className="section-kicker">Selected work</p>
        <h2 className="section-heading gradient-text">Featured Project</h2>
        <p className="section-intro">
          A production-focused computer vision platform that combines real-time recognition, secure data handling and useful analytics.
        </p>
      </div>
        

        {/* Master Project Showcase Card */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ type: "spring", stiffness: 200, damping: 22 }}
          className="surface-card relative overflow-hidden rounded-3xl p-6 shadow-2xl md:p-10"
        >
          {/* Subtle Ambient Radial Gradients */}
          <div className="absolute -top-32 -right-32 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -left-32 w-80 h-80 bg-emerald-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Top Status Bar */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b border-zinc-800/80">
            <div className="flex flex-wrap items-center gap-3">
              <span className="px-3.5 py-1 text-xs font-semibold bg-emerald-500/15 text-emerald-400 border border-emerald-500/30 rounded-full flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60"></span>
                  <span className="absolute inline-flex h-[150%] w-[150%] -left-[25%] -top-[25%] animate-ping rounded-full bg-emerald-400/20" style={{ animationDuration: '2s' }}></span>
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400"></span>
                </span>
                <span>{flagshipProject.status}</span>
                <span className="text-sm">{"\u{1F447}"}</span>
              </span>
            </div>
          </div>

          {/* Project Title & Narrative */}
          <div className="pt-8 pb-8">
            <h3 className="text-3xl md:text-4xl font-extrabold text-zinc-100 tracking-tight">
              {flagshipProject.title}
            </h3>
            <p className="text-cyan-400 font-medium text-base md:text-lg mt-1">
              {flagshipProject.subtitle}
            </p>
            <p className="text-zinc-300 mt-4 text-base leading-relaxed max-w-4xl">
              {flagshipProject.description}
            </p>
          </div>


          {/* Interactive Feature Explorer (Live Feed, 3-Shot, Dashboard, Architecture) */}
          <div className="my-6">
            <div className="flex items-center justify-between flex-wrap gap-2 border-b border-zinc-800 pb-3">
              <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
                <Sparkles size={13} className="text-cyan-400" />
                <span>System Modules Explorer</span>
              </span>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveTab("live")}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer select-none ${
                    activeTab === "live"
                      ? "bg-cyan-500 text-zinc-950 font-semibold shadow-md shadow-cyan-500/30 scale-105"
                      : "bg-zinc-800/60 text-zinc-400 hover:text-white hover:bg-zinc-750 hover:border-zinc-600 border border-transparent hover:-translate-y-0.5"
                  }`}
                >
                  <Video size={13} />
                  <span>1. Live Attendance Feed</span>
                </button>
                <button
                  onClick={() => setActiveTab("register")}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer select-none ${
                    activeTab === "register"
                      ? "bg-cyan-500 text-zinc-950 font-semibold shadow-md shadow-cyan-500/30 scale-105"
                      : "bg-zinc-800/60 text-zinc-400 hover:text-white hover:bg-zinc-750 hover:border-zinc-600 border border-transparent hover:-translate-y-0.5"
                  }`}
                >
                  <Camera size={13} />
                  <span>2. 3-Shot Enrollment</span>
                </button>
                <button
                  onClick={() => setActiveTab("dashboard")}
                  className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-medium transition-all cursor-pointer select-none ${
                    activeTab === "dashboard"
                      ? "bg-cyan-500 text-zinc-950 font-semibold shadow-md shadow-cyan-500/30 scale-105"
                      : "bg-zinc-800/60 text-zinc-400 hover:text-white hover:bg-zinc-750 hover:border-zinc-600 border border-transparent hover:-translate-y-0.5"
                  }`}
                >
                  <BarChart3 size={13} />
                  <span>3. Analytics Dashboard</span>
                </button>
              </div>
            </div>

            {/* Tab Panels */}
            <div className="mt-4 bg-zinc-950/80 border border-zinc-800 rounded-2xl p-4 md:p-6 min-h-[310px] flex flex-col justify-center">
              <AnimatePresence mode="wait">
                
                {/* TAB 1: Live Attendance */}
                {activeTab === "live" && (
                  <motion.div
                    key="live"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center"
                  >
                    {/* Simulated Camera Viewport */}
                    <div className="lg:col-span-7 bg-zinc-900 border border-zinc-800 rounded-xl p-4 relative overflow-hidden">
                      <div className="flex items-center justify-between pb-3 border-b border-zinc-800 text-xs">
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-red-500 animate-ping"></span>
                          <span className="font-mono text-zinc-300 font-semibold">LIVE • /video_feed</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 font-mono text-[11px] border border-emerald-500/20 flex items-center gap-1">
                            <ShieldCheck size={11} />
                            <span>Anti-Spoofing: ACTIVE</span>
                          </span>
                          <span className="px-2 py-0.5 rounded bg-cyan-500/10 text-cyan-400 font-mono text-[11px]">
                            30 FPS
                          </span>
                        </div>
                      </div>

                      {/* Video Area with viewfinder corners */}
                      <div className="relative h-48 sm:h-56 bg-zinc-950/90 rounded-lg my-3 flex items-center justify-center overflow-hidden border border-zinc-800/60">
                        {/* Viewfinder corner brackets */}
                        <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-cyan-400/40 rounded-tl pointer-events-none" />
                        <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-cyan-400/40 rounded-tr pointer-events-none" />
                        <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-cyan-400/40 rounded-bl pointer-events-none" />
                        <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-cyan-400/40 rounded-br pointer-events-none" />
                        {/* Timestamp overlay */}
                        <span className="absolute top-3 right-8 text-[9px] font-mono text-cyan-400/50 pointer-events-none">REC 00:03:42</span>
                        <div className="absolute inset-0 dot-grid-bg opacity-20 pointer-events-none" />
                        <div className="absolute inset-x-0 h-0.5 bg-cyan-400/30 animate-[scan-line_3s_ease-in-out_infinite]" />

                        {/* Detected Bounding Box */}
                        <div className="relative border-2 border-emerald-400 rounded-lg p-6 flex flex-col items-center justify-center bg-emerald-500/5 shadow-[0_0_20px_rgba(16,185,129,0.2)]">
                          <span className="text-[10px] font-mono uppercase bg-emerald-500 text-zinc-950 font-bold px-1.5 py-0.5 rounded absolute -top-3 left-2">
                            99.4% Match
                          </span>
                          <div className="w-16 h-16 rounded-full border-2 border-dashed border-emerald-400/80 flex items-center justify-center">
                            <span className="text-emerald-400 text-xs font-mono font-bold">128-d</span>
                          </div>
                          <span className="text-zinc-100 font-mono text-xs font-bold mt-2">
                            Vedant Tripathi
                          </span>
                          <span className="text-emerald-400 font-mono text-[11px]">
                            Attendance Recorded
                          </span>
                        </div>
                      </div>

                      <div className="text-[11px] text-zinc-400 flex flex-wrap items-center justify-between gap-2">
                        <span>Recognition Latency: 412ms</span>
                        <span className="text-emerald-400 font-medium">Automatic Check-In on Arrival • Check-Out on Exit</span>
                      </div>
                    </div>

                    {/* Right: Real-Time Attendance Log */}
                    <div className="lg:col-span-5 space-y-3">
                      <div className="flex items-center justify-between text-xs font-semibold text-zinc-400">
                        <span className="flex items-center gap-1.5">
                          <Clock size={13} className="text-cyan-400" />
                          <span>Real-Time Attendance Log</span>
                        </span>
                        <span className="text-emerald-400 font-mono text-[11px]">SQLite ACID: Guarded</span>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="p-3 bg-zinc-900/90 border border-emerald-500/30 rounded-xl flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold text-xs">
                              VT
                            </div>
                            <div>
                              <p className="font-semibold text-zinc-200">Vedant Tripathi</p>
                              <p className="text-[11px] text-zinc-400">Check-In • CS Dept</p>
                            </div>
                          </div>
                          <span className="font-mono text-emerald-400 font-medium text-[11px]">09:14:22 AM</span>
                        </div>

                        <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-xl flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-full bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold text-xs">
                              RS
                            </div>
                            <div>
                              <p className="font-semibold text-zinc-300">Rahul Sharma</p>
                              <p className="text-[11px] text-zinc-500">Check-In • CS Dept</p>
                            </div>
                          </div>
                          <span className="font-mono text-zinc-400 font-medium text-[11px]">09:10:05 AM</span>
                        </div>

                        <div className="p-3 bg-zinc-900/50 border border-zinc-800 rounded-xl flex items-center justify-between text-xs">
                          <div className="flex items-center gap-2.5">
                            <div className="w-7 h-7 rounded-full bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold text-xs">
                              AP
                            </div>
                            <div>
                              <p className="font-semibold text-zinc-300">Ananya Patel</p>
                              <p className="text-[11px] text-zinc-500">Check-Out • CS Dept</p>
                            </div>
                          </div>
                          <span className="font-mono text-zinc-400 font-medium text-[11px]">09:05:41 AM</span>
                        </div>
                      </div>

                      <p className="text-[11px] text-zinc-500 italic text-center pt-1">
                        Prevents duplicate attendance records via SQLite UNIQUE constraints.
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* TAB 2: 3-Shot Enrollment */}
                {activeTab === "register" && (
                  <motion.div
                    key="register"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-3">
                      <div>
                        <h4 className="text-sm font-bold text-zinc-100 flex items-center gap-2">
                          <Camera size={16} className="text-cyan-400" />
                          Webcam-based 3-Shot Face Enrollment Pipeline
                        </h4>
                        <p className="text-xs text-zinc-400 mt-0.5">
                          Captures 3 multi-angle frames to generate a robust 128-dimensional composite facial encoding.
                        </p>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20 w-fit">
                        /register
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                      <div className="bg-zinc-900/90 border border-cyan-500/30 rounded-xl p-4 text-center">
                        <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 mx-auto flex items-center justify-center font-bold text-sm mb-3">
                          1
                        </div>
                        <p className="text-xs font-bold text-zinc-200">Shot 1: Frontal</p>
                        <p className="text-[11px] text-zinc-400 mt-1">Direct forward gaze, baseline feature vector</p>
                        <span className="inline-block mt-3 text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded">
                          ✓ Captured
                        </span>
                      </div>

                      <div className="bg-zinc-900/90 border border-cyan-500/30 rounded-xl p-4 text-center">
                        <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 mx-auto flex items-center justify-center font-bold text-sm mb-3">
                          2
                        </div>
                        <p className="text-xs font-bold text-zinc-200">Shot 2: Left 15°</p>
                        <p className="text-[11px] text-zinc-400 mt-1">Slight horizontal tilt for yaw tolerance</p>
                        <span className="inline-block mt-3 text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded">
                          ✓ Captured
                        </span>
                      </div>

                      <div className="bg-zinc-900/90 border border-cyan-500/30 rounded-xl p-4 text-center">
                        <div className="w-12 h-12 rounded-full bg-cyan-500/10 border border-cyan-500/40 text-cyan-400 mx-auto flex items-center justify-center font-bold text-sm mb-3">
                          3
                        </div>
                        <p className="text-xs font-bold text-zinc-200">Shot 3: Right 15°</p>
                        <p className="text-[11px] text-zinc-400 mt-1">Right profile tilt for invariant recognition</p>
                        <span className="inline-block mt-3 text-[10px] text-emerald-400 font-mono bg-emerald-500/10 px-2 py-0.5 rounded">
                          ✓ Captured
                        </span>
                      </div>
                    </div>

                    <div className="p-3 bg-zinc-900/40 border border-zinc-800 rounded-xl flex items-center justify-between text-xs text-zinc-300">
                      <span>Vector Generation: 128-d HOG dlib model</span>
                      <span className="text-cyan-400 font-mono">Output: Pickled & SQLite Indexed</span>
                    </div>
                  </motion.div>
                )}

                {/* TAB 3: Analytics Dashboard */}
                {activeTab === "dashboard" && (
                  <motion.div
                    key="dashboard"
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -8 }}
                    transition={{ duration: 0.25 }}
                    className="space-y-4"
                  >
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-zinc-800 pb-3">
                      <div>
                        <h4 className="text-sm font-bold text-zinc-100 flex items-center gap-2">
                          <BarChart3 size={16} className="text-cyan-400" />
                          Real-Time Attendance Analytics & CSV Audit Suite
                        </h4>
                        <p className="text-xs text-zinc-400 mt-0.5">
                          Built with Chart.js 4 and Pandas for daily attendance audits and 30-day trends.
                        </p>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-cyan-500/10 text-cyan-400 text-xs font-mono border border-cyan-500/20 w-fit">
                        /dashboard
                      </span>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-1">
                      <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4">
                        <p className="text-xs text-zinc-400">Today&apos;s Present Ratio</p>
                        <p className="text-2xl font-bold text-emerald-400 mt-1">92.4%</p>
                        <div className="w-full bg-zinc-800 h-2 rounded-full mt-3 overflow-hidden">
                          <div className="bg-emerald-400 h-full rounded-full" style={{ width: "92.4%" }} />
                        </div>
                        <p className="text-[11px] text-zinc-500 mt-2">Chart.js Pie Chart Visualization</p>
                      </div>

                      <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4">
                        <p className="text-xs text-zinc-400">30-Day Attendance Trend</p>
                        <p className="text-2xl font-bold text-cyan-400 mt-1">94.8% Avg</p>
                        <div className="flex items-end gap-1 h-8 mt-2">
                          <div className="w-2 bg-cyan-500/40 h-4 rounded-sm" />
                          <div className="w-2 bg-cyan-500/60 h-6 rounded-sm" />
                          <div className="w-2 bg-cyan-500/80 h-5 rounded-sm" />
                          <div className="w-2 bg-cyan-500 h-7 rounded-sm" />
                          <div className="w-2 bg-cyan-400 h-8 rounded-sm" />
                          <div className="w-2 bg-cyan-500 h-6 rounded-sm" />
                          <div className="w-2 bg-cyan-400 h-7 rounded-sm" />
                        </div>
                        <p className="text-[11px] text-zinc-500 mt-2">Bar chart historical analysis</p>
                      </div>

                      <div className="bg-zinc-900/80 border border-zinc-800 rounded-xl p-4 flex flex-col justify-between">
                        <div>
                          <p className="text-xs text-zinc-400">Automated Audit Exports</p>
                          <p className="text-lg font-bold text-zinc-200 mt-1">CSV Downloads</p>
                          <p className="text-[11px] text-zinc-400 mt-1">Single-date or complete 30-day full attendance history</p>
                        </div>
                        <span className="inline-flex items-center gap-1 text-xs text-cyan-400 font-mono mt-3">
                          <span>GET /api/export?date=...</span>
                        </span>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <motion.a
              href={flagshipProject.live}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open Live Demo in a new tab"
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              className="group relative flex items-center gap-2.5 px-6 py-3.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 hover:from-emerald-400 hover:to-cyan-400 text-zinc-950 font-bold text-sm rounded-full shadow-lg shadow-cyan-500/20 hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] transition-all cursor-pointer overflow-hidden"
            >
              {/* Shimmer sweep */}
              <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-zinc-950 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-zinc-950"></span>
              </span>
              <span>Launch Live Attendance</span>
              <ExternalLink size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </motion.a>

            <motion.button
              onClick={() => setSelectedProject(flagshipProject)}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-6 py-3.5 bg-zinc-800 hover:bg-zinc-750 text-zinc-100 hover:text-white rounded-full font-medium text-sm transition-all border border-zinc-700 hover:border-cyan-400/60 hover:shadow-[0_0_20px_rgba(6,182,212,0.25)] cursor-pointer"
            >
              <Eye size={17} />
              <span>Inspect Full Architecture</span>
            </motion.button>
          </div>

        </motion.div>
      {/* Deep Dive Architecture Modal */}
      <ProjectModal
        isOpen={selectedProject !== null}
        onClose={() => setSelectedProject(null)}
        project={selectedProject}
      />
    </section>
  );
}
