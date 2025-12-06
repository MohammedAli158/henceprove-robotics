"use client";
import { FiGrid, FiShoppingCart, FiUsers, FiCalendar } from "react-icons/fi";
import { SiOpenai } from "react-icons/si";
import { GiArtificialHive } from "react-icons/gi";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function VerticalNav() {
  const path = usePathname()
  console.log(path)
  const items = [
    { href: "/dashboard", icon: <FiGrid />, label: "Dashboard" },
    { href: "/courses", icon: <FiShoppingCart />, label: "Our Offering" },
    { href: "/dashboard/community", icon: <FiUsers />, label: "Community" },
    { href: "/dashboard/events", icon: <FiCalendar />, label: "Events" },
    { href: "/dashboard/ailab", icon: <SiOpenai />, label: "AI" },
   
  ];

  return (
    <nav className="flex flex-col fixed left-0 top-0 gap-11 border border-[#d9d9da] text-black py-6 h-screen z-5">
      <Link href={"/"} className="hover:bg-red-500 text-black p-3 font-bold">
        HP
      </Link>

      {items.map((item, i) => (
        <div key={i} className="relative group flex justify-center">
          <Link href={item.href} className={"hover:bg-red-500 p-3" + ( path=="/"+item.label.toLowerCase() || path == "/dashboard/"+item.label.toLowerCase() ? " bg-red-500" :" " )} >
            {item.icon}
          </Link>

          {/* Tooltip */}
          <span className="
            absolute left-full ml-3 
            top-1/2 -translate-y-1/2 
            whitespace-nowrap 
            bg-black text-white text-xs 
            px-2 py-1 rounded 
            opacity-0 group-hover:opacity-100 
            scale-90 group-hover:scale-100 
            transition-all duration-150
          ">
            {item.label}
          </span>
        </div>
      ))}
    </nav>
  );
}
