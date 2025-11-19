import Image from "next/image"
import React from "react"
import Logo from "../../../public/join.png"
export default function FormComponent(){
    return ( 
        <div className="bg-white mt-5 pt-5 rounded-md flex flex-col max-w-[35vw] gap-5 relative min-h-[22vh] md:min-h-[30vh]  shadow-[0_4px_10px_rgba(0,0,0,0.20)]" >
            <input className="ml-6 pl-3 bg-[#f9fafb] border border-black py-2 max-w-[20vw] rounded-xl focus:outline-none " placeholder=" Name" />
            <input className="ml-6 pl-3 bg-[#f9fafb] border border-black py-2 max-w-[20vw] rounded-xl focus:outline-none" placeholder="Phone Number" />
            <button className="absolute left-8 bottom-5 bg-orange-500  md:h-[5.5vh] md:px-3 cursor-pointer rounded-xl " >Reach Us {"->"}</button> 
            <Image src={Logo} alt="Join" className="absolute right-5 top-2 aspect-square h-35 w-35" />

        </div>
    )
}