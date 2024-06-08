// src/components/pages/Login/Login.tsx
import React from "react";
import InputWithLabel from "../../molecules/InputWithlabel/InputWithlabel";
import Button from "../../atoms/Button/Button";
import Link from "../../atoms/Link/Link";

export interface LoginProps {
  username: string;
  password: string;
  onLogin: (username: string, password: string) => void;
  error?: string;
}

export const Login: React.FC<LoginProps> = ({
  username,
  password,
  onLogin,
  error,
}) => {
  const [user, setUser] = React.useState(username);
  const [pass, setPass] = React.useState(password);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(user, pass);
  };

  return (
    <form onSubmit={handleSubmit}>
      <InputWithLabel
        label="Username"
        type="text"
        value={user}
        onChange={(e) => setUser(e.target.value)}
        id={""}
      />
      <InputWithLabel
        label="Password"
        type="password"
        value={pass}
        onChange={(e) => setPass(e.target.value)}
        id={""}
      />
      {error && <div style={{ color: "red" }}>{error}</div>}
      <Button type="submit">Login</Button>
      <Link to="/forgot-password">Forgot Password?</Link>
    </form>
  );
};
