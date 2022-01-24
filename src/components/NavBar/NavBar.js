import "./NavBar.css";
import React, { useEffect, useState } from "react";

function NavBar() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 350) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <>
      <nav className={`nav ${show && "nav__black"}`}>
        <div className="links animate__animated animate__fadeInDown">
          <a href="#home" className="name">
            Matt Rikard
          </a>
          <a href="#portfolio">Projects</a>
          <a href="#resume">Resume</a>
        </div>
      </nav>
      <div id="home"></div>
    </>
  );
}

export default NavBar;
