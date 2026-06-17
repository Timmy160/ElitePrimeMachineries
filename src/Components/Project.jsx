import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, ArrowRight, X, CheckCircle2, Ruler, HardHat } from "lucide-react";
import Project1 from "../assets/IMG/project1.jpg";
import Project2 from "../assets/IMG/project2.jpg";
import Project3 from "../assets/IMG/project3.jpg";
import Project4 from "../assets/IMG/project4.jpg";
import Project5 from "../assets/IMG/project5.jpg";
import Project6 from "../assets/IMG/project6.jpg";

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      id: 1,
      title: "Cross-Country Pipeline Installation",
      status: "Completed",
      category: "Pipeline Construction",
      description: "Large-scale pipeline construction project featuring heavy trenching, pipe laying, and welding operations across challenging terrain. Our crew deployed specialized excavation equipment and certified welders to ensure seamless pipeline integrity from start to finish.",
      scope: ["24-inch diameter pipeline", "Heavy trenching operations", "Certified welding & coating", "Pressure testing & inspection"],
      milestones: ["Site mobilization & clearing", "Trenching & pipe stringing", "Welding & NDE inspection", "Hydrostatic testing & commissioning"],
      image: Project1,
      featured: true,
    },
    {
      id: 2,
      title: "Pipeline Infrastructure Development",
      status: "Completed",
      category: "Pipeline Construction",
      description: "Comprehensive pipeline infrastructure build-out including right-of-way preparation, directional boring under existing utilities, and tie-in connections. Project required precise coordination between excavation teams and welding crews to maintain schedule integrity.",
      scope: ["ROW preparation & clearing", "Directional boring operations", "Mainline pipe installation", "Tie-in & hot tap connections"],
      milestones: ["Surveying & staking", "ROW clearing & grading", "Boring & pipe installation", "Final tie-ins & testing"],
      image: Project2,
      featured: false,
    },
    {
      id: 3,
      title: "Oil & Gas Transmission Line",
      status: "Completed",
      category: "Oil & Gas",
      description: "High-pressure oil and gas transmission pipeline constructed to API 1104 standards. Scope included cathodic protection installation, valve station construction, and SCADA system integration for real-time monitoring and leak detection.",
      scope: ["High-pressure transmission line", "Cathodic protection system", "Valve station construction", "SCADA integration"],
      milestones: ["Engineering & permitting", "Trenching & pipe laying", "Welding & radiographic inspection", "Commissioning & handover"],
      image: Project3,
      featured: true,
    },
    {
      id: 4,
      title: "Petroleum Gathering System",
      status: "Completed",
      category: "Oil & Gas",
      description: "Crude oil gathering network connecting multiple well pads to a central processing facility. Project included flowline installation, tank battery connections, and automated metering systems for accurate production tracking.",
      scope: ["Flowline installation", "Well pad tie-ins", "Tank battery connections", "Automated metering systems"],
      milestones: ["Well pad surveying", "Flowline routing & installation", "Metering skid placement", "System testing & startup"],
      image: Project4,
      featured: false,
    },
    {
      id: 5,
      title: "Municipal Water Main Replacement",
      status: "In Progress",
      category: "Water & Sewer",
      description: "Ongoing replacement of aging water distribution infrastructure with modern ductile iron pipe. Project utilizes trenchless technology in high-traffic areas to minimize public disruption while ensuring reliable water service continuity.",
      scope: ["Ductile iron water main", "Trenchless installation", "Hydrant & valve replacements", "Road restoration"],
      milestones: ["Pre-construction survey", "Phase 1: Trenchless installation", "Phase 2: Open-cut replacement", "Final testing & restoration"],
      image: Project5,
      featured: false,
    },
    {
      id: 6,
      title: "Water Distribution Network",
      status: "Completed",
      category: "Water & Sewer",
      description: "Complete water distribution system upgrade serving residential and commercial zones. Installation included new mains, service lateral connections, fire hydrant upgrades, and pressure zone management to improve system reliability and fire protection capacity.",
      scope: ["Water main installation", "Service lateral connections", "Fire hydrant upgrades", "Pressure zone management"],
      milestones: ["Design & permitting", "Main line installation", "Service connections & hydrants", "Pressure testing & flush"],
      image: Project6,
      featured: true,
    },
  ];

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  const getStatusColor = (status) => {
    return status === "Completed" ? "bg-emerald-100 text-emerald-700 border-emerald-200" : "bg-amber-100 text-amber-700 border-amber-200";
  };

  const getCategoryColor = (cat) => {
    const colors = {
      "Pipeline Construction": "bg-slate-800 text-white",
      "Oil & Gas": "bg-amber-600 text-white",
      "Water & Sewer": "bg-blue-600 text-white",
    };
    return colors[cat] || "bg-slate-600 text-white";
  };

  return (
    <section
      id="projects"
      className="py-16 sm:py-20 md:py-24 lg:py-32 px-4 sm:px-6 md:px-12 lg:px-20 bg-slate-50 relative overflow-hidden"
      style={{ fontFamily: '"Space Grotesk", "Inter", sans-serif' }}
    >
      {/* Background accents */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-emerald-600/50 via-amber-500/50 to-transparent" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-emerald-200/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 left-0 w-96 h-96 bg-amber-200/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-12 md:mb-16"
        >
          <div className="flex items-center gap-3 mb-4 sm:mb-6">
            <span className="w-8 sm:w-12 h-px bg-emerald-500" />
            <span className="text-emerald-600 text-xs sm:text-sm font-semibold tracking-[0.2em] uppercase">
              Our Track Record
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-slate-900 mb-3 sm:mb-4 max-w-3xl">
            Pipeline Projects{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-amber-500">
              Built to Last
            </span>
          </h2>
          <p className="text-slate-500 max-w-xl text-sm sm:text-base md:text-lg leading-relaxed">
            From pipeline construction and oil & gas infrastructure to municipal water systems, we deliver projects that meet the highest industry standards.
          </p>
        </motion.div>

        {/* Featured Projects — Large cards */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 mb-12 md:mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer relative bg-white rounded-2xl border border-slate-200 overflow-hidden hover:border-emerald-400/50 hover:shadow-xl transition-all duration-500"
            >
              <div className="aspect-[16/10] bg-slate-200 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
                
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                </div>

                {/* Status badge */}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>

                {/* Title overlay */}
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl md:text-2xl font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-5 md:p-6">
                <p className="text-slate-600 text-sm leading-relaxed mb-4 line-clamp-2">
                  {project.description}
                </p>
                <div className="flex items-center gap-2 text-emerald-600 text-sm font-semibold group-hover:gap-3 transition-all">
                  View Project Details
                  <ArrowRight className="w-4 h-4" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects — Grid */}
        <motion.h3
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xl md:text-2xl font-bold text-slate-900 mb-6 md:mb-8"
        >
          More Projects
        </motion.h3>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-12 md:mb-16">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setSelectedProject(project)}
              className="group cursor-pointer bg-white rounded-xl border border-slate-200 overflow-hidden hover:border-emerald-400/50 hover:shadow-lg transition-all duration-500"
            >
              <div className="aspect-[4/3] bg-slate-200 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                
                <div className="absolute top-3 left-3">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider ${getCategoryColor(project.category)}`}>
                    {project.category}
                  </span>
                </div>
                <div className="absolute top-3 right-3">
                  <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${getStatusColor(project.status)}`}>
                    {project.status}
                  </span>
                </div>
              </div>

              <div className="p-4 md:p-5">
                <h4 className="text-base md:text-lg font-bold text-slate-900 mb-2 group-hover:text-emerald-600 transition-colors">
                  {project.title}
                </h4>
                <p className="text-slate-500 text-sm leading-relaxed line-clamp-2">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Banner */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative bg-emerald-700 rounded-2xl p-8 md:p-12 overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-600/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          <div className="relative z-10 flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">
                Have a Pipeline Project?
              </h3>
              <p className="text-emerald-100 text-sm md:text-base max-w-lg">
                From concept to commissioning, we handle every phase of pipeline construction. Let's talk about your next project.
              </p>
            </div>
            <motion.a
              href="#contactus"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-amber-500 text-slate-900 font-bold text-sm tracking-wider uppercase rounded-xl hover:bg-white transition-colors duration-300 flex-shrink-0"
            >
              Start a Project
              <ArrowRight className="w-4 h-4" />
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
            onClick={() => setSelectedProject(null)}
          >
            <div className="absolute inset-0 bg-slate-900/70 backdrop-blur-sm" />
            <motion.div
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 40, scale: 0.95 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="relative bg-white rounded-2xl shadow-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Modal header image */}
              <div className="relative aspect-[21/9] bg-slate-200">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors"
                >
                  <X className="w-5 h-5 text-slate-700" />
                </button>

                <div className="absolute bottom-4 left-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mr-2 ${getCategoryColor(selectedProject.category)}`}>
                    {selectedProject.category}
                  </span>
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold border ${getStatusColor(selectedProject.status)}`}>
                    {selectedProject.status}
                  </span>
                </div>
              </div>

              {/* Modal content */}
              <div className="p-6 md:p-8">
                <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-4">
                  {selectedProject.title}
                </h2>

                <p className="text-slate-600 leading-relaxed mb-8">
                  {selectedProject.description}
                </p>

                {/* Scope of Work */}
                <div className="mb-8">
                  <h4 className="flex items-center gap-2 text-slate-900 font-bold text-sm uppercase tracking-wider mb-4">
                    <Ruler className="w-4 h-4 text-emerald-600" />
                    Scope of Work
                  </h4>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {selectedProject.scope.map((item, i) => (
                      <div key={i} className="flex items-start gap-2 p-3 bg-slate-50 rounded-lg border border-slate-100">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span className="text-slate-700 text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Milestones */}
                <div>
                  <h4 className="flex items-center gap-2 text-slate-900 font-bold text-sm uppercase tracking-wider mb-4">
                    <HardHat className="w-4 h-4 text-amber-500" />
                    Project Milestones
                  </h4>
                  <div className="space-y-3">
                    {selectedProject.milestones.map((milestone, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 flex-shrink-0" />
                        <span className="text-slate-600 text-sm">{milestone}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;