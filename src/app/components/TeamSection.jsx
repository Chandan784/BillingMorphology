"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function TeamSection() {
  const router = useRouter();

  const faculty = [
    {
      name: "Mr. Srinivas Naik M",
      role: "Founder & Principal Faculty",
      image: "/f2.jpg",
      short:
        "A strategic and results-driven healthcare leader with over 20+ years of experience spanning hospital operations, health insurance, and revenue cycle management (RCM).",
    },
    {
      name: "Dr. Prashanth Belavadi",
      role: "Co-Founder & Faculty",
      image: "/f1.jpg",
      short:
        "A visionary healthcare strategist and Ayurveda physician with 18+ years in hospital operations, healthcare management, and holistic medicine leadership.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#f8fafc] to-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-5xl font-extrabold text-gray-900 leading-tight"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Founders & Faculty Team
        </motion.h2>

        <motion.p
          className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
        >
          Meet the visionaries behind{" "}
          <span className="font-semibold text-[#31576d]">
            Billing Morphology Academy™
          </span>
          — leading professionals shaping the future of hospital billing,
          finance, and healthcare excellence.
        </motion.p>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-16">
          {faculty.map((person, i) => (
            <motion.div
              key={i}
              className="group relative bg-white shadow-md hover:shadow-2xl rounded-3xl p-8 transition-all duration-300 border border-gray-100 flex flex-col items-center text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3, duration: 0.7 }}
              viewport={{ once: true }}
            >
              {/* Circular Profile Image */}
              <div className="relative w-40 h-40 md:w-48 md:h-48 mb-6">
                <img
                  src={person.image}
                  alt={person.name}
                  className="w-full h-full object-cover rounded-full border-[6px] border-[#edf2f7] shadow-lg transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#31576d]/20 to-[#49838c]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Text Section */}
              <h3 className="text-2xl font-bold text-[#31415d]">
                {person.name}
              </h3>
              <p className="text-sm text-gray-500 font-medium mt-1 mb-4">
                {person.role}
              </p>
              <p className="text-gray-700 text-base leading-relaxed max-w-md">
                {person.short}
              </p>

              <button
                onClick={() => router.push("/about-us")}
                className="mt-6 inline-block bg-gradient-to-r from-[#31576d] to-[#49838c] text-white font-semibold py-2 px-6 rounded-full shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300"
              >
                Learn More →
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
