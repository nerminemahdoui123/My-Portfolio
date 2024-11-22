import React from 'react';
import { motion } from 'framer-motion';


const Hero = () => {
  return (
    <div className="hero-section">
      <motion.div 
        className="hero-text"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h1>Développeuse Web</h1>
        <p>Création de solutions modernes et responsives</p>
      </motion.div>
      <motion.img 
        src="/developer-icon.svg" 
        alt="Développeuse" 
        className="hero-image"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      />
    </div>
  );
};

export default Hero;
