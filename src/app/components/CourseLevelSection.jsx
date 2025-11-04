import { Clock, GraduationCap, Target } from "lucide-react";

export default function CourseLevelsSection() {
  const courses = [
    {
      image:
        "https://plus.unsplash.com/premium_photo-1661761151437-a5f7fbe5753b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8SG9zcGl0YWwlMjBCaWxsaW5nJTIwdHJhaW5pbmd8ZW58MHx8MHx8fDA%3D&auto=format&fit=crop&q=60&w=500",
      level: "CBM Level 1 — Hospital Billing Foundations™",
      who: "Freshers, graduates, and billing executives (0–2 years)",
      duration: "12 Weeks | Hybrid (Recorded + Live Doubt Clinics)",
      learn: [
        "Decode the complete billing workflow — from registration to discharge.",
        "Prepare accurate estimates and manage cashless files.",
        "Eliminate data entry and documentation errors.",
      ],
      modules:
        "Patient onboarding · Charge capture · Coding basics · TPA coordination · Discharge billing · Final bill QA · Basic compliance",
      outcome:
        "CBM Level 1 Certificate — Ready for Hospital Billing Executive roles",
    },
    {
      image:
        "https://media.istockphoto.com/id/1633930220/photo/tablet-doctor-hands-and-people-for-healthcare-information-test-results-and-support-or-helping.webp?a=1&b=1&s=612x612&w=0&k=20&c=FKB106xRuxWfNyJx9p3q4gHLnllLHOLtMv8ia7SidU4=",
      level: "CBM Level 2 — Claims & TPA Coordination™",
      who: "Billing and TPA professionals (1–3 years experience)",
      duration: "12 Weeks | Hybrid (Recorded + Live Doubt Clinics)",
      learn: [
        "Drive pre-auth to discharge approvals with confidence.",
        "Standardize communication to reduce pendency.",
        "Cut turnaround time (TAT) through better handoffs and coordination.",
      ],
      modules:
        "Pre-auth · Claim documentation · Query handling · Insurer SLAs · Discharge TAT · Communication protocols",
      outcome:
        "CBM Level 2 Certificate — TPA Coordinator / Claims Processor readiness",
    },
    {
      image:
        "https://images.unsplash.com/photo-1745420052490-285dbfa1cf4d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzZ8fEhvc3BpdGFsJTIwQmlsbGluZyUyMHRyYWluaW5nfGVufDB8fDB8fHww&auto=format&fit=crop&q=60&w=500",
      level: "CBM Level 3 — Denial Management & RCM Analytics™",
      who: "RCM analysts, senior billing executives (2–5 years)",
      duration: "12 Weeks | Hybrid (Recorded + Live Doubt Clinics)",
      learn: [
        "Identify and prevent denials with structured root-cause analysis (RCA).",
        "Track A/R aging, recovery, and KPI dashboards.",
        "Collaborate with finance, coding, and clinical teams using data-driven insights.",
      ],
      modules:
        "Denial taxonomy · RCA workflows · A/R management · Dashboards · Cross-functional analytics",
      outcome:
        "CBM Level 3 Certificate — RCM Analyst / Denial Specialist readiness",
    },
  ];

  return (
    <section className="bg-white py-20 px-6 md:px-16">
      <div className="max-w-6xl mx-auto text-center">
        {/* Section Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
          Master Every Stage of Hospital Billing — From Foundations to RCM
          Expertise
        </h2>
        <p className="mt-4 text-gray-600 max-w-3xl mx-auto text-lg">
          Structured, practical training that turns fresh graduates and
          executives into hospital billing and revenue operations professionals.
        </p>

        {/* Course Cards */}
        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {courses.map((course, i) => (
            <div
              key={i}
              className="bg-[#f9fafb] rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all transform hover:-translate-y-2"
            >
              <img
                src={course.image}
                alt={course.level}
                className="w-full h-56 object-cover"
              />
              <div className="p-8 text-left">
                {/* Use global theme color */}
                <h3 className="text-xl font-semibold mb-2 text-theme">
                  {course.level}
                </h3>

                <div className="space-y-2 text-gray-600 text-sm mb-4">
                  <p className="flex items-center gap-2">
                    <GraduationCap className="w-4 h-4 text-gray-500" />{" "}
                    <span>
                      <strong>Who it’s for:</strong> {course.who}
                    </span>
                  </p>
                  <p className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-gray-500" />{" "}
                    <span>
                      <strong>Duration:</strong> {course.duration}
                    </span>
                  </p>
                </div>

                <div className="text-gray-700 mb-3">
                  <strong>You’ll Learn To:</strong>
                  <ul className="list-disc pl-5 mt-1 space-y-1 text-gray-600 text-sm">
                    {course.learn.map((item, idx) => (
                      <li key={idx}>{item}</li>
                    ))}
                  </ul>
                </div>

                <p className="text-sm text-gray-700 mb-2">
                  <strong>Key Modules:</strong> {course.modules}
                </p>

                <p className="flex items-center gap-2 text-sm text-gray-700">
                  <Target className="w-4 h-4 text-gray-500" />{" "}
                  <span>
                    <strong>Outcome:</strong> {course.outcome}
                  </span>
                </p>

                {/* Use global theme button */}
                <button className="btn-primary mt-6 px-5 py-2 rounded-full text-sm font-medium">
                  Know More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
