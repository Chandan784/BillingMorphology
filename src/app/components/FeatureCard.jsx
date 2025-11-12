"use client";

import { motion } from "framer-motion";

export default function FeatureCards() {
  const cards = [
    {
      title: "Hands-on, Hospital-Ready Curriculum",
      desc: "Master every stage of hospital billing — from patient registration to discharge — through real-world simulations, checklists, and case-based learning. Our structured, audit-ready modules ensure you don’t just learn concepts, but build the precision and discipline hospitals look for.",
      stat: "📊 92% of learners report increased billing accuracy after Level 1.",
    },
    {
      title: "Led by Healthcare Finance Leaders",
      desc: "Learn directly from seasoned professionals with over 15 years of experience in hospital finance, insurance operations, and revenue assurance. Every session translates years of real-world problem-solving into actionable insights.",
      stat: "🏥 Faculty experience across 100+ healthcare centers.",
    },
    {
      title: "Career Assistance & Employer Connects",
      desc: "Our dedicated placement support guides you through resume framing, mock interviews, and direct hospital connects. Whether your goal is to become a Billing Executive or a TPA Coordinator, we help you step confidently into your first role.",
      stat: "🎯 Active placement assistance for every certified learner.",
    },
  ];

  return (
    <section className="py-16 px-4 md:px-16 bg-gradient-to-b from-[#f9fafb] to-white">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Why Choose Our Hospital Billing Program
        </h2>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-base md:text-lg">
          Learn from experts, gain hands-on experience, and get career support
          to excel in healthcare billing.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {cards.map((c, index) => (
          <motion.article
            key={c.title}
            className="bg-white rounded-3xl shadow-xl p-6 border border-gray-100 cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            whileHover={{
              scale: 1.03,
              boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
            }}
            transition={{ delay: index * 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-lg font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-[#31415d] to-[#49838c]">
                {c.title}
              </h4>
              <div className="text-xs text-[#31415d] font-bold px-2 py-1 rounded-full bg-[#e6f0f7]">
                Core
              </div>
            </div>
            <motion.p
              className="text-gray-700 text-sm mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 + 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              {c.desc}
            </motion.p>
            {c.stat && (
              <motion.p
                className="text-sm text-gray-500 font-medium"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2 + 0.4, duration: 0.6 }}
                viewport={{ once: true }}
              >
                {c.stat}
              </motion.p>
            )}
          </motion.article>
        ))}
      </div>
    </section>
  );
}
