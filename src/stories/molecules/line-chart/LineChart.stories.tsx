import { ComponentStory, ComponentMeta } from "@storybook/react";
import Line from "./LineChart";

export default {
  title: "Molecules/Line chart",
  component: Line,
  argTypes: {},
} as ComponentMeta<typeof Line>;

const Template: ComponentStory<typeof Line> = (args) => {
  return <Line {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  dots: [{ value: 0 }, { value: 20 }, { value: 100 }, { value: 5 }],
};
