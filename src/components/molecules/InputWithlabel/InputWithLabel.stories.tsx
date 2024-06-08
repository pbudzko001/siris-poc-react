import { StoryFn, Meta } from "@storybook/react";
import InputWithLabel from "./InputWithlabel";

export default {
  title: "Molecules/InputWithLabel",
  component: InputWithLabel,
} as Meta<typeof InputWithLabel>;

const Template: StoryFn<typeof InputWithLabel> = (args) => (
  <InputWithLabel {...args} />
);

export const EmailInput = Template.bind({});
EmailInput.args = {
  id: "email",
  label: "Email",
  type: "email",
  value: "",
  placeholder: "Enter your email",
  onChange: (e) => console.log(e.target.value),
};

export const PasswordInput = Template.bind({});
PasswordInput.args = {
  id: "password",
  label: "Password",
  type: "password",
  value: "",
  placeholder: "Enter your password",
  onChange: (e) => console.log(e.target.value),
};
