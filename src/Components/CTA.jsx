import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, ArrowRight } from "lucide-react";

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
      className="relative py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-20 bg-slate-50 overflow-hidden"
      style={{ fontFamily: '"Space Grotesk", "Inter", sans-serif' }}
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-bl from-emerald-100/50 via-transparent to-amber-100/50" />
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-emerald-400/50 via-transparent to-transparent" />
      <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-amber-600/50 via-transparent to-transparent" />
      
      <div className="hidden sm:block absolute top-20 right-10 md:right-20 w-48 h-48 md:w-64 md:h-64 bg-emerald-200/30 rounded-full blur-3xl" />
      <div className="hidden sm:block absolute bottom-20 left-10 md:left-20 w-48 h-48 md:w-64 md:h-64 bg-amber-200/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-4 md:mb-6">
            <span className="w-8 md:w-12 h-px bg-emerald-500" />
            <span className="text-emerald-600 text-xs md:text-sm font-semibold tracking-[0.2em] uppercase">
              Start Today
            </span>
            <span className="w-8 md:w-12 h-px bg-amber-500" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-slate-900 leading-tight mb-4 md:mb-6 max-w-3xl">
            Ready to Mobilize Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-500">
              Next Operation?
            </span>
          </h2>

          <p className="text-slate-500 text-base md:text-lg lg:text-xl leading-relaxed mb-6 md:mb-8 max-w-2xl">
            Equipment delays cost more than money — they cost momentum. Lock in the assets 
            you need now, delivered to your coordinates on your timeline, with terms that 
            protect your margin.
          </p>

          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={handleContactClick}
            className="group inline-flex items-center gap-2 md:gap-3 px-8 md:px-10 py-3 md:py-4 bg-emerald-700 text-white font-bold text-sm md:text-base lg:text-lg uppercase tracking-wider rounded-lg hover:bg-amber-500 hover:text-slate-900 transition-all duration-300"
          >
            Reserve Equipment
            <ArrowRight className="w-4 h-4 md:w-5 md:h-5 transform group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </motion.div>

        {/* Contact Cards — just two, side by side */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
        >
          {[
            {
              icon: Mail,
              label: "Email Us",
              value: "info@eliteprimemachineries.com",
              subtext: "Response under 1 hour",
            },
            {
              icon: MapPin,
              label: "Main Yard",
              value: "138 E 50th St #Tr61, New York, NY 10022",
              subtext: "Mon–Sat: 6AM – 8PM",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group flex items-start gap-4 md:gap-5 p-5 md:p-6 bg-white border border-slate-200 rounded-xl hover:border-emerald-400/50 hover:shadow-md transition-all duration-500"
            >
              <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-emerald-100 to-amber-100 flex items-center justify-center border border-emerald-200 group-hover:border-amber-400/50 transition-colors duration-300">
                <item.icon className="w-6 h-6 md:w-7 md:h-7 text-emerald-600" />
              </div>
              <div className="flex-1 min-w-0">
                <span className="text-emerald-600 text-xs font-semibold uppercase tracking-wider block mb-1">
                  {item.label}
                </span>
                <span className="text-slate-900 font-bold text-sm md:text-base block mb-1 break-words">
                  {item.value}
                </span>
                <span className="text-slate-400 text-xs md:text-sm">
                  {item.subtext}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;