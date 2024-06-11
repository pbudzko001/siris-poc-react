import React from "react";
import classNames from "classnames";
import Input, { InputProps } from "../../atoms/Input/Input";
import Icon from "../../atoms/Icon/Icon";

interface InputWithIconProps extends InputProps {
  iconName: string;
  iconSize?: "small" | "medium" | "large";
  iconColor?: string;
  iconClassName?: string;
  onIconClick?: () => void;
}

const InputWithIcon: React.FC<InputWithIconProps> = ({
  iconName,
  iconSize = "medium",
  iconColor = "text-black",
  iconClassName,
  onIconClick,
  ...inputProps
}) => {
  return (
    <div className="relative flex items-center mb-4">
      <Input {...inputProps} customClass="pr-10" />
      <div className="absolute right-0 pr-3 cursor-pointer" onClick={onIconClick}>
        <Icon
          iconName={iconName}
          iconSize={iconSize}
          iconColor={iconColor}
          className={iconClassName}
        />
      </div>
    </div>
  );
};

export default InputWithIcon;
