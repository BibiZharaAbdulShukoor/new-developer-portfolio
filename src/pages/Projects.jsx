import { useContext, useState } from "react";
import { Helmet } from "react-helmet";

import { ThemeContext } from "../context/ThemeContext";
import ProjectCard from "../components/ProjectCard";
import projects from "../Data/projects";

function Projects() {
  const { favorites } = useContext(ThemeContext);

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredProjects = projects
    .filter((project) =>
      project.title.toLowerCase().includes(search.toLowerCase()),
    )
    .filter((project) =>
      filter === "All" ? true : project.techStack.includes(filter),
    );

  return (
    <>
      <Helmet>
        <title>Projects | Portfolio</title>
        <meta
          name="description"
          content="Browse my portfolio projects built with React, JavaScript, CSS, and other technologies."
        />
      </Helmet>

      <main className="projects page">
        <section>
          <h2>My Projects</h2>

          <h3 className="favorite-count">
            Favorite Projects: {favorites.length}
          </h3>

          <label className="search-project" htmlFor="project-search">
            Search Projects
          </label>

          <input
            id="project-search"
            type="text"
            placeholder="Search projects..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="search-input"
            aria-label="Search projects"
          />

          <div className="filter-buttons">
            <button onClick={() => setFilter("All")}>All</button>
            <button onClick={() => setFilter("React")}>React</button>
            <button onClick={() => setFilter("CSS")}>CSS</button>
            <button onClick={() => setFilter("JavaScript")}>JavaScript</button>
          </div>

          <div className="projects-grid">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))
            ) : (
              <p>No projects found.</p>
            )}
          </div>
        </section>
      </main>
    </>
  );
}

export default Projects;
