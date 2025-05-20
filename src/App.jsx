import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/sidebar";
function App() {
  const [projectSubmit, setProjectSubmitProject] = useState("");
  const [savedProjects, setSavedProjects] = useState([]);
  const [projectToDisplay, setProjectToDisplay] = useState("");
  function submitProjectHandler() {
    setProjectSubmitProject("submit");
  }

  function deleteFromSidebar(project) {
    setSavedProjects((prevProjects) =>
      prevProjects.map((prevProject) => prevProject != project)
    );
  }

  function submittedProjectHandler(newProject) {
    setSavedProjects((prevProjects) => [...prevProjects, newProject]);
  }
  function cancelSubmitProjectHandler() {
    setProjectSubmitProject("");
  }
  function choseProjectDisplay(project) {
    setProjectToDisplay(project);
  }
  return (
    <div className="flex h-full">
      <Sidebar
        choseProjectHandler={choseProjectDisplay}
        addProject={submitProjectHandler}
        projects={savedProjects}
      />
      <Dashboard
        deleteHandler={deleteFromSidebar}
        projectChosen={projectToDisplay}
        projectSubmit={projectSubmit}
        addProject={submitProjectHandler}
        submittedProject={submittedProjectHandler}
        cancelSubmitProject={cancelSubmitProjectHandler}
      />
    </div>
  );
}

export default App;
