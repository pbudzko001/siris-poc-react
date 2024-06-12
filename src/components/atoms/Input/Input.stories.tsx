import { Meta, StoryFn } from "@storybook/react";
import Input, { InputProps } from "./Input";

export default {
  title: "Atoms/Input",
  component: Input,
  argTypes: {
    inputType: {
      control: {
        type: "select",
        options: ["text", "password", "email", "number"],
      },
    },
    value: { control: "text" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    errorMessage: { control: "text" },
    customClass: { control: "text" },
    id: { control: "text" },
    onChange: { action: "changed" },
  },
} as Meta;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  inputType: "text",
  value: "",
  placeholder: "Enter text",
  disabled: false,
};

export const Disabled = Template.bind({});
Disabled.args = {
  inputType: "text",
  value: "",
  placeholder: "Disabled input",
  disabled: true,
};

export const WithError = Template.bind({});
WithError.args = {
  inputType: "text",
  value: "",
  placeholder: "Input with error",
  errorMessage: "This field is required",
};

export const EmailInput = Template.bind({});
EmailInput.args = {
  inputType: "email",
  value: "",
  placeholder: "Enter your email",
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  inputType: "password",
  value: "",
  placeholder: "Enter your password",
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  inputType: "text",
  value: "",
  placeholder: "Custom class input",
  customClass: "custom-input-class",
};
