"use client";

import { motion } from "framer-motion";

export default function TrustedBy() {
  const companies = ["Claimbuddy", "Careline", "Medfine", "Aradhya Hospital"];

  return (
    <section className="bg-[#f0f4f8] py-12">
      <div className="max-w-6xl mx-auto text-center px-4">
        {/* Heading */}
        <p className="text-gray-500 uppercase tracking-wider text-sm font-semibold mb-8">
          Trusted by Leading Hospitals & Healthcare Partners
        </p>

        {/* Company Names */}
        <div className="flex flex-wrap justify-center gap-6">
          {companies.map((name, index) => (
            <motion.span
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              className="px-6 py-3 rounded-lg border border-[#31415d] 
                         text-[#31415d] font-semibold text-lg sm:text-xl 
                         bg-white hover:bg-[#49838c] hover:text-white 
                         transition-all duration-300 cursor-default shadow-sm"
            >
              {name}
            </motion.span>
          ))}
        </div>
      </div>
    </section>
  );
}
