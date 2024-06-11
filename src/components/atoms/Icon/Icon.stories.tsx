import { Meta, StoryFn } from "@storybook/react";
import Icon, { IconProps } from "./Icon";

// Define default export metadata
export default {
  title: "Atoms/Icon",
  component: Icon,
  argTypes: {
    iconName: { control: "text" },
    iconSize: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
    iconColor: { control: "text" },
    className: { control: "text" },
    onClick: { action: "clicked" },
  },
} as Meta;

// Create a template for the Icon component
const Template: StoryFn<IconProps> = (args) => <Icon {...args} />;

// Define stories for different configurations
export const Small = Template.bind({});
Small.args = {
  iconName: "example-icon",
  iconSize: "small",
  iconColor: "text-gray-500",
};

export const Medium = Template.bind({});
Medium.args = {
  iconName: "example-icon",
  iconSize: "medium",
  iconColor: "text-blue-500",
};

export const Large = Template.bind({});
Large.args = {
  iconName: "example-icon",
  iconSize: "large",
  iconColor: "text-green-500",
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  iconName: "example-icon",
  className: "bg-yellow-200 p-2 rounded",
};

export const WithClickHandler = Template.bind({});
WithClickHandler.args = {
  iconName: "example-icon",
  iconSize: "medium",
  iconColor: "text-black",
  onClick: () => alert("Icon clicked!"),
};
