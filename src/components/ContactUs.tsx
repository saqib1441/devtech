import React from "react";
import BackgroundOverlay from "@/assets/overlays/background_overlay.svg";
import Image from "next/image";
import ContactForm from "./ContactForm";
import { FaEnvelope, FaPhone, FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

const ContactUs: React.FC = () => {
  return (
    <section className="bg-black relative" id="contact">
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
      <div className="wrapper py-20">
        <div className="text-white text-center mb-10 sm:text-left">
          <h1 className="font-semibold text-2xl">Contact Us</h1>
          <p className="text-white/70">
            Get in touch with us! Contact our team for inquiries, support, or
            feedback. We&#39;re here to assist you.
          </p>
        </div>
        <div className="text-white md:flex gap-10 md:items-start md:justify-between">
          <div className="bg-primary rounded-2xl py-10 px-5 flex flex-col gap-5 mb-10 md:w-[50%]">
            <div>
              <h1 className="text-2xl font-semibold">Contact Information</h1>
              <p className="text-white/70">
                Contact us today for any questions, support, or feedback. Our
                dedicated team is available via phone, email, or our contact
                form. We&#39;re here to assist you with prompt, professional
                service.
              </p>
            </div>
            <div className="flex items-center gap-3">
              <span>
                <FaPhone />
              </span>
              <p className="text-white/70">+92346-7890654</p>
            </div>
            <Link
              href={"mailto:officials.devtech@gmail.com"}
              target="_blank"
              className="flex items-center gap-3"
            >
              <span>
                <FaEnvelope />
              </span>
              <p className="text-white/70">officials.devtech@gmail.com</p>
            </Link>
            <Link
              href={"https://wa.me/+923467890654"}
              target="_blank"
              className="flex items-center gap-3"
            >
              <FaWhatsapp />
              <p className="text-white/70">+92346-7890654</p>
            </Link>
          </div>
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default ContactUs;
