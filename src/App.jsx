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

  function submittedProjectHandler(newProject) {
    setProjectSubmitProject("submitted");
    setSavedProjects((prevProjects) => [...prevProjects, newProject]);
    setProjectToDisplay(newProject);
  }
  function cancelSubmitProjectHandler() {
    setProjectSubmitProject("");
  }
  function choseProjectDisplay(project) {
    setProjectToDisplay(project);
  }
  return (
    <>
      <Sidebar
        choseProjectHandler={choseProjectDisplay}
        addProject={submitProjectHandler}
        projects={savedProjects}
      />
      <Dashboard
        projectChosen={projectToDisplay}
        projectSubmit={projectSubmit}
        addProject={submitProjectHandler}
        submittedProject={submittedProjectHandler}
        cancelSubmitProject={cancelSubmitProjectHandler}
      />
    </>
  );
}

export default App;
