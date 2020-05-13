import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDoubleUp } from "@fortawesome/free-solid-svg-icons";
import "./footer.css";

export default function footer() {
  return (
    <div className="footer">
      <div className="copyRight">
        <p>Copyright © 2020 Amy Franz</p>
      </div>
      <div className="upArrow">
        <a href="#home">
          <FontAwesomeIcon className="upArrowIcon" icon={faAngleDoubleUp} />
        </a>
      </div>
    </div>
  );
}
