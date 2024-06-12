import React from "react";
import classNames from "classnames";

export interface ButtonProps {
  buttonType?: "submit" | "reset" | "button";
  label?: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
  size?: "small" | "large";
  customClass?: string;
  id?: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({
  buttonType,
  label = "",
  variant = "primary",
  disabled = "false",
  customClass = "",
  id,
  onClick,
}) => {
  const baseClass = "font-bold py-2 px-4 rounded-lg w-full h-12";
  const variantClass =
    variant === "primary"
      ? "bg-blue-500 hover:bg-blue-700 text-white"
      : "bg-pwcGray-500 hover:bg-gray-700 text-white";
  const disabledClass = "opacity-50 cursor-not-allowed";
  const enabledClass = disabled ? disabledClass : "";

  const buttonClass = classNames(baseClass, variantClass, enabledClass, customClass);

  return (
    <button
      id={id}
      type={buttonType}
      className={buttonClass}
      onClick={onClick}
      aria-label={label || undefined}
    >
      {label}
    </button>
  );
};

export default Button;
