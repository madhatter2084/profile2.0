import "./portfolio.css";
import binance from "../assets/binance.jpg";
import oBrien from "../assets/oBrienConstruction.jpg";
import portfolio from "../assets/portfolio1_0.jpg";
import quarantine from "../assets/quarantineLean.jpg";
import travidWallet from "../assets/travidWallet.jpg";
import quizBuilder from "../assets/quizBuilder.jpg";
import pwGenerator from "../assets/pwGenerator.jpg";
import weatherApp from "../assets/weatherApp.jpg";

function Portfolio() {
  return (
    <>
      <div id="portfolio"></div>
      <h1 className="portfolio__title">Projects</h1>
      <section className="portfolio animate__animated animate__pulse">
        <div className="portfolio__tile">
          <img className="screenShot" src={binance} alt="binance screenshot" />
          <h1 className="tile__title">Binance</h1>
          <p>
            Tracking stocks with third party api's. Built with
            HTML/CSS/JavaScript/Bootstrap.
          </p>
          <div className="links">
            <a
              href="https://github.com/madhatter2084/Binance"
              target="_blank"
              rel="noreferrer"
              className="portfolioLinks"
            >
              GitHub
            </a>
            <hr></hr>
            <a
              href="https://tjaved12.github.io/Binance/"
              target="_blank"
              rel="noreferrer"
              className="portfolioLinks"
            >
              Binance
            </a>
          </div>
        </div>
        <div className="portfolio__tile">
          <img
            className="screenShot"
            src={oBrien}
            alt="Obriens construction screenshot"
          />
          <h1 className="tile__title">O'Brien's Construction</h1>
          <p>
            Single page contact site for a local construction company. Built
            with React.
          </p>
          <div className="links">
            <a
              href="https://github.com/madhatter2084/templatetest05042021"
              target="_blank"
              rel="noreferrer"
              className="portfolioLinks"
            >
              GitHub
            </a>
            <hr></hr>
            <a
              href="https://obriensconstruction.com/"
              target="_blank"
              rel="noreferrer"
              className="portfolioLinks"
            >
              O'Brien's
            </a>
          </div>
        </div>
        <div className="portfolio__tile">
          <img
            className="screenShot"
            src={travidWallet}
            alt="travid wallet screenshot"
          />
          <h1 className="tile__title">Travid Wallet</h1>
          <p>
            Covid tracking app built with React, Bootstrap, MongoDB, Heroku,
            Node.js
          </p>
          <div className="links">
            <a
              href="https://github.com/madhatter2084/travelorsApp"
              target="_blank"
              rel="noreferrer"
              className="portfolioLinks"
            >
              GitHub
            </a>
            <hr></hr>
            <a
              href="https://still-waters-92313.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="portfolioLinks"
            >
              TravidWallet
            </a>
          </div>
        </div>
        <div className="portfolio__tile">
          <img
            className="screenShot"
            src={quarantine}
            alt="quarantineLean screenshot"
          />
          <h1 className="tile__title">QuarantineLean</h1>
          <p>
            Meal planner built with HTML, CSS, MySQL, Express, Passport,
            Handlebars
          </p>
          <div className="links">
            <a
              href="https://github.com/madhatter2084/Project2"
              target="_blank"
              rel="noreferrer"
              className="portfolioLinks"
            >
              GitHub
            </a>
            <hr></hr>
            <a
              href="https://nameless-brook-84052.herokuapp.com/"
              target="_blank"
              rel="noreferrer"
              className="portfolioLinks"
            >
              QuarantineLean
            </a>
          </div>
        </div>
        <div className="portfolio__tile">
          <img
            className="screenShot"
            src={portfolio}
            alt="portfolio screenshot"
          />
          <h1 className="tile__title">Portfolio 1.0</h1>
          <p>
            Original portfolio created during coding bootcamp. Site built with
            HTML, CSS, Bootstrap
          </p>
          <div className="links">
            <a
              href="https://github.com/madhatter2084/major"
              target="_blank"
              rel="noreferrer"
              className="portfolioLinks"
            >
              GitHub
            </a>
            <hr></hr>
            <a
              href="http://mattrikard.com/index.html"
              target="_blank"
              rel="noreferrer"
              className="portfolioLinks"
            >
              mattrikard.com
            </a>
          </div>
        </div>
        <div className="portfolio__tile">
          <img
            className="screenShot"
            src={quizBuilder}
            alt="binance screenshot"
          />
          <h1 className="tile__title">quizBuilder</h1>
          <p>
            Built with HTML, CSS, JavaScript. moment.js and JSON to keep track
            of time and high scores.
          </p>
          <div className="links">
            <a
              href="https://github.com/madhatter2084/quizbuilder"
              target="_blank"
              rel="noreferrer"
              className="portfolioLinks"
            >
              GitHub
            </a>
            <hr></hr>
            <a
              href="https://madhatter2084.github.io/quizbuilder/"
              target="_blank"
              rel="noreferrer"
              className="portfolioLinks"
            >
              Animal Crossing Quiz
            </a>
          </div>
        </div>
        <div className="portfolio__tile">
          <img
            className="screenShot"
            src={pwGenerator}
            alt="password generator screenshot"
          />
          <h1 className="tile__title">Password Generator</h1>
          <p>
            Random password generator project for coding bootcamp. HTML, CSS,
            JavaScript
          </p>
          <div className="links">
            <a
              href="https://github.com/madhatter2084/pwGenerator"
              target="_blank"
              rel="noreferrer"
              className="portfolioLinks"
            >
              GitHub
            </a>
            <hr></hr>
            <a
              href="https://madhatter2084.github.io/pwGenerator/"
              target="_blank"
              rel="noreferrer"
              className="portfolioLinks"
            >
              Password Generator
            </a>
          </div>
        </div>
        <div className="portfolio__tile">
          <img
            className="screenShot"
            src={weatherApp}
            alt="weather app screenshot"
          />
          <h1 className="tile__title">Weather App</h1>
          <p>
            JavaScript weather app. Moment.js and Google location api used to
            show forecast.
          </p>
          <div className="links">
            <a
              href="https://github.com/madhatter2084/weatherapp"
              target="_blank"
              rel="noreferrer"
              className="portfolioLinks"
            >
              GitHub
            </a>
            <hr></hr>
            <a
              href="https://madhatter2084.github.io/weatherapp/"
              target="_blank"
              rel="noreferrer"
              className="portfolioLinks"
            >
              Weather App
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
