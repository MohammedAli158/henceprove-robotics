import Link from "next/link";
import CourseCard from "@/app/components/CourseCard";

export default function MiniKits() {
  const courses = [
    {
      title: "Basic Electronics",
      slug: "basic-electronics",
      description:
        "Learn essential electronic components, circuits, and fundamentals for beginners.",
      modules: 3,
      sessions: 12,
    },
    {
      title: "Arduino Starter Pack",
      slug: "arduino-starter-pack",
      description:
        "Get hands-on experience building projects with Arduino and basic sensors.",
      modules: 4,
      sessions: 16,
    },
    {
      title: "Medical Electronics Pack",
      slug: "medical-electronics-pack",
      description:
        "Explore medical sensors, monitoring devices, and wearable electronics.",
      modules: 5,
      sessions: 18,
    },
    {
      title: "IoT Mini Projects",
      slug: "iot-mini-projects",
      description:
        "Connect small devices and experiment with smart IoT applications.",
      modules: 3,
      sessions: 14,
    },
    {
      title: "Robotics Basics",
      slug: "robotics-basics",
      description:
        "Introductory robotics kits for building mobile and stationary bots.",
      modules: 4,
      sessions: 15,
    },
    {
      title: "Python Hardware Pack",
      slug: "python-hardware-pack",
      description:
        "Combine Python programming with small hardware projects for AI/ML exploration.",
      modules: 4,
      sessions: 16,
    },
  ];

  return (
    <div className="ml-15">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 min-h-screen">
        {courses.map((course, i) => (
          <Link
            key={i}
            href={`/dashboard/offering/mini-kits/${course.slug}`}
          >
            <CourseCard
              title={course.title}
              description={course.description}
              modules={course.modules}
              sessions={course.sessions}
            />
          </Link>
        ))}
      </div>
    </div>
  );
}
