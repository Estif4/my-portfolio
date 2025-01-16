import React, { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/header";
import Home from "./components/Home";
import ABOUT from "./components/about_me.jsx";
import Skillsandtools from "./components/skills.jsx";
import Services from "./components/services.jsx";
import Projects from "./components/projects.jsx";
import Contact from "./components/contactme.jsx";
import Footer from "./components/footer.jsx";

function App() {
  useEffect(() => {
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }
  }, []);

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Function to handle smooth scrolling
  const scrollToView = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth",  block: "start" });
    }
  };

  return (
    <div className="overflow-hidden">
      <Header
        isMenuOpen={isMenuOpen}
        setIsMenuOpen={setIsMenuOpen}
        scrollToView={scrollToView}
      />

      {/* Main content sections with corresponding IDs for smooth scrolling */}
      <div id="home">
        <Home id="home" isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen}scrollToView={scrollToView} />
      </div>
      <div id="about">
        <ABOUT isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
      <div id="skills">
        <Skillsandtools isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
      <div id="services">
        <Services isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
      <div id="portfolio">
        <Projects isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>
      <div id="contact">
        <Contact isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
      </div>

      <Footer />
    </div>
  );
}

export default App;
