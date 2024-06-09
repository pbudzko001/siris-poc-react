import { Meta, StoryFn } from "@storybook/react";
import Icon, { IconProps } from "./Icon";

export default {
  title: "Atoms/Icon",
  component: Icon,
  argTypes: {
    icon: { control: "text" },
    size: { control: "text" },
    color: { control: "color" },
    onClick: { action: "clicked" },
  },
} as Meta;

const Template: StoryFn<IconProps> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  iconName: "home",
  iconSize: "small",
  iconColor: "text-gray-500",
};

export const Large = Template.bind({});
Large.args = {
  iconName: "home",
  iconSize: "large",
  iconColor: "text-blue-500",
};

export const Red = Template.bind({});
Red.args = {
  iconName: "home",
  iconSize: "small",
  iconColor: "text-red-500",
};

export const Clickable = Template.bind({});
Clickable.args = {
  iconName: "home",
  iconSize: "small",
  iconColor: "text-green-500",
  onClick: () => alert("Icon clicked!"),
};
