"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Phone, Mail, MapPin, ArrowRight } from "lucide-react";

export default function Contact() {
  const [focused, setFocused] = useState<string | null>(null);

  return (
    <section id="contact" className="py-24 px-6 border-t border-slate-800/50">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Left — Form */}
          <div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5 }}
            >
              <p className="text-sky-400 text-sm font-semibold tracking-widest uppercase mb-3">
                Get in Touch
              </p>
              <h2 className="text-3xl md:text-5xl font-heading font-bold tracking-tight mb-4">
                Start Your <span className="italic text-sky-400">Journey</span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-10 max-w-md">
                Leave your details and our academic counselor will connect within 24 hours.
              </p>
            </motion.div>

            <form
              className="space-y-5 max-w-md"
              onSubmit={(e) => e.preventDefault()}
            >
              {[
                { name: "name", type: "text", label: "Student's Name" },
                { name: "email", type: "email", label: "Email Address" },
                { name: "phone", type: "tel", label: "Phone Number" },
              ].map((f) => (
                <div key={f.name} className="relative">
                  <label htmlFor={f.name} className="sr-only">{f.label}</label>
                  <input
                    id={f.name}
                    type={f.type}
                    placeholder={f.label}
                    onFocus={() => setFocused(f.name)}
                    onBlur={() => setFocused(null)}
                    className="w-full px-4 py-4 bg-slate-900 border border-slate-800 rounded-md text-white placeholder:text-slate-500 focus:outline-none focus:border-sky-500 transition-colors duration-200"
                  />
                  {focused === f.name && (
                    <motion.div
                      layoutId="input-highlight"
                      className="absolute inset-0 border-2 border-sky-500 rounded-md pointer-events-none"
                      transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    />
                  )}
                </div>
              ))}

              {/* Brutalist submit button */}
              <button
                type="submit"
                className="group w-full flex items-center justify-center gap-2 px-6 py-4 bg-orange-500 text-white font-semibold rounded-md cursor-pointer shadow-[4px_4px_0px_0px_rgba(251,146,60,0.5)] hover:shadow-[2px_2px_0px_0px_rgba(251,146,60,0.5)] hover:translate-x-[2px] hover:translate-y-[2px] active:shadow-none active:translate-x-[4px] active:translate-y-[4px] transition-all duration-150"
              >
                Request Callback
                <Send className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-150" />
              </button>
            </form>
          </div>

          {/* Right — Info Cards */}
          <div className="flex flex-col gap-6">
            {/* Contact cards with hover lift */}
            <a
              href="tel:+916201635001"
              className="group flex items-center gap-4 p-5 bg-slate-900/60 border border-slate-800 rounded-lg transition-all duration-200 hover:-translate-y-1 hover:border-emerald-500/50 hover:shadow-[0_8px_24px_-8px_rgba(16,185,129,0.2)] cursor-pointer"
            >
              <div className="w-12 h-12 bg-slate-800 rounded-md flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors duration-200">
                <Phone className="w-5 h-5 text-slate-400 group-hover:text-emerald-400 transition-colors duration-200" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-slate-500 mb-0.5">Call Us Directly</p>
                <p className="text-white font-semibold">+91 6201635001</p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
            </a>

            <a
              href="mailto:goandgainclassses@gmail.com"
              className="group flex items-center gap-4 p-5 bg-slate-900/60 border border-slate-800 rounded-lg transition-all duration-200 hover:-translate-y-1 hover:border-sky-500/50 hover:shadow-[0_8px_24px_-8px_rgba(14,165,233,0.2)] cursor-pointer"
            >
              <div className="w-12 h-12 bg-slate-800 rounded-md flex items-center justify-center group-hover:bg-sky-500/20 transition-colors duration-200">
                <Mail className="w-5 h-5 text-slate-400 group-hover:text-sky-400 transition-colors duration-200" />
              </div>
              <div className="flex-1">
                <p className="text-xs text-slate-500 mb-0.5">Send an Email</p>
                <p className="text-white font-semibold text-sm">goandgainclassses@gmail.com</p>
              </div>
              <ArrowRight className="w-4 h-4 text-slate-600 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-200" />
            </a>

            {/* Location card */}
            <div className="flex items-center gap-4 p-5 bg-slate-900/60 border border-slate-800 rounded-lg">
              <div className="w-12 h-12 bg-slate-800 rounded-md flex items-center justify-center">
                <MapPin className="w-5 h-5 text-sky-400" />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-0.5">Visit Us</p>
                <p className="text-white font-semibold text-sm">Kadma, Jamshedpur, Jharkhand</p>
              </div>
            </div>
          </div>
        </div>

        {/* Real Google Maps Embed — full width below form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5 }}
          className="mt-16 rounded-lg overflow-hidden border border-slate-800 shadow-[4px_4px_0px_0px_rgba(14,165,233,0.2)]"
        >
          <iframe
            src="https://maps.google.com/maps?q=22.812652447119383,86.15852932058061&t=&z=15&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="350"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.95) contrast(0.9)" }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Go & Gain Classes Location — Kadma, Jamshedpur"
          />
        </motion.div>
      </div>
    </section>
  );
}
