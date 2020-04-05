import Image from "../../../src/assets/homeImg.png";
import React, { Component } from "react";
import styles from "../../styles1.module.css";

export default class home extends Component {
  render() {
    return (
      <div id="home" className={styles.home}>
        <div className={styles.homeTitle}>
          <h1>Hi.</h1>
          <h2>I am Amy.</h2>
          <h3>I'm a fullstack developer specialising in React.</h3>
        </div>
        <div className={styles.homeImage}>
          <img
            src={Image}
            alt="Amy Franz Icon"
            className={styles.AmyFranzIcon}
          ></img>
        </div>
      </div>
    );
  }
}
