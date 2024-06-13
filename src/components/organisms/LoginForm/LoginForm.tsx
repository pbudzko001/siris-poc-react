// File path: src/components/LoginForm/LoginForm.tsx

import React, { useState, useCallback } from "react";
import Title from "../../atoms/Title/Title";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
import InputWithIcon from "../../molecules/InputWithIcon/InputPassword";
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
    "bg-white p-8 rounded-tl-2xl rounded-bl-2xl shadow-md w-full h-full max-w-xl flex flex-col items-center justify-around";
  const classes = classNames(baseStyle, customClass);

  return (
    <div className={classes}>
      <div className="flex justify-center mb-4">
        <Image imageSize="auto" imageName="pwc-logo"></Image>
      </div>
      <Title level={3} titleText={titleText} customClass="mb-6" />
      <form onSubmit={handleSubmit} className="w-full max-w-sm flex flex-col justify-evenly">
        <div className="mb-4">
          <Label text="Email" customClass="font-bold"></Label>
          <Input
            id="email"
            inputType="email"
            value={formData.email}
            placeholder="Enter your email"
            onChange={handleInputChange}
          />
        </div>
        <div className="mb-4">
          <div>
            <Label text="Palavra-passe" customClass="font-bold"></Label>
          </div>
          <div>
            <InputWithIcon
              id="password"
              inputType="password"
              value={formData.password}
              placeholder="Enter your password"
              onChange={handleInputChange}
              iconName="view-off"
              altIconName="view"
            />
          </div>
        </div>
        <div className="flex items-center justify-between mt-4">
          <Button buttonType="submit" label="ENTRAR" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
