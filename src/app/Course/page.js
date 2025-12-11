"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { cbmCourses } from "../CourseData";

export default function CoursesPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#eef2f7] to-white py-16">
      <section className="max-w-6xl mx-auto px-6 md:px-14 space-y-12">
        {cbmCourses.map((course, index) => {
          const totalLevels = course.levels.length;
          const totalLessons = course.levels.reduce(
            (sum, lvl) => sum + lvl.lessons.length,
            0
          );

          const totalHours = course.levels.reduce(
            (t, lvl) => t + parseInt(lvl.suggestedLearningHours),
            0
          );

          const summary =
            course.levels[0]?.lessons[0]?.description ||
            "A professional healthcare certification program.";

          // ⭐ DISCOUNT CALCULATION
          const discountPercent = Math.round(
            ((course.price - course.introPrice) / course.price) * 100
          );

          return (
            <motion.div
              key={course.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white rounded-3xl shadow-xl hover:shadow-2xl border border-gray-100 
                         overflow-hidden grid grid-cols-1 lg:grid-cols-2 transition-all duration-300"
            >
              {/* LEFT – IMAGE */}
              <div className="relative h-64 lg:h-auto">
                <img
                  src={
                    course.image ||
                    "https://plus.unsplash.com/premium_photo-1661410991860-4cd86e2613e7?w=600&auto=format&fit=crop&q=60"
                  }
                  alt={course.courseTitle}
                  className="w-full h-full object-cover lg:rounded-l-3xl"
                />
              </div>
            
              {/* RIGHT – DETAILS */}
              <div className="p-8 lg:p-12 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-bold text-[#31415d] mb-3 leading-tight">
                    {course.courseTitle}
                  </h3>

                  <p className="text-gray-600 text-sm md:text-base mb-5">
                    {summary}
                  </p>

                  {/* STATS */}
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-y-4 text-sm">
                    <div>
                      <p className="font-semibold text-gray-700">📘 Levels</p>
                      <p className="text-[#49838c] font-bold">{totalLevels}</p>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-700">📚 Lessons</p>
                      <p className="text-[#49838c] font-bold">{totalLessons}</p>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-700">
                        ⏱ Total Hours
                      </p>
                      <p className="text-[#49838c] font-bold">{totalHours}</p>
                    </div>

                    <div>
                      <p className="font-semibold text-gray-700">⭐ Rating</p>
                      <p className="font-bold text-yellow-500">4.9 / 5</p>
                    </div>

                    {/* ⭐ PRICE BOX */}
                    <div className="col-span-2 sm:col-span-3 mt-2">
                      <div className="bg-[#f7fafc] border border-gray-200 p-4 rounded-xl">
                        <div className="flex items-center gap-3">
                          <p className="text-gray-500 line-through text-[14px]">
                            ₹{course.price}
                          </p>
                          <span className="text-[13px] bg-red-100 text-red-600 px-2 py-0.5 rounded-lg font-semibold">
                            {discountPercent}% OFF
                          </span>
                        </div>

                        <p className="mt-1 text-xl font-bold text-green-600">
                          ₹{course.introPrice} + GST
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div></div>

                {/* BUTTONS */}
                <div className="mt-8 flex flex-col md:flex-row gap-4">
                  <Link
                    href={`/Course/${course.id}`}
                    className="w-full text-center bg-[#31415d] text-white py-3 rounded-xl  
                               font-semibold hover:bg-[#3f557a] transition-all duration-300"
                  >
                    View Course Details
                  </Link>
                </div>
              </div>
            </motion.div>
          );
        })}
      </section>
    </div>
  );
}
