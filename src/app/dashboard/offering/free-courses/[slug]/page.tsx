
"use client";

export default function PythonCoursePage() {
  const pythonCourse = {
    title: "Python",
    about:
      "A complete introductory guide to Python for general programming, automation, and beginner-level AI tasks.",
    whatYouWillLearn: [
      "Core Python syntax and logic",
      "Variables, loops, and conditionals",
      "Functions and modules",
      "Working with files and data",
      "Writing simple automation scripts"
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50 px-8 py-10">
      
      <h1 className="text-4xl font-bold text-gray-800 mb-10">
        {pythonCourse.title}
      </h1>

      <div className="max-w-3xl bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-all">
        <p className="text-gray-700 mb-4 leading-relaxed">
          {pythonCourse.about}
        </p>

        <h3 className="text-xl font-semibold text-gray-800 mb-2">
          What {"you'll"} learn
        </h3>

        <ul className="list-disc ml-6 text-gray-700 space-y-1">
          {pythonCourse.whatYouWillLearn.map((point, idx) => (
            <li key={idx}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
