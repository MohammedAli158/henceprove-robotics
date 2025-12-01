import React from "react";
import FormComponent from "./FormComponent";
import Image from "next/image";
import Bacha from "../../../public/Screenshot (60).png";

export default function HeroSection() {
  return (
    <div className="relative flex flex-col w-[81vw] md:w-full md:flex-row bg-[#f9fafb] min-h-[90vh] rounded-md mb-5">

      {/* TEXT SECTION */}
      <div className="flex flex-col mt-10 md:mt-20 md:ml-10 font-bold flex-1">
        <h1 className="text-4xl m-5 md:text-5xl max-w-[80vw] md:max-w-[50vw] dark:text-black text-black">
          Turning wild ideas into
          <span className="text-orange-500"> ROBOTS </span>
          that actually move
        </h1>

        <h3 className="max-w-[80vw] m-5 dark:text-black md:max-w-[50vw] my-5 font-normal">
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
