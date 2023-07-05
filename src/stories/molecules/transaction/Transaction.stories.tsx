import { ComponentStory, ComponentMeta } from "@storybook/react";
import Wireframes from "../../wireframe/Wireframes";
import Transaction from "./Transaction";

export default {
  title: "Molecules/Transaction",
  component: Transaction,
  argTypes: {},
} as ComponentMeta<typeof Transaction>;

const Template: ComponentStory<typeof Transaction> = (args) => {
  return <Transaction {...args} />;
};

export const PositiveValue = Template.bind({});
PositiveValue.args = {
  title: "Alphadev Payroll",
  date: "6/15/2021",
  value: 42000,
};

export const NegativeValue = Template.bind({});
NegativeValue.args = {
  title: "Poke bowl",
  date: "6/12/2022",
  value: -143.5,
};

export const Wireframe: ComponentStory<typeof Transaction> = (args) => {
  return <Wireframes type="Transaction" />;
};
