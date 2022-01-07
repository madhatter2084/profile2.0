import "animate.css";
import "./home.css";
import Me from "../assets/mattAndAmanda.jpg";

function Home() {
  return (
    <>
      <div className="content header">
        <div className="header__bg"></div>
        <section className="aboutMe">
          <img
            src={Me}
            className="animate__animated animate__zoomIn"
            id="profilePhoto"
            alt="My wife and I"
          />
          <div className=" animate__animated animate__zoomInLeft">
            <h1>
              Hello, I'm <span className="blue"> MATT</span>
            </h1>
            <p className="">I build responsive websites</p>
          </div>
        </section>
      </div>
    </>
  );
}

export default Home;
