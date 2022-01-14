import "animate.css";
import "./home.css";
import Me from "../assets/profilePic.png";

function Home() {
  return (
    <>
      <div className="content banner">
        <section className="aboutMe">
          <img
            src={Me}
            className="animate__animated animate__zoomIn"
            id="profilePhoto"
            alt="Matt Rikard"
          />
          <div className=" animate__animated animate__zoomInLeft black__bg">
            <h1 className="black__bg">
              Hello, I'm <span className="blue"> MATT</span>
            </h1>
            <p className="black__bg">I build responsive websites</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
