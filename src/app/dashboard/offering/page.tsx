import Link from "next/link";

export default function Name() {
  const cards = [
    { title: "Beattle", desc: "Fast-thinking conversational AI bot" },
    { title: "Jigbot", desc: "Playful bot great for creativity & chaos" },
    { title: "Bosco", desc: "Serious logical bot for analytical tasks" },
    { title: "Spidy", desc: "Web-crawling style AI with sharp accuracy" },
    { title: "VoltAI", desc: "Automation-focused bot with raw speed" },
    { title: "Orbit", desc: "Tech-nerd bot that stays calm and precise" },
    { title: "Fluxo", desc: "Adaptive bot that changes tone instantly" },
    { title: "Nexa", desc: "Clean and minimalist AI assistant" },
  ]; // ideally fetched from database

  return (
    <div className="w-full py-10 flex justify-center">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-5 w-[90vw] md:w-[75vw]">

        {cards.map((t, i) => {
          return (
            <div
              key={i}
              className="p-5 rounded-xl shadow-md border border-gray-200 bg-white hover:shadow-lg transition-all flex flex-col justify-between"
            >
              <div>
                <h2 className="font-semibold text-gray-900">{t.title}</h2>
                <p className="text-gray-600 text-sm mt-1">{t.desc}</p>
              </div>

              {/* arrow mark like a button */}
              <Link href={  `/dashboard/offering/${t.title}`} className="mt-4 w-max flex cursor-pointer items-center gap-2 text-blue-600 hover:text-blue-800">
                Continue →
              </Link>
            </div>
          );
        })}

      </div>
    </div>
  );
}
