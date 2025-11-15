"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, IndianRupee } from "lucide-react";

const JobOpportunities = () => {
  const sections = [
    {
      title: "Typical Roles After Each Milestone",
      icon: <Briefcase className="w-8 h-8 text-white" />,
      bg: "linear-gradient(90deg, var(--theme-color), #2c5960)",
      points: [
        "After L1: Hospital Billing Executive, Billing Associate",
        "After L2: TPA Coordinator, Claims Executive (Cashless/Reimbursement)",
        "After L3: RCM / Denial Analyst, A/R Executive",
        "After L4: Compliance & Audit Coordinator",
        "After L5: Revenue Assurance Specialist / Team Lead",
        "After L6: RCM Manager / Transformation Lead",
      ],
    },
    {
      title: "Placement & Career Services",
      icon: <GraduationCap className="w-8 h-8 text-white" />,
      bg: "linear-gradient(90deg, var(--theme-color), #2c5960)",
      points: [
        "Career clinic: Resume reframing, LinkedIn optimization, portfolio artifacts",
        "Interview prep: Role-specific question banks, mock interviews, case exercises",
        "Employer connects: Outreach to hospitals, TPAs, healthcare networks",
        "Internships & capstones: Real-world industry problem statements",
        "Ongoing support: Alumni community, job alerts, quarterly learning sprints",
      ],
    },
    {
      title: "Salary Guidance",
      icon: <IndianRupee className="w-8 h-8 text-white" />,
      bg: "linear-gradient(90deg, var(--theme-color), #2c5960)",
      points: [
        "Compensation depends on city, hospital tier, and your experience.",
        "We provide market-aligned salary bands & growth ladders during counseling.",
      ],
    },
  ];

  return (
    <section className="w-full py-12 px-4 md:px-12 bg-[var(--background)]">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-[#31415d] mb-2">
          Job Opportunities, Placement & Career Support
        </h2>
        <p className="text-gray-600">
          Outcome-first: roles, readiness, and employer connects.
        </p>
      </motion.div>

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {sections.map((sec, idx) => (
          <motion.div
            key={idx}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            className="bg-white shadow-lg rounded-2xl border border-[var(--theme-color)]/20 overflow-hidden"
          >
            {/* Header with theme gradient */}
            <div
              className="p-5 text-white flex items-center gap-4"
              style={{ background: sec.bg }}
            >
              {sec.icon}
              <h3 className="text-xl font-semibold">{sec.title}</h3>
            </div>

            {/* Points */}
            <ul className="p-5 space-y-2 text-gray-700 text-sm md:text-base">
              {sec.points.map((p, i) => (
                <li key={i} className="flex items-start gap-2 leading-relaxed">
                  <span className="text-[var(--theme-color)] font-bold">•</span>
                  <span>{p}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default JobOpportunities;
