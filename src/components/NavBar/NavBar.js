import "./NavBar.css";

function NavBar() {
  return (
    <>
      <nav className="nav">
        <div className="links black__bg">
          <a href="#home" className="name black__bg">
            Matt Rikard
          </a>
          <a href="#portfolio" className="black__bg">
            Portfolio
          </a>
          <a href="#contact" className="black__bg">
            Contact
          </a>
          <a href="#resume" className="black__bg">
            Resume
          </a>
        </div>
      </nav>
      <div id="home"></div>
    </>
  );
}

export default NavBar;
