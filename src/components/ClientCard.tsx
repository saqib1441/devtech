"use client";

import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import BackgroundOverlay from "@/assets/overlays/background_overlay.svg";
import Review1 from "@/assets/testimonials/client1.svg";
import Review2 from "@/assets/testimonials/client2.svg";
import Review3 from "@/assets/testimonials/client3.svg";
import Review4 from "@/assets/testimonials/client4.svg";
import Review5 from "@/assets/testimonials/client5.svg";
import Review6 from "@/assets/testimonials/client6.svg";

const ClientCard: React.FC = () => {
  const data = [
    {
      name: "Sarah Miller",
      designation: "Marketing Director at GlobalTech",
      imgSrc: Review1,
      project: "Web Development",
      description:
        "The web development team transformed our online presence! Their attention to detail and understanding of our brand vision were remarkable.",
    },
    {
      name: "James Lee",
      designation: "Product Manager at Innovatech",
      imgSrc: Review2,
      project: "UX/UI Design",
      description:
        "Their UI/UX design completely revamped the user experience for our app. It's intuitive, sleek, and aligns perfectly with our customer needs. Truly a game-changer!",
    },
    {
      name: "Emily Roberts",
      designation: "Founder of EcoLiving Co.",
      imgSrc: Review3,
      project: "SEO",
      description:
        "Thanks to their expert SEO strategies, we've seen a dramatic increase in organic traffic. Our rankings on Google have never been better!",
    },
    {
      name: "David Harris",
      designation: "Creative Director at Luxe Apparel",
      imgSrc: Review4,
      project: "Graphic Design",
      description:
        "The graphic design team delivered visuals that perfectly captured our brand's essence. Their creativity and professionalism are unparalleled.",
    },
    {
      name: "Michael Chang",
      designation: "Sales Manager at TechnoFlex",
      imgSrc: Review5,
      project: "Digital Marketing",
      description:
        "The digital marketing campaign they created for us was outstanding. Our sales have significantly improved, and the return on investment was exceptional!",
    },
    {
      name: "Jessica Martinez",
      designation: "Content Manager at BrightIdeas",
      imgSrc: Review6,
      project: "Video Editing",
      description:
        "The video editing team exceeded our expectations. They crafted a beautiful video that told our story and engaged our audience like never before",
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
          <SwiperSlide className="text-white relative" key={index}>
            <Image
              src={BackgroundOverlay}
              alt="dev-tech-overlay"
              className="absolute top-0 left-0 w-[200px] opacity-50"
            />
            <Image
              src={BackgroundOverlay}
              alt="dev-tech-overlay"
              className="absolute bottom-0 right-0 rotate-180 w-[200px]"
            />
            <div className="flex flex-col gap-2 bg-black py-10 px-5 rounded-2xl w-[320px] mx-auto md:w-auto md:mx-0 sm:w-[500px]">
              <h1 className="font-semibold text-xl sm:text-2xl">
                {review.project}
              </h1>
              <p className="text-white/70 text-sm">{review.description}</p>
              <div className="flex gap-4 items-center mt-2">
                <div className="bg-main rounded-full">
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
