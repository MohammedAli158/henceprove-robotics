import React from "react";
import img from "../../../public/images.jpg";
import imgt from "../../../public/images(2).jpg";
import imgh from "../../../public/images1).jpg";
import Image from "next/image";

export default function PricingSection() {
  const cardDetails = [
    { title: "Robotics Mastery", id: "CX56G", img, price: "999 USD" },
    { title: "Ai Champion", id: "JHY6D", img: imgh, price: "699 USD" },
    { title: "Ai + Robotics", id: "HSK5S", img: imgt, price: "1299 USD" },
  ];

  return (
    <section className="m-5 bg-white rounded-xl w-full">
      <div className="flex flex-col items-center w-full max-w-6xl mx-auto px-4">
        <h1 className="text-4xl md:text-5xl m-5 font-bold dark:text-black text-center">
          Courses We Offer
        </h1>

        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            lg:grid-cols-3 
            gap-8
            w-full
            px-0
            mt-10
          "
        >
          {cardDetails.map((k, i) => (
            <div
              key={i}
              className="
                flex flex-col 
                items-center 
                bg-orange-400 
                text-white 
                hover:text-black
                hover:bg-white
                hover:border-black
                rounded-xl 
                border border-white border-dashed
                relative
                p-5
                w-full
                box-border
                min-h-fit          
                md:min-h-[50vh]    
              "
            >
              <h1 className="text-2xl md:text-4xl text-center font-semibold">
                {k.title}
              </h1>

              <div className="w-full mt-5">
                <Image
                  src={k.img}
                  alt="course image"
                  width={800}
                  height={480}
                  className="
                    rounded-xl 
                    w-full 
                    h-48           
                    md:h-60         
                    object-cover 
                  "
                />
              </div>

              <p className="mt-5 text-center text-sm md:text-base leading-relaxed px-1">
                Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet
                consectetur. Lorem ipsum dolor sit amet consectetur.
              </p>

              <p
                className="
                  px-5 py-2
                  bg-blue-800 hover:bg-black hover:text-white
                  text-white 
                  rounded-xl 
                  cursor-pointer 
                  text-sm md:text-lg
                  mt-4
                  self-end
                "
              >
                {k.price}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
