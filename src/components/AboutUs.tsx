import Image from "next/image";
import React from "react";
import AboutImg from "@/assets/about_us.svg";
import { FaCheck } from "react-icons/fa6";
import Link from "next/link";

const AboutUs: React.FC = () => {
  return (
    <section className="py-20" id="about">
      <div className="wrapper text-white flex flex-col gap-10 md:flex-row md:items-center">
        <div className="md:w-[50%]">
          <Image
            src={AboutImg}
            alt="dev-tech-about-us"
            className="w-full sm:w-[500px] mx-auto md:w-[400px]"
          />
        </div>
        <div className="flex flex-col gap-5 md:w-[50%]">
          <div>
            <h1 className="text-xl mb-1 text-main font-bold md:text-2xl">
              Wondering who we are?
            </h1>
            <p className="text-white/70 sm:w-[580px] md:w-auto">
              We are more than just a team of experts; we are passionate digital
              enthusiasts driven by the art of innovation. Established with a
              vision to reshape digital landscapes, we are your partners in
              turning possibilities into captivating realities.
            </p>
          </div>
          <div className="grid gap-3">
            <div className="flex gap-2 xl:items-center">
              <span className="text-main inline-block mt-1 xl:mt-0">
                <FaCheck />
              </span>
              <p>Creating visually appealing and engaging ideas.</p>
            </div>
            <div className="flex gap-2 xl:items-center">
              <span className="text-main inline-block mt-1 xl:mt-0">
                <FaCheck />
              </span>
              <p>Seamless web and app engineering to empower you business.</p>
            </div>
            <div className="flex gap-2 xl:items-center">
              <span className="text-main inline-block mt-1 xl:mt-0">
                <FaCheck />
              </span>
              <p>
                Providing solutions thats increases your overall business
                growth.
              </p>
            </div>
          </div>
          <div className="flex items-center gap-5">
            <Link
              href="#contact"
              className="border-2 border-main px-5 py-2 rounded-full"
            >
              Contact Us
            </Link>
            <Link href="#portfolio" className="bg-main px-5 py-2 rounded-full">
              Portfolio
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
