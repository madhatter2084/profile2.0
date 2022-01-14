import "./Footer.css";
import git from "./github.png";

function Footer() {
  return (
    <>
      <div className="social">
        <button className="social__btn">
          <image src={git} className="social__icon"></image>
        </button>
        <button className="social__btn">
          <image className="social__icon"></image>
        </button>
        <button className="social__btn">
          <image className="social__icon"></image>
        </button>
      </div>
    </>
  );
}

export default Footer;
