"use client";

import Image from "next/image";
import image from "../../../public/ai_banner.png";
import Link from "next/link";
import BookButton from "./BookButton";

export default function TechBanner() {
    
  return (
    <section  className="relative h-auto" >
        <Image src={image} alt="boy" />
        <div className="absolute right-12 top-1/2" >  
            <BookButton/>
        </div>
    </section>
  );
}
