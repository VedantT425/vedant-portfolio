"use client";

import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import BentoAbout from "@/components/BentoAbout";
import SkillsMatrix from "@/components/SkillsMatrix";
import { ProjectsSection } from "@/components/ProjectsSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

/**
 * Main Portfolio Page
 * ──────────────────
 * Assembles every section into a single vertically-scrolling page
 * with smooth reveal animations between sections.
 */
export default function Home() {
  return (
    <>
      {/* ── Floating Glassmorphic Navbar ── */}
      <Navbar />

      <main className="relative">
        {/* ── Hero Section ── */}
        <HeroSection />

        {/* ── Divider gradient line ── */}
        <SectionDivider />

        {/* ── About / Bento Grid ── */}
        <BentoAbout />

        {/* ── Skills Matrix ── */}
        <SkillsMatrix />

        <SectionDivider />

        {/* ── Featured Projects ── */}
        <ProjectsSection />

        <SectionDivider />

        {/* ── Experience & Education Timeline ── */}
        <ExperienceTimeline />

        <SectionDivider />

        {/* ── Contact Section ── */}
        <ContactSection />
      </main>

      {/* ── Footer ── */}
      <Footer />
    </>
  );
}

/**
 * Subtle gradient divider between major sections.
 * Fades in on scroll for a polished feel.
 */
function SectionDivider() {
  return (
    <motion.div
      initial={{ opacity: 0, scaleX: 0.5 }}
      whileInView={{ opacity: 1, scaleX: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="relative mx-auto my-6 flex max-w-4xl items-center justify-center"
    >
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent" />
      <div className="mx-4 h-2 w-2 rotate-45 rounded-[2px] bg-cyan-400/40 shadow-[0_0_8px_rgba(6,182,212,0.3)]" />
      <div className="h-px flex-1 bg-gradient-to-r from-transparent via-cyan-500/25 to-transparent" />
    </motion.div>
  );
}
