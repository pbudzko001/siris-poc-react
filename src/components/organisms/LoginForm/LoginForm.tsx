import React, { useState } from "react";
import Title, { TitleProps } from "../../atoms/Title/Title";
import Link, { LinkProps } from "../../atoms/Link/Link";
import Button, { ButtonProps } from "../../atoms/Button/Button";
import Input, { InputProps } from "../../atoms/Input/Input";
import classNames from "classnames";

export interface LoginFormProps
  extends InputProps,
    ButtonProps,
    TitleProps,
    LinkProps {
  onLogin: (username: string, password: string) => void;
  customClass?: string;
  id?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, customClass }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    onLogin(email, password);
  };

  const baseStyle = "bg-white p-8 rounded shadow-md w-full max-w-md";
  const classes = classNames(baseStyle, customClass);
  return (
    <div className={classes}>
      <Title level={2} text="Sign in as employee" customClass="mb-6"></Title>
      <form onSubmit={handleSubmit} className="w-full max-w-sm">
        <Input
          id="email"
          type="email"
          value={email}
          placeholder="Enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          id="password"
          type="password"
          value={password}
          placeholder="Enter your password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div className="flex items-center justify-between">
          <Button type="submit" label="Sign in" />
          <Link href="/forgot-password" text="forgot your password?" />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
