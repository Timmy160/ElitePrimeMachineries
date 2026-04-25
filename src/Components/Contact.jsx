import React from "react";
import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Clock, ArrowRight, ExternalLink } from "lucide-react";

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
      {/* Background effects - subtle for white */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-violet-600/50 to-transparent" />
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      <div className="absolute top-40 right-0 w-64 h-64 sm:w-96 sm:h-96 bg-violet-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-0 w-64 h-64 sm:w-96 sm:h-96 bg-cyan-200/30 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-10 sm:mb-12 md:mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4 sm:mb-6">
            <span className="w-8 sm:w-12 h-px bg-cyan-500" />
            <span className="text-cyan-600 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
              Get In Touch
            </span>
            <span className="w-8 sm:w-12 h-px bg-cyan-500" />
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4">
            Ready to Rent?{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500">
              Let's Talk
            </span>
          </h2>
          <p className="text-slate-500 max-w-2xl mx-auto text-sm sm:text-base md:text-lg px-4 sm:px-0">
            Get a quote within 2 hours. Our team is standing by to match you with the right equipment.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 md:gap-10 lg:gap-12 items-start">
          {/* Left - Contact Info Cards */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-3 sm:space-y-4"
          >
            {[
              {
                icon: Mail,
                label: "Email Us",
                value: "Support@dkadamsrentals.com",
                subtext: "Quotes within 2 hours",
                color: "cyan",
                href: "mailto:Support@dkadamsrentals.com",
              },
              {
                icon: Phone,
                label: "Call Us",
                value: "509 205 5516",
                subtext: "24/7 emergency line",
                color: "violet",
                href: "tel:509 205 5516",
              },
              {
                icon: MapPin,
                label: "Visit Us",
                value: "12212 Craven Ave",
                subtext: "Cleveland, OH 44105",
                color: "cyan",
              },
              {
                icon: Clock,
                label: "Hours",
                value: "Mon-Sat: 6AM - 8PM",
                subtext: "Sunday: Emergency only",
                color: "violet",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 + index * 0.1 }}
                className={`group flex items-center gap-3 sm:gap-4 md:gap-5 p-4 sm:p-5 md:p-6 bg-white border border-violet-200 rounded-xl hover:border-cyan-400/50 hover:shadow-md transition-all duration-500 ${item.href ? 'cursor-pointer' : ''}`}
                onClick={() => handleContactClick(item.href)}
              >
                <div className={`flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg flex items-center justify-center border transition-colors duration-300 ${
                  item.color === "cyan" 
                    ? "bg-cyan-50 border-cyan-200 group-hover:bg-cyan-100" 
                    : "bg-violet-50 border-violet-200 group-hover:bg-violet-100"
                }`}>
                  <item.icon className={`w-5 h-5 sm:w-6 sm:h-6 ${item.color === "cyan" ? "text-cyan-600" : "text-violet-600"}`} />
                </div>
                <div className="flex-1 min-w-0">
                  <span className="text-slate-400 text-xs font-semibold uppercase tracking-wider block mb-0.5 sm:mb-1">
                    {item.label}
                  </span>
                  <span className="text-slate-900 font-bold text-sm sm:text-base md:text-lg block truncate">
                    {item.value}
                  </span>
                  <span className="text-slate-400 text-xs sm:text-sm">
                    {item.subtext}
                  </span>
                </div>
                {item.href && (
                  <div className="hidden sm:flex flex-shrink-0 w-9 h-9 md:w-10 md:h-10 rounded-full border border-violet-200 items-center justify-center group-hover:border-cyan-500 group-hover:bg-cyan-50 transition-all duration-300">
                    <ExternalLink className="w-4 h-4 text-violet-500 group-hover:text-cyan-600" />
                  </div>
                )}
              </motion.div>
            ))}
          </motion.div>

          {/* Right - Email CTA Card */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="lg:sticky lg:top-8"
          >
            <div className="relative bg-white border border-violet-200 rounded-2xl p-6 sm:p-8 md:p-10 lg:p-12 overflow-hidden text-center shadow-sm">
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 to-cyan-500" />
              
              {/* Decorative glow */}
              <div className="absolute -top-20 -right-20 w-32 h-32 sm:w-40 sm:h-40 bg-violet-200/30 rounded-full blur-3xl" />
              <div className="absolute -bottom-20 -left-20 w-32 h-32 sm:w-40 sm:h-40 bg-cyan-200/30 rounded-full blur-3xl" />

              <div className="relative z-10">
                <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 sm:mb-6 rounded-2xl bg-gradient-to-br from-violet-100 to-cyan-100 border border-violet-200 flex items-center justify-center">
                  <Mail className="w-8 h-8 sm:w-10 sm:h-10 text-cyan-600" />
                </div>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-900 mb-3 sm:mb-4">
                  Send Us an Email
                </h3>
                
                <p className="text-slate-500 text-sm sm:text-base mb-6 sm:mb-8 max-w-md mx-auto leading-relaxed">
                  Have questions about equipment availability, pricing, or rental terms? 
                  Click below to send us a message. We typically respond within 24 hours.
                </p>

                <motion.a
                  href="mailto:rentals@dkadams.com"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="group inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 md:px-10 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-violet-600 to-cyan-500 text-white font-bold text-sm sm:text-base md:text-lg uppercase tracking-wider rounded-lg hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300 w-full sm:w-auto justify-center"
                >
                  Send Mail
                  <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transform group-hover:translate-x-1 transition-transform" />
                </motion.a>

                <div className="mt-6 sm:mt-8 pt-6 sm:pt-8 border-t border-violet-100">
                  <p className="text-slate-400 text-xs sm:text-sm">
                    Or reach us directly at{" "}
                    <span className="text-cyan-600 font-semibold">Support@dkadamsrentals.com</span>
                  </p>
                </div>
              </div>
            </div>
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
          <div className="relative rounded-2xl overflow-hidden border border-violet-200 shadow-lg">
            
            <div className="w-full aspect-[16/9] md:aspect-[21/9]">
              <iframe
                src="https://www.google.com/maps?q=12212+Craven+Ave,Cleveland,OH+44105&output=embed"
                className="w-full h-full grayscale"
                style={{ border: 0, filter: "grayscale(100%)" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="DKAdams Rentals Location - 12212 Craven Ave, Cleveland, OH 44105"
              />
            </div>

            {/* Location card overlay */}
            <div className="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 z-20 bg-white/95 backdrop-blur-md border border-violet-200 rounded-xl p-3 sm:p-4 max-w-[200px] sm:max-w-xs shadow-lg">
              <div className="flex items-start gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg bg-cyan-50 border border-cyan-200 flex items-center justify-center flex-shrink-0">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-600" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-xs sm:text-sm mb-0.5 sm:mb-1">DKAdams Rentals</h4>
                  <p className="text-slate-500 text-xs leading-relaxed">
                    12212 Craven Ave<br />
                    Cleveland, OH 44105
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