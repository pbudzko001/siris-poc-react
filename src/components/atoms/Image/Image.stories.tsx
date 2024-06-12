import { StoryFn, Meta } from "@storybook/react";
import Image, { ImageProps } from "./Image";

export default {
  title: "Atoms/Image",
  component: Image,
  argTypes: {
    imageName: {
      control: "text", // Control for imageName prop
    },
    imageSize: {
      control: { type: "select", options: ["small", "medium", "large"] }, // Select control for predefined sizes
    },
    customSize: {
      control: "text", // Text input for custom size
    },
    className: {
      control: "text", // Text input for custom class names
    },
    onClick: { action: "clicked" }, // Action logger for click events
  },
} as Meta;

const Template: StoryFn<ImageProps> = (args) => <Image {...args} />;

export const DynamicProps = Template.bind({});
DynamicProps.args = {
  imageName: "example-image", // Default image name
  imageSize: "medium", // Default size
  customSize: "", // No custom size by default
  className: "", // No additional class names by default
};

// Additional static examples for quick reference

export const Small = Template.bind({});
Small.args = {
  imageName: "example-image",
  imageSize: "small",
};

export const Medium = Template.bind({});
Medium.args = {
  imageName: "example-image",
  imageSize: "medium",
};

export const Large = Template.bind({});
Large.args = {
  imageName: "example-image",
  imageSize: "large",
};

export const CustomSize = Template.bind({});
CustomSize.args = {
  imageName: "example-image",
  customSize: "h-16 w-16", // Custom size example
};

export const WithClassName = Template.bind({});
WithClassName.args = {
  imageName: "example-image",
  imageSize: "medium",
  className: "rounded-full border border-gray-500",
};
