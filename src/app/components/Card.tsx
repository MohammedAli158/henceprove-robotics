"use client";
import type { Card } from "../page";

export default function CardSection({ card }: { card: Card }) {
  const bg = ["bg-blue-100", "bg-green-100", "bg-yellow-100", "bg-red-100"];

  return (
    <div className=" flex justify-center my-8">
      <div className=" max-w-auto  flex flex-col gap-6">
        {card.map((c, i) => (
          <div
            key={i}
            className={
              "  overflow-hidden rounded-xl p-5 shadow-sm flex flex-col md:flex-row gap-6 " +
              bg[i % bg.length]
            }
          >
            {/* LEFT */}
            <div className="flex flex-col md:w-1/2 min-w-0">
              <h2 className="text-xl md:text-3xl font-bold mb-3 text-center md:text-left">
                {c.title}
              </h2>

              <p className="text-gray-700 text-sm md:text-base break-words leading-relaxed">
                {c.subtitle}
              </p>
            </div>

            {/* RIGHT */}
            <div className="flex flex-col md:w-1/2  gap-4 min-w-0">
              {c.subCards.map((sc, idx) => (
                <div
                  key={idx}
                  className="bg-white rounded-lg p-4 shadow-sm  min-w-0"
                >
                  <h3 className="text-lg font-semibold mb-1">{sc.title}</h3>

                  <p className="text-gray-600 text-sm break-words leading-relaxed">
                    {sc.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
