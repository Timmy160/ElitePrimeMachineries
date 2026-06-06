import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronRight, X, Filter } from "lucide-react";

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
  const [expandedId, setExpandedId] = useState(null);

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

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section
      id="machinery"
      className="py-20 md:py-32 px-6 md:px-12 lg:px-20 bg-white min-h-screen"
      style={{ fontFamily: '"Space Grotesk", "Inter", sans-serif' }}
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex gap-8 mb-8">
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
              <span className="text-emerald-600 text-sm font-semibold tracking-[0.2em] uppercase">
                Full Inventory
              </span>
            </motion.div>
            
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.1 }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 max-w-2xl leading-tight"
            >
              Browse Our{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-500">
                Equipment Range
              </span>
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-slate-500 max-w-xl text-lg"
            >
              Explore our diverse fleet of well-maintained machinery across three core sectors. Tap any unit for full technical specifications.
            </motion.p>
          </div>
        </div>

        {/* Category Tabs — PILL STYLE horizontal, centered */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-wrap justify-center gap-2 md:gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`group relative px-6 py-3 rounded-full border transition-all duration-500 ${
                activeCategory === category
                  ? "border-emerald-500 bg-emerald-700 text-white shadow-lg"
                  : "border-slate-200 bg-white text-slate-500 hover:border-emerald-300 hover:text-emerald-600"
              }`}
            >
              <span className={`text-sm font-bold transition-colors duration-300 ${
                activeCategory === category ? "text-white" : ""
              }`}>
                {category}
              </span>
            </button>
          ))}
        </motion.div>

        {/* VERTICAL LIST LAYOUT — completely different from grid */}
        <motion.div
          key={activeCategory}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className="space-y-4"
        >
          {machineryData[activeCategory]?.map((machine, index) => {
            const isExpanded = expandedId === machine.id;
            
            return (
              <motion.div
                key={machine.id}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className={`group relative bg-white border rounded-xl overflow-hidden transition-all duration-500 ${
                  isExpanded ? "border-emerald-400 shadow-lg" : "border-slate-200 hover:border-emerald-300 hover:shadow-md"
                }`}
              >
                {/* Horizontal card: Image LEFT, content RIGHT */}
                <div className="flex flex-col sm:flex-row">
                  {/* Image — fixed width on left, square aspect */}
                  <div 
                    className="relative w-full sm:w-48 md:w-56 lg:w-64 h-48 sm:h-auto flex-shrink-0 overflow-hidden cursor-pointer"
                    onClick={() => openModal(machine)}
                  >
                    <img
                      src={machine.image}
                      alt={machine.name}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-slate-900/10" />
                    
                    {/* Price badge — top-left of image */}
                    <div className="absolute top-3 left-3 px-3 py-1 bg-emerald-700 text-white font-bold text-xs rounded-full shadow-sm">
                      {machine.price}
                    </div>
                    
                    {/* View overlay on hover */}
                    <div className="absolute inset-0 bg-emerald-600/0 group-hover:bg-emerald-600/20 transition-all duration-300 flex items-center justify-center">
                      <span className="px-4 py-2 bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider rounded-lg opacity-0 group-hover:opacity-100 transform scale-90 group-hover:scale-100 transition-all duration-300">
                        Enlarge
                      </span>
                    </div>
                  </div>

                  {/* Content — stacked vertically next to image */}
                  <div className="flex-1 p-5 md:p-6 flex flex-col justify-between">
                    <div>
                      <div className="flex items-start justify-between gap-4 mb-2">
                        <h3 className="text-lg md:text-xl font-bold text-slate-900 group-hover:text-emerald-600 transition-colors duration-300">
                          {machine.name}
                        </h3>
                        <button
                          onClick={() => toggleExpand(machine.id)}
                          className={`flex-shrink-0 w-8 h-8 rounded-full border flex items-center justify-center transition-all duration-300 ${
                            isExpanded 
                              ? "border-emerald-500 bg-emerald-50 text-emerald-600 rotate-90" 
                              : "border-slate-200 text-slate-400 group-hover:border-emerald-500 group-hover:text-emerald-600"
                          }`}
                        >
                          <ChevronRight className="w-4 h-4" />
                        </button>
                      </div>
                      
                      <p className="text-slate-500 text-sm leading-relaxed mb-4">
                        {machine.description}
                      </p>

                      {/* Spec tags — horizontal scroll */}
                      <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {machine.details.split("•").slice(0, 3).map((spec, i) => (
                          <span key={i} className="flex-shrink-0 px-3 py-1 bg-emerald-50 border border-emerald-100 rounded-full text-xs text-emerald-700">
                            {spec.trim()}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Bottom action row */}
                    <div className="flex items-center justify-between mt-4 pt-4 border-t border-slate-100">
                      <button
                        onClick={() => openModal(machine)}
                        className="text-emerald-600 text-sm font-semibold hover:text-amber-600 transition-colors duration-300 flex items-center gap-1"
                      >
                        Full Specs
                        <ChevronRight className="w-4 h-4" />
                      </button>
                      
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => {
                          document.getElementById("contactus")?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="px-5 py-2 bg-emerald-700 text-white text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-amber-500 hover:text-slate-900 transition-all duration-300"
                      >
                        Reserve
                      </motion.button>
                    </div>
                  </div>
                </div>

                {/* Expandable specs section */}
                <AnimatePresence>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden border-t border-slate-100"
                    >
                      <div className="p-5 md:p-6 bg-slate-50">
                        <h4 className="text-emerald-600 font-semibold uppercase tracking-wider text-xs mb-3">
                          Complete Specifications
                        </h4>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                          {machine.details.split("•").filter(s => s.trim()).map((spec, i) => (
                            <div key={i} className="flex items-center gap-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-amber-500 flex-shrink-0" />
                              <span className="text-slate-600 text-sm">{spec.trim()}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Left accent bar */}
                <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-emerald-600 to-amber-500 transition-all duration-500 ${
                  isExpanded ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                }`} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Modal — side panel instead of centered overlay */}
      <AnimatePresence>
        {selectedMachine && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-50"
            onClick={closeModal}
          >
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="absolute right-0 top-0 bottom-0 w-full max-w-xl bg-white border-l border-slate-200 shadow-2xl overflow-y-auto"
            >
              {/* Close button */}
              <button
                onClick={closeModal}
                className="absolute top-4 right-4 z-20 w-10 h-10 bg-white/90 border border-slate-200 rounded-full flex items-center justify-center text-slate-500 hover:text-slate-900 hover:border-emerald-500 transition-all duration-300 shadow-sm"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Image — full width at top */}
              <div className="relative h-64 md:h-80 bg-slate-100">
                <img
                  src={selectedMachine.image}
                  alt={selectedMachine.name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block px-3 py-1 bg-emerald-700 text-white font-bold text-sm rounded-full mb-2">
                    {selectedMachine.price}
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold text-white">
                    {selectedMachine.name}
                  </h3>
                </div>
              </div>

              <div className="p-6 md:p-8">
                <p className="text-slate-600 text-base leading-relaxed mb-6">
                  {selectedMachine.description}
                </p>

                {/* Specs */}
                <div className="mb-8">
                  <h4 className="text-emerald-600 font-semibold uppercase tracking-wider text-xs mb-4">
                    Technical Specifications
                  </h4>
                  <div className="space-y-3">
                    {selectedMachine.details.split("•").filter(s => s.trim()).map((spec, i) => (
                      <div key={i} className="flex items-start gap-3 p-3 bg-emerald-50 border border-emerald-100 rounded-lg">
                        <div className="w-2 h-2 rounded-full bg-amber-500 mt-1.5 flex-shrink-0" />
                        <span className="text-slate-700 text-sm">{spec.trim()}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTAs */}
                <div className="space-y-3">
                  <motion.button
                    whileHover={{ scale: 1.01 }}
                    whileTap={{ scale: 0.99 }}
                    onClick={() => {
                      closeModal();
                      document.getElementById("contactus")?.scrollIntoView({ behavior: "smooth" });
                    }}
                    className="w-full py-4 bg-emerald-700 text-white font-bold uppercase tracking-wider rounded-lg hover:bg-amber-500 hover:text-slate-900 transition-all duration-300"
                  >
                    Request This Unit
                  </motion.button>
                  <button
                    onClick={closeModal}
                    className="w-full py-4 border border-slate-200 text-slate-600 font-semibold rounded-lg hover:border-emerald-500 hover:text-slate-900 transition-all duration-300"
                  >
                    Continue Browsing
                  </button>
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