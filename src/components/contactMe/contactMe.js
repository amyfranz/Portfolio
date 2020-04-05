import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles1.module.css";

export default function contactMe() {
  return (
    <div className={styles.contactMe} id="contactMe">
      <div className={styles.contactMeTitle}>
        <h1>Contact Me</h1>
      </div>
      <div className={styles.contactMeInfo}>
        <p className={styles.linkedIn}>
          <FontAwesomeIcon
            icon={faLinkedinIn}
            className={styles.linkedInIcon}
          />
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
        <p className={styles.email}>
          <FontAwesomeIcon icon={faEnvelope} className={styles.emailIcon} />
          Email:{" "}
          <a
            href="mailto:amy.franz@gmai.com?subject=Contact About Portfolio"
            className={styles.emailLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            amy.franz@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
}
