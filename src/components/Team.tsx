import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaFacebookF, FaInstagram, FaLinkedin } from "react-icons/fa6";
import AhmadNadeem from "@/assets/teams/ahmad_nadeem.svg";
import AdeelAbbas from "@/assets/teams/adeel_abbas.svg";
import SaqibAli from "@/assets/teams/saqib_ali.svg";

const Team: React.FC = () => {
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
  ];
  return (
    <section>
      <div className="wrapper py-20">
        <div className="text-white text-center mb-10 sm:text-left">
          <h1 className="font-semibold text-2xl">Team Behind Our Success</h1>
          <p className="text-white/70">
            Our diverse team of passionate individuals is united by a common
            goal
          </p>
        </div>
        <div className="grid gap-16 sm:grid-cols-2 sm:gap-10 md:grid-cols-3">
          {data &&
            data.map((team, index) => (
              <div key={index}>
                <div className="flex justify-center items-center bg-main py-5 rounded-lg w-[320px] mx-auto sm:w-auto sm:mx-0">
                  <Image
                    src={team.imgSrc}
                    alt={`dev-tech-${team.name}`}
                    className="w-[150px] h-auto"
                  />
                </div>
                <div className="flex items-center justify-center flex-col py-5">
                  <h1 className="font-semibold text-white text-xl">
                    {team.name}
                  </h1>
                  <p className="text-white/60 text-sm">{team.skill}</p>
                </div>
                <div className="flex gap-3 text-white items-center justify-center">
                  <Link
                    href={team.socials.linkedin.url}
                    className="cursor-pointer"
                  >
                    {team.socials.linkedin.icon}
                  </Link>
                  <Link
                    href={team.socials.facebook.url}
                    className="cursor-pointer"
                  >
                    {team.socials.facebook.icon}
                  </Link>
                  <Link
                    href={team.socials.instagram.url}
                    className="cursor-pointer"
                  >
                    {team.socials.instagram.icon}
                  </Link>
                </div>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Team;
