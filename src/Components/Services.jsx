import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Excavators from "../assets/IMG/Excavators.jpg";
import Bulldozers from "../assets/IMG/Bulldozers.jpg";
import Tractors from "../assets/IMG/Tractors.jpg";
import Rollers from "../assets/IMG/Rollers.jpg";

const Services = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Excavators & Diggers",
      description: "Powerful hydraulic excavators in various sizes, perfect for digging, trenching, demolition, and foundation work. Available with or without operators.",
      specs: ["1.5T to 35T capacity", "Breaker attachments", "Auger drives"],
      image: Excavators,
    },
    {
      title: "Loaders & Bulldozers",
      description: "Heavy-duty earthmoving equipment for grading, clearing, and material handling. Built for tough terrain and maximum productivity.",
      specs: ["Wheel & track loaders", "GPS grading ready", "Mulching heads"],
      image: Bulldozers,
    },
    {
      title: "Tractors & Agri",
      description: "Agricultural machinery for farming, land clearing, and rural construction. Seasonal rates available for harvest periods.",
      specs: ["75HP to 300HP", "Plow & harrow attachments", "Seeders & spreaders"],
      image: Tractors,
    },
    {
      title: "Compactors & Rollers",
      description: "Soil and asphalt compaction equipment for roadwork, site prep, and paving projects. Single and double drum options.",
      specs: ["Padfoot & smooth", "Remote control units", "Asphalt rollers"],
      image: Rollers,
    },
  ];

  const currentService = services[activeService];

  return (
    <section
      id="ourservices"
      className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#0a0612] relative overflow-hidden"
      style={{ fontFamily: '"Space Grotesk", "Inter", sans-serif' }}
    >
      {/* Background elements */}
      <div className="hidden sm:block absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-violet-600/5 to-transparent" />
      <div className="hidden sm:block absolute bottom-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-cyan-400/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="text-center mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center gap-3 md:gap-4 mb-4 md:mb-6"
          >
            <span className="w-8 md:w-12 h-px bg-gradient-to-r from-transparent to-violet-500" />
            <span className="text-cyan-400 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase">
              Our Fleet
            </span>
            <span className="w-8 md:w-12 h-px bg-gradient-to-l from-transparent to-violet-500" />
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white"
          >
            Equipment for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
              Every Project
            </span>
          </motion.h2>
        </div>

        {/* Main Layout: Image Left + Cards Right */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-start">
          
          {/* Left: Dynamic Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24"
          >
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-violet-500/20">
              {/* Image with AnimatePresence for smooth transitions */}
              <div className="aspect-[4/3] bg-[#1a1033] relative overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img 
                    key={activeService}
                    src={currentService.image}
                    alt={currentService.title}
                    initial={{ opacity: 0, scale: 1.1 }}
                    animate={{ opacity: 0.9, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.5 }}
                    className="w-full h-full object-cover absolute inset-0"
                  />
                </AnimatePresence>
                
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0612] via-transparent to-transparent z-10" />
                
                {/* Active service info */}
                <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 right-4 md:right-6 z-20">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeService}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.4 }}
                    >
                      <span className="text-cyan-400 text-xs md:text-sm font-semibold tracking-wider uppercase mb-1 md:mb-2 block">
                        Currently Viewing
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {currentService.title}
                      </h3>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Decorative corners */}
              <div className="absolute top-3 md:top-4 left-3 md:left-4 w-12 h-12 md:w-16 md:h-16 border-t-2 border-l-2 border-cyan-400/50 z-20" />
              <div className="absolute bottom-3 md:bottom-4 right-3 md:right-4 w-12 h-12 md:w-16 md:h-16 border-b-2 border-r-2 border-violet-500/50 z-20" />
            </div>

            {/* Dynamic Specs */}
            <div className="mt-4 md:mt-6 grid grid-cols-3 gap-2 md:gap-4">
              <AnimatePresence mode="wait">
                {currentService.specs.map((spec, i) => (
                  <motion.div
                    key={`${activeService}-${i}`}
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="bg-[#1a1033]/50 border border-violet-500/20 rounded-lg p-2 md:p-3 text-center"
                  >
                    <span className="text-[10px] md:text-xs text-slate-400 block leading-tight">{spec}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>

          {/* Right: Clickable Service Cards */}
          <div className="space-y-3 md:space-y-4">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveService(index)}
                className={`group cursor-pointer relative overflow-hidden rounded-xl border transition-all duration-500 ${
                  activeService === index 
                    ? "border-cyan-400/50 bg-gradient-to-r from-violet-600/20 to-[#1a1033]" 
                    : "border-violet-500/20 bg-[#1a1033]/30 hover:border-violet-500/40"
                }`}
              >
                <div className="p-4 md:p-6 lg:p-8">
                  <div className="flex items-start justify-between gap-3 md:gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                        <span className={`text-xs md:text-sm font-bold transition-colors duration-300 flex-shrink-0 ${
                          activeService === index ? "text-cyan-400" : "text-violet-400"
                        }`}>
                          0{index + 1}
                        </span>
                        <h3 className={`text-base md:text-xl font-bold transition-colors duration-300 truncate ${
                          activeService === index ? "text-white" : "text-slate-300 group-hover:text-white"
                        }`}>
                          {service.title}
                        </h3>
                      </div>
                      
                      <AnimatePresence>
                        {activeService === index && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <p className="text-slate-400 text-sm leading-relaxed mb-3 md:mb-4">
                              {service.description}
                            </p>
                            <div className="flex flex-wrap gap-1.5 md:gap-2">
                              {service.specs.map((spec, i) => (
                                <span 
                                  key={i}
                                  className="px-2 md:px-3 py-1 bg-violet-600/20 border border-violet-500/30 rounded-full text-[10px] md:text-xs text-cyan-400"
                                >
                                  {spec}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Arrow indicator */}
                    <div className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      activeService === index 
                        ? "border-cyan-400 bg-cyan-400 text-slate-900 rotate-90" 
                        : "border-violet-500/30 text-violet-400 group-hover:border-cyan-400 group-hover:text-cyan-400"
                    }`}>
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Progress bar for active */}
                {activeService === index && (
                  <motion.div 
                    className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-violet-600 to-cyan-400"
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 5, ease: "linear" }}
                    key={`progress-${activeService}`}
                  />
                )}
              </motion.div>
            ))}

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="pt-4 md:pt-6"
            >
              <motion.a
                href="#machinery"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="group flex items-center justify-center gap-2 md:gap-3 w-full py-3 md:py-4 bg-gradient-to-r from-violet-600 to-cyan-400 text-slate-900 font-bold text-sm md:text-lg uppercase tracking-wider rounded-xl hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300"
              >
                View Full Fleet
                <svg className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;