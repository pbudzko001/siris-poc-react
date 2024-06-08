// src/components/Button.tsx

import React from "react";
import classNames from "classnames";

export interface ButtonProps {
  type: "submit" | "reset" | "button";
  label?: string;
  variant?: "primary" | "secondary";
  size?: "small" | "large";
  customClass?: string;
  id?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  type,
  label,
  variant = "primary",
  size = "small",
  customClass,
  id,
  onClick,
}) => {
  const buttonClass = classNames("font-bold py-2 px-4 rounded", {
    "bg-blue-500 hover:bg-blue-700 text-white": variant === "primary",
    "bg-gray-500 hover:bg-gray-700 text-white": variant === "secondary",
    "text-sm": size === "small",
    "text-lg py-3 px-6": size === "large",
    customClass,
  });

  return (
    <button id={id} type={type} className={buttonClass} onClick={onClick}>
      {label}
    </button>
  );
};

export default Button;
