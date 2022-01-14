import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.js";
import Banner from "./routes/Banner.js";
import Resume from "./routes/resume.js";
import Portfolio from "./routes/portfolio.js";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Portfolio />
      <Resume />
      <Footer />
    </>
  );
}

export default App;
