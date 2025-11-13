"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactUsSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Enter a valid email address";
    if (!formData.message.trim()) newErrors.message = "Message is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const whatsappNumber = "919989211109"; // ✅ Your WhatsApp number
    const text = `👋 Hello!%0A%0AYou have a new inquiry from the website:%0A%0A👤 Name: ${formData.name}%0A📧 Email: ${formData.email}%0A💬 Message: ${formData.message}`;
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${text}`;
    window.open(whatsappURL, "_blank");
  };

  return (
    <section className="relative bg-gradient-to-b from-[#f0f4f8] to-white py-20 px-6 md:px-16 overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-[#31415d] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#49838c] opacity-10 rounded-full translate-x-1/3 translate-y-1/3 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left - Contact Info */}
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
          <p className="text-gray-700 text-lg leading-relaxed">
            Have questions or want to get started? Fill the form or chat
            directly with us on WhatsApp.
          </p>

          <div className="space-y-5 mt-6">
            <div className="flex items-start space-x-3">
              <span className="text-[#31415d] text-2xl">📍</span>
              <p className="text-gray-700 font-medium">
                <strong>Morphology Healthcare Solution Pvt. Ltd.</strong>
                <br />
                3rd Floor, Rent A Desk - Infantry Road, 4, Union Street,
                <br />
                Shivaji Nagar, Bengaluru, Karnataka - 560001
                <br />
                Landmark: Opp. Cauveri Central Emporium
              </p>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-[#31415d] text-2xl">📧</span>
              <a
                href="mailto:info@billingmorphologyacademy.com"
                className="text-gray-700 font-medium hover:text-[#49838c] transition"
              >
                info@billingmorphologyacademy.com
              </a>
            </div>

            <div className="flex items-center space-x-3">
              <span className="text-[#31415d] text-2xl">📞</span>
              <a
                href="tel:+919989211109"
                className="text-gray-700 font-medium hover:text-[#49838c] transition"
              >
                +91 99892 11109
              </a>
            </div>
          </div>

          <motion.div
            className="mt-8 flex space-x-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <a
              href="https://wa.me/919989211109"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#49838c] text-white px-5 py-3 rounded-full font-semibold shadow-md hover:bg-[#31415d] hover:shadow-lg transition-all duration-300"
            >
              💬 Chat on WhatsApp
            </a>
          </motion.div>
        </motion.div>

        {/* Right - Contact Form */}
        <motion.form
          className="bg-white p-8 md:p-12 rounded-3xl shadow-xl border border-gray-100 grid gap-6"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          onSubmit={handleSubmit}
        >
          <div>
            <input
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={(e) =>
                setFormData({ ...formData, name: e.target.value })
              }
              className={`w-full p-4 rounded-xl border ${
                errors.name ? "border-red-500" : "border-gray-200"
              } focus:outline-none focus:ring-2 focus:ring-[#31415d] transition`}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name}</p>
            )}
          </div>

          <div>
            <input
              type="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className={`w-full p-4 rounded-xl border ${
                errors.email ? "border-red-500" : "border-gray-200"
              } focus:outline-none focus:ring-2 focus:ring-[#31415d] transition`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>

          <div>
            <textarea
              rows={5}
              placeholder="Your Message"
              value={formData.message}
              onChange={(e) =>
                setFormData({ ...formData, message: e.target.value })
              }
              className={`w-full p-4 rounded-xl border ${
                errors.message ? "border-red-500" : "border-gray-200"
              } focus:outline-none focus:ring-2 focus:ring-[#31415d] transition resize-none`}
            ></textarea>
            {errors.message && (
              <p className="text-red-500 text-sm mt-1">{errors.message}</p>
            )}
          </div>

          <motion.button
            type="submit"
            className="bg-[#31415d] text-white px-6 py-4 rounded-full font-semibold shadow-lg hover:bg-[#49838c] hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Send via WhatsApp
          </motion.button>
        </motion.form>
      </div>
    </section>
  );
}
