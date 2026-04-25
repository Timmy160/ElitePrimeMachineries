import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowUp } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative bg-white border-t border-violet-200"
      style={{ fontFamily: '"Space Grotesk", "Inter", sans-serif' }}
    >
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />

      {/* Main Footer */}
      <div className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12 mb-12">
            
            {/* Brand Column */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-4">
                DKAdams{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-cyan-500">
                  Rentals
                </span>
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Your trusted partner for reliable construction equipment rental. 
                500+ machines, 24/7 support, same-day delivery.
              </p>
              
              {/* Contact mini */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-slate-500 text-sm">
                  <Mail className="w-4 h-4 text-cyan-600" />
                  <span>Support@dkadamsrentals.com</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500 text-sm">
                  <Phone className="w-4 h-4 text-violet-600" />
                  <span>509 205 5516</span>
                </div>
                <div className="flex items-center gap-3 text-slate-500 text-sm">
                  <MapPin className="w-4 h-4 text-cyan-600" />
                  <span>12212 Craven Ave, Cleveland, OH</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-wider text-sm">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "About Us", href: "#aboutus" },
                  { label: "Our Fleet", href: "#machinery" },
                  { label: "Services", href: "#ourservices" },
                  { label: "Gallery", href: "#gallery" },
                  { label: "Contact", href: "#contactus" },
                ].map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-slate-500 hover:text-cyan-600 transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-cyan-500 transition-all duration-300" />
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Equipment Categories */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-wider text-sm">
                Equipment
              </h4>
              <ul className="space-y-3">
                {[
                  "Construction",
                  "Industrial",
                  "Agricultural",
                  "Excavators",
                  "Loaders & Dozers",
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href="#machinery"
                      className="text-slate-500 hover:text-violet-600 transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-violet-500 transition-all duration-300" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 border-t border-violet-100 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            <p className="text-slate-400 text-sm">
              © {new Date().getFullYear()} DKAdams Rentals. All rights reserved.
            </p>
            
            <div className="flex items-center gap-6">
             
              {/* Back to top */}
              <button
                onClick={scrollToTop}
                className="w-10 h-10 rounded-full border border-violet-200 flex items-center justify-center hover:border-cyan-500 hover:bg-cyan-50 transition-all duration-300 group"
              >
                <ArrowUp className="w-5 h-5 text-slate-400 group-hover:text-cyan-600" />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;