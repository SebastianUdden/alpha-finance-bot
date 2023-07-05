import { ComponentStory, ComponentMeta } from "@storybook/react";
import Desktop from "./Desktop";

export default {
  title: "Atoms/Desktop",
  component: Desktop,
} as ComponentMeta<typeof Desktop>;

const Template: ComponentStory<typeof Desktop> = (args) => (
  <>
    <span>Text below is visible on desktop:</span>
    <Desktop {...args} />
  </>
);

export const Default = Template.bind({});
Default.args = {
  children: <>Show this on desktop</>,
};
