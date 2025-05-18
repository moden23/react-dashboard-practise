import { useState } from "react";

export default function Sidebar({ projects, addProject, choseProjectHandler }) {
  return (
    <aside>
      <h2>YOUR PROJECTS</h2>
      <button onClick={addProject}>+ Add Project</button>
      {projects && (
        <ul>
          {projects.map((project) => (
            <li key={project}>
              <button onClick={() => choseProjectHandler(project)}>
                {project.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
