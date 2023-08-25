import React from "react";

import "./About.css";

export default function About() {
  return (
    <>
      <div
        id="about"
        className="container"
        style={{ Height: "60vh", marginTop: "10vh" }}
      >
        <h2>About Me</h2>
        <div className="container" style={{ margin: "40px" }}>
          <div className="d-flex align-items-center justify-content-sm-center">
            <h3>
              Hello there! Wilson here. I am a software engineer based in NYC
              with a background in physical therapy and passion for health and
              fitness.
              <br />
              <br />
              Some of the tools I like working with are--
              <br />
              <br />
              <p>
                React, Javascript, Bootstrap, Firebase, MongoDB, Express, Node
              </p>
              <br />
              Hope you enjoy taking a look at my projects down below and feel
              free to contact me if you have any questions!
            </h3>
          </div>
        </div>
      </div>
    </>
  );
}
