import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import styles from "../../styles1.module.css";

export default function footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.copyRight}>
        <p>Copyright © 2020 Amy Franz</p>
      </div>
      <div className={styles.upArrow}>
        <a href="#home">
          <FontAwesomeIcon
            className={styles.upArrowIcon}
            icon={faAngleDoubleUp}
          />
        </a>
      </div>
    </div>
  );
}
