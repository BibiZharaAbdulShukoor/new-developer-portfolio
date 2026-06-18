import { Link } from "react-router-dom";
import { useContext, useState } from "react";

import { ThemeContext } from "../context/ThemeContext";

import TechBadge from "./TechBadge";

import StatusBadge from "./StatusBadge";

function ProjectCard({ project }) {
  const { favorites, toggleFavorite } = useContext(ThemeContext);

  const [showMore, setShowMore] = useState(false);

  return (
    <article className="project-card">
      {/* STATUS */}

      <StatusBadge status={project.status} />

      {/* FEATURED */}

      {project.featured && <span className="featured">Featured</span>}

      {/* IMAGE */}

      <img
        src={project.image}
        alt={`${project.title} project preview`}
        loading="lazy"
      />

      {/* TITLE */}

      <h3>{project.title}</h3>

      {/* DESCRIPTION */}

      <p>{project.description}</p>

      {/* TECH STACK */}

      <div className="tech-stack">
        {project.techStack?.map((tech, index) => (
          <TechBadge key={index} tech={tech} />
        ))}
      </div>

      {/* SHOW MORE */}

      <button
        className={`more-info-btn ${showMore ? "active" : ""}`}
        onClick={() => setShowMore(!showMore)}
        aria-expanded={showMore}
        aria-label="Show project information"
      >
        {showMore ? "Hide Info" : "More Info"}
      </button>

      {showMore && (
        <div className="more-info">
          <p>
            <strong>Problem:</strong> {project.problem}
          </p>

          <p>
            <strong>Solution:</strong> {project.solution}
          </p>

          <p>
            <strong>Outcome:</strong> {project.outcome}
          </p>

          {/* PROGRESS */}

          <div
            className="progress-bar"
            role="progressbar"
            aria-valuenow={project.progress}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div
              className="progress-fill"
              style={{
                width: `${project.progress}%`,
              }}
            />
          </div>

          <p>{project.progress}% Complete</p>
        </div>
      )}

      {/* BUTTONS */}

      <div className="project-buttons">
        <Link to={`/projects/${project.id}`} className="btn">
          View Details
        </Link>

        <a
          href={project.liveDemo}
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          Live Demo
        </a>

        <a
          href={project.github}
          target="_blank"
          rel="noreferrer"
          className="btn"
        >
          GitHub
        </a>

        <button
          className={`favorite-btn ${
            favorites.includes(project.id) ? "active" : ""
          }`}
          onClick={() => toggleFavorite(project.id)}
          aria-label="Add project to favorites"
        >
          {favorites.includes(project.id)
            ? "❤️ Remove Favorite"
            : "🤍 Add Favorite"}
        </button>
      </div>
    </article>
  );
}

export default ProjectCard;
