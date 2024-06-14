import React, { useState } from "react";
import LoginForm from "../../components/organisms/LoginForm/LoginForm";
import Label from "../../components/atoms/Label/Label";
import Image from "../../components/atoms/Image/Image";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

interface Credentials {
  username: string;
  password: string;
}

const Login: React.FC = () => {
  const [credentials, setCredentials] = useState<Credentials>({ username: "", password: "" });
  const [loginError, setLoginError] = useState<string>("");
  const navigate = useNavigate();

  const { user, isLoading, isError, revalidate } = useAuth(
    credentials.username,
    credentials.password
  );

  const handleLogin = async (username: string, password: string) => {
    setCredentials({ username, password });
    revalidate();

    if (user) {
      console.log("Login successful");
      navigate("/dashboard");
    } else if (isError) {
      setLoginError("Email ou palavra-passe incorretos");
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-customBlack">
      <div className="flex flex-row items-center py-[3.5dvw]">
        <div className="h-[65lvh] w-[30dvw]">
          <LoginForm
            onLogin={handleLogin}
            titleText="Solução Bancária Integrada"
            loginError={loginError}
          />
        </div>
        <div className="bg-pwc-gray max-w-xxl w-[25dvw] h-[80lvh] rounded-lg border-8 border-white">
          <div className="px-[4dvw] h-full">
            <Image imageName="login-image" imageSize="auto" />
          </div>
        </div>
      </div>
      <div className="content-center">
        <Label
          text="© 2024 PwC. PwC refere-se à rede e a uma ou mais de suas firmas membro. Todos os direitos reservados."
          customClass="text-white text-xs"
        />
      </div>
    </div>
  );
};

export default Login;
