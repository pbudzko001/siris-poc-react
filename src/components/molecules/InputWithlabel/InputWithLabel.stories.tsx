import { StoryFn, Meta } from "@storybook/react";
import InputWithLabel from "./InputWithlabel";

export default {
  title: "Molecules/InputWithLabel",
  component: InputWithLabel,
  argTypes: {
    onChange: { action: "changed" },
  },
} as Meta<typeof InputWithLabel>;

const Template: StoryFn<typeof InputWithLabel> = (args) => (
  <InputWithLabel {...args} />
);

export const PrimarySmall = Template.bind({});
PrimarySmall.args = {
  label: "Small Primary Label",
  inputPlaceholder: "Primary Small Input",
  size: "small",
  variant: "primary",
  disabled: false,
};

export const PrimaryMedium = Template.bind({});
PrimaryMedium.args = {
  label: "Medium Primary Label",
  inputPlaceholder: "Primary Medium Input",
  size: "medium",
  variant: "primary",
  disabled: false,
};

export const PrimaryLarge = Template.bind({});
PrimaryLarge.args = {
  label: "Large Primary Label",
  inputPlaceholder: "Primary Large Input",
  size: "large",
  variant: "primary",
  disabled: false,
};

export const SecondarySmall = Template.bind({});
SecondarySmall.args = {
  label: "Small Secondary Label",
  inputPlaceholder: "Secondary Small Input",
  size: "small",
  variant: "secondary",
  disabled: false,
};

export const SecondaryMedium = Template.bind({});
SecondaryMedium.args = {
  label: "Medium Secondary Label",
  inputPlaceholder: "Secondary Medium Input",
  size: "medium",
  variant: "secondary",
  disabled: false,
};

export const SecondaryLarge = Template.bind({});
SecondaryLarge.args = {
  label: "Large Secondary Label",
  inputPlaceholder: "Secondary Large Input",
  size: "large",
  variant: "secondary",
  disabled: false,
};

export const PrimarySmallDisabled = Template.bind({});
PrimarySmallDisabled.args = {
  label: "Small Primary Label",
  inputPlaceholder: "Primary Small Input",
  size: "small",
  variant: "primary",
  disabled: true,
};

export const PrimaryMediumDisabled = Template.bind({});
PrimaryMediumDisabled.args = {
  label: "Medium Primary Label",
  inputPlaceholder: "Primary Medium Input",
  size: "medium",
  variant: "primary",
  disabled: true,
};

export const PrimaryLargeDisabled = Template.bind({});
PrimaryLargeDisabled.args = {
  label: "Large Primary Label",
  inputPlaceholder: "Primary Large Input",
  size: "large",
  variant: "primary",
  disabled: true,
};

export const SecondarySmallDisabled = Template.bind({});
SecondarySmallDisabled.args = {
  label: "Small Secondary Label",
  inputPlaceholder: "Secondary Small Input",
  size: "small",
  variant: "secondary",
  disabled: true,
};

export const SecondaryMediumDisabled = Template.bind({});
SecondaryMediumDisabled.args = {
  label: "Medium Secondary Label",
  inputPlaceholder: "Secondary Medium Input",
  size: "medium",
  variant: "secondary",
  disabled: true,
};

export const SecondaryLargeDisabled = Template.bind({});
SecondaryLargeDisabled.args = {
  label: "Large Secondary Label",
  inputPlaceholder: "Secondary Large Input",
  size: "large",
  variant: "secondary",
  disabled: true,
};

export const SmallError = Template.bind({});
SmallError.args = {
  label: "Small Label",
  inputPlaceholder: "Small Input",
  size: "small",
  variant: "primary",
  disabled: false,
  errorMessage: "This is an error message",
};

export const MediumError = Template.bind({});
MediumError.args = {
  label: "Medium Label",
  inputPlaceholder: "Medium Input",
  size: "medium",
  variant: "primary",
  disabled: false,
  errorMessage: "This is an error message",
};

export const LargeError = Template.bind({});
LargeError.args = {
  label: "Large Label",
  inputPlaceholder: "Large Input",
  size: "large",
  variant: "primary",
  disabled: false,
  errorMessage: "This is an error message",
};

export const WithHelpText = Template.bind({});
WithHelpText.args = {
  label: "Label with Help Text",
  inputPlaceholder: "Input with Help Text",
  size: "medium",
  variant: "primary",
  disabled: false,
  helpText: "This is some helper text",
};

export const RequiredField = Template.bind({});
RequiredField.args = {
  label: "Required Label",
  inputPlaceholder: "Required Input",
  size: "medium",
  variant: "primary",
  disabled: false,
  required: true,
};
