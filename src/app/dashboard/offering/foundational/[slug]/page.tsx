"use client";
import { useParams } from "next/navigation";

export default function Page() {
  const { slug } = useParams();

  const aiCourses = [
    {
      id: "ai-foundations",
      title: "AI Foundations",
      about:
        "A beginner-friendly dive into the core principles that power modern artificial intelligence, covering history, logic, and computational thinking.",
      whatYouWillLearn: [
        "How machines process information and make decisions",
        "Fundamentals of data, patterns, and automation",
        "Understanding classical AI vs modern AI",
        "Real-world applications of AI across industries",
        "Base knowledge needed for deeper neural network study",
      ],
    },
    {
      id: "python-for-ai",
      title: "Python for AI",
      about:
        "A practical introduction to using Python for AI and ML workflows, focusing on clarity, structure and hands-on practice.",
      whatYouWillLearn: [
        "Core Python syntax and logical structures",
        "Data structures used in AI tasks",
        "Working with NumPy and Pandas",
        "Writing reusable and modular code",
        "Connecting Python with AI models",
      ],
    },
    {
      id: "hardware-analysis",
      title: "Hardware Analysis",
      about:
        "Understanding electronics, components, and embedded systems that support modern AI devices.",
      whatYouWillLearn: [
        "Circuit and component fundamentals",
        "Microcontroller architecture",
        "Working with sensors and actuators",
        "Reading schematics and datasheets",
        "AI-driven hardware real-world examples",
      ],
    },
    {
      id: "intro-to-neural-networks",
      title: "Intro to Neural Networks",
      about:
        "A conceptual and applied look at how neural networks learn patterns from data.",
      whatYouWillLearn: [
        "Neurons, layers, weights, activations",
        "Training using gradient descent",
        "Building simple neural networks",
        "Different network architectures",
        "Improving performance and avoiding overfitting",
      ],
    },
  ];

  const selected = aiCourses.find((c) => c.id === slug);

  if (!selected) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-semibold text-orange-600">
        Course Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen  p-10 flex justify-center">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-3xl p-12 border border-gray-200">
        
        <h1 className="text-5xl font-bold mb-8 text-orange-500">
          {selected.title}
        </h1>

        <p className="text-lg text-gray-700 leading-relaxed mb-12">
          {selected.about}
        </p>

        <h2 className="text-2xl font-semibold text-orange-500 mb-5">
          What You Will Learn
        </h2>

        <ul className="space-y-4">
          {selected.whatYouWillLearn.map((point, i) => (
            <li
              key={i}
              className="p-5 bg-gray-50 rounded-xl border border-gray-200 shadow-sm text-gray-800"
            >
              {point}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
