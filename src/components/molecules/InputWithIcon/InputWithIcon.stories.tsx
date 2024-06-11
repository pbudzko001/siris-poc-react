import { Meta, StoryFn } from "@storybook/react";
import InputWithIcon, { InputWithIconProps } from "./InputWithIcon";

export default {
  title: "Molecules/InputWithIcon",
  component: InputWithIcon,
  argTypes: {
    iconName: { control: "text" },
    iconSize: { control: { type: "select", options: ["small", "medium", "large"] } },
    iconColor: { control: "color" },
    onIconClick: { action: "clicked" },
    placeholder: { control: "text" },
    disabled: { control: "boolean" },
    inputType: { control: { type: "select", options: ["text", "password"] } },
  },
} as Meta;

const Template: StoryFn<InputWithIconProps> = (args) => <InputWithIcon {...args} />;

export const Default = Template.bind({});
Default.args = {
  iconName: "eye",
  iconSize: "medium",
  iconColor: "text-gray-500",
  placeholder: "Enter your password",
};

export const WithCustomIcon = Template.bind({});
WithCustomIcon.args = {
  iconName: "lock",
  iconSize: "large",
  iconColor: "text-red-500",
  placeholder: "Enter your secure text",
};

export const Disabled = Template.bind({});
Disabled.args = {
  iconName: "eye",
  iconSize: "medium",
  iconColor: "text-gray-500",
  placeholder: "Disabled input",
  disabled: true,
};

export const CustomPlaceholder = Template.bind({});
CustomPlaceholder.args = {
  iconName: "eye",
  iconSize: "medium",
  iconColor: "text-gray-500",
  placeholder: "Custom placeholder text",
};

export const PasswordVisible = Template.bind({});
PasswordVisible.args = {
  iconName: "eye",
  iconSize: "medium",
  iconColor: "text-gray-500",
  placeholder: "Toggle password visibility",
  inputType: "password",
};
