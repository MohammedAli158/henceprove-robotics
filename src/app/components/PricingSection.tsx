import React from "react";
import img from "../../../public/images.jpg"
import imgt from "../../../public/images(2).jpg"
import imgh from "../../../public/images1).jpg"
import Image from "next/image";
export default function PricingSection(){
    const cardDetails = [
        {title:"Robotics Mastery",id:"CX56G",img,price:"999 USD"},{title:"Ai Champion",id:"JHY6D",img:imgh,price:"699 USD"},{title:"Ai + Robotics",id:"HSK5S",img:imgt,price:" 1299 USD"}
    ]
    return (
       <section className="m-5 min-h-screen bg-[#d9d9da] rounded-xl shadow-[0_4px_10px_rgba(255,165,0,0.55)] " >
        <div className="flex flex-col items-center" > 
            <h1 className="text-5xl m-5">Courses We Offer</h1>
            <div className="flex gap-6 ml-6 mt-10" >
                {
                    cardDetails.map((k,i)=>{
                        return (
                            <div key={i} className="min-h-[76vh] border border-white max-w-[28vw] border-dashed rounded-xl bg-orange-400 text-white flex flex-col items-center  relative shadow-[0_4px_10px_rgba(0,0,0,0.55)]" >
                                <h1 className="mt-5 text-4xl" >{k.title}</h1>
                                <Image src={k.img} alt="course image" className="rounded-xl min-h-[35vh] max-w-[22vw] mt-5 " />
                                <p className="m-5" >Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</p>
                                <p className="h-10 w-25 absolute bottom-5 right-5 text-center bg-black text-white flex items-center justify-center rounded-xl cursor-pointer" >{k.price}</p>

                            </div>
                        )
                    }) 
                }
            </div>
        </div>

       </section>
    )
}