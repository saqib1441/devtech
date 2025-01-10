"use client";

import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const ContactForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_k0em6n6",
          "template_sixf3rm",
          form.current,
          "nnKq9HPywkQG3qhat"
        )
        .then(
          () => {
            alert("Email sent successfully!");
            form.current?.reset();
          },
          (error) => {
            alert("Failed to send email. Please try again.");
            console.error("EmailJS Error:", error.text);
          }
        );
    }
  };

  return (
    <form
      className="flex flex-col gap-3 md:w-[50%]"
      ref={form}
      onSubmit={sendEmail}
      aria-label="Contact Form"
    >
      <input
        type="text"
        placeholder="Name"
        name="user_name"
        className="bg-primary px-4 rounded-lg py-3 text-white/70"
        aria-label="Your Name"
        required
      />
      <input
        type="email"
        placeholder="Email"
        name="user_email"
        className="bg-primary px-4 rounded-lg py-3 text-white/70"
        aria-label="Your Email"
        required
      />
      <input
        type="text"
        name="subject"
        placeholder="Subject"
        className="bg-primary px-4 rounded-lg py-3 text-white/70"
        aria-label="Subject"
        required
      />
      <textarea
        placeholder="Message"
        rows={8}
        className="bg-primary px-4 rounded-lg py-3 text-white/70 resize-none"
        name="message"
        aria-label="Your Message"
        required
      />
      <button
        type="submit"
        className="bg-primary px-4 rounded-lg py-3 text-white"
        aria-label="Submit Form"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
