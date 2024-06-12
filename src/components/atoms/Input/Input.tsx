import React from "react";
import classNames from "classnames";

export interface InputProps {
  inputType?: "text" | "password" | "email" | "number";
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  errorMessage?: string;
  customClass?: string;
  id?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = React.memo(
  ({
    inputType = "text",
    value = "",
    placeholder = "",
    disabled = false,
    errorMessage,
    customClass,
    id,
    onChange,
  }) => {
    const baseClass = "w-full h-12 p-2 border focus-visible:border-pwc-orange rounded-lg";
    const disabledClass = {
      "bg-gray-500": disabled,
      "bg-white": !disabled,
    };
    const errorClass = {
      "border-red-500": !!errorMessage,
      "border-gray-300": !errorMessage,
    };
    const inputClass = classNames(baseClass, disabledClass, errorClass, customClass);
    return (
      <div className="mb-4">
        <input
          id={id}
          type={inputType}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          className={inputClass}
        />
        {errorMessage && <p className="mt-2 text-sm text-red-500">{errorMessage}</p>}
      </div>
    );
  }
);

export default Input;
