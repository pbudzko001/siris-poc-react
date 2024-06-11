import { Meta, StoryFn } from "@storybook/react";
import Title, { TitleProps } from "./Title";

export default {
  title: "Atoms/Title",
  component: Title,
} as Meta;

const Template: StoryFn<TitleProps> = (args) => <Title {...args} />;

export const Heading1 = Template.bind({});
Heading1.args = {
  titleText: "Heading 1",
  level: 1,
};

export const Heading2 = Template.bind({});
Heading2.args = {
  titleText: "Heading 2",
  level: 2,
};

export const Heading3 = Template.bind({});
Heading3.args = {
  titleText: "Heading 3",
  level: 3,
};

export const Heading4 = Template.bind({});
Heading4.args = {
  titleText: "Heading 4",
  level: 4,
};

export const Heading5 = Template.bind({});
Heading5.args = {
  titleText: "Heading 5",
  level: 5,
};

export const Heading6 = Template.bind({});
Heading6.args = {
  titleText: "Heading 6",
  level: 6,
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  titleText: "Custom Class Title",
  level: 2,
  customClass: "titleText-blue-500",
};
