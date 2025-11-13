"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="bg-white text-gray-900 py-10 md:py-16 flex flex-col md:flex-row items-center justify-between min-h-[90vh] px-0 md:px-16 overflow-hidden">
      {/* Right Image (shown first on mobile) */}
      <motion.div
        className="order-1 md:order-2 w-full md:w-1/2 flex justify-center md:justify-end mt-0 md:mt-0"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <Image
          src="/hero-bg.jpg"
          alt="Hospital Billing Training"
          width={500}
          height={500}
          className="rounded-none md:rounded-2xl shadow-md w-full max-w-full md:max-w-[500px] object-cover"
          priority
        />
      </motion.div>

      {/* Left Content */}
      <motion.div
        className="order-2 md:order-1 w-full md:w-1/2 space-y-5 text-center md:text-left mt-8 md:mt-0 px-4 md:px-0"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
        viewport={{ once: true }}
      >
        <p className="text-sm uppercase tracking-wider text-gray-500 font-medium md:text-base">
          #1 Hospital Billing Career Program
        </p>

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold leading-snug md:leading-tight">
          <span className="text-[#31415d]">Practical Hospital Billing</span>{" "}
          <br className="hidden sm:block" />
          <span className="text-[#49838c]">
            Training with Placement Support
          </span>
        </h1>

        <p className="text-gray-600 text-base sm:text-lg max-w-lg mx-auto md:mx-0">
          Designed by healthcare finance experts with 15+ years of experience,
          our audit-ready training turns fresh graduates into confident hospital
          billing professionals — with placement support every step of the way.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start pt-4">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full font-semibold text-white shadow-md transition-all duration-200"
            style={{ backgroundColor: "var(--theme-color)" }}
          >
            <a href="/Course"> Start Learning</a>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-3 rounded-full border border-gray-300 text-gray-700 hover:border-[#00b4d8] hover:text-[#00b4d8] transition-all duration-200"
          >
            <a href="https://wa.me/919989211109"> Talk to Advisor</a>
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
}
