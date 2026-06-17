import React from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Wrench, Calendar, Shield, Linkedin } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      className="relative bg-slate-50 border-t border-slate-200"
      style={{ fontFamily: '"Space Grotesk", "Inter", sans-serif' }}
    >
      {/* Top accent line — left-aligned instead of centered */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-emerald-600/50 via-amber-500/50 to-transparent" />

      {/* Main Footer */}
      <div className="py-16 px-6 md:px-12 lg:px-20">
        <div className="max-w-7xl mx-auto">
          {/* NEW: Top feature strip — 3 columns above the main grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 mb-12 pb-12 border-b border-slate-200"
          >
            {[
              {
                icon: Wrench,
                title: "Fleet Maintenance",
                desc: "200-point inspection protocol",
              },
              {
                icon: Calendar,
                title: "Flexible Terms",
                desc: "Daily to annual agreements",
              },
              {
                icon: Shield,
                title: "Full Coverage",
                desc: "Insurance included on every unit",
              },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-4 p-4 bg-white rounded-xl border border-slate-200">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-200 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-emerald-600" />
                </div>
                <div>
                  <h4 className="text-slate-900 font-bold text-sm">{item.title}</h4>
                  <p className="text-slate-400 text-xs">{item.desc}</p>
                </div>
              </div>
            ))}
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            
            {/* Brand Column — wider, with tagline below instead of beside */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-1"
            >
              <h3 className="text-2xl font-bold text-slate-900 mb-2">
                Elite Prime{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-500">
                  Machineries
                </span>
              </h3>
              <p className="text-slate-500 text-sm leading-relaxed mb-6">
                Pipeline construction and heavy equipment solutions for construction, 
                industrial, and energy operations. 750+ certified units, nationwide 
                dispatch, and infrastructure built to last.
              </p>
              
              {/* Contact mini — horizontal on desktop instead of vertical stack */}
              <div className="flex flex-wrap gap-x-6 gap-y-2">
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <Mail className="w-4 h-4 text-emerald-600" />
                  <span>info@eliteprimemachineries.com</span>
                </div>
                
                <div className="flex items-center gap-2 text-slate-500 text-sm">
                  <MapPin className="w-4 h-4 text-emerald-600" />
                  <span>138 E 50th St #Tr61, New York, NY 10022</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links — 2 columns on tablet instead of 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-wider text-sm">
                Navigate
              </h4>
              <ul className="space-y-3">
                {[
                  { label: "Company", href: "#aboutus" },
                  { label: "Projects", href: "#projects" },
                  { label: "Inventory", href: "#machinery" },
                  { label: "Solutions", href: "#ourservices" },
                  { label: "Fleet Preview", href: "#gallery" },
                  { label: "Connect", href: "#contactus" },
                ].map((link, i) => (
                  <li key={i}>
                    <a
                      href={link.href}
                      className="text-slate-500 hover:text-emerald-600 transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-emerald-500 transition-all duration-300" />
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
                  "Earthmoving",
                  "Material Handling",
                  "Compaction",
                  "Agricultural",
                  "Power & Access",
                ].map((item, i) => (
                  <li key={i}>
                    <a
                      href="#machinery"
                      className="text-slate-500 hover:text-amber-600 transition-colors duration-300 text-sm flex items-center gap-2 group"
                    >
                      <span className="w-0 group-hover:w-2 h-px bg-amber-500 transition-all duration-300" />
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Fourth column — Hours & Status */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h4 className="text-slate-900 font-bold mb-6 uppercase tracking-wider text-sm">
                Operations
              </h4>
              <div className="space-y-4">
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <div className="flex items-center gap-2 mb-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-emerald-600 text-xs font-semibold uppercase tracking-wider">Dispatch Active</span>
                  </div>
                  <p className="text-slate-900 font-bold text-sm">Mon – Sat: 6AM – 8PM</p>
                  <p className="text-slate-400 text-xs">Emergency: 24/7</p>
                </div>
                <div className="p-4 bg-white rounded-xl border border-slate-200">
                  <p className="text-slate-900 font-bold text-sm">Same-Day Deploy</p>
                  <p className="text-slate-400 text-xs">Available within 50mi radius</p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar — LinkedIn on LEFT, copyright on RIGHT */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="pt-8 border-t border-slate-200 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            {/* LinkedIn — LEFT side */}
            <button
              onClick={scrollToTop}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:border-blue-600 hover:bg-blue-50 transition-all duration-300 group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-slate-400 group-hover:text-blue-600" />
            </button>

            <p className="text-slate-400 text-sm order-first md:order-none">
              © {new Date().getFullYear()} Elite Prime Machineries. All rights reserved.
            </p>
          </motion.div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;