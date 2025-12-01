"use client";

import { useState } from "react";
import BookButton from "./BookButton";


export default function PricingSection({bg=false}:{bg?:boolean}){
 const cards = [
  {
    title: "Learn AI with Experts",
    price: "499",
    curriculum_includes: "Intro to machine learning, image recognition, neural network basics, fun hands-on AI projects."
  },
  {
    title: "Master Robotics",
    price: "599",
    curriculum_includes: "Motor control, sensor programming, engineering logic, building functional robots from scratch."
  },
  {
    title: "Learn Both AI & Robotics",
    price: "899",
    curriculum_includes: "Full AI + robotics track: ML fundamentals, automation, hardware building, logic design, and smart-bot challenges."
  }
];
const [hoverStates,setHoverState] = useState([false,false,false])
const handleMouseEnter = (index:number)=>{

  const hover = hoverStates
  hover[index] = true
  setHoverState([...hover])
} 
const handleMouseLeave = (index:number)=>{
  const hover = hoverStates
  hover[index] = false
  setHoverState([...hover])
} 

  return (
    <section className="min-h-[55vh] futura" >
      <div className="flex flex-col md:flex-row gap-10 p-5 m-5" >
        {
          cards.map((card,i)=>{
            return <div className={"md:max-w-[30vw] p-5  md:min-h-[75vh] shadow-[0_4px_10px_rgba(0,0,0,0.20)] transition-all duration-300 ease-out " +
    (hoverStates[i] ? "scale-110" : "scale-100") + (bg ? " bg-[#f9fafb] hover:bg-white" : " ") } key={i} onMouseEnter={()=>handleMouseEnter(i)} onMouseLeave={()=>handleMouseLeave(i)} >
              <div className={" relative flex flex-col min-h-[45%] bg-[#fff4e8]  " +(hoverStates[i] ? "bg-orange-400 text-white" : "scae-100")} >

                <p className="font-bold text-4xl p-5 m-5" >{card.title}</p>
                <span className="pl-5 ml-5 absolute left-5 bottom-5 hidden md:block " >{card.price}/-</span>
                </div>
                <div>
                  <h1 className="p-5 ml-5 font-bold text-2xl" >Curriculum Includes:</h1>
                  <p className="p-5 ml-5 text-gray-500" >{card.curriculum_includes}</p>
                </div>
                <div className="text-center"><BookButton/></div>
                </div>
          })
        }
      </div>
    </section>
  )
}