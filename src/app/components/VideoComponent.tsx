import React from "react";

export default function VideoComponent() {
  return (
    <div className="flex w-full min-h-[80vh] pr-5 overflow-x-hidden">
      
      <div className="flex items-center justify-center ml-5 bg-orange-500 rounded-xl max-h-[75vh] w-[70vw] shadow-[0_4px_10px_rgba(0,0,0,0.25)]">
        <p>Video placeholder</p>
      </div>

      <div className="ml-5 mt-5 max-w-[30vw]">
        <h1 className="text-5xl font-bold">
          Lorem ipsum dolor sit amet consectetur.
        </h1>
        <h3 className="mt-5">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero fugiat illo delectus tempora necessitatibus m
        </h3>
      </div>

    </div>
  );
}
