import React from "react";
import "../styles/NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import { useAppContext } from "../context/AppProvider";

function Navbar() {
  const { toggle, handleToggle, handleClick } = useAppContext();
  return (
    <header id="header">
      <nav className="navbar">
        <ul className={`${toggle ? "navbar__links active" : "navbar__links"}`}>
          <li onClick={() => handleClick()}>
            <a href="#about">About</a>
          </li>
          <li onClick={() => handleClick()}>
            <a href="#work">Work</a>
          </li>
          <li onClick={() => handleClick()}>
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="hamburger" onClick={() => handleToggle()}>
          {toggle ? <FaTimes /> : <FaBars />}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
