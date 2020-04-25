import Image from "../../../src/assets/homeImg.png";
import React, { Component } from "react";
import styles from "../../styles1.module.css";

export default class home extends Component {
  render() {
    return (
      <div id="home" className={styles.home}>
        <div className={styles.homeTitle}>
          <h1>
            <ul>
              <li>H</li>
              <li>i</li>
              <li>.</li>
            </ul>
          </h1>
          <h2>
            <ul>
              <li>I</li>
              <li> </li>
              <li>a</li>
              <li>m</li>
              <li> </li>
              <li>A</li>
              <li>m</li>
              <li>y</li>
              <li>.</li>
            </ul>
          </h2>
          <h3>
            <ul>
              <li>I</li>
              <li> </li>
              <li>a</li>
              <li>m</li>
              <li> </li>
              <li>a</li>
              <li> </li>
              <li>f</li>
              <li>u</li>
              <li>l</li>
              <li>l</li>
              <li>s</li>
              <li>t</li>
              <li>a</li>
              <li>c</li>
              <li>k</li>
              <li> </li>
              <li>d</li>
              <li>e</li>
              <li>v</li>
              <li>e</li>
              <li>l</li>
              <li>o</li>
              <li>p</li>
              <li>e</li>
              <li>r</li>
              <li> </li>
              <li>s</li>
              <li>p</li>
              <li>e</li>
              <li>c</li>
              <li>i</li>
              <li>a</li>
              <li>l</li>
              <li>i</li>
              <li>s</li>
              <li>i</li>
              <li>n</li>
              <li>g</li>
              <li> </li>
              <li>i</li>
              <li>n</li>
              <li> </li>
              <li>r</li>
              <li>e</li>
              <li>a</li>
              <li>c</li>
              <li>t</li>
              <li> </li>
              <li>a</li>
              <li>n</li>
              <li>d</li>
              <li> </li>
              <li>r</li>
              <li>a</li>
              <li>i</li>
              <li>l</li>
              <li>s</li>
              <li>.</li>
            </ul>
          </h3>
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
