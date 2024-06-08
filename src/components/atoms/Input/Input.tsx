// src/components/atoms/Input.tsx
import React from 'react';

interface InputProps {
  type: 'text' | 'password' | 'email';
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder }) => (
  <input
    type={type}
    placeholder={placeholder}
    className="border p-2 w-full rounded"
  />
);

export default Input;
