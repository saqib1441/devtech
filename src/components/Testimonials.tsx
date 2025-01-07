import React from "react";
import ClientCard from "./ClientCard";

const Testimonials: React.FC = () => {
  return (
    <section>
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
