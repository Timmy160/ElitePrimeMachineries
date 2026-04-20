import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// All image imports preserved exactly as you have them
import WheelLoader from "../assets/IMG/Wheel.jpg";
import Hydraulic from "../assets/IMG/Hydraulic.jpg";
import ForkLift from "../assets/IMG/ForkLift.jpg";
import Tractor from "../assets/IMG/Tractor.jpg";
import Dozer from "../assets/IMG/Dozer.jpg";
import Grader from "../assets/IMG/Grader.jpg";
import Roller from "../assets/IMG/Roller.jpg";
import Loader from "../assets/IMG/Loader.jpg";
import Truck from "../assets/IMG/Truck.jpg";
import Digger from "../assets/IMG/Digger.jpg";
import Handler from "../assets/IMG/Handler.jpg";
import Generator from "../assets/IMG/Generator.jpg";
import Compressor from "../assets/IMG/Compressor.jpg";
import ScissorLift from "../assets/IMG/ScissorLift.jpg";
import BoomLift from "../assets/IMG/BoomLift.jpg";
import WeldingMachine from "../assets/IMG/WeldingMachine.jpg";
import MaterialHoist from "../assets/IMG/MaterialHoist.jpg";
import LightTower from "../assets/IMG/LightTower.jpg";
import ContainerHandler from "../assets/IMG/ContainerHandler.jpg";
import CombineHarvester from "../assets/IMG/CombineHarvester.jpg";
import DiscHarrow from "../assets/IMG/DiscHarrow.jpg";
import Sprayer from "../assets/IMG/Sprayer.jpg";
import RotaryTiller from "../assets/IMG/RotaryTiller.jpg";
import Baler from "../assets/IMG/Baler.jpg";
import MowerConditioner from "../assets/IMG/MowerConditioner.jpg";
import Subsoiler from "../assets/IMG/Subsoiler.jpg";
import HayRake from "../assets/IMG/HayRake.jpg";
import ManureSpreader from "../assets/IMG/ManureSpreader.jpg";

