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
      title: "Excavation Systems",
      description: "High-torque hydraulic diggers spanning compact urban units to heavy-duty mining-class machines. Configured for trenching, demolition, and precision earthworks with optional certified operators.",
      specs: ["1.5T to 40T capacity", "Breaker & grapple kits", "GPS-guided buckets"],
      image: Excavators,
    },
    {
      title: "Earthmoving & Clearing",
      description: "Track and wheel-based loaders engineered for aggressive terrain grading, site stripping, and bulk material transport. Built for maximum output in adverse conditions.",
      specs: ["Wheel & track variants", "Laser grading equipped", "Brush mulching heads"],
      image: Bulldozers,
    },
    {
      title: "Agricultural & Rural",
      description: "Specialized farm and land-management machinery for seasonal cultivation, pasture renovation, and rural construction. Flexible harvest-period scheduling available.",
      specs: ["75HP to 320HP range", "Tillage & seeding rigs", "Fertilizer spreaders"],
      image: Tractors,
    },
    {
      title: "Compaction & Paving",
      description: "Soil stabilizers and asphalt finishers for roadway construction, foundation prep, and surface finishing. Remote-operated and walk-behind configurations in stock.",
      specs: ["Vibratory & static drums", "Remote control models", "Tandem asphalt rollers"],
      image: Rollers,
    },
  ];

  const currentService = services[activeService];

  return (
    <section
      id="ourservices"
      className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-20 bg-slate-50 relative overflow-hidden"
      style={{ fontFamily: '"Space Grotesk", "Inter", sans-serif' }}
    >
      {/* Background elements — repositioned and recolored */}
      <div className="hidden sm:block absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-emerald-100 to-transparent" />
      <div className="hidden sm:block absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-amber-100/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header — LEFT-ALIGNED instead of centered */}
        <div className="mb-10 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6"
          >
            <span className="w-8 md:w-12 h-px bg-emerald-500" />
            <span className="text-emerald-600 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase">
              What We Deliver
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 max-w-2xl"
          >
            Machinery Built for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-500">
              Every Terrain
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-slate-500 text-sm md:text-base max-w-xl leading-relaxed"
          >
            In addition to our pipeline construction division, we maintain a battle-tested fleet of heavy equipment available for rent nationwide — ready to deploy when you need it.
          </motion.p>
        </div>

        {/* Main Layout: Cards LEFT + Image RIGHT (swapped from original) */}
        <div className="grid lg:grid-cols-2 gap-6 md:gap-10 lg:gap-12 items-start">
          
          {/* LEFT: Clickable Service Cards (was right before) */}
          <div className="space-y-3 md:space-y-4 order-2 lg:order-1">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => setActiveService(index)}
                className={`group cursor-pointer relative overflow-hidden rounded-xl border transition-all duration-500 ${
                  activeService === index 
                    ? "border-emerald-400/50 bg-gradient-to-r from-emerald-50 to-white shadow-md" 
                    : "border-slate-200 bg-white hover:border-emerald-300 hover:shadow-sm"
                }`}
              >
                <div className="p-4 md:p-6 lg:p-8">
                  <div className="flex items-start justify-between gap-3 md:gap-4">
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                        <span className={`text-xs md:text-sm font-bold transition-colors duration-300 flex-shrink-0 ${
                          activeService === index ? "text-amber-600" : "text-emerald-600"
                        }`}>
                          0{index + 1}
                        </span>
                        <h3 className={`text-base md:text-xl font-bold transition-colors duration-300 truncate ${
                          activeService === index ? "text-slate-900" : "text-slate-600 group-hover:text-slate-900"
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
                            <p className="text-slate-500 text-sm leading-relaxed mb-3 md:mb-4">
                              {service.description}
                            </p>
                            <div className="flex flex-wrap gap-1.5 md:gap-2">
                              {service.specs.map((spec, i) => (
                                <span 
                                  key={i}
                                  className="px-2 md:px-3 py-1 bg-emerald-100 border border-emerald-200 rounded-full text-[10px] md:text-xs text-emerald-700"
                                >
                                  {spec}
                                </span>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    {/* Arrow indicator — points down when active instead of right */}
                    <div className={`flex-shrink-0 w-8 h-8 md:w-10 md:h-10 rounded-full border flex items-center justify-center transition-all duration-300 ${
                      activeService === index 
                        ? "border-amber-500 bg-amber-500 text-white rotate-90" 
                        : "border-slate-300 text-slate-500 group-hover:border-emerald-500 group-hover:text-emerald-600"
                    }`}>
                      <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Progress bar for active — top instead of bottom */}
                {activeService === index && (
                  <motion.div 
                    className="absolute top-0 left-0 h-0.5 bg-gradient-to-r from-emerald-600 to-amber-500"
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
                className="group flex items-center justify-center gap-2 md:gap-3 w-full py-3 md:py-4 bg-emerald-700 text-white font-bold text-sm md:text-lg uppercase tracking-wider rounded-xl hover:bg-amber-500 hover:text-slate-900 transition-all duration-300"
              >
                See Complete Inventory
                <svg className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </motion.a>
            </motion.div>
          </div>

          {/* RIGHT: Dynamic Image (was left before) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:sticky lg:top-24 order-1 lg:order-2"
          >
            <div className="relative rounded-xl md:rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
              {/* Image with AnimatePresence for smooth transitions */}
              <div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
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
                
                {/* Overlay gradient — from bottom instead of top */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-slate-900/80 z-10" />
                
                {/* Active service info — top instead of bottom */}
                <div className="absolute top-4 md:top-6 left-4 md:left-6 right-4 md:right-6 z-20">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={activeService}
                      initial={{ opacity: 0, y: -20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      transition={{ duration: 0.4 }}
                    >
                      <span className="text-amber-400 text-xs md:text-sm font-semibold tracking-wider uppercase mb-1 md:mb-2 block">
                        Now Previewing
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {currentService.title}
                      </h3>
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

              {/* Decorative corners — swapped positions */}
              <div className="absolute bottom-3 md:bottom-4 left-3 md:left-4 w-12 h-12 md:w-16 md:h-16 border-b-2 border-l-2 border-emerald-400/50 z-20" />
              <div className="absolute top-3 md:top-4 right-3 md:right-4 w-12 h-12 md:w-16 md:h-16 border-t-2 border-r-2 border-amber-500/50 z-20" />
            </div>

            {/* Dynamic Specs — horizontal scroll on mobile instead of grid */}
            <div className="mt-4 md:mt-6 flex gap-2 md:gap-4 overflow-x-auto pb-2 md:pb-0">
              <AnimatePresence mode="wait">
                {currentService.specs.map((spec, i) => (
                  <motion.div
                    key={`${activeService}-${i}`}
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: i * 0.1 }}
                    className="flex-shrink-0 bg-white border border-emerald-200 rounded-lg p-2 md:p-3 min-w-[100px] md:min-w-0 text-center"
                  >
                    <span className="text-[10px] md:text-xs text-slate-500 block leading-tight">{spec}</span>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;