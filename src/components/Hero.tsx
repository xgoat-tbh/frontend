"use client";

import { motion } from "framer-motion";
import { ArrowRight, Star } from "lucide-react";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      {/* Background grid + glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-sky-500/15 rounded-full blur-[128px]" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-500/10 rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="inline-flex items-center gap-2 px-3 py-1.5 border border-emerald-500/30 bg-emerald-500/10 rounded-md text-emerald-400 text-xs font-medium mb-8 tracking-wide uppercase"
          >
            <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-pulse" />
            Admissions Open — 2026 Batch
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-[1.1] tracking-tight mb-6"
          >
            Where Conceptual Clarity{" "}
            <span className="italic text-sky-400">Meets Academic Ascent.</span>
          </motion.h1>

          {/* Subhead */}
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.35 }}
            className="text-lg md:text-xl text-slate-400 leading-relaxed max-w-xl mb-10"
          >
            Elite board-specific coaching engineered for Standards 1 to 12.
            Transforming potential into raw performance.
          </motion.p>

          {/* CTAs — Fivepathways-inspired brutalist shadow buttons */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-wrap items-center gap-5"
          >
            <a
              href="#contact"
              className="group relative inline-flex items-center gap-2 px-7 py-4 bg-orange-500 text-white font-semibold rounded-md cursor-pointer shadow-[4px_4px_0px_0px_rgba(251,146,60,0.5)] hover:shadow-[2px_2px_0px_0px_rgba(251,146,60,0.5)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-150"
            >
              Start Your Ascent
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
            </a>
            <a
              href="#curriculum"
              className="group relative inline-flex items-center gap-2 px-7 py-4 border-2 border-slate-600 text-slate-300 font-semibold rounded-md cursor-pointer shadow-[4px_4px_0px_0px_rgba(100,116,139,0.4)] hover:shadow-[2px_2px_0px_0px_rgba(100,116,139,0.4)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] hover:text-white hover:border-slate-400 transition-all duration-150"
            >
              Explore Curriculum
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-150" />
            </a>
          </motion.div>
        </div>

        {/* Social Proof Strip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.7 }}
          className="mt-20 flex flex-wrap items-center gap-8 border-t border-slate-800 pt-8"
        >
          <div className="flex items-center gap-1.5">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
              ))}
            </div>
            <span className="text-sm text-slate-300 font-medium ml-1">5.0 Rating</span>
          </div>
          <div className="h-4 w-px bg-slate-700" />
          <span className="text-sm text-slate-400">
            <span className="text-white font-semibold">53+</span> Google Reviews
          </span>
          <div className="h-4 w-px bg-slate-700" />
          <span className="text-sm text-slate-400">
            <span className="text-white font-semibold">500+</span> Students Enrolled
          </span>
        </motion.div>
      </div>
    </section>
  );
}
