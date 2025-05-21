import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/sidebar";
function App() {
  const [dashboardPage, setDashboardPage] = useState("");
  const [savedProjects, setSavedProjects] = useState([]);
  const [projectChosen, setProjectChosen] = useState("");

  //
  function handleTask(task, operation, chosenProject) {
    setSavedProjects((prevProjects) =>
      prevProjects.map((prevProject) => {
        if (prevProject.name === chosenProject.name) {
          const updatedTaskList =
            operation === "add"
              ? [...prevProject.tasks, task]
              : prevProjects.tasks.filter((prevTask) => prevTask !== task)({
                  ...prevProjects,
                  [prevProject.tasks]: updatedTaskList,
                });
        }
        return prevProject;
      })
    );
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

  function handleTask(project) {
    setSavedProjects((prevProjects) => [...prevProjects, project]);
  }

  function submittedProjectHandler(newProject) {
    setSavedProjects((prevProjects) => [...prevProjects, newProject]);
    setDashboardPage("");
  }
  function cancelSubmitProjectHandler() {
    setDashboardPage("");
  }
  function choseProjectDisplay(project) {
    setProjectChosen(project);
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
