import React from "react";
import Link from "next/link";
import Logo from "@/assets/logo.svg";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa6";

const Footer: React.FC = () => {
  return (
    <footer>
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
            <Link href="#about">About Us</Link>
            <Link href="#services">Our Services</Link>
            <Link href="#team">Our Team</Link>
            <Link href="#portfolio">Our Works</Link>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center text-center">
          <h1 className="font-semibold text-xl">Services</h1>
          <div className="flex flex-col gap-3 text-white/70">
            <Link href="#services">Web Development</Link>
            <Link href="#services">Graphics Desiging</Link>
            <Link href="#services">UX/UI Desiging</Link>
            <Link href="#services">Video Editing</Link>
            <Link href="#services">SEO & Digital Marketing</Link>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center text-center">
          <h1 className="font-semibold text-xl">Contact Us</h1>
          <div className="flex flex-col gap-3 text-white/70">
            <Link href="https://wa.me/+923467890654" target="_blank">
              +92346-7890654
            </Link>
            <Link href="mailto:officials.devtech@gmail.com" target="_blank">
              officials.devtech@gmail.com
            </Link>
            <div className="text-white flex gap-3 items-center justify-center text-lg">
              <Link href="https://web.facebook.com/profile.php?id=61570881484652">
                <FaFacebook />
              </Link>
              <Link href="https://www.instagram.com/officials.devtech/">
                <FaInstagram />
              </Link>
              <Link href="https://wa.me/+923467890654">
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
