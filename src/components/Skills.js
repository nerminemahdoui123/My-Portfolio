import React from 'react';
import { motion } from 'framer-motion';


const Skills = () => {
  const skills = ['React', 'Node.js', 'MySQL', 'Tailwind CSS', 'Git'];

  return (
    <section className="skills-section">
      <h2>Mes Compétences</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <motion.div 
            key={index} 
            className="skill-card"
            whileHover={{ scale: 1.1 }}
          >
            {skill}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
