import React from 'react'
import FormComponent from './FormComponent'
import Image from 'next/image'
import Bacha from "../../../public/ChatGPT Image Nov 18, 2025, 11_03_41 PM.png"
export default function HeroSection() {
  return (

  <div className=" relative flex bg-[#f9fafb]  min-h-[80vh] m-5 rounded-md shadow-[0_4px_10px_rgba(0,0,0,0.20)] ">
 <div className='flex flex-col mt-10 ml-5' >
    <h1 className='text-5xl max-w-[50vw]  text-black' >Turning wild ideas into  <span className='text-5xl text-orange-500' >ROBOTS</span>that actually move</h1>
 <h3 className=' max-w-[50vw] my-5 ' >Building the machines your future will depend on , where AI <span className='text-orange-500'>Ends</span> imagination <span className='text-orange-500'> Begins </span></h3>
 <FormComponent/>
 </div>
 <div className='w-80 h-80 absolute right-37 bg-orange-500 rounded-full' >
    <Image src={Bacha} alt='winner' className='h-100 w-75  ' />
 </div>
</div>

  )
}
