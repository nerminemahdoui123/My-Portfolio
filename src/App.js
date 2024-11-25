import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Link } from "react-scroll"; // Import de react-scroll pour l'animation de défilement
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Projects from "./components/Projects";
import Home from "./components/Home";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
import "./App.css";

function App() {
  return (
    <Router> 
      <Navbar />
      <section id="home">
        <Home />
      </section>
      <section id="projects">
        <Projects />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="contact">
        <Contact />
      </section>
    </Router>
  );
}

export default App;
