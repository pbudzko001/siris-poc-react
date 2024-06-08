import { Meta, StoryFn } from "@storybook/react";
import Label, { LabelProps } from "./Label";

export default {
  title: "Atoms/Label",
  component: Label,
  argTypes: {
    size: {
      control: {
        type: "select",
        options: ["small", "medium", "large"],
      },
    },
  },
} as Meta;

const Template: StoryFn<LabelProps> = (args) => <Label {...args} />;

export const Small = Template.bind({});
Small.args = {
  text: "Small Label",
  size: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  text: "Medium Label",
  size: "medium",
};

export const Large = Template.bind({});
Large.args = {
  text: "Large Label",
  size: "large",
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  text: "Custom Class Label",
  className: "text-blue-500",
  size: "medium",
};
