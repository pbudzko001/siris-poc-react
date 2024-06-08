import { StoryFn, Meta } from "@storybook/react";
import Input from "./Input";

export default {
  title: "Atoms/Input",
  component: Input,
  argTypes: {
    onChange: { action: "changed" },
  },
} as Meta<typeof Input>;

const Template: StoryFn<typeof Input> = (args) => <Input {...args} />;

export const PrimarySmallActive = Template.bind({});
PrimarySmallActive.args = {
  placeholder: "Primary Small Active",
  variant: "primary",
  size: "small",
  disabled: false,
};

export const PrimaryLargeActive = Template.bind({});
PrimaryLargeActive.args = {
  placeholder: "Primary Large Active",
  variant: "primary",
  size: "large",
  disabled: false,
};

export const SecondarySmallActive = Template.bind({});
SecondarySmallActive.args = {
  placeholder: "Secondary Small Active",
  variant: "secondary",
  size: "small",
  disabled: false,
};

export const SecondaryLargeActive = Template.bind({});
SecondaryLargeActive.args = {
  placeholder: "Secondary Large Active",
  variant: "secondary",
  size: "large",
  disabled: false,
};

export const PrimarySmallDisabled = Template.bind({});
PrimarySmallDisabled.args = {
  placeholder: "Primary Small Disabled",
  variant: "primary",
  size: "small",
  disabled: true,
};

export const PrimaryLargeDisabled = Template.bind({});
PrimaryLargeDisabled.args = {
  placeholder: "Primary Large Disabled",
  variant: "primary",
  size: "large",
  disabled: true,
};

export const SecondarySmallDisabled = Template.bind({});
SecondarySmallDisabled.args = {
  placeholder: "Secondary Small Disabled",
  variant: "secondary",
  size: "small",
  disabled: true,
};

export const SecondaryLargeDisabled = Template.bind({});
SecondaryLargeDisabled.args = {
  placeholder: "Secondary Large Disabled",
  variant: "secondary",
  size: "large",
  disabled: true,
};
