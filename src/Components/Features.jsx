import React from "react";
import { motion } from "framer-motion";
import { Hammer, DollarSign, Package, Award, ArrowRight } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Hammer,
      title: "Wide Range of Equipment",
      description: "From excavators and loaders to cranes and tractors, we have the right machine for every job.",
      size: "large", // spans 2 columns
    },
    {
      icon: DollarSign,
      title: "Competitive Rates",
      description: "No hidden fees. Daily, weekly, long-term pricing.",
      size: "small",
    },
    {
      icon: Package,
      title: "Well-Maintained Fleet",
      description: "150-point inspection before every rental.",
      size: "small",
    },
    {
      icon: Award,
      title: "Reliable & Safe Service",
      description: "Fast delivery, 24/7 support, full insurance options, and strict safety standards on every job site.",
      size: "large", // spans 2 columns
    },
  ];

  return (
    <section
      id="features"
      className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-[#0f0a1a] relative overflow-hidden"
      style={{ fontFamily: '"Space Grotesk", "Inter", sans-serif' }}
    >
      {/* Background glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-violet-600/10 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-400/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header - Left aligned with vertical line */}
        <div className="flex gap-8 mb-16">
          <div className="hidden md:flex flex-col items-center gap-4">
            <div className="w-px h-20 bg-gradient-to-b from-cyan-400 to-violet-600" />
            <div className="w-2 h-2 rounded-full bg-cyan-400" />
          </div>
          
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="text-cyan-400 text-sm font-semibold  ">
                The DKAdams Advantage
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-2xl leading-tight"
            >
              Why Contractors Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                DKAdams Rentals
              </span>
            </motion.h2>
          </div>
        </div>

        {/* Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isLarge = feature.size === "large";
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.2 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative overflow-hidden rounded-2xl border border-violet-500/20 hover:border-cyan-400/50 transition-all duration-500 ${
                  isLarge ? "md:col-span-2" : "md:col-span-1"
                }`}
              >
                {/* Gradient background */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1033] to-[#0f0a1a]" />
                
                {/* Hover glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-cyan-400/0 group-hover:from-violet-600/10 group-hover:to-cyan-400/10 transition-all duration-500" />
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyan-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className={`relative z-10 p-8 h-full flex flex-col ${isLarge ? "md:flex-row md:items-center gap-8" : ""}`}>
                  {/* Icon */}
                  <div className={`flex-shrink-0 ${isLarge ? "md:w-20" : "mb-6"}`}>
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-violet-600/30 to-cyan-400/30 flex items-center justify-center border border-violet-500/30 group-hover:border-cyan-400/50 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-cyan-400" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className={`font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors duration-300 ${isLarge ? "text-2xl" : "text-xl"}`}>
                      {feature.title}
                    </h3>
                    <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                      {feature.description}
                    </p>
                    
                    {isLarge && (
                      <motion.div 
                        className="mt-4 flex items-center gap-2 text-cyan-400 font-semibold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      >
                        Learn more <ArrowRight className="w-4 h-4" />
                      </motion.div>
                    )}
                  </div>
                </div>

                {/* Bottom accent line for large cards */}
                {isLarge && (
                  <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-violet-600 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Bottom stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 flex flex-wrap justify-center gap-12 md:gap-20"
        >
          {[
            { value: "500+", label: "Machines Available" },
            { value: "4.9/5", label: "Customer Rating" },
            { value: "2hr", label: "Avg. Response Time" },
          ].map((stat, i) => (
            <div key={i} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 mb-1">
                {stat.value}
              </div>
              <div className="text-sm text-slate-500 uppercase tracking-wider">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;