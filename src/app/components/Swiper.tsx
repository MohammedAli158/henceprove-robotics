"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Image from "next/image";

// Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// images
import ione from "../../../public/images(2).jpg";
import twoe from "../../../public/images.jpg";
import threee from "../../../public/swip.jpg";
import foure from "../../../public/swipe.jpg";
import fivee from "../../../public/swipee.jpg";
import sixe from "../../../public/images1).jpg";

const images = [ione, twoe, threee, foure, fivee, sixe];

export default function MySwiper() {
  return (
    <div className="w-full flex justify-center py-10">
      <Swiper
        slidesPerView={2}
        spaceBetween={20}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Autoplay, Pagination]}
        className="w-full max-w-[90%] "
      >
        {images.map((img, index) => (
          <SwiperSlide key={index} className="max-h-[45vh] " >
            <div className="relative rounded-xl overflow-hidden  w-[50vw] h-[40vw] max-h-[400px] max-w-[600px] mx-auto">
              <Image src={img} alt={`slide-${index}`} fill className="max-h-[40vh]" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <style>
        {`
          /* Make pagination dots pretty */
          .swiper-pagination-bullet {
            background: #bbb;
            opacity: 0.7;
            width: 10px;
            height: 10px;
            transition: all 0.3s ease;
          }

          .swiper-pagination-bullet-active {
            background: #000;
            opacity: 1;
            width: 22px;
            border-radius: 10px;
          }
        `}
      </style>
    </div>
  );
}
