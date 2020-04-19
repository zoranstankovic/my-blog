import React from "react";
import Social from "./social";

const Hero = () => {
  return (
    <section className="intro">
      <h1 className="intro-title">Hi, I'm Zoran!</h1>
      <p className="intro-body">
        I am web developer, and this blog is my diary about coding, books I
        read, tools I use and much more.
      </p>
      <Social />
    </section>
  );
};

export default Hero;
