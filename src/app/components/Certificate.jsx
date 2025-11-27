"use client";

import React from "react";
import { motion } from "framer-motion";
import { Award, ShieldCheck, Users } from "lucide-react";

function Certificate({ course }) {
  return (
    <section className="bg-gradient-to-b from-[#f8fafc] to-white py-20 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Top Title */}
        <motion.h2
          className="text-3xl md:text-4xl font-extrabold text-center text-gray-900"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          Certificate of Achievement
        </motion.h2>

        <motion.p
          className="mt-4 text-sm md:text-base text-gray-600 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Official recognition for successfully completing the program with
          demonstrated{" "}
          <span className="font-semibold text-[#31576d]">skills</span> and{" "}
          <span className="font-semibold text-[#31576d]">
            professional commitment
          </span>
          .
        </motion.p>

        {/* Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-12 mt-16 items-center">
          {/* Left: Certificate Image */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <img
              src="/certificate.jpg"
              alt="Certificate"
              className="w-full rounded-xl shadow-lg border-4 border-[#49838c]"
            />
          </motion.div>

          {/* Right: Recognition + Benefits */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-8">
              Earn Valuable Credentials & Industry Recognition
            </h3>

            <div className="space-y-6">
              {/* Box 1 */}
              <div className="p-6 bg-white border-l-4 border-[#31576d] rounded-xl shadow-sm">
                <Award className="text-[#31576d] mb-2" size={32} />
                <h4 className="text-lg font-semibold text-gray-800 mb-1">
                  Nationally Recognized Certification
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Receive the verified{" "}
                  <strong>Certified Billing Morphologist™ (CBM)</strong>{" "}
                  certificate— aligned with real hospital & TPA workflows.
                </p>
              </div>

              {/* Box 2 */}
              <div className="p-6 bg-white border-l-4 border-[#49838c] rounded-xl shadow-sm">
                <ShieldCheck className="text-[#49838c] mb-2" size={32} />
                <h4 className="text-lg font-semibold text-gray-800 mb-1">
                  Professional-Grade Credentials
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Levels (L1–L6) benchmarked to Billing, Claims, TPA, Denials,
                  Audit & Revenue Assurance roles.
                </p>
              </div>

              {/* Box 3 */}
              <div className="p-6 bg-white border-l-4 border-[#31576d] rounded-xl shadow-sm">
                <Users className="text-[#31576d] mb-2" size={32} />
                <h4 className="text-lg font-semibold text-gray-800 mb-1">
                  Lifetime Alumni Status
                </h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Join the growing CBM Alumni Network across top hospitals,
                  TPAs, and insurance companies—plus access job updates &
                  mentoring.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="flex justify-center mt-14"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <button
          onClick={() =>
            window.open(
              `https://wa.me/919876543210?text=${encodeURIComponent(
                `Hello! I want to enroll in the course: "${course.courseTitle}". Please provide details.`
              )}`,
              "_blank"
            )
          }
          className="bg-[#31576d] text-white py-2.5 md:py-3 px-10 rounded-xl 
                   text-sm md:text-base font-semibold shadow-md 
                   hover:bg-[#274255] transition"
        >
          Enroll Now
        </button>
      </motion.div>
    </section>
  );
}

export default Certificate;
