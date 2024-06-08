// path: src/components/InputWithLabel.tsx

import React from "react";
import Label, { LabelProps } from "../../atoms/Label/Label";
import Input, { InputProps } from "../../atoms/Input/Input";
import classNames from "classnames";

export interface InputWithLabelProps extends InputProps, LabelProps {
  customClass?: string;
  id?: string;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({
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
