import React from "react";
import TeamCard from "./TeamCard";

const Team: React.FC = () => {
  return (
    <section id="team">
      <div className="wrapper py-20">
        <div className="text-white text-center mb-10 sm:text-left">
          <h1 className="font-semibold text-2xl">Team Behind Our Success</h1>
          <p className="text-white/70">
            Our diverse team of passionate individuals is united by a common
            goal
          </p>
        </div>
        <TeamCard />
      </div>
    </section>
  );
};

export default Team;
