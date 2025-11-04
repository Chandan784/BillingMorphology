export default function CourseDetail({ params }) {
  const courseId = params.id;
  const courseTitles = [
    "Billing Fundamentals",
    "Morphology Basics",
    "Advanced Coding",
    "Insurance Workflow",
    "EHR Mastery",
    "Compliance & Audit",
    "Final Certification",
  ];
  const course = courseTitles[courseId - 1];

  return (
    <div className="px-6 md:px-20 py-12">
      <h1 className="text-4xl font-bold mb-4 text-[var(--theme-color)]">
        {course}
      </h1>
      <p className="text-gray-600 max-w-2xl">
        This course covers everything you need to know about{" "}
        {course.toLowerCase()}. Learn through structured lessons, examples, and
        interactive exercises.
      </p>
      <button className="btn-primary mt-6">Enroll Now</button>
    </div>
  );
}
