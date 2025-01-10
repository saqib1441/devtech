import BackgroundOverlay from "@/assets/overlays/background_overlay.svg";
import Image from "next/image";
import React from "react";
import ServicesCard from "./ServicesCard";

const Services: React.FC = () => {
  return (
    <section className="bg-black py-20 relative" id="services">
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
        <div className="text-white text-center mb-10 sm:text-left">
          <h1 className="font-semibold text-2xl">Our Services</h1>
          <p className="text-white/70">
            Smart solutions, expert help, custom plans, and quality services for
            growth.
          </p>
        </div>
        <ServicesCard />
      </div>
    </section>
  );
};

export default Services;
