import React from "react";
import Label from "../../atoms/Label/Label";
import Input from "../../atoms/Input/Input";

interface InputWithLabelProps {
  id: string;
  label: string;
  type: string;
  value: string;
  placeholder?: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputWithLabel: React.FC<InputWithLabelProps> = ({
  id,
  label,
  type,
  value,
  placeholder,
  onChange,
}) => {
  return (
    <div className="mb-4">
      <Label htmlFor={id} text={label} />
      <Input
        id={id}
        type={type}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
};

export default InputWithLabel;
