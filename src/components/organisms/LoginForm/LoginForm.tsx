import React from "react";
import Title, { TitleProps } from "../../atoms/Title/Title";
import Link, { LinkProps } from "../../atoms/Link/Link";
import Button, { ButtonProps } from "../../atoms/Button/Button";
import Input, { InputProps } from "../../atoms/Input/Input";
import classNames from "classnames";

export interface LoginFormProps extends InputProps, ButtonProps {
  customClass?: string;
  id?: string;
}

const InputWithLabel: React.FC<LoginFormProps> = ({
  text,
  size,
  placeholder,
  disabled,
  helpText,
  errorMessage,
  customClass,
  onChange,
}) => {
  const baseStyle = "mb-4";
  const classes = classNames(baseStyle, customClass);
  return (
    <div className={classes}>
      <Label text={text} size={size} />
      <Input
        placeholder={placeholder}
        disabled={disabled}
        helpText={helpText}
        errorMessage={errorMessage}
        onChange={onChange}
      />
    </div>
  );
};

export default InputWithLabel;
