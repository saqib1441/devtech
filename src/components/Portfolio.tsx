"use client";

import Image from "next/image";
import React, { useState } from "react";
import BackgroundOverlay from "@/assets/overlays/background_overlay.svg";
import Link from "next/link";

import WebDevelopment1 from "@/assets/portfolio/web_development.svg";
import WebDevelopment2 from "@/assets/portfolio/graphic_design.svg";
import WebDevelopment3 from "@/assets/portfolio/ui_ux.svg";
import { IoLink } from "react-icons/io5";

const Portfolio: React.FC = () => {
  const [service, setService] = useState("");

  const webDevelopment = [
    {
      imgSrc: WebDevelopment1,
      link: "",
    },
    {
      imgSrc: WebDevelopment2,
      link: "",
    },
    {
      imgSrc: WebDevelopment3,
      link: "",
    },
  ];
  const ui = [
    {
      imgSrc: WebDevelopment1,
      link: "",
    },
    {
      imgSrc: WebDevelopment2,
      link: "",
    },
    {
      imgSrc: WebDevelopment3,
      link: "",
    },
  ];
  const graphics = [
    {
      imgSrc: WebDevelopment1,
      link: "",
    },
    {
      imgSrc: WebDevelopment2,
      link: "",
    },
    {
      imgSrc: WebDevelopment3,
      link: "",
    },
  ];
  const marketing = [
    {
      imgSrc: WebDevelopment1,
      link: "",
    },
    {
      imgSrc: WebDevelopment2,
      link: "",
    },
    {
      imgSrc: WebDevelopment3,
      link: "",
    },
  ];
  return (
    <section className="bg-black py-20 relative">
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
      <div className="wrapper text-white">
        <div className="flex flex-col gap-5 md:flex-row items-center md:justify-between sm:items-start md:items-center">
          <div className="text-center sm:text-start">
            <h1 className="font-bold text-2xl">A Glimpse Of Our Work</h1>
            <p className="text-white/70">
              Here are a few of our most recent projects, showcasing our
              creativity.
            </p>
          </div>
          <select
            value={service || ""}
            onChange={(e) => setService(e.target.value)}
            className="bg-primary px-5 py-2 rounded-full w-fit focus:outline-none cursor-pointer"
          >
            <option value=""> -- Select Service -- </option>
            <option value="web">Web Development</option>
            <option value="ui">UI/UX Design</option>
            <option value="graphics">Graphic Designing</option>
            <option value="marketing">Digital Marketing</option>
          </select>
        </div>
        <div className="mt-10 grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
          {service === "" ||
          (service === "web" && webDevelopment && webDevelopment.length > 0) ? (
            webDevelopment.map((value, index) => (
              <div
                key={index}
                className="w-[320px] mx-auto relative group overflow-hidden cursor-pointer sm:w-auto sm:mx-0"
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
              </div>
            ))
          ) : service === "ui" && ui && ui.length > 0 ? (
            ui.map((value, index) => (
              <div
                key={index}
                className="w-[320px] mx-auto relative group overflow-hidden cursor-pointer sm:w-auto sm:mx-0"
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
              </div>
            ))
          ) : service === "graphics" && graphics && graphics.length > 0 ? (
            graphics.map((value, index) => (
              <div
                key={index}
                className="w-[320px] mx-auto relative group overflow-hidden cursor-pointer sm:w-auto sm:mx-0"
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
              </div>
            ))
          ) : service === "marketing" && marketing && marketing.length > 0 ? (
            marketing.map((value, index) => (
              <div
                key={index}
                className="w-[320px] mx-auto relative group overflow-hidden cursor-pointer sm:w-auto sm:mx-0"
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
              </div>
            ))
          ) : (
            <p>No record found</p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
