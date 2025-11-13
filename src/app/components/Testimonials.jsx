"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1659353889203-0cf1be5cf4e0?auto=format&fit=crop&q=60&w=500",
    headline:
      "“From confused fresher to confident Billing Executive — in just 3 months.”",
    body: "After graduating in commerce, Ankita had no idea where to start her career. The CBM Level-1 training gave her the clarity, structure, and mentorship she needed. With mock audits and placement support, she’s now working at a leading multi-specialty hospital — managing billing files with precision and pride.",
    cta: "Read Ankita’s journey →",
  },
  {
    id: 2,
    image:
      "https://plus.unsplash.com/premium_photo-1667520580687-a85c9080a9bc?auto=format&fit=crop&q=60&w=500",
    headline:
      "“I left my BPO job — and found a meaningful career in healthcare.”",
    body: "Rahul spent five years in data entry before discovering the Certified Billing Morphologist™ program. The hands-on projects and real-case simulations helped him transition smoothly into a TPA Coordinator role. “For the first time, I’m part of something that impacts real people — and I’m proud of that.”",
    cta: "Read Rahul’s story →",
  },
  {
    id: 3,
    image:
      "https://media.istockphoto.com/id/2239496601/photo/medical-research-and-tablet-with-nurse-woman-in-clinic-for-insurance-records-or-schedule-app.webp?a=1&b=1&s=612x612&w=0&k=20&c=sWXja5J7deV-Ayuwl4Ys0QelPyQiADHWhmMgbhuD5XE=",
    headline:
      "“This program turned my hospital experience into career growth.”",
    body: "Already working as a billing clerk, Sana wanted to move up. Through the CBM Levels 2 and 3, she mastered denial management, dashboards, and audit prep. Within months, she was promoted to RCM Analyst, trusted to train new joiners using the same methods she learned here.",
    cta: "Read Sana’s success →",
  },
];

export default function Testimonials() {
  const scrollRef = useRef(null);
  const [expanded, setExpanded] = useState({});
  const [autoScrollIndex, setAutoScrollIndex] = useState(0);

  // Auto-scroll every 4 seconds (mobile only)
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        setAutoScrollIndex((prev) => (prev + 1) % testimonials.length);
        scrollRef.current.scrollTo({
          left:
            scrollRef.current.clientWidth *
            ((autoScrollIndex + 1) % testimonials.length),
          behavior: "smooth",
        });
      }
    }, 4000);

    return () => clearInterval(interval);
  }, [autoScrollIndex]);

  const toggleReadMore = (id) => {
    setExpanded((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.clientWidth;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="bg-gradient-to-b from-gray-50 to-white py-16 px-6 relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
          Billing Morphology–powered success stories
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Real learners. Real transformations.
          <br />
          See how students from diverse backgrounds built rewarding careers in{" "}
          <span className="text-[var(--theme-color)] font-semibold">
            hospital billing, TPA coordination, and revenue operations
          </span>{" "}
          — with the structured support of{" "}
          <strong className="text-[var(--theme-color)]">
            Billing Morphology Academy™
          </strong>
          .
        </p>
      </motion.div>

      {/* ✅ Desktop Grid */}
      <div className="hidden md:grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t, index) => (
          <motion.div
            key={t.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            whileHover={{ scale: 1.03 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all"
          >
            <img
              src={t.image}
              alt={t.headline}
              className="h-56 w-full object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="font-semibold text-lg mb-3 text-gray-800">
                {t.headline}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {expanded[t.id] ? t.body : `${t.body.slice(0, 150)}...`}
                <button
                  onClick={() => toggleReadMore(t.id)}
                  className="text-[var(--theme-color)] ml-1 font-medium hover:underline"
                >
                  {expanded[t.id] ? "Read less" : "Read more"}
                </button>
              </p>

              <div className="flex items-center gap-1 mb-4 text-yellow-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} fill="currentColor" size={16} />
                ))}
              </div>

              <button className="bg-[var(--theme-color)] text-white px-4 py-2 rounded-full text-sm hover:bg-[var(--theme-color-dark)] transition-all">
                {t.cta}
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* ✅ Mobile View - Horizontal Auto Scroll */}
      <div className="relative md:hidden">
        {/* Arrows positioned center left/right */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-md z-10"
        >
          <ChevronLeft className="w-5 h-5 text-gray-700" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 backdrop-blur-md p-2 rounded-full shadow-md z-10"
        >
          <ChevronRight className="w-5 h-5 text-gray-700" />
        </button>

        {/* Scrollable Cards */}
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scroll-smooth snap-x snap-mandatory pb-4 px-2 no-scrollbar"
          style={{ touchAction: "pan-y pinch-zoom" }} // ✅ Allow vertical scroll
        >
          {testimonials.map((t) => (
            <motion.div
              key={t.id}
              whileHover={{ scale: 1.02 }}
              className="min-w-[90%] bg-white rounded-2xl shadow-md overflow-hidden snap-center"
            >
              <img
                src={t.image}
                alt={t.headline}
                className="h-48 w-full object-cover"
              />
              <div className="p-5 text-left">
                <h3 className="font-semibold text-base mb-2 text-gray-800">
                  {t.headline}
                </h3>
                <p className="text-gray-600 mb-3 text-sm leading-relaxed">
                  {expanded[t.id] ? t.body : `${t.body.slice(0, 120)}...`}
                  <button
                    onClick={() => toggleReadMore(t.id)}
                    className="text-[var(--theme-color)] ml-1 hover:underline"
                  >
                    {expanded[t.id] ? "Read less" : "Read more"}
                  </button>
                </p>
                <div className="flex items-center gap-1 mb-3 text-yellow-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} fill="currentColor" size={14} />
                  ))}
                </div>
                <button className="bg-[var(--theme-color)] text-white px-3 py-1.5 rounded-full text-xs">
                  {t.cta}
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ✅ Hide Scrollbar via CSS */}
      <style jsx>{`
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}
