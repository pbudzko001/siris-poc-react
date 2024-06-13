import React, { useState } from "react";
import LoginForm from "../../organisms/LoginForm/LoginForm";
import Label from "../../atoms/Label/Label";
import Image from "../../atoms/Image/Image";

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
    <div className="min-h-screen flex flex-col items-center justify-evenly bg-customBlack">
      <div className="flex flex-row items-center">
        <div className="h-[65lvh] w-[30dvw]">
          <LoginForm
            url="/forgot-password"
            linkText="Forgot your password?"
            onLogin={handleLogin}
            titleText="Solução Bancária Integrada"
          />
        </div>
        <div className=" bg-pwc-gray max-w-lg w-[30dvw] h-[80lvh] rounded-lg border-8  border-white">
          <div className="px-[3rem] py-[7rem] h-full">
            <Image imageName="login-image" imageSize="auto"></Image>
          </div>
        </div>
      </div>

      <div className="mt-4 content-between">
        <Label
          text="© 2024 PwC. PwC refere-se à rede e a uma ou mais de suas firmas membro. Todos os direitos reservados."
          customClass="text-white text-xs"
        ></Label>
      </div>
    </div>
  );
};

export default Login;
