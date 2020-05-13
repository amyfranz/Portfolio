import React, { Component } from "react";
import Data from "../../data.js";
import Project from "./project";
import "./portfolio.css";

export default class Portfolio extends Component {
  constructor(props) {
    super(props);
    this.state = {
      properties: Data.items,
      index: 0,
    };
  }

  componentDidMount() {
    var interval = setInterval(this.timer, 3000);
    this.setState({ interval: interval });
  }

  render() {
    return (
      <div id="portfolio">
        <div className="myProjectsTitle">
          <h1>My Projects</h1>
        </div>
        <div className="myProjects">
          <div className="Project1">
            <Project
              item={
                this.state.properties[
                  this.state.index === 0
                    ? this.state.properties.length - 1
                    : this.state.index - 1
                ]
              }
              key={1}
            />
          </div>
          <div className="mainProject">
            <div className="projects">
              <Project item={this.state.properties[this.state.index]} key={2} />
            </div>
            <div className="myProjectsBtn">
              {this.state.properties.map((button, index) => (
                <button
                  className={`roundBtn ${
                    index === this.state.index ? "selected" : null
                  }`}
                  value={index}
                  key={index}
                  onClick={() => this.setState({ index })}
                />
              ))}
            </div>
          </div>
          <div className="Project3">
            <Project
              item={
                this.state.properties[
                  this.state.index === this.state.properties.length - 1
                    ? 0
                    : this.state.index + 1
                ]
              }
              key={3}
            />
          </div>
        </div>
      </div>
    );
  }
  timer = () => {
    const newIndex =
      this.state.index < this.state.properties.length - 1
        ? this.state.index + 1
        : 0;
    this.setState({ index: newIndex });
  };
}
