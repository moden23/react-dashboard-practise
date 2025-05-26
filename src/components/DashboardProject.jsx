import TaskManager from "./TaskManager";
export default function DashboardProject({
  projectChosen,
  deleteHandler,
  handleTask,
  savedProjects,
}) {
  return (
    <div className="w-[100%] h-[100] flex flex-col items-center justify-start ">
      <div className="pl-4 pr-4 flex w-[100%] justify-between">
        <h2 className="font-bold text-3xl">{projectChosen.name}</h2>
        <button onClick={() => deleteHandler(projectChosen)}>Delete</button>
      </div>
      <p>{projectChosen.date}</p>
      <p>{projectChosen.description}</p>
      <TaskManager
        chosenProject={
          savedProjects.filter(
            (project) => projectChosen.name === project.name
          )[0]
        }
        handlingTasks={handleTask}
      />
    </div>
  );
}
