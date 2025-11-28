"use client";

import Link from "next/link";
import { Layers, BookOpen, Clock } from "lucide-react";

export default function CourseCard({ course }) {
  const totalLevels = course.levels?.length || 0;
  const totalLessons = course.levels?.reduce(
    (sum, lvl) => sum + lvl.lessons.length,
    0
  );
  const totalHours = course.levels
    ?.map((lvl) => parseInt(lvl.suggestedLearningHours))
    .reduce((a, b) => a + b, 0);

  return (
    <div
      className="
        bg-white 
        rounded-2xl 
        shadow-lg  
        border border-gray-200 
        overflow-hidden 
        transition-all duration-300 
        hover:shadow-xl
        w-[260px]          /* perfect size for phone */
        md:w-[300px]       /* tablet */
        lg:w-[340px]       /* desktop */
      "
    >
      {/* IMAGE */}
      <div className="relative h-36 md:h-40 lg:h-48 w-full">
        <img
          src={
            course.image ||
            "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600"
          }
          alt={course.courseTitle}
          className="w-full h-full object-cover"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 md:p-5 lg:p-6">
        {/* TITLE */}
        <h3 className="text-sm md:text-base lg:text-lg font-semibold text-[#31415d] line-clamp-2">
          {course.courseTitle}
        </h3>

        {/* ICON ROW */}
        <div className="flex items-center gap-4 mt-3 text-xs md:text-sm text-gray-600">
          <div className="flex items-center gap-1">
            <Layers size={14} className="text-[#49838c]" />
            {totalLevels} Levels
          </div>

          <div className="flex items-center gap-1">
            <BookOpen size={14} className="text-[#49838c]" />
            {totalLessons} Lessons
          </div>

          <div className="flex items-center gap-1">
            <Clock size={14} className="text-[#49838c]" />
            {totalHours || "60+"} Hrs
          </div>
        </div>

        {/* PRICE */}
        <div className="mt-4">
          {/* Calculate Discount */}
          {(() => {
            const discountPercent = Math.round(
              ((course.price - course.introPrice) / course.price) * 100
            );

            return (
              <>
                <div className="flex items-center gap-3">
                  {/* MRP Price */}
                  <p className="text-[13px] md:text-[14px] text-gray-500 line-through">
                    ₹{course.price}
                  </p>

                  {/* Discount */}
                  <span className="text-[12px] md:text-[13px] bg-red-100 text-red-600 px-2 py-0.5 rounded-lg font-semibold">
                    {discountPercent}% OFF
                  </span>
                </div>

                {/* Final Price */}
                <p className="text-[16px] md:text-[18px] font-bold text-green-600 mt-1">
                  ₹{course.introPrice} + GST
                </p>
              </>
            );
          })()}
        </div>

        {/* BUTTON */}
        <Link href={`/Course/${course.id}`}>
          <button
            className="
              w-full 
              mt-4 
              bg-[#31415d] 
              text-white 
              py-2.5 
              rounded-lg 
              text-sm md:text-[15px]
              hover:bg-[#3f557a]
              transition
            "
          >
            View Details →
          </button>
        </Link>
      </div>
    </div>
  );
}
