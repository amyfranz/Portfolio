import React from "react";

export default function blog() {
  return (
    <div className="blog" id="blog">
      <div className="blogTitle">
        <h1>Blogs</h1>
      </div>
      <div className="blogs">
        <ul className="blogList"></ul>
        <li className="blogLink">
          {"GET https://api.medium.com/v1/users/{{userId}}/publications"}
        </li>
        <li className="blogLink">
          {"GET https://api.medium.com/v1/users/{{userId}}/publications"}
        </li>
        <li className="blogLink">
          {"GET https://api.medium.com/v1/users/{{userId}}/publications"}
        </li>
      </div>
    </div>
  );
}
