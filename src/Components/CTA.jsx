import React from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, ArrowRight } from "lucide-react";

const CTA = () => {
  const handleContactClick = () => {
    document.getElementById("contactus")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="cta"
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-20 bg-[#0a0612] overflow-hidden"
      style={{ fontFamily: '"Space Grotesk", "Inter", sans-serif' }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-transparent to-cyan-400/10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-violet-600/50 to-transparent" />
      
      {/* Floating orbs - hidden on small mobile */}
      <div className="hidden sm:block absolute top-20 left-10 md:left-20 w-48 h-48 md:w-64 md:h-64 bg-violet-600/20 rounded-full blur-3xl" />
      <div className="hidden sm:block absolute bottom-20 right-10 md:right-20 w-48 h-48 md:w-64 md:h-64 bg-cyan-400/20 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 items-start lg:items-center">
          
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="flex items-center justify-center lg:justify-start gap-3 mb-4 md:mb-6">
              <span className="w-8 md:w-12 h-px bg-cyan-400" />
              <span className="text-cyan-400 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase">
                Get Started
              </span>
            </div>

            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-white leading-tight mb-4 md:mb-6">
              Ready to Power Your{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                Next Project?
              </span>
            </h2>

            <p className="text-slate-400 text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8 max-w-xl mx-auto lg:mx-0">
              Don't let equipment delays slow you down. Get the right machinery 
              delivered to your site when you need it — with rates that keep your budget on track.
            </p>

            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onClick={handleContactClick}
              className="group inline-flex items-center gap-2 md:gap-3 px-6 md:px-8 py-3 md:py-4 bg-gradient-to-r from-violet-600 to-cyan-400 text-slate-900 font-bold text-sm md:text-base lg:text-lg uppercase tracking-wider rounded-lg hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300 w-full sm:w-auto justify-center"
            >
              Rent Equipment Now
              <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </motion.div>

          {/* Right - Contact Cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-3 md:space-y-4"
          >
            {[
              {
                icon: Phone,
                label: "Call Us 24/7",
                value: "509 205 5516",
                subtext: "Emergency support available",
              },
              {
                icon: Mail,
                label: "Email Us",
                value: "Support@dkadamsrentals.com",
                subtext: "Quotes within 2 hours",
              },
              {
                icon: MapPin,
                label: "Visit Our Yard",
                value: "12212 Craven Ave, Cleveland, OH 44105",
                subtext: "Mon-Sat: 6AM - 8PM",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group flex items-start sm:items-center gap-3 md:gap-5 p-4 md:p-6 bg-[#1a1033]/50 border border-violet-500/20 rounded-xl hover:border-cyan-400/50 transition-all duration-500"
              >
                <div className="flex-shrink-0 w-10 h-10 md:w-14 md:h-14 rounded-lg bg-gradient-to-br from-violet-600/30 to-cyan-400/30 flex items-center justify-center border border-violet-500/30 group-hover:border-cyan-400/50 transition-colors duration-300">
                  <item.icon className="w-5 h-5 md:w-6 md:h-6 text-cyan-400" />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-violet-400 text-xs font-semibold uppercase tracking-wider block mb-0.5 md:mb-1">
                    {item.label}
                  </span>
                  <span className="text-white font-bold text-sm md:text-lg block truncate">
                    {item.value}
                  </span>
                  <span className="text-slate-500 text-xs md:text-sm">
                    {item.subtext}
                  </span>
                </div>
                <div className="hidden sm:flex flex-shrink-0 w-8 h-8 rounded-full border border-violet-500/30 items-center justify-center group-hover:border-cyan-400 group-hover:bg-cyan-400/10 transition-all duration-300">
                  <ArrowRight className="w-4 h-4 text-violet-400 group-hover:text-cyan-400 transform group-hover:translate-x-0.5 transition-all" />
                </div>
              </motion.div>
            ))}

            {/* Trust badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-4"
            >
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gradient-to-br from-violet-600 to-cyan-400 border-2 border-[#0a0612] flex items-center justify-center text-slate-900 font-bold text-xs">
                    {i}★
                  </div>
                ))}
              </div>
              <div className="text-slate-400 text-sm text-center sm:text-left">
                <span className="text-white font-bold">4.9/5</span> from 200+ contractors
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CTA;