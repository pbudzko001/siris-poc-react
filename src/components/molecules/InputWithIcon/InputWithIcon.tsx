// src/components/InputWithIcon.tsx

import React, { useState } from "react";
import classNames from "classnames";
import Icon from "../../atoms/Icon/Icon";

export interface InputWithIconProps {
  inputType?: "text" | "password" | "email" | "number";
  value?: string;
  placeholder?: string;
  disabled?: boolean;
  errorMessage?: string;
  customClass?: string;
  id?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  iconName?: string;
  altIconName?: string;
  customIconSize?: string;
  iconSize?: "small" | "medium" | "large";
  iconColor?: string;
  onIconClick?: () => void;
}

const InputWithIcon: React.FC<InputWithIconProps> = ({
  inputType = "text",
  value = "",
  placeholder = "",
  disabled = false,
  errorMessage,
  customClass,
  id,
  onChange,
  iconName,
  altIconName,
  customIconSize,
  iconSize = "medium",
  iconColor = "",
  onIconClick,
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
    if (onIconClick) onIconClick();
  };

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
    <div className="mb-1 relative">
      <input
        id={id}
        type={inputType === "password" && isPasswordVisible ? "text" : inputType}
        value={value}
        placeholder={placeholder}
        disabled={disabled}
        onChange={onChange}
        className={inputClass}
      />
      {iconName && altIconName && (
        <div className="absolute inset-y-0 right-0 flex items-center pr-3">
          <Icon
            iconName={inputType === "password" && isPasswordVisible ? altIconName : iconName}
            iconSize={iconSize}
            customIconSize={customIconSize}
            iconColor={iconColor}
            onClick={togglePasswordVisibility}
          />
        </div>
      )}
      {errorMessage && <p className="mt-1 text-errorRed text-[0.7rem]">{errorMessage}</p>}
    </div>
  );
};

export default InputWithIcon;
