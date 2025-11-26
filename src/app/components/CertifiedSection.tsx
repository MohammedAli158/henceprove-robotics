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

  return (
    // allow overflow so shadows can show
    <section className="min-w-full pt-5 overflow-visible">
      {/* full-bleed wrapper — neutralize any parent page padding by using w-screen */}
      <div className="w-screen max-w-none overflow-visible">
        <Swiper
          breakpoints={{
            0: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
            1280: { slidesPerView: 4 },
          }}
          spaceBetween={20}
          loop={true}
          speed={6000}
          freeMode={{ enabled: true, momentum: false }}
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          modules={[Autoplay, FreeMode]}
          // make swiper occupy the whole viewport width and allow overflow
          className="w-full"
          centeredSlides={false}
          slidesOffsetBefore={0}
          slidesOffsetAfter={0}
          style={{ overflow: "visible", padding: 0, margin: 0 }}
        >
          {images.map((img, index) => (
            // ensure slides don't clip their shadows
            <SwiperSlide key={index} style={{ overflow: "visible" }}>
              <div className="flex flex-col border border-white bg-white shadow-[0_20px_30px_-10px_rgba(0,0,0,0.15)] overflow-visible min-h-[60vh]">
                {/* keep image square and make it cover */}
                <div className="w-full aspect-square">
                  <Image
                    src={img}
                    alt={`slide-${index}`}
                    className="w-full h-full object-cover"
                  />
                </div>

                <p className="text-black font-bold px-4 py-2">This is the text</p>
                <p className="px-4 py-2">
                  Lorem ipsum dolor sit amet.Lorem ipsum dolor sit sit amet.
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
