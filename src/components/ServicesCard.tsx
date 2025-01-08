"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { FaChartBar, FaFigma, FaLaptopCode } from "react-icons/fa6";
import Link from "next/link";
import { AiFillPicture } from "react-icons/ai";
import { FaPhotoVideo } from "react-icons/fa";
import { TbSeo } from "react-icons/tb";

const ServicesCard: React.FC = () => {
  const data = [
    {
      title: "Web Development",
      icon: <FaLaptopCode />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel tempus arcu, at consectetur lectus. Sed in neque sed urna facilisis auctor.",
    },
    {
      title: "Graphic Designing",
      icon: <AiFillPicture />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel tempus arcu, at consectetur lectus. Sed in neque sed urna facilisis auctor.",
    },
    {
      title: "UX/UI Designing",
      icon: <FaFigma />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel tempus arcu, at consectetur lectus. Sed in neque sed urna facilisis auctor.",
    },
    {
      title: "Video Editing",
      icon: <FaPhotoVideo />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel tempus arcu, at consectetur lectus. Sed in neque sed urna facilisis auctor.",
    },
    {
      title: "Digital Marketing",
      icon: <FaChartBar />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel tempus arcu, at consectetur lectus. Sed in neque sed urna facilisis auctor.",
    },
    {
      title: "SEO",
      icon: <TbSeo />,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel tempus arcu, at consectetur lectus. Sed in neque sed urna facilisis auctor.",
    },
  ];

  return (
    <Swiper
      spaceBetween={30}
      pagination={{ clickable: true, type: "bullets" }}
      slidesPerView={1}
      modules={[Pagination, Autoplay]}
      loop={true}
      autoplay={{ delay: 5000, pauseOnMouseEnter: true }}
      breakpoints={{
        768: {
          slidesPerView: 2,
          spaceBetween: 30,
        },
        1024: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      }}
    >
      {data &&
        data.map((service, index) => (
          <SwiperSlide key={index}>
            <div className="px-5 py-10 bg-primary rounded-2xl sm:w-[450px] md:w-auto cursor-pointer">
              <div
                className={`bg-main p-4 rounded-full h-[70px] w-[70px] flex items-center justify-center text-5xl`}
              >
                {service.icon}
              </div>
              <h1 className="font-[500] mt-3 mb-2 text-lg">{service.title}</h1>
              <p className="text-white/70 mb-2">{service.description}</p>
              <Link href={"/"} className="text-main">
                Learn More
              </Link>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default ServicesCard;
