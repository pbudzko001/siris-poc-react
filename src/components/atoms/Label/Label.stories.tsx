import { StoryFn, Meta } from "@storybook/react";
import Label from "./Label";

export default {
  title: "Atoms/Label",
  component: Label,
} as Meta<typeof Label>;

const Template: StoryFn<typeof Label> = (args) => <Label {...args} />;

export const Default = Template.bind({});
Default.args = {
  htmlFor: "email",
  text: "Email",
};
