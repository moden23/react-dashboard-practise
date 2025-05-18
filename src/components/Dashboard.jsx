import logo from "../assets/no-projects.png";
import { useRef } from "react";
import TaskManager from "./TaskManager";
export default function Dashboard({
  projectChosen,
  projectSubmit,
  addProject,
  submittedProject,
  cancelSubmitProject,
}) {
  const title = useRef();
  const description = useRef();
  const date = useRef();

  let dashboardContent = (
    <>
      <img src={logo} alt="Logo" style={{ height: "200px" }} />
      <p>Select a project or get started with a new one</p>
      <button onClick={addProject}>Create a new Project</button>
    </>
  );
  if (projectSubmit === "submit") {
    dashboardContent = (
      <form action="submit">
        <button onClick={cancelSubmitProject}>Cancel</button>
        <button
          onClick={(e) => {
            e.preventDefault();
            console.log({
              name: title.current.value,
              description: description.current.value,
              date: date.current.value,
            });
            submittedProject({
              name: title.current.value,
              description: description.current.value,
              date: date.current.value,
            });
          }}
        >
          Save
        </button>
        <label htmlFor="title">Title</label>
        <input ref={title} type="text" id="title" />
        <label htmlFor="description">Description</label>
        <input ref={description} type="text" id="description" />
        <label htmlFor="date">DUE DATE</label>
        <input ref={date} type="date" id="date" />
      </form>
    );
  }
  if (projectSubmit === "submitted") {
    console.log(projectChosen);
    dashboardContent = (
      <>
        <h2>{projectChosen.name}</h2>
        <button>Delete</button>
        <p>{projectChosen.date}</p>
        <p>{projectChosen.description}</p>
        <TaskManager />
      </>
    );
  }
  return <main>{dashboardContent}</main>;
}
