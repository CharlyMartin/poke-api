import cn from "classnames";

export default function Button(props: React.ComponentProps<"button">) {
  const { className } = props;
  return (
    <button
      type="button"
      {...props}
      className={cn(
        "rounded bg-slate-700 px-4 py-2 font-bold text-white hover:bg-slate-900",
        className
      )}
    />
  );
}
