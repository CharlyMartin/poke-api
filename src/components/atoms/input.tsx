import React from "react";

export default function TextInput(props: React.ComponentProps<"input">) {
  const { defaultValue, onChange } = props;
  const [value, setValue] = React.useState(defaultValue);

  return (
    <input
      {...props}
      className="w-12 border-none bg-transparent p-2 focus:outline-none"
      value={value}
      onChange={(e) => {
        if (onChange) onChange(e);
        setValue(e.target.value);
      }}
    />
  );
}
