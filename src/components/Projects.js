import React from 'react';


const Projects = () => {
  const projects = [
    { title: 'Site E-commerce', description: 'Un site complet avec React et Node.js.', link: '#' },
    { title: 'Application Mobile', description: 'App mobile avec React Native.', link: '#' },
  ];

  return (
    <section className="projects-section">
      <h2>Mes Projets</h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <a href={project.link} target="_blank" rel="noopener noreferrer">Voir plus</a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
