import React from 'react';
import './Navbar.css';

const Navbar = () => {
  const handleScroll = (e, targetId) => {
    e.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <span className="logo-light">Nermine</span>
        <span className="logo-bold">Mahdoui</span>
      </div>
      <ul className="nav-links">
        <li><a href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</a></li>
        <li><a href="#about" onClick={(e) => handleScroll(e, 'about')}>About</a></li>
        <li><a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Projects</a></li>
        <li><a href="#skills" onClick={(e) => handleScroll(e, 'skills')}>Skills</a></li>
        <li><a href="#contact" onClick={(e) => handleScroll(e, 'contact')}>Contact</a></li>
      </ul>
      <div className="mobile-menu-icon">&#9776;</div>
    </nav>
  );
};

export default Navbar;
