// path: src/components/InputWithLabel.tsx

import React from "react";
import Label, { LabelProps } from "../../atoms/Label/Label";
import Input, { InputProps } from "../../atoms/Input/Input";

export interface InputWithLabelProps extends InputProps, LabelProps {
  htmlFor: string;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  text,
  size,
  className,
  placeholder,
  disabled,
  helpText,
  errorMessage,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <Label text={text} size={size} className={className} />
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
