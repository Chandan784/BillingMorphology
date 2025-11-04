import React from "react";

const testimonials = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1659353889203-0cf1be5cf4e0?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fEhvc3BpdGFsJTIwQmlsbGluZyUyMHRyYWluaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    headline:
      "“From confused fresher to confident Billing Executive — in just 3 months.”",
    body: "After graduating in commerce, Ankita had no idea where to start her career. The CBM Level-1 training gave her the clarity, structure, and mentorship she needed. With mock audits and placement support, she’s now working at a leading multi-specialty hospital — managing billing files with precision and pride.",
    cta: "Read Ankita’s journey →",
  },
  {
    id: 2,
    image:
      "https://plus.unsplash.com/premium_photo-1667520580687-a85c9080a9bc?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8ODR8fEhvc3BpdGFsJTIwQmlsbGluZyUyMHRyYWluaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
    headline:
      "“I left my BPO job — and found a meaningful career in healthcare.”",
    body: "Rahul spent five years in data entry before discovering the Certified Billing Morphologist™ program. The hands-on projects and real-case simulations helped him transition smoothly into a TPA Coordinator role. “For the first time, I’m part of something that impacts real people — and I’m proud of that.”",
    cta: "Read Rahul’s story →",
  },
  {
    id: 3,
    image:
      "https://media.istockphoto.com/id/2239496601/photo/medical-research-and-tablet-with-nurse-woman-in-clinic-for-insurance-records-or-schedule-app.webp?a=1&b=1&s=612x612&w=0&k=20&c=sWXja5J7deV-Ayuwl4Ys0QelPyQiADHWhmMgbhuD5XE=",
    headline:
      "“This program turned my hospital experience into career growth.”",
    body: "Already working as a billing clerk, Sana wanted to move up. Through the CBM Levels 2 and 3, she mastered denial management, dashboards, and audit prep. Within months, she was promoted to RCM Analyst, trusted to train new joiners using the same methods she learned here.",
    cta: "Read Sana’s success →",
  },
];

const Testimonials = () => {
  return (
    <section className="bg-gray-50 py-16 px-6 text-center">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">
        Billing Morphology–powered success stories
      </h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-12">
        Real learners. Real transformations.
        <br />
        See how students from diverse backgrounds built rewarding careers in
        hospital billing, TPA coordination, and revenue operations — with the
        structured support and guidance of{" "}
        <strong className="text-theme">Billing Morphology Academy™</strong>.
      </p>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {testimonials.map((t) => (
          <div
            key={t.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-theme transition-all"
          >
            <img
              src={t.image}
              alt={t.headline}
              className="h-56 w-full object-cover"
            />
            <div className="p-6 text-left">
              <h3 className="font-semibold text-lg mb-3 text-gray-800">
                {t.headline}
              </h3>
              <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                {t.body}
              </p>
              <button className="btn-primary text-sm">{t.cta}</button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
