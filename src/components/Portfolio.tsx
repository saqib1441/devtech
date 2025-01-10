"use client";

import Image from "next/image";
import React, { useState } from "react";
import BackgroundOverlay from "@/assets/overlays/background_overlay.svg";
import PortfolioCard from "./PortfolioCard";

const Portfolio: React.FC = () => {
  const [service, setService] = useState("");

  return (
    <section className="bg-black py-20 relative" id="portfolio">
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
            className="bg-main px-5 py-2 rounded-full w-fit focus:outline-none cursor-pointer text-center"
          >
            <option value=""> -- Select Service -- </option>
            <option value="web">Web Development</option>
            <option value="ui">UI/UX Design</option>
            <option value="graphics">Graphic Designing</option>
            <option value="marketing">Digital Marketing</option>
          </select>
        </div>
        <PortfolioCard service={service} />
      </div>
    </section>
  );
};

export default Portfolio;
