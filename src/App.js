import React from "react";
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar.js";
import Home from "./routes/home.js";
import Contact from "./routes/contact.js";
import Resume from "./routes/resume.js";
import Portfolio from "./routes/portfolio.js";



function App() {
  return (
    <>
    <NavBar />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="home" element={<Home />} />
        <Route path="portfolio" element={<Portfolio />} />
        <Route path="contact" element={<Contact />} />
        <Route path="resume" element={<Resume />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
