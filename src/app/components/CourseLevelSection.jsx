"use client";

import { useRef } from "react";
import Link from "next/link";
import { cbmCourses } from "../CourseData";
import CourseCard from "./CourseCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

export default function CourseLevelsSection() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  return (
    <section className="bg-white py-20 lg:px-6 md:px-16">
      <div className="w-full mx-auto relative">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Master Every Stage of Hospital Billing
          </h2>
          <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg">
            Explore Billing, Claims, Denial Management & RCM Analytics across
            all CBM courses
          </p>
        </div>

        {/* Arrow Buttons */}
        <button
          onClick={scrollLeft}
          className="flex absolute left-2 top-[48%] -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 active:scale-95 transition"
        >
          <ChevronLeft size={22} />
        </button>

        <button
          onClick={scrollRight}
          className="flex absolute right-2 top-[48%] -translate-y-1/2 z-20 bg-white shadow-lg rounded-full p-2 hover:bg-gray-100 active:scale-95 transition"
        >
          <ChevronRight size={22} />
        </button>

        {/* Horizontal Scroll */}
        <div className="relative">
          <div
            ref={scrollRef}
            className="flex gap-2 md:gap-3 lg:gap-5 overflow-x-auto py-4 scroll-smooth"
            style={{
              scrollbarWidth: "none", // Firefox
            }}
          >
            {/* Hide scrollbar for Webkit browsers */}

            {/* VIEW ALL — Hidden on MOBILE */}
            <Link
              href="/Course"
              className="flex-shrink-0 hidden lg:block w-[340px]"
            >
              <div
                className="
                bg-[#31415d]
                hover:bg-[#3f557a]
                transition-all
                duration-300
                text-white
                rounded-2xl
                p-6
                h-full
                flex
                flex-col
                justify-center
                border
                border-[#3f557a]/40
                shadow-[0_10px_30px_rgba(0,0,0,0.4)]
                hover:shadow-[0_15px_40px_rgba(0,0,0,0.55)]
                backdrop-blur-xl
                relative
                overflow-hidden
              "
              >
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none"></div>
                <div className="absolute -top-10 -right-10 w-28 h-28 bg-white/10 rounded-full blur-2xl"></div>

                <h3 className="text-lg font-bold tracking-wide">
                  Explore All Courses
                </h3>
                <p className="text-sm text-gray-200 mt-2 leading-relaxed">
                  Unlock the full CBM program library and upskill across every
                  level.
                </p>
                <button className="mt-6 py-2.5 px-5 rounded-xl text-sm font-semibold bg-white text-[#31415d] hover:bg-gray-100 transition-all shadow">
                  View All →
                </button>
              </div>
            </Link>

            {/* CBM Courses */}
            {cbmCourses.map((course) => (
              <div
                key={course.id}
                className="flex-shrink-0 w-[280px] sm:w-[260px] lg:w-[340px]"
              >
                <CourseCard course={course} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
