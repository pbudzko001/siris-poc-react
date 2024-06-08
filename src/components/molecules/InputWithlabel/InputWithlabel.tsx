// src/components/InputWithLabel.tsx

import React from "react";
import Label from "../../atoms/Label/Label";
import Input from "../../atoms/Input/Input";

interface InputWithLabelProps {
  label: string;
  inputPlaceholder: string;
  size?: "small" | "medium" | "large";
  variant?: "primary" | "secondary";
  disabled?: boolean;
  required?: boolean;
  helpText?: string;
  errorMessage?: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  label,
  inputPlaceholder,
  size = "medium",
  variant = "primary",
  disabled = false,
  required = false,
  helpText,
  errorMessage,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <Label text={label} size={size} />
      <Input
        placeholder={inputPlaceholder}
        size={size}
        variant={variant}
        disabled={disabled}
        required={required}
        helpText={helpText}
        errorMessage={errorMessage}
        onChange={onChange}
      />
    </div>
  );
};

export default InputWithLabel;
