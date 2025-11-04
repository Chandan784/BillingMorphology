"use client";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-[#0a0a0a] text-white py-20 px-6 md:px-16 flex flex-col md:flex-row items-center justify-between min-h-[90vh]">
      {/* Left Content */}
      <div className="max-w-xl space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Practical Hospital Billing Training <br /> With Placement Support
        </h1>
        <p className="text-gray-300 text-lg">
          Designed by healthcare finance experts with 15+ years of experience,
          our audit-ready training turns fresh graduates into confident hospital
          billing professionals — with placement support every step of the way.
        </p>

        <div className="flex gap-4 pt-4">
          <button
            className="px-6 py-3 rounded-full font-semibold text-white"
            style={{ backgroundColor: "var(--theme-color)" }}
          >
            Start Learning
          </button>
          <button className="px-6 py-3 rounded-full border border-gray-400 hover:border-white transition">
            Talk to Advisor
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="mt-10 md:mt-0">
        <Image
          src="https://images.pexels.com/photos/7162994/pexels-photo-7162994.jpeg"
          alt="Hospital Billing Training"
          width={500}
          height={500}
          className="rounded-2xl shadow-lg"
        />
      </div>
    </section>
  );
}
