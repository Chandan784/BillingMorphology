"use client";
import React from "react";
import { useParams } from "next/navigation";
import { cbmCourses } from "@/app/CourseData";

import CourseHeader from "@/app/components/course-details/CourseHeader";
import CourseLevels from "@/app/components/course-details/CourseLevel";

import WhoIsThisCourseFor from "@/app/components/WhoIsThisCourseFor";
import FAQ from "@/app/components/FAQ";
import Benefits from "@/app/components/Benifits";
import CourseDetailsTestimonials from "@/app/components/CourseDetailsTestimonials";
import Certificate from "@/app/components/Certificate";

export default function CourseDetails() {
  const { id } = useParams();
  const course = cbmCourses.find((c) => c.id === id);

  if (!course) return <p className="text-center py-20">Course not found</p>;

  const totalLessons = course.levels.reduce(
    (acc, lvl) => acc + lvl.lessons.length,
    0
  );

  const totalLevels = course.levels.length;

  return (
    <div className="w-full min-h-screen bg-gray-100 text-gray-800">
      {/* HEADER WITH FULL DATA */}
      <CourseHeader
        title={course.courseTitle}
        totalLevels={totalLevels}
        totalLessons={totalLessons}
        price={course.price || 12000}
      />

      {/* MAIN CONTENT */}
      <div className="w-full mx-auto px-4 py-10 flex flex-col md:flex-row gap-6">
        <CourseLevels levels={course.levels} />
      </div>

      {/* OTHER SECTIONS */}
      <WhoIsThisCourseFor course={course} />
      <FAQ course={course} />
      <Benefits course={course} />
      <CourseDetailsTestimonials />
      <Certificate course={course} />
    </div>
  );
}
