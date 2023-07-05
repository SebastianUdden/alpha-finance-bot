import { ComponentStory, ComponentMeta } from "@storybook/react";
import Wireframes from "../../wireframe/Wireframes";
import Value from "./Value";

export default {
  title: "Molecules/Value",
  component: Value,
  argTypes: {},
} as ComponentMeta<typeof Value>;

const Template: ComponentStory<typeof Value> = (args) => {
  return <Value {...args} color="magenta" />;
};

export const Default = Template.bind({});
Default.args = {
  title: "Restaurants",
  text: "Due on 28 jan",
  value: 150,
};

export const Selected = Template.bind({});
Selected.args = {
  title: "Restaurants",
  text: "Due on 28 jan",
  value: 150,
  isSelected: true,
};

export const Wireframe: ComponentStory<typeof Value> = (args) => {
  return <Wireframes type="value" />;
};
