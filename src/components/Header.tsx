import Image from "next/image";
import React from "react";
import Logo from "@/assets/logo.svg";
import { PiMouseMiddleClickThin } from "react-icons/pi";
import { HiArrowLongDown } from "react-icons/hi2";
import HeaderCardImg1 from "@/assets/header/header_card_img_1.svg";
import HeaderCardImg2 from "@/assets/header/header_card_img_2.svg";
import { FaClock } from "react-icons/fa6";

const Header: React.FC = () => {
  return (
    <header className="bg-headerOverlay bg-cover bg-center bg-no-repeat">
      <div className="wrapper py-20">
        <div className="text-white flex flex-col items-center text-center gap-3">
          <div>
            <h1 className="font-bold text-[40px] md:text-5xl lg:text-6xl xl:text-7xl">
              Welcome to
            </h1>
            <Image
              src={Logo}
              alt="dev-tech-logo"
              className="w-60 mx-auto md:w-80 lg:w-[450px] -mt-2"
            />
          </div>
          <p className="sm:w-[550px] text-white/70">
            we help yo grow your business upto 10X with our creative services
            like Web Development , UI UX Designing, Graphic designig, SEO &
            Digital Marketing. Lets brings something amazing!
          </p>
        </div>
        <div className="text-white flex items-center flex-col mt-10">
          <span className="bg-primary p-3 rounded-full text-2xl">
            <PiMouseMiddleClickThin />
          </span>
          <span className="text-4xl">
            <HiArrowLongDown />
          </span>
        </div>
        <div className="text-white grid gap-10 mt-5 md:grid-cols-2 place-items-center lg:grid-cols-3">
          <div className="border-2 border-main px-5 py-10 bg-primary rounded-3xl sm:w-[450px] md:w-auto cursor-pointer sm:hover:scale-105 transition-all duration-300">
            <div
              className={`bg-main p-5 rounded-full h-[70px] w-[70px] flex items-center justify-center`}
            >
              <Image
                src={HeaderCardImg1}
                alt={`dev-tech-digital-solution`}
                className={`w-full`}
              />
            </div>
            <h1 className="font-[500] mt-3 mb-2 text-lg">Digital Solution</h1>
            <p className="text-white/70">
              Digital solutions streamline processes, enhance productivity, and
              foster innovation through technology-driven tools and platforms.
            </p>
          </div>
          <div className="border-2 border-main px-5 py-10 rounded-3xl bg-main sm:w-[450px] md:w-auto cursor-pointer sm:hover:scale-105 transition-all duration-300">
            <div
              className={`bg-white p-5 rounded-full h-[70px] w-[70px] flex items-center justify-center text-main`}
            >
              <span className="text-[40px]">
                <FaClock />
              </span>
            </div>
            <h1 className="font-[500] mt-3 mb-2 text-lg">
              Timely and Efficient Delivery
            </h1>
            <p className="text-white/70">
              Timely and efficient delivery ensures prompt service, meeting
              customer expectations while optimizing resource management and
              workflow.
            </p>
          </div>
          <div className="border-2 border-main px-5 py-10 bg-primary rounded-3xl sm:w-[450px] md:w-auto cursor-pointer sm:hover:scale-105 transition-all duration-300">
            <div
              className={`bg-main p-5 rounded-full h-[70px] w-[70px] flex items-center justify-center`}
            >
              <Image
                src={HeaderCardImg2}
                alt={`dev-tech-innovative-approach`}
                className={`w-full`}
              />
            </div>
            <h1 className="font-[500] mt-3 mb-2 text-lg">
              Innovative Approach
            </h1>
            <p className="text-white/70">
              An innovative approach combines creative thinking and unique
              strategies to solve problems and advance meaningful progress.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
