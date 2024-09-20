import { useEffect, useState } from "react";

const Project = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Fetch the projects data from the backend running on localhost:3000
    fetch("http://localhost:3000/projects") // Update the path to match your backend
      .then((response) => response.json())
      .then((data) => setProjects(data.projects))
      .catch((error) => console.error("Error fetching projects:", error));
  }, []);

  return (
    <section>
      <h1 className="project-section-h1">My Projects</h1>
      <section className="grid-project-section">
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

export default Project;
