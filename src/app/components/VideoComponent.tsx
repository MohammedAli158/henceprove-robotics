import React from "react";
import BookButton from "./BookButton";

export default function VideoComponent() {
  return (
    <div className="flex flex-col ">
    
    <div className="flex flex-col md:flex-row  w-[81vw] md:w-full md:min-h-auto pr-5 overflow-x-hidden">
      
      <div
        className="
          flex items-center justify-center 
           bg-orange-500 rounded-xl 
          h-[20vh] md:min-h-[40vh] 
          w-[90vw] mx-5 md:w-[70vw]
          shadow-[0_4px_10px_rgba(0,0,0,0.25)] mr-5
        "
      >
        <p>Video placeholder</p>
      </div>

      <div className="mx-5 mt-5 w-full md:max-w-[30vw]">
        <h1 className="text-3xl md:text-5xl font-bold">
          What Human can do in hours, AI can do in seconds
        </h1>
        <h3 className="mt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero fugiat illo delectus tempora necessitatibus m
        </h3>
          
      </div>

    </div>
    <div className=" p-5 text-center ">
      <BookButton/>
    </div>
</div>
  );
}
