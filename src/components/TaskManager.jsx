import { useRef } from "react";
import { v4 as uuidv4 } from "uuid";
export default function TaskManager({ chosenProject, tasks, handlingTasks }) {
  const task = useRef();
  return (
    <div className="flex flex-col w-[100%]">
      <h3 className="font-semibold text-xl">Tasks</h3>
      <div>
        <input ref={task} type="text"></input>
        <button
          onClick={() =>
            handlingTasks(task.current.value, "add", chosenProject)
          }
        >
          Add Task
        </button>
      </div>
      {!tasks && <p>This Project does not have any tasks yet</p>}
      {tasks && (
        <ul className="mt-8 flex flex-col items-center w-[100%]">
          {tasks.map((task) => (
            <li
              className="flex justify-between items-center bg-gray-200 h-20 w-[80%]"
              key={uuidv4()}
            >
              <p>{task}</p>
              <button
                onClick={() =>
                  handlingTasks(task.current.value, "clear", chosenProject)
                }
              >
                Clear
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
