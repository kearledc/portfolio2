import React from "react";

export default () => (
  <div className="projects--container container">
    <div className="projects--card_container">
      <h2>Projects Deployed</h2>
      <div className="projects--deployed_container">
        <div
          className="project__card"
          data-aos="zoom-in"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
        >
          <img
            src="/images/Indecision.png"
            alt=""
            className="projects__image"
          />
          <div className="project__hover-container">
            <h3 className="project__name">Indecision App</h3>
            <p className="project__description">
              A Chooser App created using state management
            </p>
            <a
              href="https://kearledc.github.io/indecisionfood"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="project__hover-button">Check it out!</button>
            </a>
          </div>
        </div>
        <div
          className="project__card"
          data-aos="flip-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
        >
          <img
            src="/images/expensifyapp.png"
            alt=""
            className="projects__image expensify"
          />
          <div className="project__hover-container">
            <h3 className="project__name">Expensify App</h3>
            <p className="project__description">
              An App Created using MongoDB, ExpressJS, ReactJS, NodeJS and
              GraphQL.
            </p>
            <a
              href="https://kearledcexpensify.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="project__hover-button">Check it out!</button>
            </a>
          </div>
        </div>
        <div
          className="project__card"
          data-aos="fade-down"
          data-aos-easing="ease-in-out"
          data-aos-duration="1000"
        >
          <img
            src="/images/Trivia.png"
            alt=""
            className="projects__image triviaImage"
          />
          <div className="project__hover-container">
            <h3 className="project__name">Trivia App</h3>
            <p className="project__description">
              A Quiz Trivia Application Made Using React TypeScript
            </p>
            <a
              href="https://triviaquizkearledc.netlify.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="project__hover-button">Check it out!</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
);
