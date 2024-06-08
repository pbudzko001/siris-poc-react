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

export const PrimaryMediumActive = Template.bind({});
PrimaryMediumActive.args = {
  placeholder: "Primary Medium Active",
  variant: "primary",
  size: "medium",
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

export const SecondaryMediumActive = Template.bind({});
SecondaryMediumActive.args = {
  placeholder: "Secondary Medium Active",
  variant: "secondary",
  size: "medium",
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

export const PrimaryMediumDisabled = Template.bind({});
PrimaryMediumDisabled.args = {
  placeholder: "Primary Medium Disabled",
  variant: "primary",
  size: "medium",
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

export const SecondaryMediumDisabled = Template.bind({});
SecondaryMediumDisabled.args = {
  placeholder: "Secondary Medium Disabled",
  variant: "secondary",
  size: "medium",
  disabled: true,
};

export const SecondaryLargeDisabled = Template.bind({});
SecondaryLargeDisabled.args = {
  placeholder: "Secondary Large Disabled",
  variant: "secondary",
  size: "large",
  disabled: true,
};

export const SmallError = Template.bind({});
SmallError.args = {
  placeholder: "Small Input",
  size: "small",
  variant: "primary",
  disabled: false,
  errorMessage: "This is an error message",
};

export const MediumError = Template.bind({});
MediumError.args = {
  placeholder: "Medium Input",
  size: "medium",
  variant: "primary",
  disabled: false,
  errorMessage: "This is an error message",
};

export const LargeError = Template.bind({});
LargeError.args = {
  placeholder: "Large Input",
  size: "large",
  variant: "primary",
  disabled: false,
  errorMessage: "This is an error message",
};

export const WithHelpText = Template.bind({});
WithHelpText.args = {
  placeholder: "Input with Help Text",
  size: "medium",
  variant: "primary",
  disabled: false,
  helpText: "This is some helper text",
};

export const RequiredField = Template.bind({});
RequiredField.args = {
  placeholder: "Required Input",
  size: "medium",
  variant: "primary",
  disabled: false,
  required: true,
};
