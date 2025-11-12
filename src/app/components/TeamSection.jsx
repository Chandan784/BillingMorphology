"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function TeamSection() {
  const faculty = [
    {
      name: "Mr. Srinivas Naik M",
      role: "Founder & Principal Faculty",
      image:
        "https://images.unsplash.com/photo-1603415526960-f7e0328b37f3?auto=format&fit=crop&w=800&q=80",
      description: `Mr. Srinivas Naik M, Founder and Principal Faculty of Billing Morphology Academy™, is a strategic and results-driven healthcare leader with over 20+ years of experience spanning hospital operations, health insurance, and revenue cycle management (RCM). Currently serving as Head of Revenue Assurance and Credit Receivables at Apollo Health & Lifestyle Ltd., he oversees billing governance, audit control, and pricing strategy across more than 100 healthcare centers. Renowned for transforming revenue operations, he has achieved a 15% reduction in revenue leakages, 20% faster discharge billing, and 98.8% TPA claim accuracy. Driven by his belief that “Billing is the anatomy of hospital finance,” Srinivas founded the Academy™ to professionalize hospital billing education through structured certifications like the Certified Billing Morphologist™ (CBM) program. His upcoming book, "The Blue Ocean of Healthcare Revenue Assurance," encapsulates his mission to transform billing into a precision-driven, ethical, and audit-ready science.`,
    },
    {
      name: "Dr. Prashanth Belavadi",
      role: "Co-Founder & Faculty",
      image:
        "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=80",
      description: `Dr. Prashanth Belavadi is a visionary healthcare strategist, Ayurveda physician, and business leader with over 18 years of experience in hospital operations, healthcare management, and holistic medicine. As Co-Founder and Business Strategist at Billing Morphology Academy™, he combines clinical insight with strategic foresight to redefine how hospitals approach billing, operational excellence, and patient-centric financial systems. He has led multi-city healthcare operations, optimized cost structures, and built cross-functional teams that drive measurable revenue growth. Through his mentorship at the Academy™, he empowers learners to see beyond processes—to build financially resilient and ethically strong healthcare organizations. Dr. Prashanth is also Chief Ayurveda Consultant at Vijando Male Wellness Center and an advocate for integrating scientific billing, clinical transparency, and operational ethics in healthcare education.`,
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#f9fafb] to-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-gray-900"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          Founders & Faculty Team
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Meet the visionaries behind Billing Morphology Academy™, bringing
          decades of expertise in hospital billing, healthcare finance, and
          operational excellence.
        </motion.p>

        {/* Faculty Cards */}
        <div className="grid md:grid-cols-2 gap-10 mt-16">
          {faculty.map((person, i) => (
            <FacultyCard key={i} person={person} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

function FacultyCard({ person, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 cursor-pointer hover:shadow-2xl transition-transform transform hover:-translate-y-2 flex flex-col md:flex-row"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.3, duration: 0.8 }}
      viewport={{ once: true }}
    >
      <div className="md:w-1/3 h-64 md:h-auto relative">
        <img
          src={person.image}
          alt={person.name}
          className="w-full h-full object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
        />
      </div>
      <div className="p-6 md:p-8 text-left md:w-2/3 flex flex-col justify-between">
        <div>
          <h3 className="text-2xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#31415d] to-[#49838c]">
            {person.name}
          </h3>
          <p className="text-sm text-gray-500 font-semibold mb-4">
            {person.role}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {expanded
              ? person.description
              : person.description.slice(0, 250) + "..."}
          </p>
          <button
            onClick={() => setExpanded(!expanded)}
            className="mt-4 text-[#31415d] font-semibold hover:underline"
          >
            {expanded ? "Read Less" : "Read More"}
          </button>
        </div>
      </div>
    </motion.div>
  );
}
