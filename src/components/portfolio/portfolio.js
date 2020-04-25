import React, { Component } from "react";
import styles from "../../styles1.module.css";
import Items from "../../data.js";
import Project from "./project";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBackward, faForward } from "@fortawesome/free-solid-svg-icons";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: Items.items,
      property: Items.items[0],
    };
  }
  render() {
    console.log(this.state);
    return (
      <div id="portfolio">
        <div className={styles.myProjects}>
          <div className={styles.myProjectsTitle}>
            <h1>My Projects</h1>
          </div>
          <div className={styles.projects}>
          <button onClick={this.prevProperty} className={styles.navBtn}>
                <FontAwesomeIcon icon={faBackward} id={styles.linkedInIcon} />
              </button>
            <div className={styles.slides}>
              <Project
                item={this.state.property}
                key={this.state.property.projectSrc}
              />
            </div>
            <button onClick={this.nextProperty} className={styles.navBtn}>
                <FontAwesomeIcon icon={faForward} id={styles.linkedInIcon} />
              </button>
          </div>
        </div>
      </div>
    );
  }

  nextProperty = () => {
    let NewIndex;
    if (this.state.property.index === Items.items.length - 1) {
      NewIndex = 0;
    } else {
      NewIndex = this.state.property.index + 1;
    }
    this.setState({
      property: Items.items[NewIndex],
    });
  };
  prevProperty = () => {
    let NewIndex;
    if (this.state.property.index === 0) {
      NewIndex = Items.items.length - 1;
    } else {
      NewIndex = this.state.property.index - 1;
    }
    this.setState({
      property: Items.items[NewIndex],
    });
  };
}
