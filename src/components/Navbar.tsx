"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight } from "lucide-react";

const LINKS = [
  { label: "Home", href: "#" },
  { label: "Curriculum", href: "#curriculum" },
  { label: "Reviews", href: "#reviews" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [hovered, setHovered] = useState<string | null>(null);

  return (
    <header className="fixed top-4 left-4 right-4 z-50">
      <nav className="mx-auto max-w-6xl flex items-center justify-between px-6 py-3 bg-slate-900/80 backdrop-blur-lg border border-slate-800 rounded-lg">
        {/* Logo */}
        <a href="#" className="flex items-center gap-2.5 cursor-pointer group">
          <div className="w-9 h-9 bg-sky-500 rounded-md flex items-center justify-center group-hover:bg-sky-400 transition-colors duration-200">
            <span className="font-heading font-bold text-white text-sm">GG</span>
          </div>
          <span className="font-heading text-lg font-semibold text-white tracking-tight">
            Go & Gain
          </span>
        </a>

        {/* Desktop Links — underline reveal on hover */}
        <ul className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a
                href={l.href}
                onMouseEnter={() => setHovered(l.label)}
                onMouseLeave={() => setHovered(null)}
                className="relative px-4 py-2 text-sm text-slate-400 hover:text-white transition-colors duration-200 cursor-pointer"
              >
                {l.label}
                {hovered === l.label && (
                  <motion.div
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-2 right-2 h-0.5 bg-sky-400 rounded-full"
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Desktop CTA — brutalist */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center gap-1.5 px-5 py-2.5 text-sm font-semibold bg-sky-500 text-white rounded-md cursor-pointer shadow-[3px_3px_0px_0px_rgba(14,165,233,0.4)] hover:shadow-[1px_1px_0px_0px_rgba(14,165,233,0.4)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[3px] active:translate-y-[3px] transition-all duration-150"
        >
          Enroll Now
          <ArrowRight className="w-3.5 h-3.5" />
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white cursor-pointer p-1"
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="md:hidden mt-2 mx-auto max-w-6xl bg-slate-900/95 backdrop-blur-xl border border-slate-800 rounded-lg p-4 flex flex-col gap-1"
          >
            {LINKS.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 text-slate-300 hover:text-white hover:bg-slate-800 rounded-md transition-colors duration-200 cursor-pointer"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 px-4 py-3 bg-sky-500 text-white font-semibold rounded-md text-center cursor-pointer"
            >
              Enroll Now
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
