import React from "react";
import styles from "../../styles1.module.css";

export default function project({ item }) {
  const img = require(`../../../src/assets/${item.url}.png`);
  return (
    <div className={styles.ProjectCard}>
      <img className={styles.ProjectImg} src={img} alt=""></img>
      <div className={styles.ProjectText}>
        <h1>{item.title}</h1>
        <h2>{item.lang}</h2>
        <div className={styles.ProjectLinks}>
          <a
            href={item.projectSrc}
            alt="code"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Project
          </a>
          <a
            href={item.codeSrc}
            alt="code"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  );
}
