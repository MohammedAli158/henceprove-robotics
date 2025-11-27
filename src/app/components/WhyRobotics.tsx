"use client";
import Image from "next/image";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  LabelList,
  Legend,
} from "recharts";
import { FaBrain, FaRobot, FaDatabase, FaLightbulb, FaCogs } from "react-icons/fa";
import { MdOutlineDeveloperMode } from "react-icons/md";
import { GiBrain, GiCircuitry } from "react-icons/gi";

const skillsWithIcons = [
  { title: "Creative Thinking", icon: <FaLightbulb size={50}  className="text-blue-600 "  /> },
  { title: "Logic", icon: <GiBrain size={50}  className="text-blue-600 "   /> },
  { title: "Structure", icon: <FaCogs size={50}  className="text-blue-600 "   /> },
  { title: "Latest Tech", icon: <MdOutlineDeveloperMode size={50}  className="text-blue-600 "   /> },
  { title: "Robotics", icon: <FaRobot size={50} className="text-blue-600 "   /> },
  { title: "AI / ML", icon: <FaBrain size={50}    className="text-blue-600 " /> },
  { title: "Data Science", icon: <FaDatabase size={50} className="text-blue-600 "   /> },
];

const data = [
  {
    name: "Age",
    Orange: 90,
    OrangeLabel : "Age 8-17 ",
    Blue: 40,
    BlueLabel:"18-30",
    Purple: 35,
    PurpleLabel:
"31-35",    Green: 30,
GreenLabel:"36"
  },
];

export default function WhyRobotics() {
  return (
    <section className="w-full flex flex-col items-center bg-[#f9fafb] py-8">
        <h1 className="text-5xl font-bold text-center mb-10" >Why AI and Robotics for children?</h1>
      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Bar Chart */}
        <div className="min-w-[55vw] md:min-w-[40vw]">
  <h2 className="text-lg font-bold mb-1">Age vs Learning Capability</h2>
  <p className="text-gray-500 mb-4">
    Different skills peak at different stages — each bar shows how a child’s strengths evolve.
  </p>

  <BarChart
    width={360}
    height={300}
    data={data}
    barGap={20} 
  >
    <CartesianGrid strokeDasharray="3 3" opacity={0.15} />
    <XAxis dataKey="name" label={{ value: "Age Range", position: "insideBottom", dy: 10 }} />
    <YAxis label={{ value: "Capability Level", angle: -90, position: "insideLeft", dx: -10 }} />

    {/* <Legend/> */}

    <Bar dataKey="Orange" fill="#ff7a00" animationDuration={1200}>
      <LabelList dataKey="OrangeLabel" position="top" />
    </Bar>
    <Bar dataKey="Blue" fill="#3b82f6" animationDuration={1200}>
      <LabelList dataKey="BlueLabel" position="top" />
    </Bar>
    <Bar dataKey="Purple" fill="#a855f7" animationDuration={1200}>
      <LabelList dataKey="PurpleLabel" position="top" />
    </Bar>
    <Bar dataKey="Green" fill="#22c55e" animationDuration={1200}>
      <LabelList dataKey="GreenLabel" position="top" />
    </Bar>
  </BarChart>
</div>


        {/* Description */}
        <div className="max-w-[40vw] text-gray-700 ">
         <p className="font-bold text-3xl mb-5 relative">
  <span className="text-6xl text-orange-400 absolute -left-6 -top-4">&#8220;</span>
  Learning Complex topics at young age lets the brain development occur faster
  <span className="text-6xl text-orange-400 absolute -right-6 -bottom-4">&#8221;</span>
</p>

          <p>
           Your kids can learn problem-solving, logical thinking, pattern recognition, and creative innovation.
Landmark studies in child development show that early exposure to hands-on technology maximizes creativity and cognitive growth.

The true promise of robotics and AI is not just to produce future engineers.
          </p>
        </div>
      </div>
      <div className=" shadow-[0_4px_10px_rgba(0,0,0,0.25)] md:mt-15 w-full md:w-[85vw]  flex-col h-auto md:h-[80h] items-center m-10 bg-white " >
        <h1 className="font-bold text-3xl md:text-4xl mt-5 text-center md:mt-15 " >
        What your child will learn
        </h1>
        <div className="flex flex-col justify-center items-center md:flex-row gap-15 m-10  " >
    {
        skillsWithIcons.map((item,index)=>{
            return (
                <div key={index} className="max-w-[20vw] flex flex-col ">
                       <div className="w-24 h-24
bg-blue-100 flex items-center justify-center rounded-full">
  {item.icon}
</div>
<h4 className="p-5 text-gray-500">{item.title}</h4>

                </div>
            )
        })
    }
        </div>
       
      </div>
    </section>
  );
}
