import "./Footer.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div className="social">
        <a
          href="https://github.com/madhatter2084"
          className="black__bg"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaGithub className="social__icon" />
        </a>
        <a
          href="https://www.linkedin.com/in/matthew-rikard-6bbb1893/"
          className="black__bg"
          target="_blank"
          rel="noreferrer noopener"
        >
          <FaLinkedin className="social__icon" />
        </a>
        <a href="mailto:matthew.rikard@gmail.com" className="black__bg">
          <FaEnvelope className="social__icon" />
        </a>
      </div>
    </>
  );
}

export default Footer;
