"use client";

import React from "react";
import { motion } from "framer-motion";

function Certificate() {
  return (
    <section className="bg-gradient-to-b from-[#f8fafc] to-white py-20 px-6 md:px-12">
      <div className="max-w-4xl mx-auto text-center">
        {/* Title */}
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Certificate of Achievement
        </motion.h2>

        {/* Description */}
        <motion.p
          className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          This official certificate is awarded to recognize the successful
          completion of the training program and the demonstration of
          exceptional{" "}
          <span className="font-semibold text-[#31576d]">skills</span> and{" "}
          <span className="font-semibold text-[#31576d]">dedication</span>.
        </motion.p>

        {/* Certificate Image */}
        <motion.div
          className="flex justify-center mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <img
            src="/certificate.jpg"
            alt="Certificate of Completion"
            className="w-full max-w-3xl h-auto rounded-xl shadow-xl border-4 border-[#49838c]"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default Certificate;
