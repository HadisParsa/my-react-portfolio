///
import React from "react";
import "./style/Header.css";

function Header() {
  return (
    <header>
      <div className="page-title">
        <h1>Hadis Parsa</h1>
        <p>DESIGNER & DEVELOPER</p>
      </div>

      <div className="navbar">
        <a href="#about-me" class="nav-button">
          About Me
        </a>

        <a href="#resume" class="nav-button">
          Resume
        </a>

        <a href="#my-work" class="nav-button">
          My Portfolio
        </a>

        <a href="#contact-me" class="nav-button">
          Contact
        </a>

      </div>
    </header>
  );
}

export default Header;
