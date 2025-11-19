import Image from "next/image";
import React from "react";
import img from "../../../public/swip.jpg"
export default function AltComponent(){
    return (
        <section className="min-h-screen flex flex-col m-5 mt-0 bg-gray-200 rounded-xl shadow-[0_4px_10px_rgba(0,0,0,0.25)] " >
            <div className="flex m-5 shadow-[0_4px_10px_rgba(0,0,0,0.20)] max-h-[45vh] p-5 text-white bg-orange-500 rounded-xl border-b border-[#d9d9da] " >
                <Image src={img} alt="Image" className="min-h-[35vh] min-w-[35vw] rounded-xl" />
                <h1 className="m-5 text-5xl" >Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</h1>
            </div>
            <div className="shadow-[0_4px_10px_rgba(0,0,0,0.20)] flex m-5 bg-orange-500 max-h-[45vh] p-5 text-white rounded-xl border-b border-[#d9d9da] " >
                <h1 className="m-5 text-5xl" >Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</h1>
                <Image src={img} alt="Image" className="min-h-[35vh] min-w-[35vw] rounded-xl" />
            </div>
            <div className="shadow-[0_4px_10px_rgba(0,0,0,0.20)] flex m-5 bg-orange-500 max-h-[45vh] p-5 text-white rounded-xl border-b border-[#d9d9da]" >
                <Image src={img} alt="Image" className="min-h-[35vh] min-w-[35vw] rounded-xl" />
                <h1 className="m-5 text-5xl" >Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</h1>
            </div>

        </section>
    )
}