import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <div>
      <div className="navigation">
      <div className="nav-bar">
        <a href="/" className="app-logo">
          Sukoon
        </a>
        <a href="https://www.google.com" className="nav-links">
          Home
        </a>
        <a href="https://www.google.com" className="nav-links">
          About
        </a>
        <a href="https://www.google.com" className="nav-links">
          Services
        </a>
        <a href="https://www.google.com" className="nav-links">
          Contact
        </a>
      </div>
      <div className="auth">
        <a href="www.google.com" className="auth-button">
          Login
        </a>
        <a href="www.google.com" className="auth-button">
          Sign Up
        </a>
      </div>
      </div>
    </div>
  );
}

export default NavBar;
