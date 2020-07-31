import React from "react";
import { BrowserRouter as Route, Switch, NavLink } from "react-router-dom";
import Resume from "../container/resume";
import Projects from "../pages/Projects";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
function HorizontalMenu() {
  let menu_options = ["Projects", "Contact", "Resume"];
  let menu_options_jsx = [];
  let element = "Home";

  // Todo: move the agonstic declration inside loop below
  // Aim is to highlight the `Home` option from menu for path '/'
  menu_options_jsx.push(
    <div className="container" key={element}>
      <NavLink
        exact
        isActive={(match, location) => {
          return location.pathname === "/" || match;
        }}
        className="emni-class options"
        activeClassName="active-class-my"
        to={element.toLowerCase()}
      >
        {element}
      </NavLink>
      <span className="border"></span>
    </div>
  );
  for (let index = 0; index < menu_options.length; index++) {
    const element = menu_options[index];
    menu_options_jsx.push(
      <div className="container" key={element}>
        <NavLink
          exact
          className="emni-class options"
          activeClassName="active-class-my"
          to={element.toLowerCase()}
        >
          {element}
        </NavLink>
        <span className="border"></span>
      </div>
    );
  }

  return (
    <div>
      <div className="portfolio-navbar">{menu_options_jsx}</div>
      <Switch>
        <Route path="/Home">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects />
        </Route>
        <Route path="/contact">
          <Contact />
        </Route>
        <Route path="/resume">
          <Resume />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
  );
}
export default HorizontalMenu;
