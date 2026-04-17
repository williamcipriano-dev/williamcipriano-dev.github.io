import { useState } from "react";
import projectsData from "./data/projects.json";
import ProjectCard from "./components/ProjectCard";
import FilterButtons from "./components/FilterButtons";

function App() {
  const [filter, setFilter] = useState("all");

  const filteredProjects =
    filter === "all"
      ? projectsData
      : projectsData.filter((project) =>
          project.technologies.includes(filter)
        );

  return (
    <>
      <header>
        <h1>William Cipriano</h1>
        <p>Desenvolvedor Frontend | JavaScript | React | Python</p>
      </header>

      <main>
        <section>
          <h2>Projetos</h2>

          <FilterButtons setFilter={setFilter} />

          <div id="projects-container">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section>

        <section>
          <h2>Contato</h2>

          <p>
            Estou disponível para oportunidades como desenvolvedor fullstack.
          </p>

          <p>
            📧 Email:{" "}
            <a href="mailto:williamcipriano344@gmail.com">
              williamcipriano344@gmail.com
            </a>
          </p>

          <p>
            💼 LinkedIn:{" "}
            <a
              href="https://www.linkedin.com/in/william-cipriano-b44870383"
              target="_blank"
              rel="noopener noreferrer"
            >
              linkedin.com/in/william-cipriano-b44870383
            </a>
          </p>
        </section>
      </main>

      <footer>
        <p>© 2026 William Cipriano</p>
      </footer>
    </>
  );
}

export default App;