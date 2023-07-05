import { ComponentStory, ComponentMeta } from "@storybook/react";
import Mobile from "./Mobile";

export default {
  title: "Atoms/Mobile",
  component: Mobile,
} as ComponentMeta<typeof Mobile>;

const Template: ComponentStory<typeof Mobile> = (args) => (
  <>
    <span>Text below is visible on mobile:</span>
    <Mobile {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  children: <>Show this on mobile</>,
};
