"use client";
import React, { useEffect, useRef } from "react";
import { Star } from "lucide-react";

export default function CourseDetailsTestimonials() {
  const scrollRef = useRef(null);

  // Auto Scroll
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollBy({
          left: 320,
          behavior: "smooth",
        });
      }
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const testimonials = [
    {
      text: "This is the most structured billing program I’ve ever seen. We reduced claim denials from 18% to 5% within two months.",
      name: "Dr. Megha R.",
      role: "Medical Director, Sunrise Multispecialty Hospital",
    },
    {
      text: "My billing and TPA teams used to work in silos. After CBM, their coordination, documentation and discharge TAT improved drastically.",
      name: "Ramesh N.",
      role: "Hospital Administrator (150-bed hospital)",
    },
    {
      text: "The SOPs, denial dashboards and audit checklists alone are worth the investment. My team is now fully compliant and confident.",
      name: "Sneha P.",
      role: "Billing Supervisor",
    },
  ];

  return (
    <div className="w-full py-14  lg:px-14 bg-[#f5f9fa]">
      {/* Title */}
      <h2 className="text-3xl font-bold text-center text-[#31576d] mb-10">
        Testimonials
      </h2>

      {/* Horizontal Scroll */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto px-6 pb-4 scroll-smooth"
        style={{
          scrollSnapType: "x mandatory",
          scrollbarWidth: "none",
          msOverflowStyle: "none",
        }}
      >
        {/* Hide scrollbar (Chrome, Safari) */}
        <style jsx>{`
          div::-webkit-scrollbar {
            display: none;
          }
        `}</style>

        {testimonials.map((t, index) => (
          <div
            key={index}
            className="min-w-[300px] max-w-[300px] bg-white rounded-2xl p-6 shadow-lg border border-[#e1e8ea] scroll-snap-align-start"
          >
            <p className="text-sm font-semibold text-[#31576d] mb-3">
              Certified Billing Morphologist™ (CBM)
            </p>

            <div className="flex text-yellow-500 mb-3">
              {Array(5)
                .fill(0)
                .map((_, i) => (
                  <Star key={i} size={18} fill="gold" stroke="gold" />
                ))}
            </div>

            <p className="text-gray-700 text-sm leading-relaxed mb-4">
              “{t.text}”
            </p>

            <p className="font-semibold text-[#31576d] text-sm">{t.name}</p>
            <p className="text-gray-500 text-xs">{t.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
