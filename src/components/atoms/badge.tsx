type Props = {
  children: React.ReactNode;
};

export default function Badge(props: Props) {
  const { children } = props;

  return (
    <span className="rounded-full bg-slate-200 px-2.5 py-0.5 text-sm font-medium">
      {children}
    </span>
  );
}
