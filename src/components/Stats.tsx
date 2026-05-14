"use client";

import { motion } from "framer-motion";
import { Users, Award, BookOpen, Clock } from "lucide-react";

const STATS = [
  { icon: Users, value: "1:15", label: "Max Student-Teacher Ratio" },
  { icon: Award, value: "95%+", label: "Board Exam Pass Rate" },
  { icon: BookOpen, value: "3", label: "Boards Covered" },
  { icon: Clock, value: "8+", label: "Years of Excellence" },
];

export default function Stats() {
  return (
    <section className="py-20 px-6 border-t border-slate-800/50">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {STATS.map((s, i) => {
            const Icon = s.icon;
            return (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.4, delay: i * 0.1 }}
                className="group text-center p-6 rounded-lg border border-transparent hover:border-slate-800 hover:bg-slate-900/40 transition-all duration-200 cursor-default"
              >
                <Icon className="w-6 h-6 text-sky-400 mx-auto mb-3 group-hover:scale-110 transition-transform duration-200" />
                <p className="text-3xl md:text-4xl font-heading font-bold text-white mb-1">
                  {s.value}
                </p>
                <p className="text-sm text-slate-400">{s.label}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
