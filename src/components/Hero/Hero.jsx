import "./Hero.css";
import React, { useEffect } from "react";

import { gsap } from "gsap";

export default function Hero() {
  useEffect(() => {
    gsap.to(".char", {
      y: 0,
      stagger: 0.05,
      delay: 0.2,
      duration: 0.1,
    });
  }, []);

  return (
    <div>
      <h1>Wilson Chan</h1>
      <div className="position-absolute top-50 start-50 translate-middle">
        <h1 className="hero-title">
          {Array.from("Software Engineer").map((char, index) => (
            <span key={index} className="char">
              {char}
            </span>
          ))}
        </h1>
        <h1 className="hero-title">
          {Array.from("Physical Therapist").map((char, index) => (
            <span key={index} className="char">
              {char}
            </span>
          ))}
        </h1>
      </div>
    </div>
  );
}
