"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const courses = [
  {
    id: 1,
    title: "CBM Foundations: Hospital Billing Anatomy™",
    level: "Level 1",
    duration: "12 weeks",
    summary: "Decode the complete hospital billing workflow.",
  },
  {
    id: 2,
    title: "CBM Claims & TPA Coordination™",
    level: "Level 2",
    duration: "12 weeks",
    summary: "Master end-to-end claim and TPA coordination.",
  },
  {
    id: 3,
    title: "CBM Denial Management & RCM Analytics™",
    level: "Level 3",
    duration: "12 weeks",
    summary: "Learn denial tracking, RCA, and KPI dashboards.",
  },
  {
    id: 4,
    title: "CBM Compliance, Audit & Controls™",
    level: "Level 4",
    duration: "12 weeks",
    summary: "Implement SOPs and prepare audit-ready operations.",
  },
  {
    id: 5,
    title: "CBM Revenue Assurance & Strategy™",
    level: "Level 5",
    duration: "12 weeks",
    summary: "Fix revenue leakage and align billing-finance strategy.",
  },
  {
    id: 6,
    title: "CBM Expert Practicum & Capstone™",
    level: "Level 6",
    duration: "12 weeks",
    summary: "Lead RCM transformation and present dashboards.",
  },
];

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f0f4f8] to-white">
      {/* Animated Header */}
      <section className="relative text-center py-20 px-6 md:px-16 overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#31415d] opacity-10 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#49838c] opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>

        <motion.h1
          initial={{ y: -40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#31415d] to-[#49838c] z-10 relative"
        >
          Courses & Levels
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.7 }}
          className="text-gray-700 mt-4 text-lg max-w-2xl mx-auto z-10 relative"
        >
          A 6-level structured pathway to becoming a{" "}
          <span className="font-semibold text-[#31415d]">
            Certified Billing Morphologist™
          </span>
          . Learn progressively from foundations to leadership.
        </motion.p>
      </section>

      {/* Course Cards */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 pb-20 grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course, index) => (
          <motion.div
            key={course.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl border border-gray-100 p-6 flex flex-col justify-between group transition duration-300"
          >
            <div>
              <h2 className="text-sm font-semibold uppercase text-[#49838c] mb-2 tracking-wide">
                {course.level}
              </h2>
              <h3 className="text-lg font-bold text-[#31415d] group-hover:text-[#49838c] transition mb-3">
                {course.title}
              </h3>
              <p className="text-gray-600 text-sm mb-4">{course.summary}</p>
              <p className="text-gray-500 text-xs">
                ⏱ Duration: {course.duration}
              </p>
            </div>

            <Link
              href={`/Course/${course.id}`}
              className="mt-6 inline-block text-center bg-[#31415d] text-white py-2.5 rounded-xl font-semibold hover:bg-[#49838c] transition-all duration-300"
            >
              View Details
            </Link>
          </motion.div>
        ))}
      </section>
    </div>
  );
}
