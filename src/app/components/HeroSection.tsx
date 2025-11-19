import React from "react";
import FormComponent from "./FormComponent";
import Image from "next/image";
import Bacha from "../../../public/Screenshot (60).png";

export default function HeroSection() {
  return (
    <div className="relative flex flex-col md:flex-row bg-[#f9fafb] min-h-[80vh] m-5 rounded-md shadow-[0_4px_10px_rgba(0,0,0,0.20)] p-6">

      {/* TEXT SECTION */}
      <div className="flex flex-col mt-10 md:mt-20 md:ml-10 font-bold flex-1">
        <h1 className="text-4xl md:text-5xl max-w-[80vw] md:max-w-[50vw] text-black">
          Turning wild ideas into
          <span className="text-orange-500"> ROBOTS </span>
          that actually move
        </h1>

        <h3 className="max-w-[80vw] md:max-w-[50vw] my-5 font-normal">
          Building the machines your future will depend on, where AI
          <span className="text-orange-500"> Ends </span>
          imagination
          <span className="text-orange-500"> Begins </span>
        </h3>

        <FormComponent />
      </div>

      {/* IMAGE SECTION (single merged kid+circle image) */}
      <div className="flex justify-center items-center mt-10 md:mt-0 md:mr-10">
        <Image
          src={Bacha}
          alt="kid illustration"
          className="
            w-[55vw]
            max-w-[320px]
            min-w-[150px]
            h-auto
            md:w-[350px]
            object-contain
          "
        />
      </div>

    </div>
  );
}
