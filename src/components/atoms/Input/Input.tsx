import React from "react";
import classNames from "classnames";

export interface InputProps {
  inputType?: "text" | "password" | "email" | "number";
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  helpText?: string;
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
    helpText,
    errorMessage,
    customClass,
    id,
    onChange,
  }) => {
    return (
      <div className="mb-4">
        <input
          id={id}
          type={inputType}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          className={classNames(
            "w-full p-2 border rounded",
            {
              "border-red-500": !!errorMessage,
              "border-gray-300": !errorMessage,
              "bg-gray-100": disabled,
              "bg-white": !disabled,
            },
            customClass
          )}
        />
        {helpText && !errorMessage && (
          <p className="mt-2 text-sm text-gray-500">{helpText}</p>
        )}
        {errorMessage && (
          <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
        )}
      </div>
    );
  }
);

export default Input;
