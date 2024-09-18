import React from "react";

const MyProject = ({ projects }) => {
  return (
    <section>
      <h1 className="project-section-h1">My Projects</h1>
      <section className="grid-project-section">
        {/* Render project cards dynamically */}
        {projects.map((project) => (
          <article className="project-card" key={project.name}>
            <h2 className="project-h2">Name: {project.name}</h2>
            <p>Description: {project.description}</p>
            <p>Status: {project.status}</p>
            <img
              src={project.image}
              alt="project-img"
              className="portfolio-image"
            />
          </article>
        ))}
      </section>
      <a href="project.html">
        <button className="button-dark">See more projects</button>
      </a>
    </section>
  );
};

export default MyProject;
