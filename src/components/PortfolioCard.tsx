import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import WebDevelopment1 from "@/assets/portfolio/web_development.svg";
import WebDevelopment2 from "@/assets/portfolio/graphic_design.svg";
import WebDevelopment3 from "@/assets/portfolio/ui_ux.svg";
import { IoLink } from "react-icons/io5";
import Image from "next/image";
import Link from "next/link";
import UX1 from "@/assets/portfolio/ux/1.png";
import UX2 from "@/assets/portfolio/ux/2.png";
import UX3 from "@/assets/portfolio/ux/3.png";
import UX4 from "@/assets/portfolio/ux/4.png";
import UX5 from "@/assets/portfolio/ux/5.png";
import UX6 from "@/assets/portfolio/ux/6.png";
import UX7 from "@/assets/portfolio/ux/7.png";
import UX8 from "@/assets/portfolio/ux/8.png";

interface PortfolioCardProps {
  service: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ service }) => {
  const webDevelopment = [
    {
      imgSrc: WebDevelopment1,
      link: "#contact",
    },
    {
      imgSrc: WebDevelopment2,
      link: "#contact",
    },
    {
      imgSrc: WebDevelopment3,
      link: "#contact",
    },
    {
      imgSrc: WebDevelopment3,
      link: "#contact",
    },
    {
      imgSrc: WebDevelopment3,
      link: "#contact",
    },
  ];
  const ui = [
    {
      imgSrc: UX1,
      link: "#contact",
    },
    {
      imgSrc: UX2,
      link: "#contact",
    },
    {
      imgSrc: UX3,
      link: "#contact",
    },
    {
      imgSrc: UX4,
      link: "#contact",
    },
    {
      imgSrc: UX5,
      link: "#contact",
    },
    {
      imgSrc: UX6,
      link: "#contact",
    },
    {
      imgSrc: UX7,
      link: "#contact",
    },
    {
      imgSrc: UX8,
      link: "#contact",
    },
  ];
  const graphics = [
    {
      imgSrc: WebDevelopment1,
      link: "#contact",
    },
    {
      imgSrc: WebDevelopment2,
      link: "#contact",
    },
    {
      imgSrc: WebDevelopment3,
      link: "#contact",
    },
  ];
  const marketing = [
    {
      imgSrc: WebDevelopment1,
      link: "#contact",
    },
    {
      imgSrc: WebDevelopment2,
      link: "#contact",
    },
    {
      imgSrc: WebDevelopment3,
      link: "#contact",
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
      className="cursor-pointer select-none mt-10"
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
      {service === "web" && webDevelopment && webDevelopment.length > 0 ? (
        webDevelopment.map((value, index) => (
          <SwiperSlide
            key={index}
            className="w-[320px] mx-auto relative group overflow-hidden cursor-pointer sm:w-auto sm:mx-0 rounded-2xl"
          >
            <Image
              src={value.imgSrc}
              alt={`dev-tech-${service || "default"}`}
              className="w-full"
            />
            <div className="absolute w-full h-full top-0 rounded-lg flex items-center justify-center group-hover:bg-primary/50 transition-all duration-300">
              <Link
                href={value.link}
                className="w-12 h-12 flex items-center justify-center bg-primary rounded-full text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300"
              >
                <IoLink />
              </Link>
            </div>
          </SwiperSlide>
        ))
      ) : service === "" || (service === "ui" && ui && ui.length > 0) ? (
        ui.map((value, index) => (
          <SwiperSlide
            key={index}
            className="w-[320px] mx-auto relative group overflow-hidden cursor-pointer sm:w-auto sm:mx-0 rounded-2xl"
          >
            <Image
              src={value.imgSrc}
              alt={`dev-tech-${service || "default"}`}
            />
            <div className="absolute w-full h-full top-0 rounded-lg flex items-center justify-center group-hover:bg-primary/50 transition-all duration-300">
              <Link
                href={value.link}
                className="w-12 h-12 flex items-center justify-center bg-primary rounded-full text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300"
              >
                <IoLink />
              </Link>
            </div>
          </SwiperSlide>
        ))
      ) : service === "graphics" && graphics && graphics.length > 0 ? (
        graphics.map((value, index) => (
          <SwiperSlide
            key={index}
            className="w-[320px] mx-auto relative group overflow-hidden cursor-pointer sm:w-auto sm:mx-0 rounded-2xl"
          >
            <Image
              src={value.imgSrc}
              alt={`dev-tech-${service || "default"}`}
            />
            <div className="absolute w-full h-full top-0 rounded-lg flex items-center justify-center group-hover:bg-primary/50 transition-all duration-300">
              <Link
                href={value.link}
                className="w-12 h-12 flex items-center justify-center bg-primary rounded-full text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300"
              >
                <IoLink />
              </Link>
            </div>
          </SwiperSlide>
        ))
      ) : service === "marketing" && marketing && marketing.length > 0 ? (
        marketing.map((value, index) => (
          <SwiperSlide
            key={index}
            className="w-[320px] mx-auto relative group overflow-hidden cursor-pointer sm:w-auto sm:mx-0 rounded-2xl"
          >
            <Image
              src={value.imgSrc}
              alt={`dev-tech-${service || "default"}`}
            />
            <div className="absolute w-full h-full top-0 rounded-lg flex items-center justify-center group-hover:bg-primary/50 transition-all duration-300">
              <Link
                href={value.link}
                className="w-12 h-12 flex items-center justify-center bg-primary rounded-full text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300"
              >
                <IoLink />
              </Link>
            </div>
          </SwiperSlide>
        ))
      ) : (
        <p>No record found</p>
      )}
    </Swiper>
  );
};

export default PortfolioCard;
