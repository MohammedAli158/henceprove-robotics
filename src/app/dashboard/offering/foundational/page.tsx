"use client";

import Link from "next/link";
import CourseCard from "@/app/components/CourseCard";

export default function Foundational() {
  const courses = [
    {
      title: "AI Foundations",
      description: "Learn the basics of AI, ML, and neural networks.",
      modules: 6,
      sessions: 24,
      href: "/dashboard/offering/foundational/ai-foundations",
    },
    {
      title: "Python for AI",
      description: "Hands-on Python programming for AI applications.",
      modules: 5,
      sessions: 20,
      href: "/dashboard/offering/foundational/python-for-ai",
    },
    {
      title: "Hardware Analysis",
      description: "Analyze and visualize hardware using modern tools.",
      modules: 4,
      sessions: 18,
      href: "/dashboard/offering/foundational/hardware-analysis",
    },
    {
      title: "Intro to Neural Networks",
      description: "Understand neural networks and build your first model.",
      modules: 5,
      sessions: 22,
      href: "/dashboard/offering/foundational/intro-to-neural-networks",
    },
  ];

  return (
    <div className="pl-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 p-8 min-h-screen">
        {courses.map((course, i) => (
          <Link href={course.href} key={i}>
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
