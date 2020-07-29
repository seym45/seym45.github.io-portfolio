import React from "react";

import Navbar from "../navbar";
function Header(props) {
  return (
    <div className="portfolio-header">
      <div className="title">
        <p> {props.title} </p>
      </div>
      <div className="subtitle">
        <p> {props.subtitle} </p>
      </div>
      <div className="navbar">
        <Navbar name="asd"></Navbar>
      </div>
    </div>
  );
}

export default Header;
