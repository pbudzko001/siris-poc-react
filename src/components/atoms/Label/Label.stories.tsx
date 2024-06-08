import { StoryFn, Meta } from "@storybook/react";
import Label from "./Label";

export default {
  title: "Atoms/Label",
  component: Label,
} as Meta<typeof Label>;

const Template: StoryFn<typeof Label> = (args) => <Label {...args} />;

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

export const SmallError = Template.bind({});
SmallError.args = {
  text: "Small Label",
  size: "small",
  errorMessage: "This is an error message",
};

export const MediumError = Template.bind({});
MediumError.args = {
  text: "Medium Label",
  size: "medium",
  errorMessage: "This is an error message",
};

export const LargeError = Template.bind({});
LargeError.args = {
  text: "Large Label",
  size: "large",
  errorMessage: "This is an error message",
};
