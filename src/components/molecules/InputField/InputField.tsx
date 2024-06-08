// src/components/molecules/InputField.tsx
import React from 'react';
import Input from '../../atoms/Input/Input';

interface InputFieldProps {
  type: 'text' | 'password' | 'email';
  placeholder: string;
  label: string;
}

const InputField: React.FC<InputFieldProps> = ({ type, placeholder, label }) => (
  <div className="mb-4">
    <label className="block mb-1">{label}</label>
    <Input type={type} placeholder={placeholder} />
  </div>
);

export default InputField;
