"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/swiper-bundle.css";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa6";
import AhmadNadeem from "@/assets/teams/ahmad_nadeem.png";
import AdeelAbbas from "@/assets/teams/adeel_abbas.png";
import SaqibAli from "@/assets/teams/saqib_ali.png";
import AmeerHamza from "@/assets/teams/ameer_hamza.png";
import KingsleyToochi from "@/assets/teams/kingsley_toochi.png";
import MTahir from "@/assets/teams/m_tahir.png";
import MWaqas from "@/assets/teams/m_waqas.png";
import BackgroundOverlay from "@/assets/overlays/background_overlay.svg";
import Link from "next/link";
import Image from "next/image";

const TeamCard: React.FC = () => {
  const data = [
    {
      name: "Ahmad Nadeem",
      imgSrc: AhmadNadeem,
      skill: "Founder, CEO",
      socials: {
        linkedin: {
          icon: <FaLinkedin />,
          url: "",
        },
        facebook: {
          icon: <FaFacebookF />,
          url: "",
        },
        instagram: {
          icon: <FaInstagram />,
          url: "",
        },
      },
    },
    {
      name: "Adeel Abbas",
      imgSrc: AdeelAbbas,
      skill: "Video Editor",
      socials: {
        linkedin: {
          icon: <FaLinkedin />,
          url: "",
        },
        facebook: {
          icon: <FaFacebookF />,
          url: "",
        },
        instagram: {
          icon: <FaInstagram />,
          url: "",
        },
      },
    },
    {
      name: "Saqib Ali",
      imgSrc: SaqibAli,
      skill: "MERN Stack Developer",
      socials: {
        linkedin: {
          icon: <FaLinkedin />,
          url: "",
        },
        facebook: {
          icon: <FaFacebookF />,
          url: "",
        },
        instagram: {
          icon: <FaInstagram />,
          url: "",
        },
      },
    },
    {
      name: "Ameer Hamza",
      imgSrc: AmeerHamza,
      skill: "Wordpress & SEO Expert",
      socials: {
        linkedin: {
          icon: <FaLinkedin />,
          url: "",
        },
        facebook: {
          icon: <FaFacebookF />,
          url: "",
        },
        instagram: {
          icon: <FaInstagram />,
          url: "",
        },
      },
    },
    {
      name: "Kingsley Toochi",
      imgSrc: KingsleyToochi,
      skill: "Web Developer",
      socials: {
        linkedin: {
          icon: <FaLinkedin />,
          url: "",
        },
        facebook: {
          icon: <FaFacebookF />,
          url: "",
        },
        instagram: {
          icon: <FaInstagram />,
          url: "",
        },
      },
    },
    {
      name: "M Tahir",
      imgSrc: MTahir,
      skill: "Digital Marketer",
      socials: {
        linkedin: {
          icon: <FaLinkedin />,
          url: "",
        },
        facebook: {
          icon: <FaFacebookF />,
          url: "",
        },
        instagram: {
          icon: <FaInstagram />,
          url: "",
        },
      },
    },
    {
      name: "M Waqas",
      imgSrc: MWaqas,
      skill: "Graphic Designer",
      socials: {
        linkedin: {
          icon: <FaLinkedin />,
          url: "",
        },
        facebook: {
          icon: <FaFacebookF />,
          url: "",
        },
        instagram: {
          icon: <FaInstagram />,
          url: "",
        },
      },
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
        data.map((team, index) => (
          <SwiperSlide key={index}>
            <div className="bg-black rounded-3xl flex items-center flex-col py-12 cursor-pointer select-none">
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
              <div>
                <Image
                  src={team.imgSrc}
                  alt={team.name}
                  className="w-[120px]"
                />
              </div>
              <div className="py-3 text-center">
                <h1 className="text-white font-semibold text-xl">
                  {team.name}
                </h1>
                <p className="text-white/70 text-sm">{team.skill}</p>
              </div>
              <div className="text-white flex gap-3">
                <Link href={team.socials.linkedin.url}>
                  {team.socials.linkedin.icon}
                </Link>
                <Link href={team.socials.facebook.url}>
                  {team.socials.facebook.icon}
                </Link>
                <Link href={team.socials.instagram.url}>
                  {team.socials.instagram.icon}
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default TeamCard;
