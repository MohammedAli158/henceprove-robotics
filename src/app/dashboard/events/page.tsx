import UniversalButton from "@/app/components/UniversalButton";

export default function Events() {
  const events = [
    {
      title: "AI & Web Dev Summit 2025",
      date: "Jan 12, 2025",
      location: "Online • Free",
      desc: "Learn the latest trends in AI tools, LLM APIs, and full-stack workflows."
    },
    {
      title: "React 19 Bootcamp",
      date: "Feb 05, 2025",
      location: "Bangalore",
      desc: "A deep dive into server components, streaming, and modern UI patterns."
    },
    {
      title: "Cloud & DevOps Meetup",
      date: "Mar 20, 2025",
      location: "Hyderabad",
      desc: "Docker, Kubernetes, CI/CD demos, and cloud architecture walkthroughs."
    },
    {
      title: "Startup Hackathon 48H",
      date: "Apr 11–12, 2025",
      location: "Chennai",
      desc: "Build a prototype, pitch it, fight sleep, win stuff. Classic hackathon vibes."
    },
    {
      title: "Node.js Performance Clinic",
      date: "May 03, 2025",
      location: "Remote",
      desc: "Fix slow APIs, optimize CPU use, and reduce response times like a wizard."
    },
  ];

  return (
    <div className="w-full flex flex-col items-center py-10">
      <div className="w-[80vw] md:w-[60vw] flex flex-col gap-6">

        {events.map((e, idx) => (
          <div
            key={idx}
            className="border border-gray-200 rounded-xl p-5 shadow-sm hover:shadow-md transition-all bg-white"
          >
            <div className="flex justify-between items-center mb-2">
              <h2 className="font-semibold text-lg text-gray-900">{e.title}</h2>
              <span className="text-sm text-gray-500">{e.date}</span>
            </div>

            <span className="text-sm text-gray-600 mb-3 block">
              {e.location}
            </span>

            <p className="text-gray-800 leading-relaxed">
              {e.desc}
            </p>
            <div className="m-5 "><UniversalButton arg="Book Now" /></div>
          </div>
        ))}

      </div>

    </div>
  );
}
