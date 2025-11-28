"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import Image from "next/image";

import "swiper/css";

import ione from "../../../public/makeup_robot.jpeg";
import twoe from "../../../public/video_generation.jpg";
import threee from "../../../public/robotics.jpeg";
import foure from "../../../public/reading_robot.png";
import fivee from "../../../public/speech_text_generation.jpg";
import sixe from "../../../public/image_generation.png";
import { useState } from "react";

const images = [
  { 
    img: ione, 
    title: "AI Makeup", 
    description: "AI that enhances facial features, recommends styles, and applies virtual makeup with stunning precision.",
    name: "Sia Verma",
    profilePic: "https://randomuser.me/api/portraits/women/32.jpg"
  },
  { 
    img: twoe, 
    title: "Video Generation", 
    description: "Models that create realistic videos from prompts, turning text ideas into full motion visuals.",
    name: "Rohan Patel",
    profilePic: "https://randomuser.me/api/portraits/men/47.jpg"
  },
  { 
    img: threee, 
    title: "Robotics", 
    description: "Smart robots powered by AI, capable of learning tasks, navigating environments, and interacting",
    name: "Elena Mathew",
    profilePic: "https://randomuser.me/api/portraits/women/58.jpg"
  },
  { 
    img: foure, 
    title: "Reading Bot",
    description: "An AI that reads text aloud, understands context, and summarizes complex content instantly.",
    name: "Kabir Khan",
    profilePic: "https://randomuser.me/api/portraits/men/21.jpg"
  },
  { 
    img: fivee, 
    title: "Speech to Text",
    description: "Real-time speech recognition that converts voices into accurate, structured text.",
    name: "Ananya Joshi",
    profilePic: "https://randomuser.me/api/portraits/women/44.jpg"
  },
  { 
    img: sixe, 
    title: "Image Generation",
    description: "AI that creates original images from prompts, combining creativity with photorealistic detail.",
    name: "Dev Singh",
    profilePic: "https://randomuser.me/api/portraits/men/39.jpg"
  },
];

const role = ["Beginner","Advanced","Intermediate","Rookie","Expert","Proficient"]

export default function MySwiper() {
  const [hovering,setHovering] = useState([false,false,false,false,false,false]);

  const handleImageEnter = (index:number) =>{
    const tempArray = hovering;
    tempArray[index] = true;
    setHovering([...tempArray]);
  }

  const handleImageLeave = (index:number)=>{
    const tempArray = hovering;
    tempArray[index] = false;
    setHovering([...tempArray]);
  }

  return (
    <div className="w-full flex justify-center py-10 overflow-x-auto">
      <div className="min-w-[320px] md:min-w-[640px] lg:min-w-[1024px]">
        <Swiper
          loop={true}
          autoplay={{
            delay: 2800,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          className="w-full md:h-[95vh] relative"
          breakpoints={{
            0: { slidesPerView: 1, spaceBetween: 20 },
            640: { slidesPerView: 1, spaceBetween: 20 },
            768: { slidesPerView: 2, spaceBetween: 25 },
            1024: { slidesPerView: 3, spaceBetween: 30 },
          }}
          style={{ overflow:"hidden", padding: 0, margin: 0 }}
        >
          {images.map((item, index) => (
            <SwiperSlide key={index} onMouseEnter={()=>handleImageEnter(index)}
                         onMouseLeave={()=>handleImageLeave(index)}>
              <div className="w-full bg-white shadow-[0_4px_20px_rgba(0,0,0,0.12)]">
                <div className="relative w-full h-[220px]">
                  <Image
                    src={item.img}
                    alt={`slide-${index}`}
                    fill
                    className="aspect-video"
                  />
                </div>
                <div className="p-5 pb-1 text-green-500">
                  {role[index]}
                </div>
                <div className="px-5 py-4 text-3xl font-bold text-black">
                  {item.title}
                </div>
                <div className="flex justify-end">
                  <Image src={item.profilePic} width={55} height={55} className="rounded-full mr-5" alt="profile pic" />
                </div>
                <p className={
                  "p-5 text-gray-500 transition-all duration-500 transform " +
                  (hovering[index] ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-3 pointer-events-none")
                }>
                  {item.description}
                </p>
                <p className="p-5 pt-0 text-gray-500">{item.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
