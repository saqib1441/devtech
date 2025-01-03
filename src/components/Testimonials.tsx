import Image from "next/image";
import React from "react";
import BackgroundOverlay from "@/assets/overlays/background_overlay.svg";
import ClientCard from "./ClientCard";

const Testimonials: React.FC = () => {
  return (
    <section className="relative bg-black">
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
      <div className="wrapper relative py-20">
        <div className="text-white text-center mb-10 sm:text-left">
          <h1 className="font-semibold text-2xl">Hear from Our Clients</h1>
          <p className="text-white/70">
            Discover the firsthand experiences and success stories shared by our
            clients
          </p>
        </div>
        <ClientCard />
      </div>
    </section>
  );
};

export default Testimonials;
