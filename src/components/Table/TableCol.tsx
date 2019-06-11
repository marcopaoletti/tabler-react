import * as React from "react";
import cn from "classnames";

type Props = {
  children?: React.ReactNode;
  className?: string;
  colSpan?: number;
  alignContent?: "left" | "center" | "right";
};

function TableCol({ className, children, alignContent, colSpan }: Props) {
  const classes = cn({ [`text-${alignContent}`]: alignContent }, className);
  return (
    <td className={classes} colSpan={colSpan}>
      {children}
    </td>
  );
}



export default TableCol;
