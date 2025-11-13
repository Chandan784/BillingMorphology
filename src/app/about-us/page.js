"use client";

import { motion } from "framer-motion";
import TeamSection from "../components/TeamSection";

export default function AboutPage() {
  const authorityPoints = [
    {
      title: "Structured, Audit-Ready Curriculum",
      description:
        "The CBM pathway is built around SOPs, checklists, and measurable KPIs, mirroring real hospital governance so learners become productive from day one.",
    },
    {
      title: "Industry Collaboration (In Progress)",
      description:
        "We actively work with hospital administrators, finance controllers, and TPA professionals to validate modules, case studies, and SLAs. Advisory councils and formal MoUs are expanded periodically; updates are reflected in our course pages.",
    },
    {
      title: "Accreditation Roadmap",
      description:
        "We maintain an accreditation dossier and verification framework; institutional tie-ups and recognition are pursued transparently. Certificates carry unique IDs for verification on our site.",
    },
    {
      title: "Ethical Billing & Compliance First",
      description:
        "Our training emphasizes patient-centric, ethical billing aligned with payer and institutional policies—because trust is the real currency in healthcare.",
    },
    {
      title: "Proof of Work > Promises",
      description:
        "Every learner graduates with tangible deliverables (SOP packs, denial dashboards, revenue-assurance project) that hiring managers can review.",
    },
  ];

  return (
    <div className="bg-white">
      {/* Hero Banner */}
      <section className="bg-gradient-to-r from-[#31415d] to-[#49838c] text-white py-32 px-6 md:px-16 text-center">
        <motion.h1
          className="text-4xl md:text-5xl font-extrabold max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          About Billing Morphology Academy™
        </motion.h1>
        <motion.p
          className="mt-6 text-lg md:text-xl max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Empowering healthcare billing professionals with audit-ready skills,
          ethical practices, and operational excellence.
        </motion.p>
      </section>

      {/* Authority, Credibility & Recognition */}
      <section className="py-20 px-6 md:px-16">
        <motion.div
          className="max-w-6xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#31415d] to-[#49838c]">
            Authority, Credibility & Recognition
          </h2>
          <p className="mt-4 text-gray-700 text-lg max-w-3xl mx-auto">
            Why employers trust Billing Morphology Academy™.
          </p>

          <div className="mt-12 grid md:grid-cols-2 gap-8">
            {authorityPoints.map((point, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-3xl shadow-lg border border-gray-100 p-6 cursor-pointer hover:shadow-2xl transition-transform transform hover:-translate-y-2"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <h3 className="font-semibold text-xl mb-2 text-[#31415d]">
                  {point.title}
                </h3>
                <p className="text-gray-700">{point.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>

      {/* Founders & Faculty */}
      <TeamSection />
    </div>
  );
}
