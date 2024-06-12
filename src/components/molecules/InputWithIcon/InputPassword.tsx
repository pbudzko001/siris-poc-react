import React, { useState } from "react";
import Input, { InputProps } from "../../atoms/Input/Input";
import Icon from "../../atoms/Icon/Icon";

interface InputPasswordProps extends InputProps {
  iconName: string;
  altIconName: string;
  iconSize?: "small" | "medium" | "large";
  iconColor?: string;
  onIconClick?: () => void;
}

const InputPassword: React.FC<InputPasswordProps> = ({
  iconName,
  altIconName,
  iconSize = "medium",
  iconColor = "text-gray-500",
  onIconClick,
  inputType = "password",
  ...rest
}) => {
  const [isPasswordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!isPasswordVisible);
    if (onIconClick) onIconClick();
  };

  return (
    <div className="relative">
      <Input inputType={isPasswordVisible ? "text" : "password"} {...rest} />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        <Icon
          iconName={isPasswordVisible ? iconName : altIconName} // Change icon based on visibility
          iconSize={iconSize}
          iconColor={iconColor}
          onClick={togglePasswordVisibility}
        />
      </div>
    </div>
  );
};

export default InputPassword;
