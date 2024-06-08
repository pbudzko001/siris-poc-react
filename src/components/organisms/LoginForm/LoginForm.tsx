// File path: src/components/LoginForm/LoginForm.tsx

import React, { useState, useCallback } from "react";
import Title from "../../atoms/Title/Title";
import Link from "../../atoms/Link/Link";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
import classNames from "classnames";

export interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
  customClass?: string;
  id?: string;
  url: string;
  linkText: string;
  titleText: string;
}

const LoginForm: React.FC<LoginFormProps> = ({
  onLogin,
  customClass,
  url,
  linkText,
  titleText,
}) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInputChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { id, value } = e.target;
      setFormData((prev) => ({ ...prev, [id]: value }));
    },
    []
  );

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      onLogin(formData.email, formData.password);
    },
    [formData, onLogin]
  );

  const baseStyle = "bg-white p-8 rounded shadow-md w-full max-w-md";
  const classes = classNames(baseStyle, customClass);

  return (
    <div className={classes}>
      <Title level={2} titleText={titleText} customClass="mb-6" />
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <Input
            id="email"
            inputType="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleInputChange}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <Input
            id="password"
            inputType="password"
            value={formData.password}
            placeholder="Enter your password"
            onChange={handleInputChange}
          />
        </div>
        <div className="flex items-center justify-between mt-4">
          <Button buttonType="submit" label="Sign in" />
          <Link url={url} linkText={linkText} />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
