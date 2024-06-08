import React, { useState } from "react";
import LoginForm, { LoginFormProps } from "../../organisms/LoginForm/LoginForm";

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleLogin = (username: string, password: string) => {
    // Handle login logic
    console.log("Logging in with", username, password);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <LoginForm onLogin={handleLogin} />
    </div>
  );
};

export default Login;
