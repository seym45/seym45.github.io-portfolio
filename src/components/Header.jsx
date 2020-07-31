import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import HorizontalMenu from "./HorizontalMenu";

function Header(props) {
  return (
    <div>
      <div className="portfolio-header">
        <div className="title">
          <a href="/">{props.title}</a>
        </div>
        <div className="subtitle">
          <p> {props.subtitle} </p>
        </div>
      </div>
      <Router>
        <HorizontalMenu />
      </Router>
    </div>
  );
}

export default Header;
