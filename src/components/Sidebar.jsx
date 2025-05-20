import { v4 as uuidv4 } from "uuid";
export default function Sidebar({ projects, addProject, choseProjectHandler }) {
  return (
    <aside className="pt-8 gap-8 bg-black text-white mt-[2%] w-[20%] rounded-md flex flex-col">
      <h2 className="text-lg font-bold text-center">YOUR PROJECTS</h2>
      <button
        className="text-neutral-400 bg-neutral-800 min-w-fit w-[70%] h-[5%] rounded-s-md"
        onClick={addProject}
      >
        + Add Project
      </button>
      {projects && (
        <ul className="pl-2 w-[80%]">
          {projects.map((project) => (
            <li className="w-[80%]" key={uuidv4()}>
              <button
                className="hover:bg-neutral-800 "
                onClick={() => choseProjectHandler(project)}
              >
                {project.name}
              </button>
            </li>
          ))}
        </ul>
      )}
    </aside>
  );
}
