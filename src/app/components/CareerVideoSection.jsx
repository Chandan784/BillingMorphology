"use client";

import { motion } from "framer-motion";

export default function CareerVideoSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#f0f4f8] to-white overflow-hidden py-12 md:py-24 px-4 md:px-16">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#31415d] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#49838c] opacity-10 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* Video Section (first on mobile) */}
        <div className="w-full md:w-1/2 order-1 md:order-2 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
          <iframe
            className="w-full h-[250px] sm:h-[400px] md:h-[500px] lg:h-[400px] rounded-2xl"
            src="https://drive.google.com/file/d/1NikH7iWdjej3nL_cy6cNbTqzOC3NWMvg/preview"
            title="Hospital Billing Training Overview"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>

        {/* Text Content */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left order-2 md:order-1"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
            Watch How We Build Careers in{" "}
            <span className="text-[#31415d]">Hospital Billing</span> — Step by
            Step
          </h2>

          <motion.p
            className="mt-4 text-gray-700 max-w-3xl text-base sm:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            viewport={{ once: true }}
          >
            See how our programs combine hands-on training, live mentorship, and
            active placement assistance to prepare you for in-demand billing and
            TPA roles across hospitals and healthcare networks.
          </motion.p>

          <motion.div
            className="mt-6 flex justify-center md:justify-start"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <button className="bg-[#31415d] text-white px-6 sm:px-8 py-3 sm:py-4 rounded-full font-semibold text-base sm:text-lg shadow-lg hover:bg-[#49838c] hover:shadow-xl transition-all duration-300">
              Explore Full Program →
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
