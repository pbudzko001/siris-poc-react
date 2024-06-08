import { StoryFn, Meta } from "@storybook/react";
import Input, { InputProps } from "./Input";

export default {
  title: "Atoms/Input",
  component: Input,
} as Meta;

const Template: StoryFn<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  placeholder: "Enter text",
};

export const Disabled = Template.bind({});
Disabled.args = {
  placeholder: "Enter text",
  disabled: true,
};

export const WithHelpText = Template.bind({});
WithHelpText.args = {
  placeholder: "Enter text",
  helpText: "This is a help text.",
};

export const WithErrorMessage = Template.bind({});
WithErrorMessage.args = {
  placeholder: "Enter text",
  errorMessage: "This is an error message.",
};

export const OnChange = Template.bind({});
OnChange.args = {
  placeholder: "Enter text",
  onChange: (e) => console.log(e.target.value),
};
