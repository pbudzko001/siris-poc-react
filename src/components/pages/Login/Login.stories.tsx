// src/components/pages/Login/Login.stories.tsx

import { Meta, StoryFn } from "@storybook/react";
import Login from "./Login";

export default {
  title: "Pages/Login",
  component: Login,
} as Meta;

const Template: StoryFn<LoginProps> = (args) => <Login {...args} />;

export const Default = Template.bind({});
Default.args = {
  // Add the default props here
};

export const WithError = Template.bind({});
WithError.args = {
  // Add props that simulate an error state
};
