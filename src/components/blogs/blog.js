import React from "react";

export default function blog({ blog }) {
  return (
    <div className="blogCard">
      <img src={blog.thumbnail} alt="" />
      <h1>{blog.title}</h1>
      <a href={blog.link} target="_blank" rel="noopener noreferrer">
        Read more
      </a>
    </div>
  );
}
