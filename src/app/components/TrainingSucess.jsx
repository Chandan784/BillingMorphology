export default function TrainingSuccess() {
  const cards = [
    {
      image:
        "https://media.istockphoto.com/id/2154863742/photo/doctor-showing-medical-codes-training-presentation.webp?a=1&b=1&s=612x612&w=0&k=20&c=ogKXzkBMow3whlpg6Cz_GmqZ0AAZIfSNxrOIOdurZ6w=", // hospital billing training
      title: "Hands-on, Hospital-Ready Curriculum",
      description:
        "Master every stage of hospital billing — from patient registration to discharge — through real-world simulations, checklists, and case-based learning. Our structured, audit-ready modules ensure you don’t just learn concepts, but build the precision and discipline hospitals look for.",
      stat: "📊 92% of learners report increased billing accuracy after Level 1.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=800&q=80", // finance leaders
      title: "Led by Healthcare Finance Leaders",
      description:
        "Learn directly from seasoned professionals with over 15 years of experience in hospital finance, insurance operations, and revenue assurance. Every session translates years of real-world problem-solving into actionable insights that you can apply from day one.",
      stat: "🏥 Faculty experience across 100+ healthcare centers.",
    },
    {
      image:
        "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=800&q=80", // placement & interview
      title: "Career Assistance & Employer Connects",
      description:
        "We don’t stop at training — our dedicated placement support guides you through resume framing, mock interviews, and direct hospital connects. Whether your goal is to become a Billing Executive or a TPA Coordinator, we help you step confidently into your first role in healthcare finance.",
      stat: "🎯 Active placement assistance for every certified learner.",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-16 text-center">
      <div className="max-w-6xl mx-auto">
        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          “Training designed for real hospital success”
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg">
          Every module, every checklist, every dashboard is built to make you
          confident, competent, and career-ready in hospital billing and revenue
          operations.
        </p>

        {/* Cards */}
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          {cards.map((card, i) => (
            <div
              key={i}
              className="bg-[#f9fafb] rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-shadow text-left"
            >
              <img
                src={card.image}
                alt={card.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {card.title}
                </h3>
                <p className="text-gray-600 mb-4">{card.description}</p>
                <p className="text-sm text-gray-500">{card.stat}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
