import React from 'react'
import Link from 'next/link'
export default function Navbar() {
  return (
    <div className="flex items-center relative justify-between px-5 h-[9vh] shadow-[0_4px_10px_rgba(0,0,0,0.25)]
      backdrop-blur-md
      bg-white/30
      dark:bg-black/30
      sticky top-0
      z-50">
  <div className="flex gap-5 absolute left-1/3 ">
    
    <Link href="/" >
    <span  className='cursor-pointer' >HP</span>
    </Link>
    
    <Link href="/" >
    <span className='cursor-pointer' >About Us</span>
    </Link>
    
    <Link href="/" >
    <span className='cursor-pointer' >Dashboard</span>
    </Link>
    
    <Link href="/" >
    <span className='cursor-pointer' >Get Courses</span>
    </Link>
  </div>

  <input className="border w-[20vw] text-center border-[#d9d9da] p-2 absolute right-25 focus:outline-none rounded-xl" placeholder='Search anything..' />

  

  <div className='absolute right-5' >Login</div>
</div>

  )
}
