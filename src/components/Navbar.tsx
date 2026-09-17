"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
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
      className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4 pointer-events-none"
    >
      <nav className={twMerge(clsx("glass pointer-events-auto w-full max-w-2xl rounded-full border border-white/10 px-6 py-3 flex items-center justify-between shadow-lg"))}>
        {/* Logo */}
        <div className="text-xl font-bold text-white tracking-tighter cursor-pointer hover:opacity-80 transition-opacity">
          V<span className="text-cyan-400">.</span>
        </div>

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
                    className="absolute inset-0 bg-cyan-400/10 rounded-full"
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
          className="md:hidden p-2 text-gray-300 hover:text-white focus:outline-none"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="absolute top-20 left-4 right-4 glass border border-white/10 rounded-2xl p-4 md:hidden shadow-xl"
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
