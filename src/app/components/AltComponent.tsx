import Image from "next/image";
import React from "react";
import img from "../../../public/swip.jpg";

export default function AltComponent() {
  return (
    <section className="md:min-h-screen flex flex-col gap-6 m-5 mt-0 bg-gray-200 rounded-xl">
      
      {/* 1 */}
      <div className="flex flex-col md:flex-row items-center m-5 max-h-[45vh] p-5 bg-white text-orange-500 rounded-xl border-b border-[#d9d9da]">
        <Image 
          src={img} 
          alt="Image"
          className="w-full md:w-1/2 h-auto rounded-xl"
        />
        <h1 className="m-5 text-3xl md:text-5xl text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
        </h1>
      </div>

      {/* 2 */}
      <div className="flex flex-col-reverse md:flex-row items-center m-5 text-white bg-orange-500 max-h-[45vh] p-5 rounded-xl border-b border-[#d9d9da]">
        <h1 className="m-5 text-3xl md:text-5xl text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
        </h1>
        <Image 
          src={img} 
          alt="Image"
          className="w-full md:w-1/2 h-auto rounded-xl"
        />
      </div>

      {/* 3 */}
      <div className="flex flex-col md:flex-row items-center m-5 bg-white text-orange-500 max-h-[45vh] p-5 rounded-xl border-b border-[#d9d9da]">
        <Image 
          src={img} 
          alt="Image"
          className="w-full md:w-1/2 h-auto rounded-xl"
        />
        <h1 className="m-5 text-3xl md:text-5xl text-center md:text-left">
          Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
        </h1>
      </div>

    </section>
  );
}
