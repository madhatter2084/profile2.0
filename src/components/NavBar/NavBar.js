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
        <div
          className={`links animate__animated animate__fadeInDown ${
            show && "nav__black"
          }`}
        >
          <a href="#home" className={`name ${show && "nav__black"}`}>
            Matt Rikard
          </a>
          <a href="#portfolio" className={`${show && "nav__black"}`}>
            Projects
          </a>
          <a href="#resume" className={`${show && "nav__black"}`}>
            Resume
          </a>
        </div>
      </nav>
      <div id="home"></div>
    </>
  );
}

export default NavBar;
