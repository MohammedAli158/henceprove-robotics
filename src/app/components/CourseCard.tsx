// components/CourseCard.tsx
import React from "react";

interface CourseCardProps {
  title: string;
  modules: number;
  sessions: number;
  description: string;
  /** optional: override default bg color (Tailwind class) */
  bgClass?: string;
  /** optional: override accent/text color (Tailwind class) */
  accentClass?: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  modules,
  sessions,
  description,
  bgClass = "bg-white",
  accentClass = "text-blue-700",
}) => {
  return (
    <div
      className={`shadow-[0_4px_10px_rgba(0,0,0,0.25)] rounded-md relative min-w-[20vw] min-h-[25vh] overflow-hidden ${bgClass}`}
    >
      {/* Decorative big number — behind content, never overlaps */}
      <div
        className={`${accentClass} pointer-events-none select-none absolute -top-6 -right-4 opacity-10 text-[110px] leading-none`}
        aria-hidden
      >
        {modules}
      </div>

      {/* Foreground content */}
      <div className="relative z-10 p-5 flex flex-col h-full">
        <div className="flex items-start justify-between">
          <h1 className="text-xl font-semibold text-gray-900">{title}</h1>

          {/* arrow in top-right */}
          <div className={`text-blue-500 text-3xl`}>→</div>
        </div>

        <p className="text-sm text-gray-700 mt-4 flex-1">{description}</p>

        <div className="mt-4 flex items-center justify-between text-sm text-gray-600">
          <span>{sessions} sessions</span>
          <span>{modules} modules</span>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
