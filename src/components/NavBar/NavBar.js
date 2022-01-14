import "./NavBar.css";

function NavBar() {
  return (
    <>
      <nav className="nav">
        <div className="links black__bg animate__animated animate__fadeInDown">
          <a href="#home" className="name black__bg">
            Matt Rikard
          </a>
          <a href="#portfolio" className="black__bg">
            Projects
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
