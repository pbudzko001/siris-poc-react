import React, { useState } from "react";
import LoginForm, { LoginFormProps } from "../../organisms/LoginForm/LoginForm";

interface Credentials {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState<Credentials>({
    username: "",
    password: "",
  });

  const handleLogin = async (username: string, password: string) => {
    try {
      // Replace with actual login logic
      const response = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();
      console.log("Login successful:", data);
      // Handle successful login (e.g., redirect to dashboard)
    } catch (error) {
      console.error("Login error:", error);
      // Handle login error (e.g., display error message)
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <LoginForm
        url="/forgot-password"
        linkText="Forgot your password?"
        onLogin={handleLogin}
        titleText="Solução Bancária Integrada"
      />
    </div>
  );
};

export default Login;
