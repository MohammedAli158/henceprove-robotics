import React from 'react'
import Link from 'next/link'

export default function Navbar() {
  return (
    <div
      className="
        sticky top-0 z-50
        flex items-center justify-between
        px-5 h-[9vh]
        shadow-[0_4px_10px_rgba(0,0,0,0.25)]
        backdrop-blur-md bg-white/30 dark:bg-black/30
        relative
      "
    >
      {/* LEFT SECTION — LOGO */}
      <div className="text-lg font-semibold text-black dark:text-white">
        <Link href="/">HenceProve<span className='text-lg font-semibold text-orange-500' >Robotics</span></Link>
      </div>

      {/* PERFECTLY CENTERED NAV LINKS */}
      <div
        className="
          hidden md:flex gap-6 text-sm font-medium
          absolute left-1/2 -translate-x-1/2
        "
      >
        <Link href="/about-us" className='hover:text-red' >About Us</Link>
        <Link href="/" className='hover:text-red' >Dashboard</Link>
        <Link href="/get-courses" className='hover:text-red' >Get Courses</Link>
      </div>

      {/* RIGHT SECTION */}
      <div className="flex items-center gap-4">
        <input
          className="
            hidden md:block
            border w-[18vw]
            text-center border-[#d9d9da]
            p-2 rounded-xl
            focus:outline-none
            bg-white/80
            placeholder:black/50
          "
          placeholder="Search anything.."
        />
        <div className="cursor-pointer font-medium">Login</div>
      </div>
    </div>
  )
}
