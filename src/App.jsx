import { useState } from "react";
import Dashboard from "./components/Dashboard";
import Sidebar from "./components/sidebar";
function App() {
  const [dashboardPage, setDashboardPage] = useState("");
  const [savedProjects, setSavedProjects] = useState([]);
  const [projectChosen, setProjectChosen] = useState("");
  function submitProjectHandler() {
    setDashboardPage("submit");
  }

  function deleteFromSidebar(project) {
    setSavedProjects((prevProjects) =>
      prevProjects.map((prevProject) => prevProject != project)
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
        projectChosen={projectChosen}
        projectSubmit={dashboardPage}
        deleteHandler={deleteFromSidebar}
        addProject={submitProjectHandler}
        submittedProject={submittedProjectHandler}
        cancelSubmitProject={cancelSubmitProjectHandler}
      />
    </div>
  );
}

export default App;
