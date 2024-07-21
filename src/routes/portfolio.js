import "./portfolio.css";
import PortfolioTile from "../components/PortfolioTile";
import binance from "../assets/binance.jpg";
import oBrien from "../assets/oBrienConstruction.jpg";
import portfolio from "../assets/portfolio1_0.jpg";
import quarantine from "../assets/quarantineLean.jpg";
import travidWallet from "../assets/travidWallet.jpg";
import quizBuilder from "../assets/quizBuilder.jpg";
import pwGenerator from "../assets/pwGenerator.jpg";
import weatherApp from "../assets/weatherApp.jpg";
import apexProject from "../assets/apexProject.png";

function Portfolio() {
  return (
    <>
      <div id="portfolio"></div>
      <h1 className="portfolio__title">Projects</h1>
      <section className="portfolio animate__animated animate__pulse">
        <PortfolioTile
          source={apexProject}
          title="apexProject"
          description="Stat tracking and in-game item tracking for Apex Legends. Built with
            React.js."
          github="https://github.com/madhatter2084/apexProject"
          url="https://apexproject-7c732.web.app/"
        />

        <PortfolioTile
          source={binance}
          title="Binance"
          description="Tracking stocks with third party api's. Built with
          HTML/CSS/JavaScript/Bootstrap."
          github="https://github.com/madhatter2084/Binance"
          url="https://tjaved12.github.io/Binance/"
        />

        <PortfolioTile
          source={oBrien}
          title="O'Brien's Construction"
          description="Single page contact site for a local construction company. Built
            with React."
          github="https://github.com/madhatter2084/templatetest05042021"
          url="https://obriensconstruction.com/"
        />

        <PortfolioTile
          source={travidWallet}
          title="Travid Wallet"
          description="Covid tracking app built with React, Bootstrap, MongoDB, Heroku,
            Node.js"
          github="https://github.com/madhatter2084/travelorsApp"
          url="https://still-waters-92313.herokuapp.com/"
        />

        <PortfolioTile
          source={quarantine}
          title="QuarantineLean"
          description="Meal planner built with HTML, CSS, MySQL, Express, Passport,
            Handlebars."
          github="https://github.com/madhatter2084/Project2"
          url="https://nameless-brook-84052.herokuapp.com/"
        />

        <PortfolioTile
          source={portfolio}
          title="Portfolio 1.0"
          description="Original portfolio created during coding bootcamp. Site built with
            HTML, CSS, Bootstrap."
          github="https://github.com/madhatter2084/major"
          url="https://madhatter2084.github.io/major/"
        />

        <PortfolioTile
          source={quizBuilder}
          title="quizBuilder"
          description="Built with HTML, CSS, JavaScript. moment.js and JSON to keep track
            of time and high scores."
          github="https://github.com/madhatter2084/quizbuilder"
          url="https://madhatter2084.github.io/quizbuilder/"
        />

        <PortfolioTile
          source={pwGenerator}
          title="Password Generator"
          description="Random password generator project for coding bootcamp. HTML, CSS,
            JavaScript."
          github="https://github.com/madhatter2084/pwGenerator"
          url="https://madhatter2084.github.io/pwGenerator/"
        />

        <PortfolioTile
          source={weatherApp}
          title="Weather App"
          description="JavaScript weather app. Moment.js and Google location api used to
            show forecast."
          github="https://github.com/madhatter2084/weatherapp"
          url="https://madhatter2084.github.io/weatherapp/"
        />
      </section>
    </>
  );
}

export default Portfolio;
