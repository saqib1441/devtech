import React from "react";
import Link from "next/link";

const Footer: React.FC = () => {
  return (
    <footer>
      <div className="py-20 wrapper text-white grid gap-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        <div className="flex flex-col items-center text-center gap-5 xl:col-span-2 xl:text-left xl:items-start">
          <h1 className="text-2xl font-bold italic">
            <span className="text-main">DEV</span>TECH
          </h1>
          <p className="text-white/70">
            we help yo grow your business upto 10X with our creative services
            like Web Development , UI UX Designing, Graphic designig, SEO &
            Digital Marketing. Lets brings something amazing!
          </p>
        </div>
        <div className="flex flex-col gap-5 items-center text-center">
          <h1 className="font-semibold text-xl">Company</h1>
          <div className="flex flex-col gap-3 text-white/70">
            <Link href="#">About Us</Link>
            <Link href="#">Our Services</Link>
            <Link href="#">Our Works</Link>
            <Link href="#">Career</Link>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center text-center">
          <h1 className="font-semibold text-xl">Resources</h1>
          <div className="flex flex-col gap-3 text-white/70">
            <Link href="#">Free EBooks</Link>
            <Link href="#">Development Tutorial</Link>
            <Link href="#">How to - Blog</Link>
            <Link href="#">Youtube Playlist</Link>
          </div>
        </div>
        <div className="flex flex-col gap-5 items-center text-center">
          <h1 className="font-semibold text-xl">Others</h1>
          <div className="flex flex-col gap-3 text-white/70">
            <Link href="#">Customer Support</Link>
            <Link href="#">Delivery Details</Link>
            <Link href="#">Terms and Conditions</Link>
            <Link href="#">Privacy Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
