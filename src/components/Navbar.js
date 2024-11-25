import React, { useState } from "react";
import { Link } from "react-scroll"; // Importer react-scroll pour l'animation de défilement
import "./Navbar.css"; 
import { FaCode, FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <nav className="navbar">
      <div className="nav-container">
        <div className="nav-logo">
          <span>Nermine Mahdoui</span>
          <span className="icon"><FaCode /></span>
        </div>
        
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="nav-links"
              onClick={handleClick}
            >
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="projects"
              smooth={true}
              duration={500}
              className="nav-links"
              onClick={handleClick}
            >
              Projects
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="skills"
              smooth={true}
              duration={500}
              className="nav-links"
              onClick={handleClick}
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="nav-links"
              onClick={handleClick}
            >
              Contact
            </Link>
          </li>
        </ul>

        <div className="nav-icon" onClick={handleClick}>
          {click ? <FaTimes /> : <FaBars />}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
