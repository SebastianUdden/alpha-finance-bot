import { ComponentStory, ComponentMeta } from "@storybook/react";
import MovingAverages from "./MovingAverages";

export default {
  title: "Molecules/MovingAverages",
  component: MovingAverages,
  argTypes: {},
} as ComponentMeta<typeof MovingAverages>;

const Template: ComponentStory<typeof MovingAverages> = (args) => {
  return <MovingAverages {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  movingAverage: 2,
  prices: [
    { open: 10, low: 10, high: 15, close: 10 },
    { open: 10, low: 10, high: 20, close: 20 },
    { open: 10, low: 10, high: 30, close: 30 },
    { open: 10, low: 10, high: 100, close: 50 },
  ],
};
