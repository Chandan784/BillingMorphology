import Link from "next/link";

export default function CourseCard({ course }) {
  return (
    <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
      <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
      <p className="text-gray-500">{course.desc}</p>
      <Link href={`/courses/${course.id}`}>
        <button className="btn-primary mt-4">View Course</button>
      </Link>
    </div>
  );
}
