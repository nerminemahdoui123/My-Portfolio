import React from "react";
import { FaLaptopCode, FaTwitter, FaFacebook, FaLinkedin } from "react-icons/fa";
import "./Home.css";

function Home() {
  return (
    <section className="home">
      <div className="home-content">
        <h1>Hello, It’s Me</h1>
        <h2>Nermine Mahdoui</h2>
        <p>And I’m a <span className="highlight">developper</span></p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Possimus nulla sed sapore rerum, animi expedita.</p>
        
        {/* Social Links section */}
        <div className="social-links">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaTwitter />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaFacebook />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
            <FaLinkedin />
          </a>
        </div>

        <a href="#" className="cv-btn">Download CV</a>
      </div>

      <div className="home-img">
        <FaLaptopCode size={150} color="#fff" />
      </div>
    </section>
  );
}

export default Home;
