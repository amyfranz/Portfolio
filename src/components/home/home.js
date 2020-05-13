import React, { Component } from "react";
import "./home.css";

export default class home extends Component {
  render() {
    return (
      <div id="home" className="home">
        <div className="homeTitle">
          <h1>Hi.</h1>
          <h2>I am Amy.</h2>
          <h3>I am a fullstack developer specialising in React and Rails.</h3>
        </div>
        <div className="homeImage">
          <img
            src={"assets/homeImg.png"}
            alt="Amy Franz Icon"
            className="AmyFranzIcon"
          ></img>
        </div>
      </div>
    );
  }
}
