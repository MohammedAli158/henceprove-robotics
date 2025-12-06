import CourseCard from "@/app/components/CourseCard";

export default function StageCourses() {
  const courses = [
    {
      title: "Arduino with Electronics",
      description: "Hands-on learning with Arduino boards and electronic circuits to build interactive devices.",
      modules: 6,
      sessions: 24,
    },
    {
      title: "Robotic Mobility",
      description: "Design and program robots to move, sense, and interact with their environment.",
      modules: 5,
      sessions: 20,
    },
    {
      title: "IoT (Internet of Things)",
      description: "Connect devices, collect data, and create intelligent systems for smart environments.",
      modules: 4,
      sessions: 18,
    },
    {
      title: "Python for AI/ML & Data Science",
      description: "Master Python to develop AI/ML models, analyze datasets, and build data-driven solutions.",
      modules: 5,
      sessions: 22,
    },
  ];

  return (
<div className="ml-16" ><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8  min-h-screen">
      {courses.map((course, i) => (
        <CourseCard
          key={i}
          title={course.title}
          description={course.description}
          modules={course.modules}
          sessions={course.sessions}
        />
      ))}
    </div></div>
  );
}
