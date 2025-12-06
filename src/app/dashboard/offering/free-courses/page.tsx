import Head from "next/head";
import CourseCard from "@/app/components/CourseCard";

export default function Home() {
  return (
    <div className="ml-17 mt-6" >

      <Head  >
        <title>Short Courses — Python</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>

      <main>
        <CourseCard title="python" description="learn python as a beginner and stay updated on the latest trends going on " modules={20} sessions={7} />
      </main>
      </div>
    
  );
}