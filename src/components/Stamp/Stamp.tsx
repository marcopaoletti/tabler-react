import * as React from "react";
import cn from "classnames";
import Icon from "../Icon";

type Props = {
  children?: React.ReactNode;
  className?: string;
  size?: "sm" | "md";
  icon?: string;
  color?: string;
};

function Stamp({ children, className, size = "md", icon, color = "" }: Props) {
  const classes = cn(
    { stamp: true, [`stamp-${size}`]: size, [`bg-${color}`]: color },
    className
  );
  return (
    <span className={classes}>
      {icon && <Icon name={icon} />}
      {children}
    </span>
  );
}



export default Stamp;
