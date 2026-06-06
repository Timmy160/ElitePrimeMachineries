import React from "react";
import { motion } from "framer-motion";
import HeroImg from "../assets/IMG/elitehero.jpg";

const Hero = () => {
  const handleBrowseClick = () => {
    document.getElementById("machinery")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60, skewY: 3 },
    visible: {
      opacity: 1,
      y: 0,
      skewY: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const lineVariants = {
    hidden: { scaleX: 0 },
    visible: {
      scaleX: 1,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
        delay: 0.5,
      },
    },
  };

  return (
    <section
      className="relative min-h-screen flex items-center justify-start overflow-x-hidden"
      style={{ fontFamily: '"Space Grotesk", "Inter", sans-serif' }}
    >
      {/* Background Image Container with overflow control */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 2.5, ease: "easeOut" }}
          className="absolute inset-0 bg-center bg-cover bg-no-repeat"
          style={{ 
            backgroundImage: `url(${HeroImg})`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        />
      </div>

      {/* Overlay — darker warm earth tones */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f0a05]/98 via-[#1a1108]/90 to-[#0f0a05]/70" />
      
      {/* Top gradient line */}
      <motion.div
        variants={lineVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 via-amber-500 to-orange-400 origin-left"
      />
      
      {/* Bottom accent line */}
      <motion.div
        variants={lineVariants}
        initial="hidden"
        animate="visible"
        className="absolute bottom-32 left-0 w-32 h-px bg-amber-400 origin-left hidden md:block"
      />

      {/* Decorative rotated square — LEFT side */}
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 0.1, x: 0 }}
        transition={{ duration: 1.5, delay: 1 }}
        className="absolute left-0 top-1/4 w-48 h-48 lg:w-64 lg:h-64 border border-emerald-500/20 rotate-45 hidden lg:block -translate-x-1/2"
      />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-20 md:py-24"
      >
        <motion.div
          variants={itemVariants}
          className="flex items-center gap-3 mb-6"
        >
          <span className="w-8 sm:w-12 h-px bg-amber-400" />
          <span className="text-amber-400 text-xs sm:text-sm font-semibold">
            Elite Prime Machineries
          </span>
        </motion.div>

        <div className="max-w-4xl">
          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-[1.1] mb-4 md:mb-6"
          >
            Deploy Heavy Assets
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-amber-400">
              Without The Overhead
            </span>
          </motion.h1>

          <motion.p
            variants={itemVariants}
            className="text-sm sm:text-base md:text-lg lg:text-xl text-slate-300 max-w-2xl mb-6 md:mb-8 lg:mb-10 leading-relaxed"
          >
            Strategic short-term and long-term equipment solutions for enterprises 
            scaling operations. Access certified industrial machinery on demand — 
            optimized for your project lifecycle with zero capital lock-in.
          </motion.p>

          <motion.div variants={itemVariants} className="mb-8 md:mb-0">
            <motion.button
              whileHover={{ scale: 1.02, x: 5 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleBrowseClick}
              className="group relative px-6 sm:px-8 py-3 sm:py-4 bg-emerald-700 text-white font-bold text-sm tracking-wider uppercase overflow-hidden rounded-lg"
            >
              <span className="relative z-10 flex items-center gap-2">
                View Equipment Catalog
                <svg 
                  className="w-4 h-4 transition-transform group-hover:translate-x-1" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <motion.div
                className="absolute inset-0 bg-amber-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </div>

        {/* Stats section */}
        <motion.div
          variants={itemVariants}
          className="mt-8 md:mt-12 lg:absolute lg:bottom-10 lg:left-6 lg:right-6 xl:left-12 xl:right-12"
        >
          <div className="grid grid-cols-3 gap-2 sm:gap-4 md:gap-8 max-w-2xl border-t border-emerald-500/20 pt-6 md:pt-8">
            {[
              { value: "750+", label: "Fleet Assets" },
              { value: "Rapid", label: "Deployment" },
              { value: "Adaptive", label: "Contract Terms" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5 + index * 0.1, duration: 0.6 }}
                className="text-center md:text-left"
              >
                <div className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white mb-1">
                  {stat.value}
                </div>
                <div className="text-[10px] sm:text-xs text-amber-300 uppercase tracking-wider">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator — RIGHT side */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
        className="absolute bottom-6 right-4 sm:bottom-8 sm:right-8 hidden lg:flex flex-col items-center gap-2"
      >
        <span className="text-emerald-300 text-xs tracking-widest uppercase rotate-90 origin-center translate-y-8">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-px h-12 sm:h-16 bg-gradient-to-b from-amber-400 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;