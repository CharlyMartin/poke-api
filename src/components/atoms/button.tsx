export default function Button(props: React.ComponentProps<"button">) {
  return (
    <button
      type="button"
      {...props}
      className="rounded bg-slate-700 px-4 py-2 font-bold text-white hover:bg-slate-900"
    />
  );
}
