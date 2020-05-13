import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./navBar.css";

export default class navBar extends Component {
  constructor() {
    super();
    this.state = { hamburgerClicked: false };
  }
  render() {
    return (
      <div>
        <div className="nav">
          <a href="#home" className="logo">
            <img src={"assets/navLogo.png"} alt="Logo" />
          </a>
          <div className="HamburgerMenu" onClick={this.HamburgerClickedToggle}>
            <FontAwesomeIcon icon={faBars} />
          </div>
          <ul className={`navBarBar`}>
            <li className="navBarLink">
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="navBarLink">
              <a href="#aboutMe">About Me</a>
            </li>
            <li className="navBarLink">
              <a href="#blog">Blog</a>
            </li>
            <li className="navBarLink">
              <a href="#contactMe">Contact Me</a>
            </li>
          </ul>
          <ul className="socialBarNav">
            <li className="socialBarLink">
              <a
                href="https://github.com/amyfranz"
                className="github"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="Icon"
                  id="githubIcon"
                />
              </a>
            </li>
            <li className="socialBarLink">
              <a
                href="https://www.linkedin.com/in/amyannfranz/"
                className="linkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faLinkedinIn}
                  className="Icon"
                  id="linkedInIcon"
                />
              </a>
            </li>
            <li className="socialBarLink">
              <a
                href="https://medium.com/@amy.franz"
                className="medium"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FontAwesomeIcon
                  icon={faMediumM}
                  className="Icon"
                  id="mediumIcon"
                />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <ul
            className={`SideMenu ${
              !this.state.hamburgerClicked ? "hidden" : null
            }`}
          >
            <li className="navBarLink" onClick={this.HamburgerClickedFalse}>
              <a href="#portfolio">Portfolio</a>
            </li>
            <li className="navBarLink" onClick={this.HamburgerClickedFalse}>
              <a href="#aboutMe">About Me</a>
            </li>
            <li className="navBarLink" onClick={this.HamburgerClickedFalse}>
              <a href="#blog">Blog</a>
            </li>
            <li className="navBarLink" onClick={this.HamburgerClickedFalse}>
              <a href="#contactMe">Contact Me</a>
            </li>
          </ul>
        </div>
      </div>
    );
  }

  HamburgerClickedFalse = () => {
    this.setState({ hamburgerClicked: false });
  };

  HamburgerClickedToggle = () => {
    this.setState({ hamburgerClicked: !this.state.hamburgerClicked });
  };
}
