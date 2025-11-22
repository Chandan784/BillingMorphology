"use client";

import React from "react";
import { CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

export default function WhoIsThisCourseFor() {
  const points = [
    "Freshers & graduates starting a career in hospital billing",
    "Billing executives with 0–3 years of experience",
    "TPA coordinators & insurance desk staff handling cashless/claims workflows",
    "Front-desk or billing staff moving into claims or pre-auth roles",
    "RCM analysts (2–5 years) working on A/R, denials, or reporting",
    "Senior billing executives handling complex cases or quality checks",
    "Audit, compliance & claim-quality reviewers",
    "Team leads managing denials, A/R, TAT, or coordination workflows",
    "RCM specialists preparing for supervisory or governance roles",
    "Managers & future RCM leaders driving automation, analytics & transformation",
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Who Is This Course For?
        </motion.h2>

        <motion.p
          className="mt-4 text-sm md:text-base text-gray-600 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          This program is designed for professionals across{" "}
          <span className="font-semibold text-[#31576d]">hospital billing</span>
          , <span className="font-semibold text-[#31576d]">claims</span>,{" "}
          <span className="font-semibold text-[#31576d]">TPA</span>, and{" "}
          <span className="font-semibold text-[#31576d]">RCM operations</span>
          —from beginners to future leaders.
        </motion.p>

        {/* Grid Section */}
        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {points.map((item, index) => (
            <motion.div
              key={index}
              className="p-6 bg-white border-l-4 border-[#31576d] rounded-xl shadow-sm"
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              viewport={{ once: true }}
            >
              <div className="flex gap-3">
                <CheckCircle className="text-[#31576d] mt-1 w-5 h-5" />
                <p className="text-gray-700 text-sm md:text-[15px] leading-relaxed">
                  {item}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Beautiful Enroll Button */}
        <motion.div
          className="flex justify-center mt-14"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <button
            className="bg-[#31576d] text-white py-2.5 md:py-3 px-10 rounded-xl 
                       text-sm md:text-base font-semibold shadow-md 
                       hover:bg-[#274255] transition"
          >
            Enroll Now
          </button>
        </motion.div>
      </div>
    </section>
  );
}
