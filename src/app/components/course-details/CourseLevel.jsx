"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function CourseLevels({ levels }) {
  const [selectedLevel, setSelectedLevel] = useState(null);

  return (
    <section className="w-full mt-16 lg:px-24">
      {/* Heading */}
      <h2 className="text-center text-3xl md:text-4xl font-bold text-[#31415d] mb-12">
        What Will You Learn?
      </h2>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {levels.map((level, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            className="bg-white border border-gray-200 rounded-2xl shadow-md p-6"
          >
            <h3 className="text-xl font-semibold text-[#31415d]">
              Level {level.level}: {level.title}
            </h3>

            <p className="text-sm text-gray-600 mt-1 mb-4">
              Suggested Hours: {level.suggestedLearningHours}
            </p>

            <button
              onClick={() => setSelectedLevel(level)}
              className="w-full bg-[#31415d] text-white py-2 px-4 rounded-xl font-semibold hover:bg-[#26334a] transition"
            >
              View Details
            </button>
          </motion.div>
        ))}
      </div>

      {/* ====================== MODAL ====================== */}
      <AnimatePresence>
        {selectedLevel && (
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Modal Card */}
            <motion.div
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl p-6 relative overflow-y-auto max-h-[90vh]"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedLevel(null)}
                className="absolute top-4 right-4 text-gray-600 hover:text-black"
              >
                <X size={26} />
              </button>

              {/* Title */}
              <h2 className="text-2xl font-bold text-[#31415d] mb-2">
                Level {selectedLevel.level}: {selectedLevel.title}
              </h2>

              <p className="text-sm text-gray-600 mb-5">
                Suggested Hours: {selectedLevel.suggestedLearningHours}
              </p>

              {/* Lessons */}
              <h3 className="text-xl font-semibold text-[#31415d] mb-2">
                Lessons
              </h3>
              <ul className="list-disc ml-5 mb-5 space-y-1">
                {selectedLevel.lessons.map((l, i) => (
                  <li key={i}>
                    <strong>{l.title}:</strong> {l.description}
                  </li>
                ))}
              </ul>

              {/* Key Concepts */}
              <h3 className="text-xl font-semibold text-[#31415d] mb-2">
                Key Concepts
              </h3>
              <ul className="list-disc ml-5 mb-5 space-y-1">
                {selectedLevel.keyConcepts.map((c, i) => (
                  <li key={i}>{c}</li>
                ))}
              </ul>

              {/* Assessments */}
              <h3 className="text-xl font-semibold text-[#31415d] mb-2">
                Assessments
              </h3>
              <ul className="list-disc ml-5 mb-5 space-y-1">
                {selectedLevel.assessment.map((a, i) => (
                  <li key={i}>{a}</li>
                ))}
              </ul>

              {/* Project */}
              <h3 className="text-xl font-semibold text-[#31415d] mb-2">
                Project
              </h3>
              <p className="mb-5">{selectedLevel.project}</p>

              {/* Format */}
              <h3 className="text-xl font-semibold text-[#31415d] mb-2">
                Format
              </h3>
              <ul className="list-disc ml-5 space-y-1">
                {selectedLevel.format.map((f, i) => (
                  <li key={i}>{f}</li>
                ))}
              </ul>

              {/* Close Button Bottom */}
              <button
                onClick={() => setSelectedLevel(null)}
                className="mt-6 w-full bg-[#31415d] text-white py-3 rounded-xl font-semibold hover:bg-[#26334a] transition"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
