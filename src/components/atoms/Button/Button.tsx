// src/components/atoms/Button.tsx
import React from 'react';

interface ButtonProps {
  label: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button' }) => (
  <button
    type={type}
    onClick={onClick}
    className="bg-teal-500 text-white py-2 px-4 rounded"
  >
    {label}
  </button>
);

export default Button;
