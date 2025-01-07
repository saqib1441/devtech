import React from "react";
import Link from "next/link";
import Logo from "@/assets/logo.svg";
import Image from "next/image";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaWhatsapp,
} from "react-icons/fa6";
import BackgroundOverlay from "@/assets/overlays/background_overlay.svg";

const Footer: React.FC = () => {
  return (
    <footer className="relative bg-black">
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
      <div className="py-20 wrapper text-white grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <div className="flex flex-col items-center text-center gap-5 xl:col-span-2 xl:text-left xl:items-start">
          <div>
            <Image src={Logo} alt="dev-tech" className="w-[200px]" />
          </div>
          <p className="text-white/70">
            we help yo grow your business upto 10X with our creative services
            like Web Development , UI UX Designing, Graphic designig, SEO &
            Digital Marketing. Lets brings something amazing!
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center text-center">
          <h1 className="font-semibold text-xl">Company</h1>
          <div className="flex flex-col gap-3 text-white/70">
            <Link href="#">Home</Link>
            <Link href="#">About Us</Link>
            <Link href="#">Our Services</Link>
            <Link href="#">Our Works</Link>
            <Link href="#">Our Team</Link>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center text-center">
          <h1 className="font-semibold text-xl">Services</h1>
          <div className="flex flex-col gap-3 text-white/70">
            <Link href="#">Web Development</Link>
            <Link href="#">Graphics Desiging</Link>
            <Link href="#">UX/UI Desiging</Link>
            <Link href="#">Video Editing</Link>
            <Link href="#">SEO & Digital Marketing</Link>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center text-center">
          <h1 className="font-semibold text-xl">Contact Us</h1>
          <div className="flex flex-col gap-3 text-white/70">
            <Link href="#">+92346-7890654</Link>
            <Link href="#">officials.devtech@gmail.com</Link>
            <div className="text-white flex gap-3 items-center justify-center">
              <Link href="#">
                <FaLinkedin />
              </Link>
              <Link href="#">
                <FaFacebook />
              </Link>
              <Link href="#">
                <FaInstagram />
              </Link>
              <Link href="#">
                <FaWhatsapp />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
