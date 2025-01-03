"use client";

import React from "react";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import WebDevelopment from "@/assets/portfolio/web_development.svg";
import Image from "next/image";
import Link from "next/link";

const SwiperComponent: React.FC = () => {
  return (
    <Swiper
      spaceBetween={50}
      slidesPerView={1}
      modules={[Pagination]}
      pagination={{ clickable: true }}
    >
      <SwiperSlide>
        <Link href="#" className="relative group">
          <div className="relative w-[300px] mx-auto rounded-2xl overflow-hidden">
            <Image
              src={WebDevelopment}
              alt="dev-tech-web-development-portfolio"
              className="w-[300px] mx-auto"
            />
            <span className="bg-black/30 block absolute top-0 w-full h-full mx-auto"></span>
          </div>
          <h1 className="absolute inset-0 flex items-end justify-center text-white font-bold text-2xl bottom-5">
            Web Development
          </h1>
        </Link>
      </SwiperSlide>
    </Swiper>
  );
};

export default SwiperComponent;
