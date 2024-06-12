// File path: src/components/LoginForm/LoginForm.tsx

import React, { useState, useCallback } from "react";
import Title from "../../atoms/Title/Title";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
import InputWithIcon from "../../molecules/InputWithIcon/InputWithIcon";
import Image from "../../atoms/Image/Image";
import Label from "../../atoms/Label/Label";
import classNames from "classnames";

export interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
  customClass?: string;
  id?: string;
  url: string;
  linkText: string;
  titleText: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, customClass, titleText }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  }, []);

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      onLogin(formData.email, formData.password);
    },
    [formData, onLogin]
  );

  const baseStyle =
    "bg-white p-8 rounded shadow-md w-full max-w-md flex flex-col items-center justify-center";
  const classes = classNames(baseStyle, customClass);

  return (
    <div className={classes}>
      <div className="flex justify-center mb-4">
        <Image imageSize="small" imageName="pwc-logo"></Image>
      </div>
      <Title level={3} titleText={titleText} customClass="mb-6" />
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <div className="mb-4">
          <Label text="Email"></Label>
          <Input
            id="email"
            inputType="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <Label text="Palavra-passe"></Label>
          <InputWithIcon
            id="password"
            inputType="password"
            value={formData.password}
            placeholder="Enter your password"
            onChange={handleInputChange}
            iconName="view"
          />
        </div>
        <div className="flex items-center justify-between mt-4">
          <Button buttonType="submit" label="ENTRAR" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
