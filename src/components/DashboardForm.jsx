import Input from "./Input";
export default function DashboardForm({
  cancelHandler,
  submittedProject,
  title,
  description,
  date,
}) {
  return (
    <form
      className="flex flex-col items-center justify-center gap-4 h-[100%] w-[100%]"
      action="submit"
    >
      <div className="flex gap-4 justify-end  w-[100%] pr-20">
        <button onClick={cancelHandler}>Cancel</button>
        <button
          className="bg-black text-white w-[10%]  h-8 rounded-md"
          onClick={(e) => {
            e.preventDefault();
            submittedProject({
              name: title.current.value,
              description: description.current.value,
              date: date.current.value,
              tasks: [],
            });
          }}
        >
          Save
        </button>
      </div>

      <Input context="TITLE" typeInput="text" labelFor="title" ref={title} />
      <Input
        context="DESCRIPTION"
        typeInput="text"
        labelFor="description"
        ref={description}
      />
      <Input context="DUE DATE" typeInput="date" labelFor="date" ref={date} />
    </form>
  );
}
