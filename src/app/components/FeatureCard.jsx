// src/app/components/FeatureCards.jsx
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
    <div className="grid gap-6 md:grid-cols-3">
      {cards.map((c) => (
        <article
          key={c.title}
          className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition"
        >
          <div className="flex items-center justify-between">
            <h4 className="text-lg font-semibold">{c.title}</h4>
            <div className="text-xs text-[var(--theme-color,#2563eb)] font-bold">
              Core
            </div>
          </div>
          <p className="mt-3 text-gray-600 text-sm">{c.desc}</p>
          {c.stat && <p className="mt-4 text-sm text-gray-500">{c.stat}</p>}
        </article>
      ))}
    </div>
  );
}
