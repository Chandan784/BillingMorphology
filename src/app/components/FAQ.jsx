"use client";
import React, { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      q: "What is Billing Morphology Academy™?",
      a: "Billing Morphology Academy™ is an online and onsite training institution offering structured certifications in hospital billing, revenue assurance, insurance processes, and healthcare finance.",
    },
    {
      q: "Who can join the courses?",
      a: "Anyone—medical or non-medical—who wants to build a career in hospitals, insurance companies, TPAs, healthtech, insurtech, or healthcare administration.",
    },
    {
      q: "Do you offer both online and offline training?",
      a: "Yes. We provide self-paced online learning, live instructor-led sessions, and onsite workshops.",
    },
    {
      q: "What makes your academy different?",
      a: "We blend billing science, compliance, revenue assurance, payer processes, global standards, and real case studies into a structured multi-level certification pathway.",
    },
    {
      q: "Are the programs suitable for fresh graduates?",
      a: "Yes. Level 1 is designed for beginners entering the healthcare and insurance sectors.",
    },
    {
      q: "What is the Certified Billing Morphologist™ (CBM) pathway?",
      a: "A 5–6 level certification program covering hospital billing fundamentals to advanced revenue assurance and compliance.",
    },
    {
      q: "Which level should I start with?",
      a: "Most learners begin with CBM Level 1 unless they have significant prior experience.",
    },
    {
      q: "Is the certification accredited?",
      a: "Yes. All certificates come with accreditation documentation and digital verification.",
    },
    {
      q: "Will I get a certificate after completion?",
      a: "Yes. You receive a digitally verifiable certificate with a unique ID.",
    },
    {
      q: "Do courses include case studies?",
      a: "Yes. Each module includes real-world case studies.",
    },
    {
      q: "Is practical training provided?",
      a: "Yes. You will work on bills, denial analysis, audits, and simulations.",
    },
    {
      q: "What materials are provided?",
      a: "Videos, handbooks, SOP templates, case files, audit tools, and presentations.",
    },
    {
      q: "How are assessments conducted?",
      a: "Through MCQs, case scenarios, and practical evaluation.",
    },
    {
      q: "Do you offer EMI options?",
      a: "Yes, flexible EMI plans are available.",
    },
    {
      q: "Do you offer corporate training?",
      a: "Yes. We design custom modules for hospitals and insurance companies.",
    },
  ];

  return (
    <div className="w-full bg-gradient-to-b from-[#eef3fa] to-[#e3e8f2] lg:px-24 px-6 py-16 rounded-3xl shadow-xl border border-[#d6dce5] mt-16 mb-16">
      <h2 className="text-4xl font-bold text-[#31415d] text-center mb-12 tracking-wide">
        Frequently Asked Questions
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {faqs.map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl border border-[#d8dce4] shadow-sm hover:shadow-md transition-all duration-300"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex justify-between items-center p-6 text-left"
            >
              <div className="flex items-start gap-4">
                <div className="w-1 h-full bg-[#31415d] rounded-full"></div>
                <span className="font-semibold text-[#31415d] text-[17px] leading-snug">
                  {item.q}
                </span>
              </div>

              {openIndex === index ? (
                <ChevronUp className="w-6 h-6 text-[#31415d] flex-shrink-0" />
              ) : (
                <ChevronDown className="w-6 h-6 text-[#31415d] flex-shrink-0" />
              )}
            </button>

            <div
              className="overflow-hidden transition-all duration-300"
              style={{
                maxHeight: openIndex === index ? "500px" : "0px",
              }}
            >
              <div className="p-6 pt-0">
                <p className="text-gray-700 text-[15px] leading-relaxed pl-7">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
