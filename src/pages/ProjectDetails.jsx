import { useParams } from "react-router-dom";
import projects from "../data/projects";

function ProjectDetails() {
  const { id } = useParams();

  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return <h2>Project not found</h2>;
  }

  return (
    <div className="project-details">
      <h1>{project.name}</h1>
      <p>{project.description}</p>
      <p>
        <b>Tech:</b> {project.tech}
      </p>
      <p>
        <b>Status:</b> {project.status}
      </p>
    </div>
  );
}

export default ProjectDetails;
