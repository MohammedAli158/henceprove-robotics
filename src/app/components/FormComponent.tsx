import Image from "next/image";
import React from "react";
import Logo from "../../../public/join.png";

export default function FormComponent() {
  return (
    <div
      className="
        bg-white mt-5 p-4 md:p-6 rounded-md flex flex-col gap-4 relative
        w-full max-w-[90vw] md:max-w-[35vw]
        max-h-[40vh] md:max-h-none
        shadow-[0_4px_10px_rgba(0,0,0,0.20)]
      "
    >
      <input
        className="
          pl-3 bg-[#f9fafb] border border-black py-2 
          w-full
          rounded-xl focus:outline-none
        "
        placeholder="Name"
      />

      <input
        className="
          pl-3 bg-[#f9fafb] border border-black py-2 
          w-full
          rounded-xl focus:outline-none 
        "
        placeholder="Phone Number"
      />

      <button
        className="
          bg-orange-500 text-white mt-2 px-4 py-2 rounded-xl cursor-pointer
           md:left-8 md:bottom-5 md:mt-0
        "
      >
        Reach Us {"->"}
      </button>

      <Image
        src={Logo}
        alt="Join"
        className="
          w-10 h-10 md:w-20 md:h-20 object-contain mt-2 mx-auto
          md:mx-0 md:absolute md:right-4 md:top-4
        "
      />
    </div>
  );
}
