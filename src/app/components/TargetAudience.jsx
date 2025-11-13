"use client";

import { motion } from "framer-motion";
import {
  Briefcase,
  Users,
  Building2,
  Target,
  TrendingUp,
  Layers,
} from "lucide-react";

const personas = [
  {
    icon: Users,
    title: "Students & Fresh Graduates",
    desc: "Want an industry-ready skillset that leads to a first job in hospital billing or claims operations.",
  },
  {
    icon: Briefcase,
    title: "Hospital Billing & RCM Executives",
    desc: "Need structured upskilling to move from data entry to RCM analysis, denial prevention, and compliance.",
  },
  {
    icon: Building2,
    title: "Insurance / TPA Professionals",
    desc: "Seek a provider-side lens to improve cashless coordination, pre-auth, and claim adjudication.",
  },
  {
    icon: Layers,
    title: "Hospital Owners / Finance Leaders",
    desc: "Want revenue assurance, leakage control, robust SOPs, and dashboards that teams can actually execute.",
  },
  {
    icon: Target,
    title: "Career Switchers (BPO/KPO/Finance)",
    desc: "Want a clear entry pathway into healthcare revenue cycle roles with proof-of-competence.",
  },
  {
    icon: TrendingUp,
    title: "B2B Corporate Training (Hospitals/TPAs)",
    desc: "Require role-based, KPI-linked, audit-compliant training at scale.",
  },
];

const painPoints = [
  "Fragmented, on-the-job learning with no formal structure",
  "Denials, underpayments, and reconciliation gaps",
  "TPA coordination delays and documentation errors",
  "Poor visibility into A/R, coding, and compliances",
  "Lack of credible, recognized certification to signal capability",
];

const aspirations = [
  "Credible certification (Certified Billing Morphologist™ – CBM)",
  "Faster hiring, promotions, and role mobility (Billing → RCM Analyst → Revenue Assurance)",
  "Confidence handling audits, TPAs, coding queries, and CFO reviews",
];

const TargetAudience = () => {
  return (
    <section className="py-16 px-6 md:px-12 bg-gradient-to-b from-background via-primary/5 to-background text-gray-900">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary mb-3">
          Target Audience & Learner Personas
        </h2>
        <p className="text-gray-600 text-lg">
          Who we serve—and what they need from us.
        </p>
      </motion.div>

      {/* Personas */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {personas.map((p, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white/80 backdrop-blur-lg border border-primary/10 rounded-2xl p-6 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
          >
            <p.icon className="w-10 h-10 text-primary mb-3" />
            <h3 className="font-semibold text-lg text-gray-900 mb-2">
              {p.title}
            </h3>
            <p className="text-gray-700 text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>

      {/* Pain Points & Aspirations */}
      <div className="max-w-5xl mx-auto mt-16 grid md:grid-cols-2 gap-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="p-6 border-l-4 border-primary bg-white/80 rounded-xl shadow-sm backdrop-blur-md"
        >
          <h3 className="text-xl font-semibold text-primary mb-3">
            Top Pain Points We Solve
          </h3>
          <ul className="text-gray-700 space-y-2 list-disc list-inside text-sm md:text-base">
            {painPoints.map((pt, i) => (
              <li key={i}>{pt}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="p-6 border-l-4 border-secondary bg-white/80 rounded-xl shadow-sm backdrop-blur-md"
        >
          <h3 className="text-xl font-semibold text-secondary mb-3">
            What They Aspire To
          </h3>
          <ul className="text-gray-700 space-y-2 list-disc list-inside text-sm md:text-base">
            {aspirations.map((asp, i) => (
              <li key={i}>{asp}</li>
            ))}
          </ul>
        </motion.div>
      </div>

      {/* Emotional Closing */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mt-16 max-w-3xl mx-auto"
      >
        <p className="text-lg md:text-xl text-gray-800 font-medium italic bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
          “Clarity, competence, and career momentum—
          <br className="hidden md:block" />I know exactly what to learn, in
          what order, and how it advances my career.”
        </p>
      </motion.div>
    </section>
  );
};

export default TargetAudience;
