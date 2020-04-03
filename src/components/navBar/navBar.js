import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faMediumM
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function navBar() {
  return (
    <div>
      <nav>
        <div className="navBar">
          <ul className="navBarBar">
            <li className="navBarLink">
              <a href="#home">Home</a>
            </li>
            <li className="navBarLink">
              <a href="#aboutMe">About Me</a>
            </li>
            <li className="navBarLink">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="navBarLink">
              <a href="#blog">Blog</a>
            </li>
            <li className="navBarLink">
              <a href="#contactMe">Contact Me</a>
            </li>
          </ul>
        </div>
        <div className="socialBar">
          <ul className="socialBarNav">
            <li className="socialBarLink">
              <a
                href="https://github.com/amyfranz"
                className="github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
            <li className="socialBarLink">
              <a
                href="https://www.linkedin.com/in/amyannfranz/"
                className="linkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </li>
            <li className="socialBarLink">
              <a
                href="https://medium.com/@amy.franz"
                className="medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon icon={faMediumM} />
              </a>
            </li>
          </ul>
        </div>
        <div className="zenGardenNav">
          <FontAwesomeIcon icon={faBars} />
          <ul className="dropDownNav">
            <li className="dropDownLink">style1</li>
            <li className="dropDownLink">style2</li>
            <li className="dropDownLink">style3</li>
          </ul>
        </div>
      </nav>
    </div>
  );
}
