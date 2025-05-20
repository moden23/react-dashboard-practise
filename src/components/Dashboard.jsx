import logo from "../assets/no-projects.png";
import { useRef } from "react";
import TaskManager from "./TaskManager";
import Input from "./Input";
export default function Dashboard({
  projectChosen,
  dashboardPage,
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
  if (dashboardPage === "submit") {
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

        <Input context="TITLE" typeInput="text" labelFor="title" ref={title} />
        <Input
          context="DESCRIPTION"
          typeInput="text"
          labelFor="description"
          ref={description}
        />
        <Input context="DUE DATE" typeInput="date" labelFor="date" ref={date} />
      </form>
    );
  }
  if (projectChosen && dashboardPage === "chosen") {
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
