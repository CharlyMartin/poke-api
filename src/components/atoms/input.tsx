import React from "react";

export default function TextInput(props: React.ComponentProps<"input">) {
  const [value, setValue] = React.useState(props.defaultValue);

  return (
    <input
      {...props}
      className="w-16 border-none bg-transparent p-2 focus:outline-none"
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
