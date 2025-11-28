"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";

import Image from "next/image";
import kid from "../../../public/kids.jpg";
import kidt from "../../../public/kidst.jpg";
import kidth from "../../../public/kidsth.jpg";
import hps from "../../../public/hps.jpg";
import cbs from "../../../public/cbs.jpg";
import kidd from "../../../public/kidd.webp";
import bachaa from "../../../public/bachaa.jpg";

export default function CertifiedSection() {
  const images = [kid, kidt, kidth, hps, cbs, kidd, bachaa];

  const content = [
    { title: "Young Innovator Certified", desc: "Completed hands-on robotics activities and built their first working prototype." },
    { title: "AI Explorer Certified", desc: "Learned fundamentals of machine intelligence and created simple AI models." },
    { title: "Creative Robotics Builder", desc: "Designed mini-machines using motors, sensors, and logical thinking." },
    { title: "School Tech Achiever", desc: "Recognized for exceptional performance in STEM workshops hosted by HenceProve." },
    { title: "Future Tech Leader", desc: "Showed strong problem-solving skills and teamwork in STEM challenges." },
    { title: "Junior AI Researcher", desc: "Experimented with image detection, automation, and smart logic activities." },
    { title: "Certified Young Creator", desc: "Demonstrated creativity, discipline, and futuristic thinking throughout the sessions." }
  ];

  return (
    <section className="w-full pt-5 overflow-x-hidden">
      <div className="w-full max-w-[100vw] overflow-x-hidden">
        <Swiper
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 4 }
          }}
          spaceBetween={20}
          loop={true}
          speed={6000}
          freeMode={{ enabled: true, momentum: false }}
          autoplay={{ delay: 0, disableOnInteraction: false, pauseOnMouseEnter: true }}
          modules={[Autoplay, FreeMode]}
          className="w-full"
          centeredSlides={false}
          slidesOffsetBefore={0}
          slidesOffsetAfter={0}
          style={{ overflow: "hidden", padding: 0, margin: 0 }}
        >
          {images.map((img, index) => (
            <SwiperSlide key={index} style={{ overflow: "hidden" }}>
              <div className="flex flex-col border border-white bg-white shadow-[0_20px_30px_-10px_rgba(0,0,0,0.15)] overflow-hidden min-h-[60vh]">
                {/* IMAGE */}
                <div className="w-full aspect-square overflow-hidden">
                  <Image src={img} alt={content[index].title} className="w-full h-full object-cover" />
                </div>

                {/* TITLE */}
                <p className="text-black font-bold px-4 py-2">{content[index].title}</p>

                {/* DESCRIPTION */}
                <p className="px-4 py-2 text-sm">{content[index].desc}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
