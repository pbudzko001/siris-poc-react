// src/components/organisms/LoginForm.tsx
import React from "react";
import InputField from "../../molecules/InputField/InputField";
import ButtonGroup from "../../molecules/ButtonGroup/ButtonGroup";

const LoginForm: React.FC = () => (
  <form className="w-full max-w-sm mx-auto mt-10 bg-white p-6 rounded-lg shadow-md">
    <h2 className="text-2xl mb-6 text-center font-semibold text-gray-700">
      Sign in as employee
    </h2>
    <InputField type="email" placeholder="Email" label="Email" />
    <InputField type="password" placeholder="Password" label="Password" />
    <ButtonGroup />
  </form>
);

export default LoginForm;
