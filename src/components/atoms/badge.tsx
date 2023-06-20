import cn from "classnames";

type Props = {
  children: React.ReactNode;
  variant?: "sm" | "md" | "lg";
};

export default function Badge(props: Props) {
  const { children, variant = "sm" } = props;

  return (
    <span
      className={cn(
        "rounded-full bg-slate-200 px-2.5 py-0.5 text-sm font-medium",
        variant == "sm" && "px-2.5 py-0.5 text-sm font-medium",
        variant == "md" && "px-3 py-0.5 text-base font-medium",
        variant == "lg" && "px-4 py-1 text-lg font-medium"
      )}
    >
      {children}
    </span>
  );
}
