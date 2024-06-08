import { StoryFn, Meta } from "@storybook/react";
import Button from "./Button";

export default {
  title: "Atoms/Button",
  component: Button,
  argTypes: {
    onClick: { action: "clicked" },
  },
} as Meta<typeof Button>;

const Template: StoryFn<typeof Button> = (args) => <Button {...args} />;

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  label: "Primary Small Button",
  variant: "primary",
  size: "small",
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  label: "Primary Large Button",
  variant: "primary",
  size: "large",
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
  label: "Secondary Small Button",
  variant: "secondary",
  size: "small",
};

export const SecondaryLarge = Template.bind({});
SecondaryLarge.args = {
  label: "Secondary Large Button",
  variant: "secondary",
  size: "large",
};
