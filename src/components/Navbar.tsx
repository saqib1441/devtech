"use client";

import Image from "next/image";
import React, { useEffect, useRef } from "react";
import Logo from "@/assets/logo.svg";
import Link from "next/link";
import { FaBarsStaggered, FaXmark } from "react-icons/fa6";
import { BiRightTopArrowCircle } from "react-icons/bi";

const Navbar: React.FC = () => {
  const navbar = useRef<HTMLDivElement | null>(null);
  const nav = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 70) {
        nav.current?.classList?.add("fixed");
      } else if (window.scrollY <= 70) {
        nav.current?.classList?.remove("fixed");
      }
    });
  }, []);

  const navHandler = () => {
    navbar?.current?.classList?.toggle("translate-x-[100%]");
  };

  return (
    <nav
      className="bg-primary py-4 pr-3 pl-1 lg:pr-0 lg:pl-0 w-full z-50"
      ref={nav}
    >
      <div className="wrapper flex items-center justify-between">
        <Link href="#">
          <Image src={Logo} alt="dev-tech-logo" className="w-32" />
        </Link>
        <div
          className="fixed top-0 left-0 w-full h-full z-50 text-white flex items-center justify-center bg-primary flex-col gap-5 translate-x-[100%] transition-all duration-500 lg:static lg:translate-x-0 lg:flex-row lg:w-auto font-[500]"
          ref={navbar}
        >
          <span
            className="absolute top-5 right-4 p-1 bg-white rounded text-primary text-lg cursor-pointer lg:hidden"
            onClick={navHandler}
          >
            <FaXmark />
          </span>
          <Link
            href="/"
            onClick={navHandler}
            className="hover:text-main transition-all duration-300"
          >
            Home
          </Link>
          <Link
            href="/"
            onClick={navHandler}
            className="hover:text-main transition-all duration-300"
          >
            About
          </Link>
          <Link
            href="/"
            onClick={navHandler}
            className="hover:text-main transition-all duration-300"
          >
            Services
          </Link>
          <Link
            href="/"
            onClick={navHandler}
            className="hover:text-main transition-all duration-300"
          >
            Team
          </Link>
          <Link
            href="/"
            onClick={navHandler}
            className="hover:text-main transition-all duration-300"
          >
            Portfolio
          </Link>
          <Link
            href="/"
            className="bg-main text-white px-4 py-2 rounded-full flex items-center gap-1 border-2 border-transparent hover:bg-transparent transition-all duration-300 hover:border-main"
            onClick={navHandler}
          >
            <span>Contact Us</span>
            <span className="text-lg">
              <BiRightTopArrowCircle />
            </span>
          </Link>
        </div>
        <div className="flex items-center gap-2 lg:hidden" onClick={navHandler}>
          <span className="text-white cursor-pointer text-lg">
            <FaBarsStaggered />
          </span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
