import React, { useState } from "react";
import { motion } from "framer-motion";
// import CeoImage from "../assets/IMG/RentalCeo.jpg";

const About = () => {
  const [isDetailsOpen, setIsDetailsOpen] = useState(false);

  const handleContactClick = () => {
    document.getElementById("contactus")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section
      id="aboutus"
      className="py-16 px-4 sm:px-6 md:px-12 lg:px-24 bg-background"
    >
      <div className="container mx-auto max-w-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="space-y-8"
        >
          <motion.p
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
            style={{ fontFamily: '"Poppins", sans-serif' }}
            className="text-muted-foreground text-xs sm:text-sm uppercase mb-2 text-center md:text-left"
          >
            Who we are
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.6, delay: 0.5, ease: "easeOut" }}
            style={{ fontFamily: '"M PLUS 1", sans-serif' }}
            className="text-3xl sm:text-4xl font-bold mb-6 text-[#1A362B] text-center md:text-left"
          >
            About Our Company
          </motion.h2>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.8, delay: 0.7 }}
            style={{ fontFamily: '"Inter", sans-serif' }}
            className="text-muted-foreground text-sm sm:text-base space-y-6"
          >
            {/* Short Overview */}
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 0.9, ease: "easeOut" }}
            >
              Eliterentalhub provides reliable, high-quality construction machinery rental services. Our well-maintained fleet supports construction, infrastructure, industrial, and agricultural projects, helping clients complete work on time and on budget.
            </motion.p>

            {/* Mission & Vision */}
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 1.1, ease: "easeOut" }}
            >
              <strong>Our Mission:</strong> Deliver dependable equipment and exceptional service so every project succeeds safely and efficiently.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 1.2, ease: "easeOut" }}
            >
              <strong>Our Vision:</strong> Become the trusted leader in machinery rental through innovation and reliability.
            </motion.p>

            {/* Collapsible Details */}
            <motion.button
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.4, delay: 1.3, ease: "easeOut" }}
              onClick={() => setIsDetailsOpen(!isDetailsOpen)}
              className="text-[#1A362B] font-medium flex items-center mb-4 hover:underline"
            >
              {isDetailsOpen ? "Hide" : "Show"} more details
              <span className="ml-2">{isDetailsOpen ? "▲" : "▼"}</span>
            </motion.button>

            {isDetailsOpen && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="mb-8 space-y-4 overflow-hidden"
              >
                <div>
                  <h4 className="font-semibold text-[#1A362B] mb-1">
                    Experience & Commitment
                  </h4>
                  <p>
                    With over 8 years in the industry, we maintain a diverse fleet with strict safety protocols, regular servicing, operator support, fast delivery, 24/7 assistance, and transparent pricing.
                  </p>
                </div>
              </motion.div>
            )}

            {/* CEO Profile */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.6, delay: 1.5, ease: "easeOut" }}
            >
              <h3 className="text-lg font-semibold text-[#1A362B] mt-8 mb-4">
                Meet Our CEO
              </h3>
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-40 h-40 bg-gray-200 rounded-full flex items-center justify-center text-gray-500 text-sm font-medium text-center shadow-md">
                    {/* <img src={CeoImage} alt="" /> */}
                  </div>
                </div>
                <div className="space-y-3">
                  <p className="font-semibold text-base text-[#1A362B]">
                    Miguel Smith
                  </p>
                   
                  <p className="mb-3">
                    Miguel Smith has extensive experience in construction management, equipment operations, and leadership. Passionate about reliable solutions, he founded Elliterentalhub to help businesses build better and safer.
                  </p>
                  <blockquote className="italic text-sm border-l-4 border-[#1A362B] pl-4">
                    “We are committed to providing reliable machinery and excellent service to every client—because when our partners succeed, projects succeed.”
                  </blockquote>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Button – now scrolls to #contactus */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1.3, delay: 1.5, ease: "easeOut" }}
            className="mt-8 text-center md:text-left"
          >
            <button
              type="button"
              onClick={() => {
                document.getElementById("contactus")?.scrollIntoView({
                  behavior: "smooth",
                  block: "start",
                });
              }}
              className="h-11 px-8 rounded-md border border-white text-white font-medium bg-[#1B2431] hover:bg-white hover:text-[#1B2431] transition-all duration-300 cursor-pointer"
              style={{ fontFamily: '"M PLUS 1", sans-serif' }}
            >
              Get to Know Us Better
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;