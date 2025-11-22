"use client";
import React from "react";

export default function CourseSidebar({ totalLevels, totalLessons, price }) {
  return (
    <div className="w-full md:w-80 bg-white rounded-2xl shadow-xl p-6 h-fit border border-gray-200">
      <h2 className="text-xl font-bold text-[#31415d] mb-4">Course Summary</h2>

      <p className="mb-2 text-lg">
        <strong>Total Levels:</strong> {totalLevels}
      </p>

      <p className="mb-2 text-lg">
        <strong>Total Lessons:</strong> {totalLessons}
      </p>

      <p className="mb-4 text-lg">
        <strong>Price:</strong> ₹{price}
      </p>

      <button className="w-full bg-[#31415d] text-white py-3 rounded-xl text-lg font-semibold hover:bg-[#26334a] transition">
        Enroll Now
      </button>

      <button className="w-full mt-3 border border-[#31415d] text-[#31415d] py-3 rounded-xl text-lg font-semibold hover:bg-[#e6e9ef] transition">
        Download Syllabus
      </button>
    </div>
  );
}
