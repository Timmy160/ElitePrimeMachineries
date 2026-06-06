import React from "react";
import { motion } from "framer-motion";
import { Layers, TrendingUp, ShieldCheck, Zap, ArrowRight } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Layers,
      title: "Comprehensive Asset Portfolio",
      description: "From earthmovers and compactors to tower cranes and specialized attachments — we curate the exact equipment profile your build demands.",
      size: "large",
    },
    {
      icon: TrendingUp,
      title: "Strategic Cost Efficiency",
      description: "Transparent, volume-scaled pricing with zero surprise line items. Optimize your CapEx without compromising capability.",
      size: "small",
    },
    {
      icon: ShieldCheck,
      title: "Certified Operational Readiness",
      description: "Every unit cleared through our 200-point compliance and performance protocol before deployment.",
      size: "small",
    },
    {
      icon: Zap,
      title: "Mission-Critical Reliability",
      description: "Dedicated logistics coordination, around-the-clock technical support, full liability coverage, and uncompromising safety adherence across every engagement.",
      size: "large",
    },
  ];

  return (
    <section
      id="features"
      className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-slate-50 relative overflow-hidden"
      style={{ fontFamily: '"Space Grotesk", "Inter", sans-serif' }}
    >
      {/* Background glows — repositioned: top-left instead of top-right/bottom */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-amber-200/20 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header — LEFT-ALIGNED like original */}
        <div className="flex gap-8 mb-16">
          <div className="hidden md:flex flex-col items-center gap-4">
            <div className="w-px h-20 bg-gradient-to-b from-emerald-500 to-amber-500" />
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
          </div>
          
          <div className="flex-1">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex items-center gap-3 mb-4"
            >
              <span className="text-emerald-600 text-sm font-semibold">
                The Elite Prime Standard
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 max-w-2xl leading-tight"
            >
              Why Industry Leaders Choose{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-500">
                Elite Prime Machineries
              </span>
            </motion.h2>
          </div>
        </div>

        {/* Grid Layout — 2 columns, but cards arranged DIFFERENTLY (small on top, large below) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Small cards on TOP row */}
          {features.filter(f => f.size === "small").map((feature, index) => {
            const Icon = feature.icon;
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
                className="group relative overflow-hidden rounded-xl border border-slate-200 hover:border-emerald-400/50 transition-all duration-500"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-100" />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/0 to-amber-100/0 group-hover:from-emerald-100/40 group-hover:to-amber-100/40 transition-all duration-500" />
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-amber-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative z-10 p-8 h-full flex flex-col">
                  <div className="flex-shrink-0 mb-6">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-emerald-100 to-amber-100 flex items-center justify-center border border-emerald-200 group-hover:border-amber-400/50 transition-colors duration-300">
                      <Icon className="w-8 h-8 text-emerald-600" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300 text-xl">
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}

          {/* Large cards on BOTTOM row, spanning full width differently */}
          {features.filter(f => f.size === "large").map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index + 2}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.8,
                  delay: 0.4 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative overflow-hidden rounded-xl border border-slate-200 hover:border-emerald-400/50 transition-all duration-500 md:col-span-2"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white to-slate-100" />
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-100/0 to-amber-100/0 group-hover:from-emerald-100/40 group-hover:to-amber-100/40 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-emerald-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                {/* Horizontal layout for large cards — icon LEFT, content RIGHT */}
                <div className="relative z-10 p-8 h-full flex flex-col md:flex-row md:items-center gap-8">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-emerald-100 to-amber-100 flex items-center justify-center border border-emerald-200 group-hover:border-amber-400/50 transition-colors duration-300">
                      <Icon className="w-10 h-10 text-emerald-600" />
                    </div>
                  </div>

                  <div className="flex-1">
                    <h3 className="font-bold text-slate-900 mb-3 group-hover:text-emerald-600 transition-colors duration-300 text-2xl">
                      {feature.title}
                    </h3>
                    <p className="text-slate-500 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                      {feature.description}
                    </p>
                    
                    <motion.div 
                      className="mt-4 flex items-center gap-2 text-emerald-600 font-semibold text-sm uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    >
                      Discover more <ArrowRight className="w-4 h-4" />
                    </motion.div>
                  </div>
                </div>

                {/* Bottom accent line — left to right */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-600 to-amber-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            );
          })}
        </div>

        {/* Bottom stats strip — LEFT-ALIGNED, with top border divider */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 pt-12 border-t border-emerald-200/50"
        >
          <div className="flex flex-wrap gap-12 md:gap-20">
            {[
              { value: "750+", label: "Active Fleet Units" },
              { value: "4.8/5", label: "Client Satisfaction" },
              { value: "1hr", label: "Avg. Dispatch Speed" },
            ].map((stat, i) => (
              <div key={i} className="text-left">
                <div className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-500 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Features;