function MachineryListings() {
  const [activeCategory, setActiveCategory] = useState("Construction");
  const [selectedMachine, setSelectedMachine] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const machineryData = {
    Construction: [
        {
        id: 1,
        name: "Wheel Loader (3 m³ Bucket)",
        description: "Versatile loader for material handling, grading, and loading trucks efficiently.",
        price: "$780 / day",
        image: WheelLoader,
        details: "Bucket capacity: 3 m³ • Operating weight: 17,500 kg • Engine: 200 hp • Tipping load: 11,000 kg",
      },
      {
        id: 2,
        name: "Motor Grader (140M)",
        description: "Precision grader for road construction, maintenance, and fine surface leveling.",
        price: "$890 / day",
        image: Grader,
        details: "Blade width: 3.7 m • Engine power: 195 hp • Moldboard lift above ground: 480 mm",
      },
      {
        id: 3,
        name: "Hydraulic Excavator (20 Ton)",
        description: "Powerful digging and trenching machine with strong breakout force. Ideal for foundations and site prep.",
        price: "$950 / day",
        image: Hydraulic,
        details: "Operating weight: 20,000 kg • Engine power: 150 hp • Max digging depth: 6.5 m • Bucket capacity: 0.8–1.2 m³",
      },
      {
        id: 4,
        name: "Crawler Dozer (D8 Class)",
        description: "Heavy-duty crawler dozer for large-scale earthmoving, land clearing, and rough grading.",
        price: "$1,200 / day",
        image: Dozer,
        details: "Blade capacity: 8–12 m³ • Operating weight: 38,000 kg • Engine power: 310 hp",
      },
      {
        id: 5,
        name: "Vibratory Roller (10 Ton)",
        description: "Smooth drum roller for compacting asphalt, gravel, and sub-base materials.",
        price: "$650 / day",
        image: Roller,
        details: "Operating weight: 10,000 kg • Vibration frequency: 30–35 Hz • Drum width: 2.1 m",
      },
      {
        id: 6,
        name: "Skid Steer Loader (Compact)",
        description: "Maneuverable loader for tight spaces, landscaping, and light material handling.",
        price: "$420 / day",
        image: Loader,
        details: "Rated operating capacity: 900 kg • Engine power: 60 hp • Lift height: 2.8 m",
      },
      {
        id: 7,
        name: "Dump Truck (25 Ton Articulated)",
        description: "Off-road articulated dump truck for hauling earth, sand, and aggregates.",
        price: "$1,450 / day",
        image: Truck,
        details: "Payload capacity: 25,000 kg • Engine power: 320 hp • Heaped capacity: 15 m³",
      },
      {
        id: 10,
        name: "Mini Digger (1.8 Ton)",
        description: "Compact excavator for confined spaces, trenching, and landscaping work.",
        price: "$380 / day",
        image: Digger,
        details: "Operating weight: 1,800 kg • Dig depth: 2.4 m • Engine power: 18 hp",
      },
    ],

    Industrial: [
      {
        id: 5,
        name: "Rough Terrain Forklift (5 Ton)",
        description: "All-terrain forklift with high lift capacity for warehouse, yard, and industrial material handling.",
        price: "$520 / day",
        image: ForkLift,
        details: "Load capacity: 5,000 kg • Lift height: 6 m • 4WD • Diesel engine",
      },
      {
        id: 11,
        name: "Telescopic Handler (4 Ton / 17m)",
        description: "Reach forklift for loading/unloading at height in industrial yards and warehouses.",
        price: "$680 / day",
        image: Handler,
        details: "Max lift capacity: 4,000 kg • Max lift height: 17 m • Stabilizers included",
      },
      {
        id: 12,
        name: "Industrial Diesel Generator",
        description: "High-capacity standby/prime power generator for factories, events, and construction sites.",
        price: "$420 / day",
        image: Generator,
        details: "Rated power: 300 kVA • Fuel tank: 500 L • Sound attenuated canopy",
      },
      {
        id: 13,
        name: "Air Compressor",
        description: "Portable diesel air compressor for powering pneumatic tools and sandblasting.",
        price: "$280 / day",
        image: Compressor,
        details: "Free air delivery: 185 CFM • Working pressure: 7–12 bar • Towable",
      },
      {
        id: 14,
        name: "Scissor Lift",
        description: "Battery-powered scissor lift for indoor/outdoor maintenance and installation work.",
        price: "$320 / day",
        image: ScissorLift,
        details: "Working height: 10 m • Platform capacity: 230 kg • Non-marking tires",
      },
      {
        id: 15,
        name: "Boom Lift (Articulating 20m)",
        description: "Diesel articulating boom lift for reaching over obstacles in industrial settings.",
        price: "$580 / day",
        image: BoomLift,
        details: "Working height: 20 m • Horizontal outreach: 12 m • 4WD",
      },
      {
        id: 16,
        name: "Portable Welding Machine (400A)",
        description: "Heavy-duty diesel welder/generator for site welding and power supply.",
        price: "$250 / day",
        image: WeldingMachine,
        details: "Output current: 60–400 A • Duty cycle: 60% • 10 kVA auxiliary power",
      },
      {
        id: 18,
        name: "Material Hoist",
        description: "Rack-and-pinion hoist for lifting materials to upper floors in industrial plants.",
        price: "$750 / day",
        image: MaterialHoist,
        details: "Payload: 2,000 kg • Max height: 100 m • Speed: 36 m/min",
      },
      {
        id: 19,
        name: "Portable Light Tower (800W/1200W LED)",
        description: "Mobile LED light tower for night work, security, and emergency lighting.",
        price: "$180 / day",
        image: LightTower,
        details: "Illumination: 4 × 1000 W LED • Mast height: 8 m • Diesel generator",
      },
      {
        id: 20,
        name: "Container Handler (Empty)",
        description: "Reach stacker for handling empty containers in industrial yards and ports.",
        price: "$1,600 / day",
        image: ContainerHandler,
        details: "Lifting capacity: 10 tons • Stacking height: 5 high • Diesel engine",
      },
    ],

    Agricultural: [
      {
        id: 8,
        name: "Tractor (80 HP)",
        description: "Powerful 4WD tractor for plowing, tilling, hauling, and farm implement operations.",
        price: "$580 / day",
        image: Tractor,
        details: "Engine power: 80 hp • 4WD • PTO: 540/1000 rpm • 3-point hitch Category II",
      },
      {
        id: 21,
        name: "Combine Harvester (Small Grain)",
        description: "Self-propelled combine for harvesting wheat, barley, rice, and other grains.",
        price: "$1,400 / day",
        image: CombineHarvester,
        details: "Cutting width: 4.5 m • Grain tank: 4,500 L • Engine power: 220 hp",
      },
      {
        id: 22,
        name: "Disc Harrow",
        description: "Heavy-duty offset disc harrow for primary tillage and soil preparation.",
        price: "$320 / day",
        image: DiscHarrow,
        details: "Working width: 3 m • Disc diameter: 660 mm • Tractor power required: 80–120 hp",
      },
      {
        id: 24,
        name: "Sprayer (Boom 24m)",
        description: "Self-propelled boom sprayer for efficient pesticide and fertilizer application.",
        price: "$890 / day",
        image: Sprayer,
        details: "Tank capacity: 4,000 L • Boom width: 24 m • GPS-guided",
      },
      {
        id: 25,
        name: "Rotary Tiller",
        description: "Heavy-duty rotary tiller for seedbed preparation and weed control.",
        price: "$260 / day",
        image: RotaryTiller,
        details: "Working width: 2.5 m • Tractor power: 60–90 hp • Gear-driven",
      },
      {
        id: 26,
        name: "Baler (Round – Large)",
        description: "Large round baler for hay, straw, and silage baling.",
        price: "$680 / day",
        image: Baler,
        details: "Bale diameter: 1.2–1.8 m • Bale width: 1.2 m • Net wrap system",
      },
      {
        id: 27,
        name: "Mower-Conditioner",
        description: "High-speed disc mower-conditioner for cutting and conditioning forage crops.",
        price: "$520 / day",
        image: MowerConditioner,
        details: "Cutting width: 3.5 m • Conditioner type: Steel rollers • PTO: 1000 rpm",
      },
      {
        id: 28,
        name: "Manure Spreader (10 m³)",
        description: "Trailing manure spreader for even distribution of organic fertilizer.",
        price: "$380 / day",
        image: ManureSpreader,
        details: "Capacity: 10 m³ • Spreading width: 12–24 m • Vertical beaters",
      },
      {
        id: 29,
        name: "Subsoiler (5 Shank)",
        description: "Deep tillage subsoiler for breaking up hardpan and improving soil drainage.",
        price: "$180 / day",
        image: Subsoiler,
        details: "Working depth: up to 60 cm • Shank spacing: 75 cm • Tractor power: 150+ hp",
      },
      {
        id: 30,
        name: "Hay Rake (Rotary 9m)",
        description: "Large rotary rake for gathering hay and forage into windrows.",
        price: "$340 / day",
        image: HayRake,
        details: "Working width: 9 m • Rotor diameter: 3.8 m • Hydraulic folding",
      },
    ],
  };

  const categories = ["Construction", "Industrial", "Agricultural"];

  const openModal = (machine) => {
    setSelectedMachine(machine);
  };

  const closeModal = () => {
    setSelectedMachine(null);
  };

  return (
    <section
      id="machinery"
      className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-[#0f0a1a] min-h-screen"
      style={{ fontFamily: '"Space Grotesk", "Inter", sans-serif' }}
    >
      {/* Header */}
      <div className="max-w-7xl mx-auto mb-12">
        <div className="flex gap-8 mb-8">
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
              <span className="text-cyan-400 text-sm font-semibold tracking-[0.2em] uppercase">
                Our Fleet
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white max-w-2xl leading-tight"
            >
              Available{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400">
                Machinery
              </span>{" "}
              for Rent
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-slate-400 max-w-xl text-lg"
            >
              Browse our wide range of well-maintained equipment. Click any machine for full specifications.
            </motion.p>
          </div>
        </div>

        {/* Category Tabs - NO COUNT BADGES */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`group relative px-8 py-4 rounded-xl border transition-all duration-500 ${
                activeCategory === category
                  ? "border-cyan-400 bg-gradient-to-r from-violet-600/20 to-cyan-400/10"
                  : "border-violet-500/20 bg-[#1a1033]/50 hover:border-violet-500/40"
              }`}
            >
              <span className={`text-lg font-bold transition-colors duration-300 ${
                activeCategory === category ? "text-white" : "text-slate-400 group-hover:text-white"
              }`}>
                {category}
              </span>
              
              {/* Active indicator line */}
              {activeCategory === category && (
                <motion.div
                  layoutId="activeTab"
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-violet-600 to-cyan-400"
                />
              )}
            </button>
          ))}
        </motion.div>

        {/* Masonry Grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {machineryData[activeCategory]?.map((machine, index) => {
            const isLarge = index === 0 || index === 6;
            
            return (
              <motion.div
                key={machine.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                onMouseEnter={() => setHoveredCard(machine.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => openModal(machine)}
                className={`group cursor-pointer relative overflow-hidden rounded-2xl border border-violet-500/20 hover:border-cyan-400/50 transition-all duration-500 ${
                  isLarge ? "md:col-span-2 lg:col-span-2" : ""
                }`}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#1a1033] to-[#0f0a1a]" />
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/0 to-cyan-400/0 group-hover:from-violet-600/10 group-hover:to-cyan-400/10 transition-all duration-500" />

                {/* Image Container */}
                <div className={`relative overflow-hidden ${isLarge ? "h-64" : "h-48"}`}>
                  <img
                    src={machine.image}
                    alt={machine.name}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a1a] via-transparent to-transparent opacity-60" />
                  
                  {/* Price badge */}
                  <div className="absolute top-4 right-4 px-3 py-1 bg-slate-900/80 backdrop-blur-sm border border-cyan-400/30 rounded-full">
                    <span className="text-cyan-400 font-bold text-sm">{machine.price}</span>
                  </div>

                  {/* Hover overlay */}
                  <AnimatePresence>
                    {hoveredCard === machine.id && (
                      <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="absolute inset-0 bg-violet-600/20 backdrop-blur-sm flex items-center justify-center"
                      >
                        <span className="px-6 py-3 bg-cyan-400 text-slate-900 font-bold uppercase tracking-wider rounded-lg flex items-center gap-2">
                          View Details
                          <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </span>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Content */}
                <div className="relative z-10 p-6">
                  <h3 className={`font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors duration-300 ${isLarge ? "text-xl" : "text-lg"}`}>
                    {machine.name}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed line-clamp-2">
                    {machine.description}
                  </p>
                  
                  <div className="mt-4 flex flex-wrap gap-2">
                    {machine.details.split("•").slice(0, 2).map((spec, i) => (
                      <span key={i} className="px-2 py-1 bg-violet-500/10 border border-violet-500/20 rounded text-xs text-violet-300">
                        {spec.trim()}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-violet-600 to-cyan-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Modal - CLEAR FULL-SIZE IMAGE */}
      <AnimatePresence>
        {selectedMachine && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-slate-950/95 backdrop-blur-md flex items-center justify-center z-50 p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-[#1a1033] to-[#0f0a1a] border border-violet-500/30 rounded-2xl max-w-4xl w-full max-h-[95vh] overflow-y-auto relative"
            >
              {/* Top accent line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-violet-600 to-cyan-400 z-10" />
              
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 w-10 h-10 bg-slate-900/80 border border-violet-500/30 rounded-full flex items-center justify-center text-slate-400 hover:text-white hover:border-cyan-400 transition-all duration-300 z-10"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <div className="p-0">
                {/* FULL-SIZE IMAGE - No cropping, natural aspect ratio */}
                <div className="relative w-full bg-[#0a0612] flex items-center justify-center p-4 md:p-8">
                  <img
                    src={selectedMachine.image}
                    alt={selectedMachine.name}
                    className="max-w-full max-h-[60vh] w-auto h-auto object-contain rounded-lg shadow-2xl"
                  />
                  
                  {/* Price tag overlay */}
                  <div className="absolute bottom-6 right-6 px-4 py-2 bg-cyan-400 text-slate-900 font-bold text-lg rounded-lg shadow-lg">
                    {selectedMachine.price}
                  </div>
                </div>

                <div className="p-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {selectedMachine.name}
                  </h3>

                  <p className="text-slate-400 text-lg leading-relaxed mb-6">
                    {selectedMachine.description}
                  </p>

                  {/* Specs grid */}
                  <div className="mb-8">
                    <h4 className="text-cyan-400 font-semibold uppercase tracking-wider text-sm mb-4">
                      Technical Specifications
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {selectedMachine.details.split("•").filter(s => s.trim()).map((spec, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 bg-violet-500/10 border border-violet-500/20 rounded-lg">
                          <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 mt-2 flex-shrink-0" />
                          <span className="text-slate-300 text-sm">{spec.trim()}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-col sm:flex-row gap-4">
                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      onClick={() => {
                        closeModal();
                        document.getElementById("contactus")?.scrollIntoView({ behavior: "smooth" });
                      }}
                      className="flex-1 py-4 bg-gradient-to-r from-violet-600 to-cyan-400 text-slate-900 font-bold uppercase tracking-wider rounded-lg hover:shadow-lg hover:shadow-cyan-400/20 transition-all duration-300"
                    >
                      Rent This Machine
                    </motion.button>
                    <button
                      onClick={closeModal}
                      className="flex-1 py-4 border border-violet-500/30 text-slate-300 font-semibold rounded-lg hover:border-cyan-400 hover:text-white transition-all duration-300"
                    >
                      Continue Browsing
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}

export default MachineryListings;