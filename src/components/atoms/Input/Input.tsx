// src/components/atoms/Input.tsx
import React, { useState } from "react";

interface InputProps {
  type: "text" | "password" | "email";
  placeholder: string;
}

const Input: React.FC<InputProps> = ({ type, placeholder }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordType = type === "password";

  return (
    <div className="relative">
      <input
        type={isPasswordType && showPassword ? "text" : type}
        placeholder={placeholder}
        className="border p-2 w-full rounded focus:outline-none focus:ring-2 focus:ring-teal-500"
      />
      {isPasswordType && (
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute inset-y-0 right-3 flex items-center cursor-pointer"
        >
          <svg
            className="w-5 h-5 text-gray-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {showPassword ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10S6.477 2 12 2c2.485 0 4.748.912 6.516 2.42m1.418 1.418a10.036 10.036 0 012.087 5.162M15 10l5 5m0-5l-5 5m0-5h-.01"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M13.875 18.825A10.05 10.05 0 0112 19c-5.523 0-10-4.477-10-10S6.477 2 12 2c2.485 0 4.748.912 6.516 2.42m1.418 1.418a10.036 10.036 0 012.087 5.162M15 10l5 5m0-5l-5 5m0-5h-.01"
              />
            )}
          </svg>
        </span>
      )}
    </div>
  );
};

export default Input;
