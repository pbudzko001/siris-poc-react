import { Meta, StoryFn } from "@storybook/react";
import InputWithLabel, { InputWithLabelProps } from "./InputWithlabel";

export default {
  title: "Molecules/InputWithLabel",
  component: InputWithLabel,
} as Meta;

const Template: StoryFn<InputWithLabelProps> = (args) => (
  <InputWithLabel {...args} />
);

export const Default = Template.bind({});
Default.args = {
  text: "Default Label",
  placeholder: "Enter text...",
};

export const WithHelpText = Template.bind({});
WithHelpText.args = {
  text: "Label with Help Text",
  placeholder: "Enter text...",
  helpText: "This is a help text",
};

export const WithErrorMessage = Template.bind({});
WithErrorMessage.args = {
  text: "Label with Error",
  placeholder: "Enter text...",
  errorMessage: "This is an error message",
};

export const Disabled = Template.bind({});
Disabled.args = {
  text: "Disabled Input",
  htmlFor: "disabled",
  placeholder: "Cannot enter text...",
  disabled: true,
};
