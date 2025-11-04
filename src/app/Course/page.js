import CourseCard from "../components/CourseCard";

const courses = [
  {
    id: 1,
    title: "Billing Fundamentals",
    desc: "Start your journey with core billing principles.",
  },
  {
    id: 2,
    title: "Morphology Basics",
    desc: "Understand key morphology elements and workflows.",
  },
  {
    id: 3,
    title: "Advanced Coding",
    desc: "Deep dive into advanced medical coding strategies.",
  },
  {
    id: 4,
    title: "Insurance Workflow",
    desc: "Handle claims and insurance processes efficiently.",
  },
  {
    id: 5,
    title: "EHR Mastery",
    desc: "Master electronic health record systems.",
  },
  {
    id: 6,
    title: "Compliance & Audit",
    desc: "Ensure data accuracy and legal compliance.",
  },
  {
    id: 7,
    title: "Final Certification",
    desc: "Prepare for the ultimate billing morphology exam.",
  },
];

export default function CoursesPage() {
  return (
    <div className="px-6 md:px-16 py-12">
      <h2 className="text-3xl font-bold mb-8 text-[var(--theme-color)]">
        Our Courses
      </h2>
      <div className="grid md:grid-cols-3 gap-8">
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </div>
    </div>
  );
}
