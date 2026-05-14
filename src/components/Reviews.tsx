"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const REVIEWS = [
  {
    name: "Mansi Patel",
    role: "Parent of Std 9 Student",
    text: "The conceptual clarity my child achieved here is unmatched. It's not just about marks — it's about understanding. Go & Gain changed our entire perspective on education.",
    rating: 5,
  },
  {
    name: "Rajvi Raja",
    role: "Student, Standard 10",
    text: "Maths used to be a nightmare. The active concept mastery approach completely shifted how I think about problem solving. Scored 96 in boards!",
    rating: 5,
  },
  {
    name: "Sujit Shukla",
    role: "Parent of Std 7 Student",
    text: "The small batch sizes ensure every child gets attention. My son went from average to topper in just two terms. The teachers genuinely care.",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <section id="reviews" className="py-24 px-6 border-t border-slate-800/50">
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
            Reviews
          </p>
          <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-4">
            What Parents & Students <span className="italic text-sky-400">Say</span>
          </h2>
          <p className="text-slate-400 text-lg leading-relaxed">
            Don't take our word for it. Here's what our community has to say.
          </p>
        </motion.div>

        {/* Review Cards — fivepathways inspired: lift on hover + quote + shadow shift */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {REVIEWS.map((r, i) => (
            <motion.div
              key={r.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.4, delay: i * 0.12 }}
              className="group relative p-8 bg-slate-900/60 border border-slate-800 rounded-lg transition-all duration-200 hover:-translate-y-2 hover:border-sky-500/40 hover:shadow-[0_12px_40px_-12px_rgba(14,165,233,0.2)] cursor-pointer"
            >
              {/* Quote mark */}
              <Quote className="w-8 h-8 text-sky-500/20 mb-4 group-hover:text-sky-500/40 transition-colors duration-200" />

              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: r.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
              </div>

              {/* Body */}
              <p className="text-slate-300 leading-relaxed mb-8 text-[15px]">
                &ldquo;{r.text}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 mt-auto">
                <div className="w-10 h-10 bg-sky-500/20 border border-sky-500/30 rounded-md flex items-center justify-center text-sky-400 font-bold text-sm group-hover:bg-sky-500/30 transition-colors duration-200">
                  {r.name.charAt(0)}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{r.name}</p>
                  <p className="text-slate-500 text-xs">{r.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
