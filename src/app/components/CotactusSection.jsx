"use client";

import { motion } from "framer-motion";

export default function ContactUsSection() {
  return (
    <section className="relative bg-gradient-to-b from-[#f0f4f8] to-white py-20 px-6 md:px-16 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#31415d] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#49838c] opacity-10 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Part - Contact Info */}
        <motion.div
          className="text-left space-y-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl font-extrabold text-gray-900 bg-clip-text text-transparent bg-gradient-to-r from-[#31415d] to-[#49838c]">
            Contact Us
          </h2>
          <p className="text-gray-700 text-lg">
            Have questions, suggestions, or ready to start your journey with us?
            Fill out the form and our team will get back to you promptly.
          </p>

          <div className="space-y-4 mt-6">
            <div className="flex items-center space-x-3">
              <span className="text-[#31415d] text-2xl">📍</span>
              <p className="text-gray-700 font-medium">
                Billing Morphology Academy™, India
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-[#31415d] text-2xl">📧</span>
              <p className="text-gray-700 font-medium">
                info@billingacademy.com
              </p>
            </div>
            <div className="flex items-center space-x-3">
              <span className="text-[#31415d] text-2xl">📞</span>
              <p className="text-gray-700 font-medium">+91 98765 43210</p>
            </div>
          </div>

          <motion.div
            className="mt-8 flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          ></motion.div>
        </motion.div>

        {/* Right Part - Contact Form */}
        <motion.form
          className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 grid gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#31415d] transition"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#31415d] transition"
          />
          <input
            type="text"
            placeholder="Subject"
            className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#31415d] transition"
          />
          <textarea
            rows={5}
            placeholder="Your Message"
            className="w-full p-4 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#31415d] transition resize-none"
          ></textarea>

          <motion.button
            type="submit"
            className="bg-[#31415d] text-white px-6 py-4 rounded-full font-semibold shadow-lg hover:bg-[#49838c] hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send Message
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
