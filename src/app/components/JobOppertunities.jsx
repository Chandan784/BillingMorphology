"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const JobOpportunities = () => {
  const [open, setOpen] = useState(null);

  const toggle = (i) => setOpen(open === i ? null : i);

  const data = [
    {
      title: "Typical Roles After Each Milestone",
      content: [
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
      content: [
        "Career clinic: Resume reframing, LinkedIn optimization, portfolio artifacts (SOPs, dashboards, denial playbooks)",
        "Interview prep: Role-specific question banks, mock interviews, case exercises",
        "Employer connects: Curated outreach to hospitals, TPAs, and healthcare networks; hiring days and referrals where applicable",
        "Internships & capstones: Real-world problem briefs for select learners and B2B cohorts",
        "Ongoing support: Alumni community, job alerts, and quarterly learning sprints",
      ],
    },
    {
      title: "Salary Guidance",
      content: [
        "Compensation varies by city, hospital tier, and experience.",
        "We share current bands and growth ladders during counseling to keep expectations accurate and market-aligned.",
      ],
    },
  ];

  return (
    <section className="w-full py-12 px-4 md:px-12 bg-gradient-to-b from-primary/10 to-background text-gray-900">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-2">
          Job Opportunities, Placement & Career Support
        </h2>
        <p className="text-gray-600">
          Outcome-first: roles, readiness, and employer connects.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-4">
        {data.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/80 backdrop-blur-lg border border-primary/20 rounded-2xl shadow-md overflow-hidden transition-all"
          >
            <button
              onClick={() => toggle(i)}
              className="flex justify-between items-center w-full px-6 py-4 text-left font-semibold text-primary"
            >
              {item.title}
              <ChevronDown
                className={`transition-transform ${
                  open === i ? "rotate-180" : ""
                }`}
              />
            </button>

            {open === i && (
              <motion.ul
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="px-6 pb-4 space-y-2 text-gray-700 text-sm md:text-base"
              >
                {item.content.map((line, index) => (
                  <li key={index} className="leading-relaxed">
                    • {line}
                  </li>
                ))}
              </motion.ul>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default JobOpportunities;
