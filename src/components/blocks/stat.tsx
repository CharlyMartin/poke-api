import cn from "classnames";

import { capitalize } from "../../utils";
import React from "react";

type Props = {
  left: string;
  right: string | number;
} & React.ComponentProps<"div">;

export default function Stat(props: Props) {
  const { left, right, className, ...rest } = props;

  return (
    <div
      className={cn("flex justify-between py-0.5 text-slate-500", className)}
      {...rest}
    >
      <p>{capitalize(left)}</p>
      <p>{right}</p>
    </div>
  );
}
