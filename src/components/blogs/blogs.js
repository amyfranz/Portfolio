import React, { Component } from "react";
import Blog from "./blog";
import "./blogs.css";

export default class blogs extends Component {
  constructor() {
    super();
    this.state = { blogs: null };
  }
  componentDidMount() {
    fetch(
      "https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@amy.franz"
    )
      .then((response) => response.json())
      .then((result) => {
        this.setState({ blogs: result.items });
      })
      .catch((error) => console.log("error", error));
  }
  render() {
    return (
      <div id="blog" className="blogs">
        <div className="blogTitle">
          <h1>Blogs</h1>
        </div>
        <div className="blogContainer style-1">
          {this.state.blogs
            ? this.state.blogs.map((item, index) => (
                <Blog blog={item} key={index} />
              ))
            : null}
        </div>
        <div className="aboutMeCTA">
          <h2>
            You can get my{" "}
            <a
              href="https://docs.google.com/document/d/1bis_z1MODpeD1PmyuO0Qrufkz81Gn0ii9qvFKrGlEVY/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              resume
            </a>{" "}
            here, better yet, why not <a href="#contactMe">get in touch</a>?
          </h2>
        </div>
      </div>
    );
  }
}
