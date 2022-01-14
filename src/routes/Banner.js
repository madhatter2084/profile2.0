import "animate.css";
import "./Banner.css";
import Me from "../assets/profilePic.png";

function Banner() {
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
          <div className="black__bg">
            <h1 className=" animate__animated animate__zoomInLeft black__bg">
              Hello, I'm{" "}
              <span className="blue animate__animated animate__zoomInLeft">
                {" "}
                MATT
              </span>
            </h1>
            <p className="black__bg animate__animated animate__zoomInRight">
              I build responsive websites
            </p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Banner;
