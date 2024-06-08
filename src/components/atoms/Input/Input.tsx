// path: src/components/Input.tsx

import React from "react";
import classNames from "classnames";

export interface InputProps {
  // Export the interface
  placeholder?: string;
  disabled?: boolean;
  helpText?: string;
  errorMessage?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  placeholder,
  disabled,
  helpText,
  errorMessage,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <input
        type="text"
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        className={classNames("w-full p-2 border rounded", {
          "border-red-500": errorMessage,
          "border-gray-300": !errorMessage,
          "bg-gray-100": disabled,
          "bg-white": !disabled,
        })}
      />
      {helpText && !errorMessage && (
        <p className="mt-2 text-sm text-gray-500">{helpText}</p>
      )}
      {errorMessage && (
        <p className="mt-2 text-sm text-red-500">{errorMessage}</p>
      )}
    </div>
  );
};

export default Input;
