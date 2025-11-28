"use client";
import React from "react";
import { Star, CheckCircle } from "lucide-react";

export default function CourseHeader({
  title,
  totalLevels,
  totalLessons,
  price, // MRP
  introPrice, // Discounted Price
}) {
  // Dynamic discount calculation
  const discountPercent = Math.round(((price - introPrice) / price) * 100);

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

          {/* Short description */}
          <p className="text-md opacity-90 mt-4 max-w-xl">
            Explore a structured, multi-level learning journey designed to take
            you from foundations to advanced mastery in healthcare revenue and
            billing.
          </p>

          {/* 🔥 NEW LINE 1 — Program Highlight with Tick */}
          <div className="flex items-start gap-2 mt-4 max-w-xl">
            <CheckCircle className="text-green-400 w-5 h-5 mt-1" />
            <p className="text-md font-semibold opacity-95">
              The only program designed for absolute beginners to master
              end-to-end hospital billing — from registration workflows to
              insurance fundamentals.
            </p>
          </div>

          {/* 🔥 NEW LINE 2 — Trusted Partners with Tick */}
          <div className="flex items-start gap-2 mt-3 max-w-xl">
            <CheckCircle className="text-green-400 w-5 h-5 mt-1" />
            <p className="text-sm opacity-90">
              Preferred and trusted by leading healthcare partners such as
              <span className="font-semibold">
                {" "}
                ClaimBuddy, Careline, Medfine, Aradhya Hospital
              </span>{" "}
              and many others.
            </p>
          </div>
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

          {/* PRICE SECTION */}
          <div className="mb-6">
            {/* MRP + Discount */}
            <div className="flex items-center gap-3">
              <p className="text-gray-500 line-through text-[15px]">₹{price}</p>

              <span className="text-[13px] bg-red-100 text-red-600 px-2 py-0.5 rounded-lg font-semibold">
                {discountPercent}% OFF
              </span>
            </div>

            {/* Final Intro Price */}
            <p className="mt-1 text-xl font-bold text-green-600">
              ₹{introPrice} + GST
            </p>

            {/* 🔥 Limited period offer line */}
            <p className="mt-2 text-[13px] text-red-600 font-semibold bg-red-50 px-2 py-1 rounded-md inline-block">
              Hurry up! Offer valid till December 24
            </p>
          </div>

          {/* CTA Button */}
          <button
            onClick={() =>
              window.open(
                `https://wa.me/917032498555?text=Hi%20I%20want%20to%20enroll%20in%20the%20course%20${encodeURIComponent(
                  title
                )}`,
                "_blank"
              )
            }
            className="w-full bg-[#49838c] text-white py-3 rounded-xl text-lg font-semibold hover:bg-[#3b6a70] transition"
          >
            Enroll Now
          </button>
        </div>
      </div>
    </section>
  );
}
