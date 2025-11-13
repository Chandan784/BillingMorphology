"use client";

import { use } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { cbmCourses } from "@/app/CourseData";
import {
  Clock,
  BarChart3,
  Monitor,
  CheckCircle2,
  Award,
  BookOpen,
  ArrowLeft,
  Users,
  Star,
  Target,
} from "lucide-react";

export default function CourseDetail({ params }) {
  const { id } = use(params);
  const course = cbmCourses.find((c) => c.id === Number(id));
  const router = useRouter();

  if (!course) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-[#f0f4f8] px-6">
        <div className="text-center">
          <div className="w-24 h-24 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <span className="text-3xl">❌</span>
          </div>
          <h2 className="text-2xl font-bold text-[#1f2937] mb-3">
            Course Not Found
          </h2>
          <p className="text-gray-600 mb-8 max-w-md">
            The course you're looking for doesn't exist or has been moved.
          </p>
          <button
            onClick={() => router.push("/")}
            className="bg-[#31415d] text-white px-6 py-3 rounded-xl font-medium hover:bg-[#2a384f] transition-all duration-300"
          >
            Back to Courses
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f0f4f8] pb-28 md:pb-16">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        onClick={() => router.back()}
        className="absolute top-6 left-6 z-20 flex items-center gap-2 bg-white/95 px-4 py-2 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-[#1f2937] hover:text-[#31415d] border border-gray-200"
      >
        <ArrowLeft size={20} />
        <span className="font-medium">Back</span>
      </motion.button>

      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-[#31415d] z-10" />
        <img
          src={course.image}
          alt={course.title}
          className="w-full h-64 md:h-96 object-cover opacity-40"
        />
        <div className="absolute inset-0 z-20 flex items-center justify-center px-6">
          <div className="text-center max-w-4xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full mb-6"
            >
              <Star className="fill-white text-white" size={16} />
              <span className="text-white text-sm font-medium">
                Featured Course
              </span>
            </motion.div>
            <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
              {course.title}
            </h1>
            <p className="text-gray-200 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              {course.description}
            </p>
          </div>
        </div>
      </motion.div>

      {/* Course Info Cards - Positioned below hero section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.3 }}
        className="max-w-6xl mx-auto px-6 md:px-12 py-8"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 flex items-center gap-4"
          >
            <div className="bg-[#f0f4f8] p-3 rounded-lg">
              <Clock className="text-[#31415d]" size={24} />
            </div>
            <div>
              <h3 className="text-sm text-gray-600 font-medium">Duration</h3>
              <p className="text-lg font-semibold text-[#1f2937]">
                {course.duration}
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 flex items-center gap-4"
          >
            <div className="bg-[#f0f4f8] p-3 rounded-lg">
              <BarChart3 className="text-[#31415d]" size={24} />
            </div>
            <div>
              <h3 className="text-sm text-gray-600 font-medium">Level</h3>
              <p className="text-lg font-semibold text-[#1f2937]">
                {course.level}
              </p>
            </div>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.02, y: -2 }}
            className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 flex items-center gap-4"
          >
            <div className="bg-[#f0f4f8] p-3 rounded-lg">
              <Monitor className="text-[#31415d]" size={24} />
            </div>
            <div>
              <h3 className="text-sm text-gray-600 font-medium">Mode</h3>
              <p className="text-lg font-semibold text-[#1f2937]">
                {course.mode}
              </p>
            </div>
          </motion.div>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column - Key Information */}
          <div className="lg:col-span-2 space-y-8">
            {/* Who For Section */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#f0f4f8] p-2 rounded-lg">
                  <Target className="text-[#49838c]" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-[#1f2937]">
                  Who Is This For?
                </h2>
              </div>
              <div className="flex items-start gap-3 p-4 rounded-lg bg-[#f8fafc] border border-gray-100">
                <Users
                  className="text-[#31415d] mt-1 flex-shrink-0"
                  size={20}
                />
                <p className="text-[#1f2937] leading-relaxed text-lg">
                  {course.whoFor}
                </p>
              </div>
            </motion.section>

            {/* Key Modules */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#f0f4f8] p-2 rounded-lg">
                  <BookOpen className="text-[#31415d]" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-[#1f2937]">
                  Key Modules
                </h2>
              </div>
              <div className="grid gap-3">
                {course.keyModules.map((mod, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start gap-3 p-4 rounded-lg bg-[#f8fafc] hover:bg-[#f0f4f8] transition-colors duration-300 border border-gray-100"
                  >
                    <div className="bg-white p-1 rounded-full mt-1">
                      <div className="w-2 h-2 bg-[#31415d] rounded-full" />
                    </div>
                    <span className="text-[#1f2937] leading-relaxed">
                      {mod}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.section>

            {/* Learning Outcomes */}
            <motion.section
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-xl p-8 shadow-lg border border-gray-200"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-[#f0f4f8] p-2 rounded-lg">
                  <CheckCircle2 className="text-[#49838c]" size={24} />
                </div>
                <h2 className="text-2xl font-bold text-[#1f2937]">
                  You'll Be Able To
                </h2>
              </div>
              <div className="grid gap-3">
                {course.outcomes.map((out, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * index }}
                    className="flex items-start gap-3 p-4 rounded-lg bg-[#f8fafc] hover:bg-[#f0f4f8] transition-colors duration-300 border border-gray-100"
                  >
                    <CheckCircle2
                      className="text-[#49838c] mt-1 flex-shrink-0"
                      size={20}
                    />
                    <span className="text-[#1f2937] leading-relaxed">
                      {out}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          </div>

          {/* Right Column - Sidebar */}
          <div className="space-y-8">
            {/* Assessment Card */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="bg-white rounded-xl p-6 shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-bold text-[#1f2937] mb-4 flex items-center gap-2">
                <div className="bg-[#f0f4f8] p-1 rounded-lg">
                  <BarChart3 className="text-[#31415d]" size={20} />
                </div>
                Assessment
              </h3>
              <p className="text-gray-700 leading-relaxed">
                {course.assessment}
              </p>
            </motion.section>

            {/* Certification Card */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="bg-[#31415d] rounded-xl p-6 shadow-lg text-white"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-white/20 p-2 rounded-lg">
                  <Award className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold">Outcome</h3>
              </div>
              <p className="text-gray-200 leading-relaxed">
                {course.outcomeCertificate}
              </p>
            </motion.section>

            {/* Desktop Enroll Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="hidden md:block bg-white rounded-xl p-6 shadow-lg border border-gray-200"
            >
              <h3 className="text-xl font-bold text-[#1f2937] mb-4">
                Ready to Start?
              </h3>
              <p className="text-gray-600 mb-6">
                Join this course today and transform your career.
              </p>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => router.push(`/enroll/${course.id}`)}
                className="w-full bg-[#31415d] text-white py-4 px-6 rounded-xl font-bold shadow-lg hover:bg-[#2a384f] transition-all duration-300"
              >
                Enroll Now
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Fixed Enroll Button */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="fixed bottom-0 left-0 w-full md:hidden bg-[#31415d] text-white py-5 flex justify-center items-center shadow-2xl"
      >
        <button
          onClick={() => router.push(`/enroll/${course.id}`)}
          className="text-lg font-bold flex items-center gap-2"
        >
          <Award size={20} />
          Enroll Now
        </button>
      </motion.div>
    </div>
  );
}
