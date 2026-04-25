import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import DKadams from "../assets/IMG/DKadams_Ceo.jpg";

const About = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  return (
    <section
      id="aboutus"
      className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-white"
      style={{ fontFamily: '"Space Grotesk", "Inter", sans-serif' }}
    >
      <div className="container mx-auto max-w-7xl">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          
          <div className="order-2 lg:order-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="w-12 h-px bg-cyan-500" />
              <span className="text-cyan-600 text-xl font-semibold">
                About DKAdams
              </span>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 leading-tight mb-6"
            >
              Equipment That Works
              <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500">
                As Hard As You Do
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-4 text-slate-600 leading-relaxed mb-8"
            >
              <p>
                DKAdams Rentals provides reliable, high-quality construction machinery 
                for contractors who can't afford downtime. Every machine in our fleet is 
                battle-tested, meticulously maintained, and ready to perform from hour one.
              </p>
              <p>
                From excavators to aerial lifts, we deliver the right equipment when you 
                need it — with flexible terms that keep your cash flow moving and your 
                projects on track.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <button
                onClick={() => setIsDetailsOpen(!isDetailsOpen)}
                className="group flex items-center gap-2 text-slate-900 font-semibold hover:text-cyan-600 transition-colors duration-300 mb-6"
              >
                <span>{isDetailsOpen ? "Less" : "More"} About Our Fleet</span>
                <motion.span
                  animate={{ rotate: isDetailsOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </motion.span>
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
                    <div className="pb-6 space-y-4 text-slate-600">
                      <p>
                        <strong className="text-slate-900">Rigorous Maintenance:</strong> Every unit undergoes 
                        150-point inspection before and after each rental. Zero exceptions.
                      </p>
                      <p>
                        <strong className="text-slate-900">Rapid Response:</strong> Breakdown? We'll swap 
                        your machine within 4 hours or your rental is free.
                      </p>
                      <p>
                        <strong className="text-slate-900">Transparent Pricing:</strong> No fuel surcharges, 
                        no hidden fees. What we quote is what you pay.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-3 gap-6 border-t border-violet-200 pt-8 mb-8"
            >
              {[
                { value: "500+", label: "Machines" },
                { value: "4hr", label: "Swap Guarantee" },
                { value: "0", label: "Hidden Fees" },
              ].map((stat, i) => (
                <div key={i} className="text-center md:text-left">
                  <div className="text-2xl md:text-3xl font-bold text-slate-900 mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs text-violet-600 uppercase tracking-wider">
                    {stat.label}
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <motion.a
                href="#machinery"
                whileHover={{ scale: 1.02, x: 5 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 text-white font-bold text-sm tracking-wider uppercase rounded-sm hover:bg-cyan-500 hover:text-slate-900 transition-colors duration-300"
              >
                Browse Fleet
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 border-t-2 border-r-2 border-violet-300 rounded-tr-3xl" />
              <div className="absolute -bottom-4 -left-4 w-24 h-24 border-b-2 border-l-2 border-cyan-400 rounded-bl-3xl" />
              
              <div className="bg-slate-50 rounded-lg shadow-2xl p-8 md:p-10 relative overflow-hidden border border-violet-100">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-violet-600 to-cyan-500" />
                
                <div className="flex flex-col sm:flex-row gap-6 mb-6">
                  <div className="flex-shrink-0 mx-auto sm:mx-0">
                    <div className="w-32 h-32 md:w-40 md:h-40 bg-slate-100 rounded-lg flex items-center justify-center text-violet-500 text-sm font-medium text-center border-2 border-dashed border-violet-300">
                      <img src={DKadams} alt="CEO" className="w-full h-full object-cover rounded-lg" />
                    </div>
                  </div>
                  <div className="flex-1 text-center sm:text-left">
                    <h3 className="text-xl font-bold text-slate-900 mb-1">
                       Tony Adams
                    </h3>
                    <p className="text-cyan-600 font-medium text-sm tracking-wider mb-3">
                      Founder & CEO, DKAdams Rentals
                    </p>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Former site supervisor who got tired of unreliable rentals. 
                      Built DKAdams to solve the problem he faced daily.
                    </p>
                  </div>
                </div>

                <blockquote className="relative pl-6 border-l-2 border-cyan-500">
                  <p className="text-slate-600 italic text-sm leading-relaxed">
                    "We don't just rent machines. We rent reliability. When your excavator 
                    shows up clean, fueled, and ready at 6 AM, that's when you know 
                    you've got a partner, not just a vendor."
                  </p>
                </blockquote>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;