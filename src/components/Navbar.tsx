"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" }
];

export function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const { scrollY } = useScroll();
  const backdropBlur = useTransform(scrollY, [0, 150], [12, 20]);
  const borderOpacity = useTransform(scrollY, [0, 150], [0.08, 0.2]);
  const bgOpacity = useTransform(scrollY, [0, 150], [0.55, 0.75]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-50% 0px -50% 0px' }
    );

    navItems.forEach((item) => {
      const element = document.getElementById(item.href.substring(1));
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(href.substring(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
      className="pointer-events-none fixed left-0 right-0 top-4 z-50 flex justify-center px-4 sm:top-6"
    >
      <motion.nav 
        className="pointer-events-auto flex w-full max-w-4xl items-center justify-between rounded-2xl border px-4 py-2.5 shadow-lg sm:rounded-full sm:px-6 sm:py-3"
        style={{
          backgroundColor: useTransform(bgOpacity, (v) => `rgba(24, 24, 27, ${v})`),
          backdropFilter: useTransform(backdropBlur, (v) => `blur(${v}px)`),
          WebkitBackdropFilter: useTransform(backdropBlur, (v) => `blur(${v}px)`),
          borderColor: useTransform(borderOpacity, (v) => `rgba(255, 255, 255, ${v})`),
        }}
      >
        {/* Logo with hover animation */}
        <motion.a 
          href="#home" 
          onClick={(e) => handleScroll(e, "#home")} 
          className="text-xl font-bold tracking-tighter text-white transition-opacity hover:opacity-80"
          whileHover={{ scale: 1.08, rotate: -2 }}
          whileTap={{ scale: 0.95 }}
        >
          V<span className="text-cyan-400">.</span>
        </motion.a>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center space-x-1">
          {navItems.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                onClick={(e) => handleScroll(e, item.href)}
                className={twMerge(clsx(
                  "relative px-4 py-2 text-sm font-medium transition-all duration-200 hover:text-cyan-400 cursor-pointer rounded-full hover:bg-white/5",
                  activeSection === item.href.substring(1) ? "text-cyan-400 font-semibold" : "text-gray-300"
                ))}
              >
                {activeSection === item.href.substring(1) && (
                  <motion.div
                    layoutId="navbar-active"
                    className="absolute inset-0 bg-cyan-400/10 rounded-full shadow-[0_0_10px_rgba(6,182,212,0.1)]"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
                <span className="relative z-10">{item.label}</span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <button
          aria-label={isMobileMenuOpen ? "Close navigation menu" : "Open navigation menu"}
          className="p-2 text-gray-300 transition-colors hover:text-white focus:outline-none md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="glass absolute left-4 right-4 top-16 rounded-2xl border border-white/10 p-4 shadow-xl md:hidden"
          >
            <ul className="flex flex-col space-y-2">
              {navItems.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    onClick={(e) => handleScroll(e, item.href)}
                    className={twMerge(clsx(
                      "block px-4 py-3 rounded-xl text-base font-medium transition-colors",
                      activeSection === item.href.substring(1)
                        ? "bg-cyan-400/10 text-cyan-400"
                        : "text-gray-300 hover:bg-white/5"
                    ))}
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
