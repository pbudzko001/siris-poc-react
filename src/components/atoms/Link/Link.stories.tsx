import { Meta, StoryFn } from "@storybook/react";
import Link, { LinkProps } from "./Link";

export default {
  title: "Atoms/Link",
  component: Link,
} as Meta;

const Template: StoryFn<LinkProps> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  href: "#",
  text: "Default Link",
};

export const NewTab = Template.bind({});
NewTab.args = {
  href: "#",
  text: "Open in New Tab",
  newTab: true,
};

export const CustomClass = Template.bind({});
CustomClass.args = {
  href: "#",
  text: "Custom Class Link",
  className: "text-red-500",
};
