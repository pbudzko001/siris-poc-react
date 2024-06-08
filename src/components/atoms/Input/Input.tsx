// src/components/Input.tsx

import React from "react";
import classNames from "classnames";

interface InputProps {
  placeholder: string;
  variant?: "primary" | "secondary";
  size?: "small" | "large";
  disabled?: boolean;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  variant = "primary",
  size = "small",
  disabled = false,
  onChange,
}) => {
  const inputClass = classNames(
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    {
      "border-blue-500": variant === "primary" && !disabled,
      "border-gray-500": variant === "secondary" && !disabled,
      "text-sm": size === "small",
      "text-lg py-3 px-6": size === "large",
      "bg-gray-200 cursor-not-allowed": disabled,
    }
  );

  return (
    <input
      type="text"
      className={inputClass}
      placeholder={placeholder}
      disabled={disabled}
      onChange={onChange}
    />
  );
};

export default Input;
