import { ComponentStory, ComponentMeta } from "@storybook/react";
import Bar from "./BarChart";

export default {
  title: "Molecules/Bar chart",
  component: Bar,
  argTypes: {},
} as ComponentMeta<typeof Bar>;

const Template: ComponentStory<typeof Bar> = (args) => {
  return <Bar {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  bars: [
    { value: 20 },
    { value: 50 },
    { value: 10 },
    { value: 97 },
    { value: 10 },
    { value: 3 },
    { value: 7 },
    { value: 17 },
    { value: 27 },
    { value: 37 },
    { value: 47 },
    { value: 57 },
    { value: 87 },
    { value: 98 },
  ],
};
