import React, { useEffect } from "react";

import "./About.css";

export default function About() {
  return (
    <div
      className="d-flex align-items-center justify-content-center"
      style={{ height: "80vh" }}
    >
      <div className="container text-left px-5 text">
        <h2>
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
