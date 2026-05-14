"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BookOpen, FlaskConical, Globe, Calculator, ArrowUpRight } from "lucide-react";

const BOARDS = ["CBSE", "ICSE", "JAC Board"] as const;

const SUBJECTS = [
  { name: "Mathematics", icon: Calculator, desc: "From fundamentals to advanced problem solving" },
  { name: "Science", icon: FlaskConical, desc: "Physics, Chemistry & Biology with lab-first approach" },
  { name: "English", icon: BookOpen, desc: "Grammar, literature and composition mastery" },
  { name: "Social Studies", icon: Globe, desc: "History, geography, civics — conceptual learning" },
];

export default function Curriculum() {
  const [active, setActive] = useState<(typeof BOARDS)[number]>("CBSE");

  return (
    <section id="curriculum" className="py-24 px-6">
      <div className="mx-auto max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-16 max-w-2xl"
        >
          <p className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-3">
            Curriculum
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-4">
            Board-Aligned <span className="italic text-sky-400">Excellence</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Tailored tracks meticulously aligned with national and state frameworks.
            Choose your board and explore what we teach.
          </p>
        </motion.div>

        {/* Board Tabs */}
        <div className="flex gap-1 p-1 bg-slate-900 border border-slate-800 rounded-lg w-fit mb-12">
          {BOARDS.map((board) => (
            <button
              key={board}
              onClick={() => setActive(board)}
              className={`relative px-5 py-2.5 text-sm font-semibold rounded-md cursor-pointer transition-colors duration-200 ${
                active === board ? "text-white" : "text-slate-400 hover:text-slate-200"
              }`}
            >
              {active === board && (
                <motion.div
                  layoutId="board-tab"
                  className="absolute inset-0 bg-sky-500 rounded-md"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{board}</span>
            </button>
          ))}
        </div>

        {/* Subject Cards — fivepathways card hover: border glow + lift + arrow reveal */}
        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
          >
            {SUBJECTS.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="group relative p-6 bg-slate-900/60 border border-slate-800 rounded-lg cursor-pointer transition-all duration-200 hover:-translate-y-1 hover:border-sky-500/50 hover:shadow-[0_8px_30px_-12px_rgba(14,165,233,0.3)]"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-10 h-10 bg-slate-800 rounded-md flex items-center justify-center group-hover:bg-sky-500/20 transition-colors duration-200">
                      <Icon className="w-5 h-5 text-sky-400" />
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-slate-600 opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-200" />
                  </div>
                  <h3 className="text-white font-semibold mb-1.5">{s.name}</h3>
                  <p className="text-sm text-slate-400 leading-relaxed">{s.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
