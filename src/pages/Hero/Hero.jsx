import "./Hero.css";
import React, { useEffect } from "react";
import { gsap } from "gsap";
import SplitType from "split-type";

export default function Hero() {
  useEffect(() => {
    const heroText = new SplitType("#hero-text");
    gsap.to(".char", {
      y: 0,
      stagger: 0.075,
      delay: 0.2,
      duration: 0.1,
    });
  }, []);

  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "80vh" }}
    >
      <h1 id="hero-text">Wilson Chan</h1>
    </div>
  );
}
