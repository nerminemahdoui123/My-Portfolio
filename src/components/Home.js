import React from 'react';
import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from 'react-icons/fa';
import './Home.css';

const Home = () => {
  return (
    <section id="home" className="home-section">
      <div className="home-content">
        <div className="intro-text">
          <h1>Hello, It's Me</h1>
          <h2>John Kendric</h2>
          <h3>And I'm a YouTuber</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Possimus nulla sed saope rerum, animi expedita.</p>
          <div className="social-links">
            <a href="https://twitter.com"><FaTwitter className="social-icon" /></a>
            <a href="https://facebook.com"><FaFacebook className="social-icon" /></a>
            <a href="https://linkedin.com"><FaLinkedin className="social-icon" /></a>
            <a href="https://instagram.com"><FaInstagram className="social-icon" /></a>
          </div>
          <a href="/cv" className="download-cv">Download CV</a>
        </div>
        <div className="profile-image">
          <div className="profile-pic"></div>
        </div>
      </div>
    </section>
  );
};

export default Home;
