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
    const responsivClass = "text-xs w-full xxl:h-[3.5vh] xl:h-[4.5vh] md:h-[5.5vh]";
    const baseClass = "p-2 border rounded-lg px-4 py-2";
    const focusClass = "focus:outline-none focus:ring-0 focus:border-pwc-orange";
    const disabledClass = {
      "bg-gray-500": disabled,
      "bg-white": !disabled,
    };
    const errorClass = {
      "border-red-500": !!errorMessage,
      "border-gray-300": !errorMessage,
    };
    const inputClass = classNames(
      baseClass,
      responsivClass,
      disabledClass,
      errorClass,
      focusClass,
      customClass
    );
    return (
      <div className="mb-1">
        <input
          id={id}
          type={inputType}
          value={value}
          placeholder={placeholder}
          disabled={disabled}
          onChange={onChange}
          className={inputClass}
        />
        {errorMessage && <p className="mt-1 text-errorRed text-[0.7rem]">{errorMessage}</p>}
      </div>
    );
  }
);

export default Input;
