"use client";

import { motion } from "framer-motion";

export default function TrainingSuccess() {
  const cards = [
    {
      image:
        "https://media.istockphoto.com/id/2154863742/photo/doctor-showing-medical-codes-training-presentation.webp?a=1&b=1&s=612x612&w=0&k=20&c=ogKXzkBMow3whlpg6Cz_GmqZ0AAZIfSNxrOIOdurZ6w=",
      title: "Hands-on, Hospital-Ready Curriculum",
      description:
        "Master every stage of hospital billing — from patient registration to discharge — through real-world simulations, checklists, and case-based learning. Our structured, audit-ready modules ensure you don’t just learn concepts, but build the precision and discipline hospitals look for.",
      stat: "📊 92% of learners report increased billing accuracy after Level 1.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80",
      title: "Led by Healthcare Finance Leaders",
      description:
        "Learn directly from seasoned professionals with over 15 years of experience in hospital finance, insurance operations, and revenue assurance. Every session translates years of real-world problem-solving into actionable insights that you can apply from day one.",
      stat: "🏥 Faculty experience across 100+ healthcare centers.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80",
      title: "Career Assistance & Employer Connects",
      description:
        "We don’t stop at training — our dedicated placement support guides you through resume framing, mock interviews, and direct hospital connects. Whether your goal is to become a Billing Executive or a TPA Coordinator, we help you step confidently into your first role in healthcare finance.",
      stat: "🎯 Active placement assistance for every certified learner.",
    },
  ];

  return (
    <section className="bg-gradient-to-b from-[#f0f4f8] to-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-[#31415d]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          “Training designed for real hospital success”
        </motion.h2>
        <motion.p
          className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
        >
          Every module, every checklist, every dashboard is built to make you
          confident, competent, and career-ready in hospital billing and revenue
          operations.
        </motion.p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {cards.map((card, i) => (
            <motion.div
              key={i}
              className="bg-white rounded-3xl overflow-hidden shadow-lg border border-gray-100 cursor-pointer hover:shadow-2xl transition-transform transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="relative w-full h-52">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover rounded-t-3xl"
                />
              </div>
              <div className="p-8 text-left">
                <h3 className="text-xl font-extrabold mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#31415d] to-[#49838c]">
                  {card.title}
                </h3>
                <motion.p
                  className="text-gray-700 mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.3 + 0.2, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {card.description}
                </motion.p>
                <motion.p
                  className="text-sm text-gray-500 font-medium"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.3 + 0.4, duration: 0.8 }}
                  viewport={{ once: true }}
                >
                  {card.stat}
                </motion.p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
