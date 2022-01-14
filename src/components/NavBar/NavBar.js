import "./NavBar.css";

function NavBar() {
  return (
    <>
      <nav className="nav">
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
