import React from "react";
import "./App.css";
import NavBar from "./components/NavBar/NavBar.js";
import Home from "./routes/home.js";
import Contact from "./routes/contact.js";
// import Resume from "./routes/resume.js";
import Portfolio from "./routes/portfolio.js";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <NavBar />
      <Home />
      <Portfolio />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
