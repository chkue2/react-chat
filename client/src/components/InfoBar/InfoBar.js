import React from "react";

import closeIcon from "../../assets/img/icon/close.png";

import "./infoBar.css";

function InfoBar() {
  return (
    <div className="info-bar">
      <div className="left-inner-container">
        <h3>room</h3>
      </div>
      <div className="right-inner-container">
        <a href="/">
          <img src={closeIcon} alt="close icon" />
        </a>
      </div>
    </div>
  );
}

export default InfoBar;
