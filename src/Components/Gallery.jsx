import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ArrowUpRight, Grid3X3, LayoutList } from "lucide-react";
import ForkLift from "../assets/IMG/ForkLift.jpg";
import Generator from "../assets/IMG/Generator.jpg";
import Sprayer from "../assets/IMG/Sprayer.jpg";
import ScissorLift from "../assets/IMG/ScissorLift.jpg";
import WeldingMachine from "../assets/IMG/WeldingMachine.jpg";
import HayRake from "../assets/IMG/HayRake.jpg";

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [viewMode, setViewMode] = useState("grid"); // "grid" or "list"

  const images = [
    { src: ForkLift, name: "Rough Terrain Forklift", category: "Industrial", size: "tall" },
    { src: ScissorLift, name: "Scissor Lift Platform", category: "Industrial", size: "normal" },
    { src: Sprayer, name: "Boom Sprayer 24m", category: "Agricultural", size: "wide" },
    { src: WeldingMachine, name: "Portable Welder 400A", category: "Industrial", size: "normal" },
    { src: HayRake, name: "Rotary Hay Rake 9m", category: "Agricultural", size: "tall" },
    { src: Generator, name: "Diesel Generator 300kVA", category: "Industrial", size: "normal" },
  ];

  return (
    <section
      id="gallery"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-white overflow-hidden"
      style={{ fontFamily: '"Space Grotesk", "Inter", sans-serif' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header — left-aligned with view toggle */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <div className="flex items-center gap-3 mb-4">
            <span className="w-12 h-px bg-emerald-500" />
            <span className="text-emerald-600 text-sm font-semibold tracking-[0.2em] uppercase">
              Equipment Showcase
            </span>
          </div>
          
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight max-w-2xl">
              Machines in{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-500">
                Action
              </span>
            </h2>
            
            {/* View toggle buttons — FUNCTIONAL */}
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode("grid")}
                className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-300 ${
                  viewMode === "grid" 
                    ? "border-emerald-500 bg-emerald-50 text-emerald-600" 
                    : "border-slate-200 text-slate-400 hover:border-emerald-300"
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </button>
              <button
                onClick={() => setViewMode("list")}
                className={`w-10 h-10 rounded-lg border flex items-center justify-center transition-all duration-300 ${
                  viewMode === "list" 
                    ? "border-emerald-500 bg-emerald-50 text-emerald-600" 
                    : "border-slate-200 text-slate-400 hover:border-emerald-300"
                }`}
              >
                <LayoutList className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* GRID VIEW — Masonry layout */}
        <AnimatePresence mode="wait">
          {viewMode === "grid" && (
            <motion.div
              key="grid"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6"
            >
              {images.map((item, index) => {
                const spanClass = 
                  item.size === "tall" ? "sm:row-span-2" : 
                  item.size === "wide" ? "sm:col-span-2 lg:col-span-1" : "";
                
                const aspectClass = 
                  item.size === "tall" ? "aspect-[3/4]" : 
                  item.size === "wide" ? "aspect-[16/9]" : "aspect-square";

                return (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.08 }}
                    className={`group relative overflow-hidden rounded-xl cursor-pointer ${spanClass}`}
                    onClick={() => setSelectedImage(item)}
                  >
                    <div className={`relative w-full ${aspectClass} overflow-hidden bg-slate-100`}>
                      <img
                        src={item.src}
                        alt={`${item.name} - ${item.category}`}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity duration-500" />

                      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="px-2 py-0.5 bg-emerald-500/20 backdrop-blur-sm border border-emerald-400/30 rounded text-[10px] font-semibold text-emerald-300 uppercase tracking-wider">
                            {item.category}
                          </span>
                        </div>
                        <h3 className="text-lg md:text-xl font-bold text-white mb-1 group-hover:text-emerald-300 transition-colors duration-300">
                          {item.name}
                        </h3>
                        <div className="flex items-center gap-2 text-slate-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                          <span className="w-6 h-px bg-emerald-400 group-hover:w-10 transition-all duration-300" />
                          <span>Click to expand</span>
                        </div>
                      </div>

                      <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/0 group-hover:bg-white/90 backdrop-blur-sm flex items-center justify-center transform scale-0 group-hover:scale-100 transition-all duration-300">
                        <ArrowUpRight className="w-5 h-5 text-emerald-700" />
                      </div>

                      <div className="absolute top-4 left-4 w-8 h-8 border-t-2 border-l-2 border-amber-400/0 group-hover:border-amber-400/50 transition-all duration-500" />
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}

          {/* LIST VIEW — Horizontal cards stacked vertically */}
          {viewMode === "list" && (
            <motion.div
              key="list"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="space-y-4"
            >
              {images.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                  className="group relative bg-white border border-slate-200 rounded-xl overflow-hidden hover:border-emerald-400/50 hover:shadow-lg transition-all duration-500 cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <div className="flex flex-col sm:flex-row">
                    {/* Image — fixed width left side */}
                    <div className="relative w-full sm:w-48 md:w-56 lg:w-64 h-48 sm:h-auto flex-shrink-0 overflow-hidden bg-slate-100">
                      <img
                        src={item.src}
                        alt={`${item.name} - ${item.category}`}
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/10" />
                      
                      {/* Category badge on image */}
                      <div className="absolute top-3 left-3 px-2 py-1 bg-emerald-700/90 backdrop-blur-sm text-white text-[10px] font-bold uppercase tracking-wider rounded">
                        {item.category}
                      </div>
                    </div>

                    {/* Content — right side */}
                    <div className="flex-1 p-5 md:p-6 flex flex-col justify-between">
                      <div>
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors duration-300 mb-2">
                          {item.name}
                        </h3>
                        <p className="text-slate-500 text-sm leading-relaxed">
                          High-performance {item.category.toLowerCase()} equipment available for immediate deployment. 
                          Fully certified, maintained, and ready for your project timeline.
                        </p>
                      </div>

                      <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                        <span className="text-emerald-600 text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                          View Details
                          <ArrowUpRight className="w-4 h-4" />
                        </span>
                        
                        <div className="w-8 h-8 rounded-full border border-slate-200 flex items-center justify-center group-hover:border-emerald-500 group-hover:bg-emerald-50 transition-all duration-300">
                          <ArrowUpRight className="w-4 h-4 text-slate-400 group-hover:text-emerald-600 transition-colors" />
                        </div>
                      </div>
                    </div>

                    {/* Left accent bar */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-600 to-amber-500 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom section — stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-slate-200"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "750+", label: "Total Units" },
              { value: "3", label: "Core Sectors" },
              { value: "24/7", label: "Availability" },
              { value: "Same-Day", label: "Deployment" },
            ].map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-500 mb-1">
                  {stat.value}
                </div>
                <div className="text-xs text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-slate-900/95 backdrop-blur-md z-50 flex items-center justify-center p-4 md:p-8"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative max-w-5xl w-full"
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white hover:bg-white/20 transition-all duration-300"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative rounded-2xl overflow-hidden bg-slate-800">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.name}
                  className="w-full max-h-[70vh] object-contain"
                />
                
                <div className="p-6 bg-slate-900 border-t border-slate-700">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wider mb-1 block">
                        {selectedImage.category}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-white">
                        {selectedImage.name}
                      </h3>
                    </div>
                    <motion.a
                      href="#machinery"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => setSelectedImage(null)}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-700 text-white font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-amber-500 hover:text-slate-900 transition-all duration-300"
                    >
                      View in Fleet
                      <ArrowUpRight className="w-4 h-4" />
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Gallery;