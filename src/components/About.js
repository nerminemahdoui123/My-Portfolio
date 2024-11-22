import React from 'react';
import { FaStar } from 'react-icons/fa'; // Utilisation d'une icône étoile

const About = () => {
  return (
    <section className="about-section">
      <div className="content-container">
        <FaStar className="star-icon" />
        <h2>Welcome to Nermine World</h2>
        <p>
          Passionnée par le développement web et mobile, je crée des expériences utilisateur ergonomiques et performantes.
        </p>
      </div>
    </section>
  );
};

export default About;
