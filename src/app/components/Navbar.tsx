import React from 'react'

export default function Navbar() {
  return (
    <div className="flex items-center justify-between px-5 h-[9vh] shadow-[0_4px_10px_rgba(0,0,0,0.25)]
      backdrop-blur-md
      bg-white/30
      dark:bg-black/30
      sticky top-0
      z-50">
  <div className="flex gap-5">
    <span>HP</span>
    <span>About Us</span>
    <span>Dashboard</span>
    <span>Get Courses</span>
  </div>

  <div className="border w-[20vw] text-center border-[#d9d9da] p-2  rounded-xl">
    Search Anything
  </div>

  <div>Login</div>
</div>

  )
}
