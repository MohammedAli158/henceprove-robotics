"use client";

import Image from "next/image";
import image from "../../../public/ai_banner.png";
import Link from "next/link";
import BookButton from "./BookButton";

export default function TechBanner() {
  return (
    <section className="relative h-auto w-full">
      <Image src={image} alt="boy" className="w-full h-auto" />
      <div className="absolute right-12 top-1/2 hidden md:block">
        <BookButton />
      </div>
    </section>
  );
}
