import React, { useState } from "react";
import InputWithLabel from "../../molecules/InputWithlabel/InputWithlabel";
import Button from "../../atoms/Button/Button";
import Link from "../../atoms/Link/Link";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = () => {
    // Handle login logic
    console.log({ email, password });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6">Sign in as employee</h2>
        <form className="w-full max-w-sm">
          <InputWithLabel
            id="email"
            label="Email"
            type="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => setEmail(e.target.value)}
          />
          <InputWithLabel
            id="password"
            label="Password"
            type="password"
            value={password}
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="flex items-center justify-between">
            <Button label="Sign in" onClick={handleSubmit} />
            <Link to="/forgot-password" text="forgot your password?" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
