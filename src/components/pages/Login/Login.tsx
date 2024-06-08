import LoginForm, { LoginFormProps } from "../../organisms/LoginForm/LoginForm";

const Login: React.FC = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <LoginForm></LoginForm>
    </div>
  );
};

export default Login;
