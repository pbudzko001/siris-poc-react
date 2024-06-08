import { StoryFn, Meta } from "@storybook/react";
import Link from "./Link";
import { MemoryRouter } from "react-router-dom";

export default {
  title: "Atoms/Link",
  component: Link,
  decorators: [
    (Story) => (
      <MemoryRouter initialEntries={["/"]}>
        <Story />
      </MemoryRouter>
    ),
  ],
} as Meta<typeof Link>;

const Template: StoryFn<typeof Link> = (args) => <Link {...args} />;

export const Default = Template.bind({});
Default.args = {
  to: "/forgot-password",
  text: "forgot your password?",
};
