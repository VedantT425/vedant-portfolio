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
      className="mx-auto my-4 h-px max-w-4xl bg-gradient-to-r from-transparent via-zinc-700 to-transparent"
    />
  );
}
