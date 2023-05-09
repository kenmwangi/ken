import React from "react";
import Heading from "../Heading";

const Hero = () => {
  return (
    <section className="py-12 sm:py-16">
      <div className="max-w-2xl  lg:mx-0">
        <Heading
          primary
          title="Welcome to my space"
          subtitle="A blog about open-source softwares, my tech journey and personal thoughts."
        />
      </div>
    </section>
  );
};

export default Hero;
