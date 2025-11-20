import React from "react";

export default function VideoComponent() {
  return (
    <div className="flex flex-col md:flex-row w-full md:min-h-[65vh] pr-5 overflow-x-hidden">
      
      <div
        className="
          flex items-center justify-center 
          mx-5 bg-orange-500 rounded-xl 
          h-[20vh] md:h-auto 
          w-full md:w-[70vw]
          shadow-[0_4px_10px_rgba(0,0,0,0.25)] mr-5
        "
      >
        <p>Video placeholder</p>
      </div>

      <div className="mx-5 mt-5 w-full md:max-w-[30vw]">
        <h1 className="text-3xl md:text-5xl font-bold">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <h3 className="mt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero fugiat illo delectus tempora necessitatibus m
        </h3>
      </div>

    </div>
  );
}
