import React, { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="center-container">
          <p style={{ fontWeight: 500 }}>Contact Me</p>
          <p>seym45[at]gmail[dot]com</p>
          <a href="https://Seym.dev">https://Seym.dev</a>
          {/* <p>Call? Shoot an email instead</p> */}
          <p>Want a quick response? Skype me @seym45 ! </p>
        </div>
      </div>
    );
  }
}

export default Contact;
