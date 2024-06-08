// src/components/pages/LoginPage.tsx
import React from 'react';
import LoginForm from '../../organisms/LoginForm/LoginForm';

const LoginPage: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100">
    <LoginForm />
  </div>
);

export default LoginPage;
