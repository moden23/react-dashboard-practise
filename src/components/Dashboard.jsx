import logo from "../assets/no-projects.png";
import { useRef } from "react";
import TaskManager from "./TaskManager";
export default function Dashboard({
  projectChosen,
  projectSubmit,
  addProject,
  submittedProject,
  cancelSubmitProject,
  deleteHandler,
}) {
  const title = useRef();
  const description = useRef();
  const date = useRef();

  let dashboardContent = (
    <div className="flex flex-col items-center justify-center gap-4 h-[100%] w-[100%]">
      <img src={logo} className="w-20" alt="Logo" />
      <p className="text-neutral-700 text-xl font-bold">No Project Selected</p>
      <p className="text-neutral-600 text-lg font-normal">
        Select a project or get started with a new one
      </p>
      <button
        className="text-neutral-400 bg-neutral-800 h-[5%] w-[30%] rounded-md"
        onClick={addProject}
      >
        Create a new Project
      </button>
    </div>
  );
  if (projectSubmit === "submit") {
    dashboardContent = (
      <form
        className="flex flex-col items-center justify-center gap-4 h-[100%] w-[100%]"
        action="submit"
      >
        <div className="flex gap-4 justify-end  w-[100%] pr-20">
          <button onClick={cancelSubmitProject}>Cancel</button>
          <button
            className="bg-black text-white w-[10%]  h-8 rounded-md"
            onClick={(e) => {
              e.preventDefault();
              submittedProject({
                name: title.current.value,
                description: description.current.value,
                date: date.current.value,
              });
            }}
          >
            Save
          </button>
        </div>
        <div className="flex flex-col w-[80%]">
          {" "}
          <label className="font-semibold" htmlFor="title">
            TITLE
          </label>
          <input
            className="bg-zinc-200  h-8"
            ref={title}
            type="text"
            id="title"
          />
        </div>
        <div className="flex flex-col w-[80%]">
          <label className="font-semibold" htmlFor="description">
            DESCRIPTION
          </label>
          <input
            className="bg-zinc-200  h-12"
            ref={description}
            type="text"
            id="description"
          />
        </div>
        <div className="flex flex-col w-[80%]">
          <label className="font-semibold" htmlFor="date">
            DUE DATE
          </label>
          <input
            className="bg-zinc-200  h-8"
            ref={date}
            type="date"
            id="date"
          />
        </div>
      </form>
    );
  }
  if (projectChosen) {
    dashboardContent = (
      <div className="w-[100%] h-[100] flex flex-col items-center justify-start ">
        <div className="pl-4 pr-4 flex w-[100%] justify-between">
          <h2 className="font-bold text-3xl">{projectChosen.name}</h2>
          <button onClick={() => deleteHandler(projectChosen)}>Delete</button>
        </div>
        <p>{projectChosen.date}</p>
        <p>{projectChosen.description}</p>
        <TaskManager />
      </div>
    );
  }
  return (
    <main className="w-[100%] h-[100] flex flex-col items-center justify-center">
      {dashboardContent}
    </main>
  );
}
