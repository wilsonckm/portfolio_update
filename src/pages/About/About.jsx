import React from "react";

import "./About.css";

export default function About() {
  return (
    <>
      <section id="about">
        <div className="container">
          <div
            className="container d-flex flex-column align-items-center justify-content-center"
            style={{ height: "75vh" }}
          >
            <div className="d-flex align-items-center justify-content-center mt-4">
              <h2>
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
              </h2>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
