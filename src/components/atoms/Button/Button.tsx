import React from "react";
import classNames from "classnames";

export interface ButtonProps {
  buttonType?: "submit" | "reset" | "button";
  label?: string;
  variant?: "primary" | "secondary";
  disabled?: boolean;
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
  const responsiveClass = "w-full xxl:h-[3.5vh] xl:h-[4.5vh] md:h-[5.5vh]";
  const baseClass = "text-sm font-bold text-white py-2 px-4 rounded-lg";
  const variantClass =
    variant === "primary"
      ? "bg-pwc-primaryOrange hover:bg-pwc-orange text-white"
      : "bg-pwcGray-500 hover:bg-gray-700 text-white";
  const disabledClass = "opacity-50 cursor-not-allowed";
  const enabledClass = disabled ? disabledClass : "";

  const buttonClass = classNames(
    baseClass,
    responsiveClass,
    variantClass,
    enabledClass,
    customClass
  );

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
