import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Dkadams_logo from "../assets/IMG/Dkadams_logo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Fleet", target: "#machinery", desc: "Browse Equipment" },
    { label: "Services", target: "#ourservices", desc: "What We Offer" },
    { label: "About", target: "#aboutus", desc: "Our Story" },
    { label: "Contact", target: "#contactus", desc: "Get In Touch" },
  ];

  return (
    <header
      className="absolute top-0 left-0 w-full z-50 px-6 md:px-12 lg:px-20"
      style={{ fontFamily: '"Space Grotesk", "Inter", sans-serif' }}
    >
      <nav className="container mx-auto flex items-center justify-between py-6 md:py-8">
        {/* Logo */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center focus:outline-none"
          aria-label="DKAdams Rentals - Return to Home"
        >
          <img
            src={Dkadams_logo}
            alt="DKAdams Rentals - Equipment Rental Services"
            className="h-10 sm:h-12 md:h-14 w-auto object-contain rounded-lg"
            loading="eager"
          />
        </motion.a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10">
          {navLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.target}
              whileHover={{ y: -2 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="text-slate-300 hover:text-cyan-400 font-medium text-sm tracking-wider uppercase transition-colors duration-300"
            >
              {item.label}
            </motion.a>
          ))}
          
          <motion.a
            href="#machinery"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="px-5 py-2.5 bg-violet-600 text-white font-bold text-sm tracking-wider uppercase rounded-sm hover:bg-cyan-400 hover:text-slate-900 transition-colors duration-300"
          >
            Rent Now
          </motion.a>
        </div>

        {/* Mobile Hamburger */}
        <button
          className="md:hidden relative z-50 w-10 h-10 flex items-center justify-center focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
        >
          <motion.div
            animate={isOpen ? "open" : "closed"}
            className="w-6 h-5 flex flex-col justify-between items-end"
          >
            <motion.span
              variants={{
                closed: { width: "1.5rem", rotate: 0, y: 0 },
                open: { width: "1.5rem", rotate: -45, y: 9 },
              }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="block h-0.5 bg-white origin-right"
            />
            <motion.span
              variants={{
                closed: { width: "1rem", opacity: 1 },
                open: { width: 0, opacity: 0 },
              }}
              transition={{ duration: 0.2 }}
              className="block h-0.5 bg-white"
            />
            <motion.span
              variants={{
                closed: { width: "1.25rem", rotate: 0, y: 0 },
                open: { width: "1.5rem", rotate: 45, y: -9 },
              }}
              transition={{ duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="block h-0.5 bg-white origin-right"
            />
          </motion.div>
        </button>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-slate-950/95 backdrop-blur-md z-40 md:hidden"
              onClick={() => setIsOpen(false)}
            />
            
            <motion.div
              initial={{ clipPath: "circle(0% at calc(100% - 2rem) 2rem)" }}
              animate={{ clipPath: "circle(150% at calc(100% - 2rem) 2rem)" }}
              exit={{ clipPath: "circle(0% at calc(100% - 2rem) 2rem)" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="fixed inset-0 bg-gradient-to-br from-[#0f0a1a] via-[#1a1033] to-[#0f0a1a] z-40 md:hidden flex flex-col"
            >
              <motion.div
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                exit={{ scaleX: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 via-purple-500 to-cyan-400 origin-left"
              />

              <div className="flex-1 flex flex-col justify-center px-8 py-20">
                <nav className="flex flex-col gap-2">
                  {navLinks.map((item, i) => (
                    <motion.a
                      key={i}
                      href={item.target}
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: -60, skewX: -5 }}
                      animate={{ opacity: 1, x: 0, skewX: 0 }}
                      exit={{ opacity: 0, x: -40 }}
                      transition={{ 
                        delay: 0.1 + i * 0.1, 
                        duration: 0.5,
                        ease: [0.22, 1, 0.36, 1]
                      }}
                      className="group py-4 border-b border-violet-500/20"
                    >
                      <div className="flex items-baseline gap-4">
                        <span className="text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors duration-300 uppercase tracking-tight">
                          {item.label}
                        </span>
                        <span className="text-xs text-violet-300 group-hover:text-violet-200 transition-colors duration-300 uppercase tracking-wider">
                          {item.desc}
                        </span>
                      </div>
                    </motion.a>
                  ))}
                </nav>

                <motion.div
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: 0.5, duration: 0.5 }}
                  className="mt-12"
                >
                  <a
                    href="#machinery"
                    onClick={() => setIsOpen(false)}
                    className="group flex items-center gap-4"
                  >
                    <span className="px-8 py-4 bg-violet-600 text-white font-bold text-lg uppercase tracking-wider rounded-sm">
                      Rent Now
                    </span>
                    <motion.span
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                      className="text-cyan-400"
                    >
                      <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                      </svg>
                    </motion.span>
                  </a>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: 0.6, duration: 0.4 }}
                className="px-8 py-6 border-t border-violet-500/20"
              >
                <div className="flex justify-between text-xs uppercase tracking-wider">
                  <span className="text-violet-300">500+ Units</span>
                  <span className="text-cyan-400">24/7 Support</span>
                  <span className="text-violet-300">Same-Day</span>
                </div>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;