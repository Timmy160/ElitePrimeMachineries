import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import  logo from "../assets/IMG/elitelogo.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { label: "Inventory", target: "#machinery", desc: "Browse Assets" },
    { label: "Solutions", target: "#ourservices", desc: "What We Deliver" },
    { label: "Projects", target: "#projects", desc: "Pipeline Work" },
    { label: "Company", target: "#aboutus", desc: "Our Foundation" },
    { label: "Connect", target: "#contactus", desc: "Start a Dialogue" },
  ];

  return ( 
    <header
      className="absolute top-0 left-0 w-full z-50"
      style={{ fontFamily: '"Space Grotesk", "Inter", sans-serif' }}
    >
      <nav className="relative container mx-auto flex items-center justify-between px-6 md:px-12 lg:px-20 py-5 md:py-6">
        
        {/* Logo — VISIBLE ON ALL SCREENS, bolder text */}
        <motion.a
          href="/"
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center gap-3 focus:outline-none"
          aria-label="Elite Prime Machineries - Return to Home"
        >
          <img
            src={logo}
            alt="Elite Prime Machineries"
            className="h-10 sm:h-12 w-auto object-contain rounded-lg"
            loading="eager"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-white font-extrabold text-sm uppercase tracking-[0.15em]">
              Elite Prime
            </span>
            <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-emerald-400">
              Machineries
            </span>
          </div>
        </motion.a>

        {/* Desktop Navigation — CENTERED */}
        <div className="hidden md:flex items-center gap-8 lg:gap-10 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((item, i) => (
            <motion.a
              key={i}
              href={item.target}
              className="relative group text-white/60 hover:text-white text-xs font-semibold tracking-[0.15em] uppercase transition-colors duration-300"
            >
              {item.label}
              <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-0 h-px group-hover:w-full transition-all duration-300 bg-emerald-400" />
            </motion.a>
          ))}
        </div>

        {/* Desktop CTA — RIGHT SIDE */}
        <motion.a
          href="#machinery"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          className="hidden md:flex relative overflow-hidden px-6 py-2.5 text-xs font-bold tracking-[0.15em] uppercase text-white rounded-full border border-emerald-500/40 hover:border-emerald-400 transition-colors duration-300"
        >
          <motion.div
            className="absolute inset-0 bg-emerald-600"
            initial={{ y: "100%" }}
            whileHover={{ y: 0 }}
            transition={{ duration: 0.3 }}
          />
          <span className="relative z-10">Get Started</span>
        </motion.a>

        {/* Mobile Hamburger — RIGHT SIDE */}
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
              transition={{ duration: 0.3 }}
              className="block h-0.5 origin-right"
              style={{ background: isOpen ? "#f59e0b" : "white" }}
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
              transition={{ duration: 0.3 }}
              className="block h-0.5 origin-right"
              style={{ background: isOpen ? "#f59e0b" : "white" }}
            />
          </motion.div>
        </button>
      </nav>

      {/* ===== MOBILE MENU ===== */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-40 md:hidden"
              style={{ background: "rgba(15,23,42,0.7)", backdropFilter: "blur(4px)" }}
              onClick={() => setIsOpen(false)}
            />

            {/* Slide-in panel — from RIGHT */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="fixed top-0 right-0 h-full w-4/5 max-w-sm z-40 md:hidden flex flex-col"
              style={{ background: "#0f172a", borderLeft: "1px solid rgba(16,185,129,0.2)" }}
            >
              {/* Emerald/amber top bar */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-gradient-to-r from-emerald-600 via-emerald-400 to-amber-500" />

              {/* Menu content */}
              <div className="flex flex-col flex-1 px-8 pt-24 pb-10">
                {/* Brand */}
                <div className="mb-12">
                  <div className="text-white font-extrabold uppercase text-2xl tracking-[0.1em]">
                    Elite Prime
                  </div>
                  <div className="text-xs uppercase tracking-[0.3em] font-bold text-emerald-400">
                    Machineries
                  </div>
                  <div className="mt-4 w-12 h-px bg-gradient-to-r from-emerald-500 to-amber-500" />
                </div>

                <nav className="flex flex-col gap-2">
                  {navLinks.map((item, i) => (
                    <motion.a
                      key={i}
                      href={item.target}
                      onClick={() => setIsOpen(false)}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: 20 }}
                      transition={{ delay: 0.1 + i * 0.08, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                      className="group py-5 flex items-center justify-between border-b border-emerald-500/10"
                    >
                      <div>
                        <div className="text-white group-hover:text-emerald-400 font-bold uppercase transition-colors duration-300 text-lg tracking-[0.08em]">
                          {item.label}
                        </div>
                        <div className="text-[10px] uppercase tracking-widest font-medium text-emerald-500/50 transition-colors duration-300 group-hover:text-amber-400/70">
                          {item.desc}
                        </div>
                      </div>
                      <div className="w-8 h-8 rounded-full border border-emerald-500/20 flex items-center justify-center group-hover:border-emerald-400 group-hover:bg-emerald-500/10 transition-all duration-300">
                        <svg
                          className="w-4 h-4 text-emerald-500/50 group-hover:text-emerald-400 group-hover:translate-x-0.5 transition-all duration-300"
                          fill="none" viewBox="0 0 24 24" stroke="currentColor"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </motion.a>
                  ))}
                </nav>

                {/* Mobile CTA */}
                <motion.a
                  href="#machinery"
                  onClick={() => setIsOpen(false)}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ delay: 0.45, duration: 0.4 }}
                  className="mt-10 flex items-center justify-center gap-3 py-4 font-bold text-sm tracking-[0.15em] uppercase text-white rounded-full bg-emerald-700 hover:bg-amber-500 hover:text-slate-900 transition-colors duration-300"
                >
                  Get Started
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </motion.a>
              </div>

              {/* Footer stats */}
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="px-8 py-6 flex justify-between text-[10px] uppercase tracking-widest font-semibold border-t border-emerald-500/15 text-emerald-500/60"
              >
                <span>750+ Assets</span>
                <span>Round-Clock</span>
                <span>Swift Deploy</span>
              </motion.div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;