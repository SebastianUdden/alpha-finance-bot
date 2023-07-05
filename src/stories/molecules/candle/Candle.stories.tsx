import { ComponentStory, ComponentMeta } from "@storybook/react";
import Candle from "./Candle";

export default {
  title: "Molecules/Candle",
  component: Candle,
  argTypes: {},
} as ComponentMeta<typeof Candle>;

const Template: ComponentStory<typeof Candle> = (args) => {
  const { open, high, low, close } = args;
  const wickDiff = high - low;
  const bodyDiff = open - close;
  const positiveOffset = high - close;
  const negativeOffset = high - open;
  return (
    <>
      <h2>Metadata</h2>
      high: {high}
      <br />
      open: {open}
      <br />
      low: {low}
      <br />
      close: {close}
      <br />
      positiveOffset: {positiveOffset}
      <br />
      negativeOffset: {negativeOffset}
      <br />
      wickDiff: {wickDiff}
      <br />
      bodyDiff: {bodyDiff}
      <hr />
      <br />
      <Candle {...args} />
    </>
  );
};

export const Default = Template.bind({});
Default.args = {
  open: 100,
  high: 120,
  low: 80,
  close: 110,
};

export const Positive = Template.bind({});
Positive.args = {
  open: 200,
  high: 300,
  low: 100,
  close: 280,
};

export const Negative = Template.bind({});
Negative.args = {
  open: 290,
  high: 300,
  low: 100,
  close: 200,
};

export const Negative2 = Template.bind({});
Negative2.args = {
  open: 100,
  high: 165,
  low: 50,
  close: 55,
};
