import { Link } from "react-router-dom";
import TechBadge from "./TechBadge";

function ProjectCard({ project }) {
  return (
    <div className="project-card">
      {/* FEATURED BADGE */}
      {project.featured && <span className="featured">Featured</span>}

      {/* PROJECT IMAGE */}
      <img src={project.image} alt={project.name} />

      {/* TITLE */}
      <h3>{project.name}</h3>

      {/* DESCRIPTION */}
      <p>{project.description}</p>

      {/* TECH STACK */}
      <div className="tech-stack">
        {project.techStack?.map((tech, index) => (
          <TechBadge key={index} tech={tech} />
        ))}
      </div>

      {/* BUTTONS */}
      <div className="project-buttons">
        <a href={project.link} target="_blank" rel="noreferrer" className="btn">
          GitHub
        </a>
      </div>
    </div>
  );
}

export default ProjectCard;
