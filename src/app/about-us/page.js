"use client";

import { motion } from "framer-motion";

export default function AboutPage() {
  const founders = [
    {
      name: "Mr. Srinivas Naik M",
      role: "Founder & Principal Faculty",
      image:
        "https://images.unsplash.com/photo-1603415526960-f7e0328b37f3?auto=format&fit=crop&w=800&q=80",
      description: `Mr. Srinivas Naik M, Founder and Principal Faculty of Billing Morphology Academy™, is a strategic and results-driven healthcare leader with over 20+ years of experience spanning hospital operations, health insurance, and revenue cycle management (RCM).

Currently serving as Head of Revenue Assurance and Credit Receivables at Apollo Health & Lifestyle Ltd., he oversees billing governance, audit control, and pricing strategy across more than 100 healthcare centers. Renowned for transforming revenue operations, he has achieved a 15% reduction in revenue leakages, 20% faster discharge billing, and 98.8% TPA claim accuracy.

Driven by his belief that “Billing is the anatomy of hospital finance,” Srinivas founded the Academy™ to professionalize hospital billing education through structured certifications like the Certified Billing Morphologist™ (CBM) program. His upcoming book, "The Blue Ocean of Healthcare Revenue Assurance," encapsulates his mission to transform billing into a precision-driven, ethical, and audit-ready science.`,
    },
    {
      name: "Dr. Prashanth Belavadi",
      role: "Co-Founder & Faculty",
      image:
        "https://images.unsplash.com/photo-1573497491208-6b1acb260507?auto=format&fit=crop&w=800&q=80",
      description: `Dr. Prashanth Belavadi is a visionary healthcare strategist, Ayurveda physician, and business leader with over 18 years of experience in hospital operations, healthcare management, and holistic medicine.

As Co-Founder and Business Strategist at Billing Morphology Academy™, he combines clinical insight with strategic foresight to redefine how hospitals approach billing, operational excellence, and patient-centric financial systems. He has led multi-city healthcare operations, optimized cost structures, and built cross-functional teams that drive measurable revenue growth.

Through his mentorship at the Academy™, he empowers learners to see beyond processes—to build financially resilient and ethically strong healthcare organizations. Dr. Prashanth is also Chief Ayurveda Consultant at Vijando Male Wellness Center and an advocate for integrating scientific billing, clinical transparency, and operational ethics in healthcare education.`,
    },
  ];

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
      <section className="py-20 px-6 md:px-16 bg-gradient-to-b from-[#f0f4f8] to-white">
        <motion.div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Founders & Faculty Credibility
          </h2>
          <p className="mt-4 text-gray-700 text-lg max-w-3xl mx-auto">
            Meet the visionaries behind Billing Morphology Academy™.
          </p>

          <div className="mt-16 grid md:grid-cols-2 gap-10">
            {founders.map((person, i) => (
              <motion.div
                key={i}
                className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 cursor-pointer hover:shadow-2xl transition-transform transform hover:-translate-y-2 flex flex-col md:flex-row"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="md:w-1/3 h-64 md:h-auto relative">
                  <img
                    src={person.image}
                    alt={person.name}
                    className="w-full h-full object-cover rounded-t-3xl md:rounded-l-3xl md:rounded-tr-none"
                  />
                </div>
                <div className="p-6 md:p-8 text-left md:w-2/3 flex flex-col justify-between">
                  <div>
                    <h3 className="text-2xl font-extrabold mb-2 text-transparent bg-clip-text bg-gradient-to-r from-[#31415d] to-[#49838c]">
                      {person.name}
                    </h3>
                    <p className="text-sm text-gray-500 font-semibold mb-4">
                      {person.role}
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      {person.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </section>
    </div>
  );
}
