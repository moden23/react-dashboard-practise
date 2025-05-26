import EmptyDashboard from "./EmptyDashboard";
import { useRef } from "react";
import DashboardForm from "./DashboardForm";
import DashboardProject from "./DashboardProject";
export default function Dashboard({
  savedProjects,
  projectChosen,
  dashboardPage,
  addProject,
  submittedProject,
  cancelSubmitProject,
  deleteHandler,
  handleTask,
}) {
  const title = useRef();
  const description = useRef();
  const date = useRef();

  let dashboardContent = <EmptyDashboard clickHandler={addProject} />;
  if (dashboardPage === "submit") {
    dashboardContent = (
      <DashboardForm
        cancelHandler={cancelSubmitProject}
        submittedProject={submittedProject}
        title={title}
        description={description}
        date={date}
      />
    );
  }
  if (projectChosen && dashboardPage === "chosen") {
    dashboardContent = (
      <DashboardProject
        projectChosen={projectChosen}
        deleteHandler={deleteHandler}
        savedProjects={savedProjects}
        handleTask={handleTask}
      />
    );
  }
  return (
    <main className="w-[100%] h-[100] flex flex-col items-center justify-center">
      {dashboardContent}
    </main>
  );
}
