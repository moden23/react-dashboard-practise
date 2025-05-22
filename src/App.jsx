import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/sidebar";
function App() {
  const [dashboardPage, setDashboardPage] = useState("");
  const [savedProjects, setSavedProjects] = useState([]);
  const [projectChosen, setProjectChosen] = useState("");

  function handleTask(task, operation, chosenProject) {
    setSavedProjects((prevProjects) =>
      prevProjects.map((prevProject) => {
        if (prevProject.name === chosenProject.name) {
          const updatedTaskList =
            operation === "add"
              ? [...prevProject.tasks, task]
              : prevProject.tasks.filter((prevTask) => prevTask !== task);

          return {
            ...prevProject,
            tasks: updatedTaskList,
          };
        }
        return prevProject;
      })
    );
    choseProjectDisplay(chosenProject);
  }

  function submitProjectHandler() {
    setDashboardPage("submit");
  }

  function deleteFromSidebar(project) {
    setSavedProjects((prevProjects) =>
      prevProjects.filter((prevProject) => prevProject != project)
    );
    setDashboardPage("");
  }

  function submittedProjectHandler(newProject) {
    setSavedProjects((prevProjects) => [...prevProjects, newProject]);
    setDashboardPage("");
  }
  function cancelSubmitProjectHandler() {
    setDashboardPage("");
  }
  function choseProjectDisplay(project) {
    const projectChosenArr = savedProjects.filter(
      (prevProject) => prevProject === project
    );
    const projectChosen = projectChosenArr[0];
    console.log(projectChosen);
    setProjectChosen(projectChosen);
    setDashboardPage("chosen");
  }
  return (
    <div className="flex h-full">
      <Sidebar
        choseProjectHandler={choseProjectDisplay}
        addProject={submitProjectHandler}
        projects={savedProjects}
      />
      <Dashboard
        savedProjects={savedProjects}
        handleTask={handleTask}
        projectChosen={projectChosen}
        dashboardPage={dashboardPage}
        deleteHandler={deleteFromSidebar}
        addProject={submitProjectHandler}
        submittedProject={submittedProjectHandler}
        cancelSubmitProject={cancelSubmitProjectHandler}
      />
    </div>
  );
}

export default App;
