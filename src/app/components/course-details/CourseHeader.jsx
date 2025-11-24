"use client";
import React from "react";
import { Star } from "lucide-react";

export default function CourseHeader({
  title,
  totalLevels,
  totalLessons,
  price,
}) {
  return (
    <section className="w-full bg-[#31415d] text-white py-16 px-6 lg:px-24 shadow-lg relative">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center lg:items-start gap-10">
        {/* LEFT — MAIN TITLE */}
        <div className="flex-1 text-center lg:text-left">
          <h1 className="text-4xl lg:text-5xl font-bold leading-tight">
            {title}
          </h1>

          {/* 5 STAR RATING */}
          <div className="flex items-center justify-center lg:justify-start gap-1 mt-4">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star
                key={i}
                className="w-6 h-6 fill-yellow-400 text-yellow-400"
              />
            ))}
            <span className="ml-2 text-sm opacity-90">4.9 (2,854 Reviews)</span>
          </div>

          <p className="text-md opacity-90 mt-4 max-w-xl">
            Explore a structured, multi-level learning journey designed to take
            you from foundations to advanced mastery in healthcare revenue and
            billing.
          </p>
        </div>

        {/* RIGHT — SIDEBAR SUMMARY CARD */}
        <div className="w-full lg:w-80 bg-white text-gray-900 rounded-2xl shadow-2xl p-6 border border-gray-200">
          <h2 className="text-xl font-bold text-[#31415d] mb-4">
            Course Summary
          </h2>

          <p className="mb-2 text-lg">
            <strong>Total Levels:</strong> {totalLevels}
          </p>

          <p className="mb-2 text-lg">
            <strong>Total Lessons:</strong> {totalLessons}
          </p>

          <p className="mb-6 text-lg">
            <strong>Price:</strong>{" "}
            <span className="text-[#49838c] font-bold">₹{price}</span>
          </p>

          {/* CTA Buttons */}
          <button
            onClick={() =>
              window.open(
                "https://wa.me/917032498555?text=Hi%20I%20want%20to%20enroll%20in%20this%20course",
                "_blank"
              )
            }
            className="w-full bg-[#49838c] text-white py-3 rounded-xl text-lg font-semibold hover:bg-[#3b6a70] transition"
          >
            Enroll Now
          </button>
          {/* <button className="w-full mt-3 border border-[#31415d] text-[#31415d] py-3 rounded-xl text-lg font-semibold hover:bg-[#e6e9ef] transition">
            Download Syllabus
          </button> */}
        </div>
      </div>
    </section>
  );
}
