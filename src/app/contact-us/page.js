"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    if (!name || !email || !message) {
      setError("Please fill all fields before sending.");
      return;
    }

    setError("");

    const whatsappMessage = `Hello Billing Morphology Academy,%0A%0AName: ${name}%0AEmail: ${email}%0AMessage: ${message}`;
    const phone = "919989211109"; // WhatsApp international format
    window.open(`https://wa.me/${phone}?text=${whatsappMessage}`, "_blank");
  };

  return (
    <div className="bg-gradient-to-b from-[#f8fafc] to-white min-h-screen">
      {/* 🌟 Hero Section */}
      <section className="relative bg-gradient-to-r from-[#31576d] to-[#49838c] text-white py-20 px-6 md:px-16 text-center overflow-hidden">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="relative z-10"
        >
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
            Get in Touch
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-100">
            Have questions or want to collaborate with us? We’d love to hear
            from you.
          </p>
        </motion.div>

        <motion.div
          className="absolute inset-0 bg-white/10 blur-3xl"
          animate={{ opacity: [0.3, 0.6, 0.3] }}
          transition={{ repeat: Infinity, duration: 6 }}
        />
      </section>

      {/* 📍 Contact Info Section */}
      <section className="py-16 px-6 md:px-16 max-w-6xl mx-auto">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Contact Information
        </motion.h2>

        <div className="grid md:grid-cols-4 gap-8 text-center">
          {[
            {
              title: "Email Us",
              icon: "📧",
              value: "info@billingmorphology.com",
            },
            {
              title: "Call Us",
              icon: "📞",
              value: "  +91 7032498555, +91 8978375755, +91 9505414738",
            },
            {
              title: "Visit Us",
              icon: "📍",
              value: `Morphology Healthcare Solution Pvt. Ltd.
3rd Floor, Rent A Desk - Infantry Road,
4, Union Street, Infantry Rd,
Area: Shivaji Nagar, Bengaluru, Karnataka - 560001
Landmark: Opp. Cauveri Central Emporium`,
            },
            {
              title: "Working Hours",
              icon: "⏰",
              value: "Mon - Sat: 9:00 AM - 6:00 PM",
            },
          ].map((info, i) => (
            <motion.div
              key={i}
              className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg border border-gray-100 transition-all duration-300 break-words"
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-4xl mb-3">{info.icon}</div>
              <h3 className="text-lg font-semibold text-[#31576d] mb-1">
                {info.title}
              </h3>
              <p className="text-gray-600 text-sm whitespace-pre-line">
                {info.value}
              </p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 💬 Contact Form */}
      <section className="py-16 px-6 md:px-16 bg-[#f9fafb]">
        <div className="max-w-4xl mx-auto">
          <motion.h2
            className="text-3xl font-bold text-center text-gray-800 mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            Send Us a Message
          </motion.h2>

          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-3xl shadow-md p-8 md:p-12 space-y-6 border border-gray-100"
          >
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#49838c]"
              />
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                className="border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#49838c]"
              />
            </div>

            <textarea
              name="message"
              placeholder="Your Message"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              className="border border-gray-300 rounded-xl px-4 py-3 w-full focus:outline-none focus:ring-2 focus:ring-[#49838c]"
            ></textarea>

            {error && (
              <p className="text-red-600 text-sm text-center font-medium">
                {error}
              </p>
            )}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="bg-gradient-to-r from-[#31576d] to-[#49838c] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:shadow-lg transition-all duration-300 w-full md:w-auto mx-auto block"
            >
              Send via WhatsApp
            </motion.button>
          </motion.form>
        </div>
      </section>

      {/* 🗺️ Google Map Section */}
      <section className="py-16">
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 mb-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          Find Us on Map
        </motion.h2>

        <div className="w-full h-[400px] md:h-[500px]">
          <iframe
            title="Google Map - Morphology Healthcare"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.173674514002!2d77.59650737491485!3d12.95712238735757!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae168e45a84c2f%3A0x1bda9c8c0f5eb943!2sRent%20A%20Desk%20-%20Infantry%20Road!5e0!3m2!1sen!2sin!4v1731376000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            allowFullScreen=""
            loading="lazy"
            className="rounded-3xl border-4 border-[#e2e8f0]"
          ></iframe>
        </div>
      </section>
    </div>
  );
}
