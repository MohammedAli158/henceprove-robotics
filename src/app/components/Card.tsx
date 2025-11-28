"use client";
import type { Card } from "../page";

export default function CardSection({ card }: { card: Card }) { 
  const bg = ["bg-blue-100", "bg-green-100", "bg-yellow-100", "bg-red-100"];

  return (
    <section className="flex flex-col justify-center items-center my-8 w-full px-4 overflow-x-hidden">
      <div className="md:w-full">
        {card.map((c, i) => {
          return (
            <div
              key={i}
              className={
                "w-full max-w-5xl box-border rounded-lg p-6 m-4 hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row gap-6 md:items-center " +
                bg[i % bg.length]
              }
            >
              <div className="flex flex-col md:w-1/2 w-full">
                <h2 className="text-2xl md:text-4xl font-bold mb-4 text-center">{c.title}</h2>
                <p className="text-gray-600">{c.subtitle}</p>
              </div>

              <div className="flex flex-col md:w-1/2 w-full gap-4">
                {c.subCards.map((sc, idx) => {
                  return (
                    <div
                      key={idx}
                      className="bg-white rounded-xl p-4 shadow-sm flex flex-col w-full"
                    >
                      <h3 className="text-lg md:text-xl font-semibold">{sc.title}</h3>
                      <p className="text-gray-500">{sc.description}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
