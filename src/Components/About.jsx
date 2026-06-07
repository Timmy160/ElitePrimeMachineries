import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Ceo from "../assets/IMG/eliteceo.jpeg";

const About = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <section
      id="aboutus"
      className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-slate-50"
      style={{ fontFamily: '"Space Grotesk", "Inter", sans-serif' }}
    >
      <div className="container mx-auto max-w-7xl">
        {/* SINGLE COLUMN — stacked vertically instead of side-by-side grid */}
        <div className="max-w-4xl">
          
          {/* Label & Headline — full width, no grid */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="w-12 h-px bg-emerald-500" />
            <span className="text-emerald-600 text-xl font-semibold">
              About Elite Prime
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6"
          >
            Equipment That Delivers
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-500">
              Results You Can Count On
            </span>
          </motion.h2>

          {/* Body copy — wider, more spacious */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4 text-slate-600 leading-relaxed mb-10 max-w-3xl"
          >
            <p>
              Elite Prime Machineries provides battle-tested, high-performance construction 
              and industrial equipment for operators who refuse to slow down. Every machine 
              in our fleet undergoes rigorous servicing, full certification, and pre-deployment 
              checks so it's ready to work the moment it hits your site.
            </p>
            <p>
              From excavation to elevation, we supply the right tools on your schedule — 
              with flexible agreements that protect your budget and keep your timeline intact.
            </p>
          </motion.div>

          {/* Expandable details — horizontal accordion style instead of vertical dropdown */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-12"
          >
            <button
              onClick={() => setIsDetailsOpen(!isDetailsOpen)}
              className="group flex items-center gap-3 text-slate-900 font-semibold hover:text-emerald-600 transition-colors duration-300 mb-6"
            >
              <span className={`w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                isDetailsOpen ? "border-emerald-500 bg-emerald-50 text-emerald-600" : "border-slate-300 text-slate-500"
              }`}>
                <motion.span
                  animate={{ rotate: isDetailsOpen ? 90 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </motion.span>
              </span>
              <span>{isDetailsOpen ? "Hide Standards" : "Our Operating Standards"}</span>
            </button>

            <AnimatePresence>
              {isDetailsOpen && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="grid md:grid-cols-3 gap-4 pb-6">
                    {[
                      {
                        title: "Rigorous Maintenance",
                        desc: "Every unit undergoes a 200-point inspection before and after each deployment. Zero exceptions.",
                      },
                      {
                        title: "Rapid Response",
                        desc: "Equipment issue? We'll swap your machine within 6 hours or your rental period is extended free.",
                      },
                      {
                        title: "Transparent Pricing",
                        desc: "No fuel fees, no hidden charges. The rate we quote is the rate you pay.",
                      },
                    ].map((item, i) => (
                      <div key={i} className="p-5 bg-white rounded-xl border border-slate-200 hover:border-emerald-300 transition-colors duration-300">
                        <h4 className="text-slate-900 font-bold text-sm mb-2">{item.title}</h4>
                        <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>

          {/* Stats — horizontal row with dividers instead of grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-wrap gap-8 md:gap-12 border-y border-emerald-200 py-8 mb-12"
          >
            {[
              { value: "750+", label: "Fleet Units" },
              { value: "6hr", label: "Swap Guarantee" },
              { value: "0", label: "Hidden Fees" },
            ].map((stat, i) => (
              <div key={i} className="flex items-center gap-4">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-500">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-wider leading-tight">
                  {stat.label}
                </div>
              </div>
            ))}
          </motion.div>

          {/* CTA — left-aligned */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mb-16"
          >
            <motion.a
              href="#machinery"
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center gap-2 px-8 py-4 bg-emerald-700 text-white font-bold text-sm tracking-wider uppercase rounded-lg hover:bg-amber-500 hover:text-slate-900 transition-colors duration-300"
            >
              Browse Fleet
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>
          </motion.div>

          {/* CEO Card — BELOW text content, full width horizontal layout instead of side panel */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative">
              {/* Decorative corners — top-left and bottom-right */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-t-2 border-l-2 border-emerald-300 rounded-tl-3xl" />
              <div className="absolute -bottom-4 -right-4 w-24 h-24 border-b-2 border-r-2 border-amber-400 rounded-br-3xl" />
              
              <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 relative overflow-hidden border border-slate-200">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 to-amber-500" />
                
                {/* Horizontal layout: image left, text right — FULL WIDTH */}
                <div className="flex flex-col md:flex-row gap-6 md:gap-10 items-center md:items-start">
                  <div className="flex-shrink-0">
                    <div className="w-40 h-40 md:w-48 md:h-48 bg-slate-100 rounded-xl overflow-hidden border-2 border-dashed border-emerald-300">
                      <img src={Ceo} alt="CEO" className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <div className="mb-4">
                      <h3 className="text-2xl font-bold text-slate-900 mb-1">
                        Scott Frazier
                      </h3>
                      <p className="text-emerald-600 font-medium text-sm tracking-wider mb-3">
                        Founder & CEO, Elite Prime Machineries
                      </p>
                      <p className="text-slate-600 text-sm leading-relaxed max-w-lg">
                        Former site supervisor who got tired of unreliable rentals. 
                        Built Elite Prime to solve the problem he faced daily — because 
                        downtime isn't just expensive, it's unacceptable.
                      </p>
                    </div>

                    <blockquote className="relative pl-5 border-l-2 border-amber-500">
                      <p className="text-slate-500 italic text-sm leading-relaxed">
                        "We don't just rent machines. We rent reliability. When your excavator 
                        shows up clean, fueled, and ready at 6 AM, that's when you know 
                        you've got a partner, not just a vendor."
                      </p>
                    </blockquote>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;