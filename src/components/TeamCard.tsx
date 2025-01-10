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
      skill: "UX/UI Designer",
      socials: {
        linkedin: {
          icon: <FaLinkedin />,
          url: "https://www.linkedin.com/in/ahmad-nadeem-4703822b8/",
        },
        facebook: {
          icon: <FaFacebookF />,
          url: "https://www.facebook.com/share/15qNsxNA7S/",
        },
        instagram: {
          icon: <FaInstagram />,
          url: "https://www.instagram.com/ahmadcreations12?igsh=MWN0NTN2Zm1sN3pzeQ==",
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
          url: "https://www.linkedin.com/in/m-saqib-ali",
        },
        facebook: {
          icon: <FaFacebookF />,
          url: "https://www.facebook.com/msaqib.ali.31392",
        },
        instagram: {
          icon: <FaInstagram />,
          url: "https://www.instagram.com/saqib_ali_ig/profilecard/?igsh=d2hrYm4yNjM1MXZy",
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
          url: "https://www.linkedin.com/in/ameer-hamza-00bb1b25b/",
        },
        facebook: {
          icon: <FaFacebookF />,
          url: "https://www.facebook.com/profile.php?id=100068414261088",
        },
        instagram: {
          icon: <FaInstagram />,
          url: "https://www.instagram.com/itzhamza714/profilecard/?igsh=c2R6emh1NXU5bmF5",
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
          url: "https://www.linkedin.com/in/muhammad-tahir-940713318",
        },
        facebook: {
          icon: <FaFacebookF />,
          url: "https://www.facebook.com/ysmarketingexpert?mibextid=ZbWKwL",
        },
        instagram: {
          icon: <FaInstagram />,
          url: "https://www.instagram.com/ysmarketing_agency/profilecard/?igsh=MWxxanpmaWJvbWdmbg==",
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
              <div className="text-white flex gap-3 z-10 relative">
                <Link href={team.socials.linkedin.url} target="_blank">
                  {team.socials.linkedin.icon}
                </Link>
                <Link href={team.socials.facebook.url} target="_blank">
                  {team.socials.facebook.icon}
                </Link>
                <Link href={team.socials.instagram.url} target="_blank">
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
