function ProjectCard({ project }) {
  return (
    <div className="project-card">
      <h3>{project.title}</h3>

      <p>{project.description}</p>

      <p>
        <strong>Technologies:</strong>{" "}
        {project.technologies.join(", ")}
      </p>

      <p>
        <strong>Status:</strong> {project.status}
      </p>

      <div className="project-links">
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noreferrer"
          >
            Live Demo
          </a>
        )}

        {project.github && (
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        )}
      </div>
    </div>
  );
}

export default ProjectCard;