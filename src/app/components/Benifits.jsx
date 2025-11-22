"use client";

import React from "react";
import {
  BadgeCheck,
  Workflow,
  FileCheck,
  PhoneCall,
  BarChart3,
  ShieldCheck,
  Globe,
  ClipboardList,
  ScrollText,
} from "lucide-react";

export default function Benefits() {
  const benefits = [
    {
      icon: <BadgeCheck className="w-8 h-8 text-[#31576d]" />,
      title: "Clear Understanding of IRDAI & Insurance Basics",
      desc: "Master premiums, deductibles, exclusions, networks, and IRDAI rules with simple, easy lessons.",
    },
    {
      icon: <Workflow className="w-8 h-8 text-[#31576d]" />,
      title: "End-to-End Claims Workflow Mastery",
      desc: "Learn cashless + reimbursement, pre-auth, documentation, adjudication, and settlement.",
    },
    {
      icon: <FileCheck className="w-8 h-8 text-[#31576d]" />,
      title: "Highly Practical Training",
      desc: "Work with real policy excerpts, claim forms, insurer circulars, and billing documents.",
    },
    {
      icon: <PhoneCall className="w-8 h-8 text-[#31576d]" />,
      title: "Master TPA & Insurance Coordination Skills",
      desc: "Develop strong communication workflows, query handling, and approval processes.",
    },
    {
      icon: <BarChart3 className="w-8 h-8 text-[#31576d]" />,
      title: "Hands-On Analytics & Process Improvement",
      desc: "Learn dashboards, KPI tracking, A/R aging, RCA, and Lean methods for efficiency.",
    },
    {
      icon: <ShieldCheck className="w-8 h-8 text-[#31576d]" />,
      title: "Compliance, Audit & Fraud Prevention Ready",
      desc: "Master grievance handling, fraud red flags, audit readiness, and ethical billing.",
    },
    {
      icon: <Globe className="w-8 h-8 text-[#31576d]" />,
      title: "Global Best Practices Awareness",
      desc: "Understand HIPAA, GDPR, ICD-10/11, CPT, and global data security standards.",
    },
    {
      icon: <ClipboardList className="w-8 h-8 text-[#31576d]" />,
      title: "Capstone: Full Claim Management",
      desc: "Work on a full real claim from policy review → adjudication → appeal → audit.",
    },
    {
      icon: <ScrollText className="w-8 h-8 text-[#31576d]" />,
      title: "Certificate of Completion",
      desc: "Earn a professional certificate validating your expertise in claims & IRDAI compliance.",
    },
  ];

  return (
    <section className="py-20 px-6 md:px-12 bg-gradient-to-b from-[#f8fafc] to-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-extrabold text-center text-gray-900">
          How This Course Benefits You
        </h2>

        <p className="text-center text-gray-600 max-w-2xl mx-auto mt-4 text-sm md:text-base">
          A complete skill-building transformation designed for{" "}
          <span className="font-semibold text-[#31576d]">billing</span>,{" "}
          <span className="font-semibold text-[#31576d]">claims</span>,{" "}
          <span className="font-semibold text-[#31576d]">TPA</span>, and{" "}
          <span className="font-semibold text-[#31576d]">
            RCM professionals
          </span>
          .
        </p>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-16">
          {benefits.map((benefit, i) => (
            <div
              key={i}
              className="p-6 bg-white border-l-4 border-[#31576d] rounded-xl shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="mb-4">{benefit.icon}</div>

              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                {benefit.title}
              </h3>

              <p className="text-gray-600 leading-relaxed text-sm md:text-[15px]">
                {benefit.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
