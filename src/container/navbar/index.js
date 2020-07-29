import React from "react";

function Navbar(props) {
  let menu_options = ["Blogs", "Projects", "Contact", "Resume"];
  let menu_options_jsx = [];
  for (let index = 0; index < menu_options.length; index++) {
    const element = menu_options[index];
    menu_options_jsx.push(
      // <div className="input">
      //   <p>{element}</p>
      //   <span class="border"></span>
      // </div>
      <div class="container">
        <p class="input">{element}</p>
        <span class="border"></span>
      </div>
    );
  }
  return <div className="portfolio-navbar">{menu_options_jsx}</div>;
}
export default Navbar;
