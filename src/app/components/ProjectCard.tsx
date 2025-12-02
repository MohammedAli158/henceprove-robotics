import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export default function ProjectCard({
  title,
  level,
}: {
  title: string;
  level: string;
}) {
  return (
    <div className="border border-gray-200 rounded-xl p-5 bg-white shadow-sm hover:shadow-md transition-all flex justify-between items-center">
      <div className="flex flex-col">
        <span className="font-semibold text-gray-900">{title}</span>
        <span className="text-sm text-gray-500">{level}</span>
      </div>

      <Link href="/" className="p-2 hover:bg-gray-100 rounded-full transition-all">
        <FiArrowRight size={20} />
      </Link>
    </div>
  );
}
