import React from "react";

export default function project({ item }) {
  return (
    <div className="ProjectCard">
      <img className="ProjectImg" src={`assets/${item.url}.png`} alt=""></img>
      <div className="ProjectText">
        <h1>{item.title}</h1>
        <h2>{item.lang}</h2>
        <div className="ProjectLinks">
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
