"use client"
import Link from "next/link";
export default function ProfileNavbar({line,setLine}) {
  
  return (

    <div className="flex items-center justify-between px-8 py-4 bg-white shadow-sm">
      
      {/* Left section */}
      <div>
        <h1 className="text-2xl font-semibold">My Profile</h1>

        {/* Tabs */}

<div className="flex space-x-6 mt-3 border-b border-gray-200 pb-2">
  <Link
    href="/profile"
    className={" font-medium" + (line === "About" ? " border-b-2 border-orange-600 text-orange-600 " : "")}
    onClick={() =>setLine("About") }
  >
    About
  </Link>

  <Link
    href="/profile/courses"
    className={"text-gray-600 font-medium hover:text-orange-600" + (line === "My Courses" ? "border-b-2 border-orange-600 text-orange-600" : "")}
    onClick={() =>setLine("My Courses") }
  >
    My Courses
  </Link>

  <Link
    href="/profile/change-password"
    className={"text-gray-600 font-medium hover:text-orange-600" + (line === "Change Password" ? " border-b-2 border-orange-600 text-orange-600" : "")}
    onClick={() =>setLine("Change Password") }
  >
    Change Password
  </Link>

  <Link
    href="/profile/transactions"
    className={"text-gray-600 font-medium hover:text-orange-600" + (line === "Transactions" ? " border-b-2 border-orange-600 text-orange-600" : "")}
    onClick={() =>setLine("Transactions") }
  >
    Transactions
  </Link>
</div>
      </div>

      {/* Right section */}
      <button className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600 transition">
        Logout
      </button>

    </div>
  );
}
