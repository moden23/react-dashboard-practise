import logo from "../assets/no-projects.png";
export default function EmptyDashboard({ clickHandler }) {
  return (
    <div className="flex flex-col items-center justify-center gap-4 h-[100%] w-[100%]">
      <img src={logo} className="w-20 object-contain" alt="Logo" />
      <p className="text-neutral-700 text-xl font-bold">No Project Selected</p>
      <p className="text-neutral-600 text-lg font-normal">
        Select a project or get started with a new one
      </p>
      <button
        className="text-neutral-400 bg-neutral-800 h-[5%] w-[30%] rounded-md"
        onClick={clickHandler}
      >
        Create a new Project
      </button>
    </div>
  );
}
