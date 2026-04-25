import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import ForkLift from "../assets/IMG/ForkLift.jpg";
import Generator from "../assets/IMG/Generator.jpg";
import Sprayer from "../assets/IMG/Sprayer.jpg";
import ScissorLift from "../assets/IMG/ScissorLift.jpg";
import WeldingMachine from "../assets/IMG/WeldingMachine.jpg";
import HayRake from "../assets/IMG/HayRake.jpg";

const Gallery = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = direction === "left" ? -clientWidth / 2 : clientWidth / 2;
      scrollRef.current.scrollTo({
        left: scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const images = [
    { src: ForkLift, name: "Rough Terrain Forklift", category: "Industrial" },
    { src: ScissorLift, name: "Scissor Lift Platform", category: "Industrial" },
    { src: Sprayer, name: "Boom Sprayer 24m", category: "Agricultural" },
    { src: WeldingMachine, name: "Portable Welder 400A", category: "Industrial" },
    { src: HayRake, name: "Rotary Hay Rake 9m", category: "Agricultural" },
    { src: Generator, name: "Diesel Generator 300kVA", category: "Industrial" },
  ];

  return (
    <section
      id="gallery"
      className="py-24 md:py-32 px-6 md:px-12 lg:px-20 bg-white overflow-hidden"
      style={{ fontFamily: '"Space Grotesk", "Inter", sans-serif' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="w-12 h-px bg-cyan-500" />
              <span className="text-cyan-600 text-sm font-semibold tracking-[0.2em] uppercase">
                Equipment Showcase
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 leading-tight">
              Gallery of{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500">
                Available Machines
              </span>
            </h2>
          </motion.div>

          {/* Navigation Arrows */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex gap-3"
          >
            <button
              onClick={() => scroll("left")}
              className="group w-12 h-12 rounded-full border border-violet-200 flex items-center justify-center hover:border-cyan-500 hover:bg-cyan-50 transition-all duration-300"
              aria-label="Previous"
            >
              <ChevronLeft className="w-5 h-5 text-violet-500 group-hover:text-cyan-600 transition-colors" />
            </button>
            <button
              onClick={() => scroll("right")}
              className="group w-12 h-12 rounded-full border border-violet-200 flex items-center justify-center hover:border-cyan-500 hover:bg-cyan-50 transition-all duration-300"
              aria-label="Next"
            >
              <ChevronRight className="w-5 h-5 text-violet-500 group-hover:text-cyan-600 transition-colors" />
            </button>
          </motion.div>
        </div>

        {/* Horizontal Scroll Gallery */}
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth no-scrollbar pb-4"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {images.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative flex-shrink-0 w-[85vw] sm:w-[45vw] lg:w-[30vw] snap-start"
            >
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-violet-200 hover:border-cyan-400/50 transition-all duration-500 bg-slate-100 shadow-sm hover:shadow-xl">
                {/* Image */}
                <img
                  src={item.src}
                  alt={`${item.name} - ${item.category}`}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                />
                
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent opacity-60" />
                
                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-violet-600/0 group-hover:bg-violet-600/10 transition-all duration-500 flex items-center justify-center">
                  <div className="w-14 h-14 rounded-full bg-cyan-500/0 group-hover:bg-cyan-500 flex items-center justify-center transform scale-0 group-hover:scale-100 transition-all duration-500">
                    <ZoomIn className="w-6 h-6 text-white" />
                  </div>
                </div>

                {/* Category badge */}
                <div className="absolute top-4 left-4 px-3 py-1 bg-white/90 backdrop-blur-sm border border-violet-200 rounded-full shadow-sm">
                  <span className="text-cyan-600 text-xs font-semibold uppercase tracking-wider">
                    {item.category}
                  </span>
                </div>

                {/* Bottom info */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors duration-300">
                    {item.name}
                  </h3>
                  <div className="flex items-center gap-2 text-slate-300 text-sm">
                    <span className="w-8 h-px bg-violet-400 group-hover:w-12 group-hover:bg-cyan-400 transition-all duration-300" />
                    <span>View in Fleet</span>
                  </div>
                </div>

                {/* Corner accents */}
                <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-cyan-400/0 group-hover:border-cyan-400/50 transition-all duration-500" />
                <div className="absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 border-violet-500/0 group-hover:border-violet-500/50 transition-all duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Progress indicator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex justify-center gap-2 mt-8"
        >
          {images.map((_, index) => (
            <div
              key={index}
              className="w-2 h-2 rounded-full bg-violet-200"
            />
          ))}
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="text-center mt-12"
        >
          <p className="text-slate-500 mb-4">
            See something you need? Browse our full fleet of 500+ machines.
          </p>
          <motion.a
            href="#machinery"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 px-8 py-4 bg-violet-600 text-white font-bold text-sm uppercase tracking-wider rounded-lg hover:bg-cyan-500 hover:text-white transition-all duration-300"
          >
            Browse All Equipment
            <ChevronRight className="w-4 h-4" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default Gallery;