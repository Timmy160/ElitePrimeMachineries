import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock, ArrowRight } from "lucide-react";

const Contact = () => {
  const handleContactClick = (href) => {
    if (href) {
      window.location.href = href;
    }
  };

  return (
    <section
      id="contactus"
      className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-20 bg-white relative overflow-hidden"
      style={{ fontFamily: '"Space Grotesk", "Inter", sans-serif' }}
    >
      {/* Background effects */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-emerald-600/50 via-amber-500/50 to-transparent" />
      <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-l from-emerald-600/50 via-amber-500/50 to-transparent" />
      <div className="absolute top-20 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-emerald-200/15 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-amber-200/15 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 sm:mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <span className="w-8 sm:w-12 h-px bg-emerald-500" />
            <span className="text-emerald-600 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
              Connect With Us
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 max-w-2xl">
            Let's Get Your{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-500">
              Equipment Moving
            </span>
          </h2>
          <p className="text-slate-500 max-w-xl text-sm sm:text-base md:text-lg">
            Response guaranteed within the hour during business hours. Emergency line active around the clock.
          </p>
        </motion.div>

        {/* Layout: Large CTA cards LEFT, contact details RIGHT */}
        <div className="grid lg:grid-cols-5 gap-8 md:gap-10 lg:gap-12">

          {/* LEFT: Action cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-3 space-y-4 md:space-y-6"
          >
            {/* Email CTA */}
            <motion.a
              href="mailto:info@eliteprimemachineries.com"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="group block relative bg-emerald-700 rounded-2xl p-8 md:p-10 overflow-hidden hover:bg-emerald-800 transition-colors duration-500"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="w-16 h-16 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                  <Mail className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Send an Email
                  </h3>
                  <p className="text-emerald-100 text-sm md:text-base leading-relaxed">
                    info@eliteprimemachineries.com
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-amber-500 group-hover:border-amber-500 transition-all duration-300 flex-shrink-0">
                  <ArrowRight className="w-5 h-5 text-white group-hover:text-slate-900 transition-colors" />
                </div>
              </div>
            </motion.a>

            {/* Phone CTA */}
            <motion.a
              href="tel:+16467691722"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="group block relative bg-amber-500 rounded-2xl p-8 md:p-10 overflow-hidden hover:bg-amber-600 transition-colors duration-500"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-amber-400/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
              <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="w-16 h-16 rounded-xl bg-white/10 border border-white/20 flex items-center justify-center flex-shrink-0">
                  <Phone className="w-8 h-8 text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                    Call Us Now
                  </h3>
                  <p className="text-amber-100 text-sm md:text-base leading-relaxed">
                    +1 (646) 769-1722
                  </p>
                </div>
                <div className="w-12 h-12 rounded-full bg-white/10 border border-white/20 flex items-center justify-center group-hover:bg-white group-hover:border-white transition-all duration-300 flex-shrink-0">
                  <ArrowRight className="w-5 h-5 text-white group-hover:text-amber-600 transition-colors" />
                </div>
              </div>
            </motion.a>
          </motion.div>

          {/* RIGHT: Contact details */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="lg:col-span-2 space-y-4"
          >
            {[
              {
                icon: MapPin,
                label: "Visit Our Yard",
                value: "138 E 50th St #Tr61",
                subtext: "New York, NY 10022",
                color: "emerald",
              },
              {
                icon: Clock,
                label: "Operating Hours",
                value: "Mon – Sat: 6AM – 8PM",
                subtext: "Sunday: Emergency dispatch only",
                color: "amber",
              },
              {
                icon: Phone,
                label: "Direct Line",
                value: "+1 (646) 769-1722",
                subtext: "24/7 emergency support available",
                color: "emerald",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className="group p-6 md:p-8 bg-slate-50 border border-slate-200 rounded-2xl hover:border-emerald-400/50 hover:shadow-md transition-all duration-500"
              >
                <div className={`w-12 h-12 rounded-lg flex items-center justify-center border mb-4 ${
                  item.color === "emerald"
                    ? "bg-emerald-50 border-emerald-200"
                    : "bg-amber-50 border-amber-200"
                }`}>
                  <item.icon className={`w-6 h-6 ${item.color === "emerald" ? "text-emerald-600" : "text-amber-600"}`} />
                </div>
                <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider block mb-2">
                  {item.label}
                </span>
                <span className="text-slate-900 font-bold text-lg md:text-xl block mb-1">
                  {item.value}
                </span>
                <span className="text-slate-500 text-sm">
                  {item.subtext}
                </span>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-10 sm:mt-12 md:mt-16"
        >
          <div className="relative rounded-2xl overflow-hidden border border-slate-200 shadow-lg">
            <div className="w-full aspect-[16/9] md:aspect-[21/9]">
              <iframe
                src="https://www.google.com/maps?q=138+E+50th+St+%23Tr61%2C+New+York%2C+NY+10022&output=embed"
                className="w-full h-full grayscale"
                style={{ border: 0, filter: "grayscale(100%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Elite Prime Machineries Location"
              />
            </div>
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 bg-white/95 backdrop-blur-md border border-slate-200 rounded-xl p-3 sm:p-4 max-w-[200px] sm:max-w-xs shadow-lg">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-xs sm:text-sm mb-0.5 sm:mb-1">Elite Prime Machineries</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    138 E 50th St #Tr61, New York, NY 10022
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;