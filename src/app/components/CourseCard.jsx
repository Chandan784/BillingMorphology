"use client";
import Link from "next/link";

export default function CourseCard({ course }) {
  const totalLevels = course.levels?.length || 0;

  // Calculate total suggested learning hours
  const totalHours = course.levels
    ?.map((lvl) => parseInt(lvl.suggestedLearningHours))
    .reduce((a, b) => a + b, 0);

  // Use Level 1's description as card body
  const shortDesc =
    course.levels?.[0]?.lessons?.[0]?.description ||
    "Comprehensive healthcare billing and RCM specialization course.";

  return (
    <div className="bg-white border border-blue-100 p-6 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-1 transition-all duration-300 w-full">
      {/* Title */}
      <h3 className="text-2xl font-bold text-blue-700 mb-3">
        {course.courseTitle}
      </h3>

      {/* Short Description */}
      <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-3">
        {shortDesc}
      </p>

      {/* Course Stats */}
      <div className="flex items-center gap-6 mb-4">
        <div className="flex flex-col text-center">
          <span className="text-lg font-bold text-blue-700">{totalLevels}</span>
          <span className="text-xs text-gray-500">Levels</span>
        </div>

        <div className="h-8 w-px bg-gray-300"></div>

        <div className="flex flex-col text-center">
          <span className="text-lg font-bold text-blue-700">
            {totalHours || "60+"}
          </span>
          <span className="text-xs text-gray-500">Hours</span>
        </div>
      </div>

      {/* Button */}
      <Link href={"/courses/cbm"}>
        <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2.5 rounded-xl mt-2 transition">
          View Full Course
        </button>
      </Link>
    </div>
  );
}
