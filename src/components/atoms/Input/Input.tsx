import React from "react";
import classNames from "classnames";

interface InputProps {
  placeholder: string;
  variant?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
  disabled?: boolean;
  required?: boolean;
  helpText?: string;
  errorMessage?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  variant = "primary",
  size = "medium",
  disabled = false,
  required = false,
  helpText,
  errorMessage,
  onChange,
}) => {
  const inputClass = classNames(
    "shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline",
    {
      "border-blue-500": variant === "primary" && !disabled,
      "border-gray-500": variant === "secondary" && !disabled,
      "text-sm": size === "small",
      "text-base py-2 px-3": size === "medium",
      "text-lg py-3 px-6": size === "large",
      "bg-gray-200 cursor-not-allowed": disabled,
    }
  );

  const errorClass = classNames("text-red-500", {
    "text-sm": size === "small",
    "text-base": size === "medium",
    "text-lg": size === "large",
  });

  return (
    <div>
      <input
        type="text"
        className={inputClass}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
      />
      {required && <span className="text-red-500">*</span>}
      {helpText && <div className="text-gray-600">{helpText}</div>}
      {errorMessage && <div className={errorClass}>{errorMessage}</div>}
    </div>
  );
};

export default Input;
