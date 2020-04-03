import React from "react";
import Image from "../../../src/assets/output-onlinepngtools.png";

export default function home() {
  return (
    <div id="home" className="home">
      <div className="homeTitle">
        <h1>Hi.</h1>
        <h2>I am Amy.</h2>
        <h3>I'm a fullstack developer specialising in React.</h3>
      </div>
      <div className="homeImage">
        <img src={Image} alt="Amy Franz Icon" className="AmyFranzIcon"></img>
      </div>
    </div>
  );
}
