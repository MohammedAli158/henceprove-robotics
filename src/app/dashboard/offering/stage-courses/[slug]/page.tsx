"use client";
import { useParams } from "next/navigation";

export default function Page() {
  const { slug } = useParams();

  const roboticsCourses = [
    {
      id: "arduino-with-electronics",
      title: "Arduino with Electronics",
      about:
        "A hands-on guide to building programmable electronics with Arduino, blending coding with real hardware.",
      whatYouWillLearn: [
        "Understanding Arduino board components",
        "Reading and connecting basic electronic circuits",
        "Working with sensors, motors, and modules",
        "Programming Arduino using C/C++ syntax",
        "Building interactive hardware-based projects",
      ],
    },
    {
      id: "robotic-mobility",
      title: "Robotic Mobility",
      about:
        "A foundational journey into how robots move, navigate, and maintain stability using sensors and mechanical systems.",
      whatYouWillLearn: [
        "Basics of wheels, gears, and chassis design",
        "Motor drivers and power control",
        "Line following and obstacle detection",
        "Intro to PID control for smooth motion",
        "Building and testing mobile robotic prototypes",
      ],
    },
    {
      id: "iot",
      title: "IoT",
      about:
        "An introduction to the Internet of Things and how devices communicate, automate, and share real-time data.",
      whatYouWillLearn: [
        "Networking basics for IoT systems",
        "Working with Wi-Fi and Bluetooth modules",
        "Cloud platforms and MQTT protocols",
        "Sensor data acquisition and dashboarding",
        "Designing smart home–style IoT mini systems",
      ],
    },
    {
      id: "python-for-ai-ml-ds",
      title: "Python for AI/ML and DS",
      about:
        "A deeper, application-focused Python course for AI, machine learning, and data science workflows.",
      whatYouWillLearn: [
        "Data analysis with Pandas",
        "Building ML models using scikit-learn",
        "Data visualization and statistics",
        "Working with real datasets end-to-end",
        "Preprocessing, training, testing, and deploying models",
      ],
    },
  ];

  const selected = roboticsCourses.find((c) => c.id === slug);

  if (!selected) {
    return (
      <div className="min-h-screen flex items-center justify-center text-3xl font-semibold text-orange-600">
        Course Not Found
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-10 flex justify-center">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-3xl p-12 border border-gray-200">
        
        <h1 className="text-5xl font-bold mb-8 text-orange-600">
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