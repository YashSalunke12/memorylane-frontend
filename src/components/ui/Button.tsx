import { ReactElement } from "react";

type Varients = "primary" | "secondary";
export interface ButtonProps {
  varient: Varients;
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: ReactElement;
  endIcon?: ReactElement;
  onClick: () => void;
}

const varientStyles = {
  primary: "bg-purple-600 text-white",
  secondary: "bg-purple-300 text-purple-500",
};

const sizeStyles = {
  sm: "px-4 py-2",
  md: "px-8 py-2",
  lg: "px-10 py-2",
};

const defaultStyles = "rounded-md flex";

export const Button = (props: ButtonProps) => {
  return (
    <button
      onClick={props.onClick}
      className={`${varientStyles[props.varient]} ${defaultStyles} ${
        sizeStyles[props.size]
      }`}
    >
      {props.startIcon ? <div className="pr-2">{props.startIcon}</div> : null}{" "}
      {props.text}
      {props.endIcon ? <div className="pr-2">{props.endIcon}</div> : null}{" "}
    </button>
  );
};
