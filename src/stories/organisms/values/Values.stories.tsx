import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import Wireframes from "../../wireframe/Wireframes";
import Values from "./Values";

export default {
  title: "Organisms/Values",
  component: Values,
  argTypes: {},
} as ComponentMeta<typeof Values>;

const Template: ComponentStory<typeof Values> = (args) => {
  const [selected, setSelected] = useState(args.values[0]);
  return (
    <Values {...args} selected={selected} onSelect={(v) => setSelected(v)} />
  );
};

export const Default = Template.bind({});
Default.args = {
  showLarge: true,
  title: "Values",
  values: [
    {
      title: "Coffee Shops",
      text: "1000",
      value: 900,
    },
    {
      title: "Groceries",
      text: "1000",
      value: 700,
    },
    {
      title: "Restaurants",
      text: "3000",
      value: 100,
    },
  ],
  colors: ["#ff00ff", "#00ffff", "#ffff00"],
};

export const Selected = Template.bind({});
Selected.args = {
  showLarge: true,
  title: "Values",
  values: [
    {
      title: "Coffee Shops",
      text: "1000",
      value: 900,
    },
    {
      title: "Groceries",
      text: "1000",
      value: 700,
    },
    {
      title: "Restaurants",
      text: "3000",
      value: 100,
    },
  ],
  colors: ["#ff00ff", "#00ffff", "#ffff00"],
};

export const Wireframe: ComponentStory<typeof Values> = (args) => {
  return <Wireframes type="values" />;
};
