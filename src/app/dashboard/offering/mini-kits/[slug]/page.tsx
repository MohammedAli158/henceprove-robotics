"use client";

import { useParams } from "next/navigation";

type MiniKit = {
  title: string;
  about: string;
  whatYouWillLearn: string[];
};

export default function MiniKitsPage() {
  const miniKits: Record<string, MiniKit> = {
    "basic-electronics": {
      title: "Basic Electronics",
      about:
        "A practical starter kit introducing resistors, capacitors, LEDs, sensors, and basic circuit-building techniques.",
      whatYouWillLearn: [
        "Identifying components and reading values",
        "Building simple circuits on a breadboard",
        "Understanding voltage, current, and resistance",
        "Using sensors for small DIY projects",
        "Safety, polarity, and power basics",
      ],
    },

    "arduino-starter-pack": {
      title: "Arduino Starter Pack",
      about:
        "A beginner kit that introduces programming microcontrollers through fun, small-scale projects.",
      whatYouWillLearn: [
        "Setting up and flashing Arduino boards",
        "Using digital and analog pins",
        "Working with buzzers, LEDs, and servo motors",
        "Building small automation projects",
        "Understanding microcontroller workflow",
      ],
    },

    "medical-electronics-pack": {
      title: "Medical Electronics Pack",
      about:
        "A specialized kit focusing on bio-sensing hardware used in healthcare and wellness devices.",
      whatYouWillLearn: [
        "How medical sensors capture biological signals",
        "Working with heart-rate and pulse sensors",
        "Signal filtering and basic data reading",
        "Understanding safe electrical design",
        "Mini healthcare device prototypes",
      ],
    },

    "iot-mini-projects": {
      title: "IoT Mini Projects",
      about:
        "A compact IoT kit designed for quick, high-impact projects using Wi-Fi and Bluetooth modules.",
      whatYouWillLearn: [
        "Connecting ESP modules",
        "Reading remote sensor data",
        "Building tiny smart home gadgets",
        "Cloud communication essentials",
        "Deploying projects to mobile dashboards",
      ],
    },

    "robotics-basics": {
      title: "Robotics Basics",
      about:
        "A fundamental robotics kit that focuses on assemblies, sensors, and basic movement control.",
      whatYouWillLearn: [
        "Chassis building and wheel alignment",
        "Basic motor control",
        "IR/Ultrasonic sensor integration",
        "Simple automation behaviors",
        "Mini robot construction",
      ],
    },

    "python-hardware-pack": {
      title: "Python Hardware Pack",
      about:
        "A microcontroller kit designed to teach Python-based hardware programming using boards like MicroPython or Raspberry Pi Pico.",
      whatYouWillLearn: [
        "Flashing MicroPython firmware",
        "GPIO control using Python",
        "Working with sensors and LEDs",
        "Serial communication basics",
        "Building Python-controlled hardware demos",
      ],
    },
  };

  const { slug } = useParams();
  const key = slug as string;
  const selected = miniKits[key];

  if (!selected) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-gray-700">Invalid kit selected.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen p-10 flex justify-center">
      <div className="max-w-4xl w-full bg-white shadow-lg rounded-3xl p-12 border border-gray-200 pl-20">
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
