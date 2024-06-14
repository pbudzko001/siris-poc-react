import React, { useState, useCallback } from "react";
import Title from "../../atoms/Title/Title";
import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";
import InputWithIcon from "../../molecules/InputWithIcon/InputPassword";
import Image from "../../atoms/Image/Image";
import Label from "../../atoms/Label/Label";
import classNames from "classnames";

export interface LoginFormProps {
  onLogin: (username: string, password: string) => void;
  customClass?: string;
  id?: string;
  titleText: string;
  loginError?: string;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin, customClass, titleText, loginError }) => {
  const [formData, setFormData] = useState({ email: "", password: "" });

  const handleInputChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  }, []);

  const handleSubmit = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();
      onLogin(formData.email, formData.password);
    },
    [formData, onLogin]
  );

  const baseStyle =
    "bg-white p-8 rounded-tl-2xl rounded-bl-2xl shadow-md w-full h-full flex flex-col items-center justify-center";
  const classes = classNames(baseStyle, customClass);

  const isFormValid = formData.email !== "" && formData.password !== "";

  return (
    <div className={classes}>
      <div className="mb-8 xl:mb-10 xxl:mb-12 xxl:h-[4rem] xl:h-[3rem] lg:h-[3rem] md:h-[2rem] sm:h-[2rem]">
        <Image imageSize="auto" imageName="pwc-logo"></Image>
      </div>
      <div>
        <Title
          level={3}
          titleText={titleText}
          customClass="mb-8 xl:mb-10 xxl:mb-12 text-center md:text-base xl:text-xl xxl:text-xxl"
        />
      </div>
      <form
        onSubmit={handleSubmit}
        className="lg:w-[18dvw] xl:w-[18dvw] xxl:h-[15dvh] max-w-md flex flex-col justify-evenly"
      >
        <div className="mb-3">
          <Label text="Email" customClass="font-bold"></Label>
          <Input
            id="email"
            inputType="email"
            value={formData.email}
            placeholder="Inserir e-mail"
            onChange={handleInputChange}
          />
          {loginError && <p className="text-errorRed text-[0.7rem]">{loginError}</p>}
        </div>
        <div className="mb-3">
          <div>
            <Label text="Palavra-passe" customClass="font-bold"></Label>
          </div>
          <div>
            <InputWithIcon
              id="password"
              inputType="password"
              value={formData.password}
              placeholder="Inserir a palavra-passe"
              onChange={handleInputChange}
              iconName="view-off"
              altIconName="view"
            />
            {loginError && <p className="text-errorRed text-[0.7rem]">{loginError}</p>}
          </div>
        </div>
        <div className=" mt-4 h-[12dvh]:">
          <Button buttonType="submit" label="ENTRAR" disabled={!isFormValid} />
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
