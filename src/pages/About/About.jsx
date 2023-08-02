import React, { useEffect } from "react";
import { gsap } from "gsap";
import "./About.css";
import { ScrollTrigger } from "gsap/all";
import SplitType from "split-type";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  useEffect(() => {
    const aboutText = new SplitType("#about-text");
    aboutText.lines.forEach((target) => {
      gsap.to(target, {
        backgroundPositionX: 0,
        ease: "none",
        scrollTrigger: {
          trigger: target,
          markers: true,
          scrub: 1,
          start: "top center",
          end: "bottom center",
        },
      });
    });
  }, []);

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "80vh" }}
    >
      <div className="container text-left px-5 text">
        <h2 id="about-text">
          Hello there! Wilson here. I am a software engineer based in NYC with a
          background in physical therapy and passion for health and fitness.
          <br />
          <br />
          Hope you enjoy taking a look at my projects down below and feel free
          to contact me if you have any questions!
        </h2>
      </div>
    </div>
  );
}
