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
        "Expert web development services crafting responsive, fast, and custom websites to enhance your online presence and drive business growth.",
    },
    {
      title: "Graphic Designing",
      icon: <AiFillPicture />,
      description:
        "Creative graphic design services delivering unique, eye-catching visuals for branding, marketing, and digital platforms",
    },
    {
      title: "UX/UI Designing",
      icon: <FaFigma />,
      description:
        "Professional UI/UX design services creating intuitive, user-friendly interfaces and seamless experiences to enhance engagement",
    },
    {
      title: "Video Editing",
      icon: <FaPhotoVideo />,
      description:
        "Expert video editing services delivering high-quality, engaging content with smooth transitions, effects, and professional touches.",
    },
    {
      title: "Digital Marketing",
      icon: <FaChartBar />,
      description:
        "Result-driven digital marketing services offering SEO, social media, PPC, and content strategies to boost online visibility and drive growth.",
    },
    {
      title: "SEO",
      icon: <TbSeo />,
      description:
        "Boost your digital marketing success with expert SEO services, enhancing search rankings, driving organic traffic, and maximizing online visibility.",
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
            <div className="px-5 py-10 bg-primary rounded-2xl sm:w-[450px] md:w-auto cursor-pointer mx-auto md:mx-0">
              <div
                className={`bg-main p-4 rounded-full h-[70px] w-[70px] flex items-center justify-center text-5xl`}
              >
                {service.icon}
              </div>
              <h1 className="font-[500] mt-3 mb-2 text-lg">{service.title}</h1>
              <p className="text-white/70 mb-2">{service.description}</p>
              <Link href={"#contact"} className="text-main">
                Learn More
              </Link>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default ServicesCard;
