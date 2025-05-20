export default function Input({ context, typeInput, labelFor, ref }) {
  const classForLabel =
    labelFor === "description" ? "bg-zinc-200  h-12" : "bg-zinc-200  h-8";
  return (
    <div className="flex flex-col w-[80%]">
      <label className="font-semibold" htmlFor={labelFor}>
        {context}
      </label>
      <input
        className={classForLabel}
        ref={ref}
        type={typeInput}
        id={labelFor}
      />
    </div>
  );
}
