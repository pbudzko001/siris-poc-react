import { StoryFn, Meta } from "@storybook/react";
import Input from "./Input";

export default {
  title: "Atoms/Input",
  component: Input,
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const EmailInput = Template.bind({});
EmailInput.args = {
  id: "email",
  type: "email",
  value: "",
  placeholder: "Enter your email",
  onChange: (e) => console.log(e.target.value),
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  id: "password",
  type: "password",
  value: "",
  placeholder: "Enter your password",
  onChange: (e) => console.log(e.target.value),
};
