import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedinIn,
  faMediumM,
} from "@fortawesome/free-brands-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import Image from "../../../src/assets/navLogo.png";
import styles from "../../styles1.module.css";

export default function navBar() {
  return (
    <div className={styles.nav}>
      <a href="#home" className={styles.logo}>
        <img className={styles.navBarImg} src={Image} alt="Logo" />
      </a>
      <nav className={styles.navBar}>
        <ul className={styles.navBarBar}>
          <li className={styles.navBarLink}>
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className={styles.navBarLink}>
            <a href="#aboutMe">About Me</a>
          </li>
          <li className={styles.navBarLink}>
            <a href="#blog">Blog</a>
          </li>
          <li className={styles.navBarLink}>
            <a href="#contactMe">Contact Me</a>
          </li>
        </ul>
      </nav>
      <nav className={styles.socialBar}>
        <ul className={styles.socialBarNav}>
          <li className="socialBarLink">
            <a
              href="https://github.com/amyfranz"
              className="github"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                icon={faGithub}
                className={styles.Icon}
                id={styles.githubIcon}
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
                className={styles.Icon}
                id={styles.linkedInIcon}
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
                className={styles.Icon}
                id={styles.mediumIcon}
              />
            </a>
          </li>
          {/* <li>
            <FontAwesomeIcon
              icon={faBars}
              className={styles.Icon}
              id={styles.menuIcon}
            />
             <ul className="dropDownNav">
              <li className="dropDownLink">style1</li>
              <li className="dropDownLink">style2</li>
              <li className="dropDownLink">style3</li>
            </ul> 
          </li> */}
        </ul>
      </nav>
    </div>
  );
}
