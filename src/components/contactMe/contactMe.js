import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import "./contactMe.css";

export default function contactMe() {
  return (
    <div className="contactMe" id="contactMe">
      <div className="contactMeCard">
        <div className="contactMeTitle">
          <h1>Contact Me</h1>
        </div>
        <div className="contactMeInfo">
          <p className="email">
            <FontAwesomeIcon icon={faEnvelope} className="emailIcon" />
            Email:{" "}
            <a
              href="mailto:amy.franz@gmai.com?subject=Contact About Portfolio"
              className="emailLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              amy.franz@gmail.com
            </a>
          </p>
          <p className="linkedIn">
            <FontAwesomeIcon icon={faLinkedinIn} className="linkedInIcon" />
            Linkedin:{" "}
            <a
              href="https://www.linkedin.com/in/amyannfranz/"
              className="linkedInLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              @AmyAnnFranz
            </a>
          </p>
          <p className="github">
            <FontAwesomeIcon icon={faGithub} className="gitHubIcon" />
            GitHub:{" "}
            <a
              href="https://github.com/amyfranz"
              className="githubLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              @amyfranz
            </a>
          </p>
          <p className="github">
            <FontAwesomeIcon icon={faMediumM} className="mediumIcon" />
            Medium:{" "}
            <a
              href="https://medium.com/@amy.franz"
              className="mediumLink"
              target="_blank"
              rel="noopener noreferrer"
            >
              @amy.franz
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
