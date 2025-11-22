"use client";
import Image from "next/image";
import React from "react";
import Logo from "../../../public/join.png";
import { toast,Toaster } from "react-hot-toast";


export default  function FormComponent() {
  const handleGoogleForms = () => {
    toast.loading("Submitting form...");
    const Name = document.getElementById("Name") as HTMLInputElement;
    const PhoneNumber = document.getElementById("PhoneNumber") as HTMLInputElement;
    console.log(Name,PhoneNumber);
    const nameValue = Name.value;
    const phoneValue = PhoneNumber.value;
    const formData = new FormData();
  formData.append("entry.2005620554", nameValue);
  formData.append("entry.1166974658", phoneValue);
    fetch(
      "https://docs.google.com/forms/d/e/1FAIpQLScVb3z2Gxs9kuDzLczeQBFEYjzEUbe1ftw5Zb5PO5DTq52Hxg/formResponse",
      {
        method: "POST",
        body: formData,
        mode: "no-cors",
      }
    )
      .then((data) => {
        toast.success("Form submitted successfully!");
        
        
        Name.value = "";
        PhoneNumber.value = "";
        console.log("Form submission response:", data);
      })
      .catch((error) => {
        toast.error("Error submitting form.");
        
        console.error("Error submitting form:", error);
        
      }).finally(() => {
        toast.dismissAll();
      });
  }
  return (
    <div
      className="
        bg-white ml-5 mt-5 p-4 md:p-6 rounded-md flex flex-col gap-4 relative
        w-full max-w-[90vw] md:max-w-[35vw]
        max-h-[40vh] md:max-h-none
        shadow-[0_4px_10px_rgba(0,0,0,0.20)]
      "
    >
    <Toaster/>
      <input
        className="
          pl-3 bg-[#f9fafb] border border-black py-2 
          w-full
          rounded-xl focus:outline-none dark:placeholder-text-black/50 placeholder:text-black md:placeholder:text-black/50
        "
        id="Name"
        placeholder="Name"
      />

      <input
        className="
          pl-3 bg-[#f9fafb] border border-black py-2 
          w-full
          rounded-xl focus:outline-none placeholder:text-black md:placeholder:text-black/50
        "
        id="PhoneNumber"
        placeholder="Phone Number"
      />

      <button
        className="
          bg-orange-500 text-white mt-2 px-4 py-2 rounded-xl cursor-pointer
           md:left-8 md:bottom-5 md:mt-0
        "
        onClick={handleGoogleForms}
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
