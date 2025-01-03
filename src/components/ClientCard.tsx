"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import Review1 from "@/assets/testimonials/client1.svg";

const ClientCard: React.FC = () => {
  const data = [
    {
      name: "Lauren Turner",
      designation: "VP, BlueWave",
      imgSrc: Review1,
      project: "Full Stack Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sit ea similique maiores! Quae, saepe nostrum quia eos impedit culpa asperiores laboriosam maxime tempora provident eaque temporibus ducimus rem soluta.",
    },
    {
      name: "Lauren Turner",
      designation: "VP, BlueWave",
      imgSrc: Review1,
      project: "Full Stack Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sit ea similique maiores! Quae, saepe nostrum quia eos impedit culpa asperiores laboriosam maxime tempora provident eaque temporibus ducimus rem soluta.",
    },
    {
      name: "Lauren Turner",
      designation: "VP, BlueWave",
      imgSrc: Review1,
      project: "Full Stack Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sit ea similique maiores! Quae, saepe nostrum quia eos impedit culpa asperiores laboriosam maxime tempora provident eaque temporibus ducimus rem soluta.",
    },
    {
      name: "Lauren Turner",
      designation: "VP, BlueWave",
      imgSrc: Review1,
      project: "Full Stack Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sit ea similique maiores! Quae, saepe nostrum quia eos impedit culpa asperiores laboriosam maxime tempora provident eaque temporibus ducimus rem soluta.",
    },
    {
      name: "Lauren Turner",
      designation: "VP, BlueWave",
      imgSrc: Review1,
      project: "Full Stack Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sit ea similique maiores! Quae, saepe nostrum quia eos impedit culpa asperiores laboriosam maxime tempora provident eaque temporibus ducimus rem soluta.",
    },
    {
      name: "Lauren Turner",
      designation: "VP, BlueWave",
      imgSrc: Review1,
      project: "Full Stack Development",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad sit ea similique maiores! Quae, saepe nostrum quia eos impedit culpa asperiores laboriosam maxime tempora provident eaque temporibus ducimus rem soluta.",
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
      className="cursor-pointer select-none"
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
        data.map((review, index) => (
          <SwiperSlide className="text-white" key={index}>
            <div className="flex flex-col gap-4 bg-primary py-10 px-5 rounded-3xl w-[320px] mx-auto md:w-auto md:mx-0 sm:w-[500px]">
              <h1 className="font-semibold text-xl sm:text-2xl">
                {review.project}
              </h1>
              <p className="text-white/70">{review.description}</p>
              <div className="flex gap-4 items-center">
                <div>
                  <Image
                    src={review.imgSrc}
                    alt={`dev-tech-${review.project.toLocaleLowerCase()}-review`}
                  />
                </div>
                <div>
                  <h1 className="font-semibold">{review.name}</h1>
                  <p className="text-white/70 text-sm">{review.designation}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default ClientCard;
