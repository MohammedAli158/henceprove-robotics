"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"


export default function OfferingNav() {
    const url = usePathname() 
    const uri = url.split("/")[3] || "offering"
   const urls = ["offering","foundational","stage-courses","mini-kits","free-courses"];

return (
  <nav className="w-full bg-red-50 py-4 shadow-md">
    <ul className="flex items-center justify-center gap-8 text-lg font-semibold text-red-700">

      <Link
        href="/dashboard/offering"
        className={
          "hover:text-red-900 transition-all " +
          (uri === urls[0] ? " border-b-2 border-brown-500" : "")
        }
      >
        Bots-based Courses
      </Link>

      <Link
        href="/dashboard/offering/foundational"
        className={
          "hover:text-red-900 transition-all " +
          (uri === urls[1] ? "border-b-2 border-brown-500" : "")
        }
      >
        Foundational Kits
      </Link>

      <Link
        href="/dashboard/offering/stage-courses"
        className={
          "hover:text-red-900 transition-all " +
          (uri === urls[2] ? "border-b-2 border-brown-500" : "")
        }
      >
        Stage Courses
      </Link>

      <Link
        href="/dashboard/offering/mini-kits"
        className={
          "hover:text-red-900 transition-all " +
          (uri === urls[3] ? "border-b-2 border-brown-500" : "")
        }
      >
        Mini Kits
      </Link>

      <Link
        href="/dashboard/offering/free-courses"
        className={
          "hover:text-red-900 transition-all " +
          (uri === urls[4] ? "border-b-2 border-brown-500" : "")
        }
      >
        Free Courses
      </Link>

    </ul>
  </nav>
);

    
}
