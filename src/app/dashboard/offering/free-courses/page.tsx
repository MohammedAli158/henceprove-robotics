"use client"
import Link from "next/link";
import CourseCard from "@/app/components/CourseCard";

export default function Home() {
  return (
    <div className="ml-17  max-w-[55vw]  mt-6" >

     
        <Link href="/dashboard/offering/free-courses/python" ><CourseCard title="python" description="learn python as a beginner and stay updated on the latest trends going on " modules={20} sessions={7} /></Link>
      
      </div>
    
  );
}