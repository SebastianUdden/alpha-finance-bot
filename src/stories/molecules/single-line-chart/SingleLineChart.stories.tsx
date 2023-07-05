import { ComponentStory, ComponentMeta } from "@storybook/react";
import Wireframes from "../../wireframe/Wireframes";
import Line from "./SingleLineChart";

export default {
  title: "Molecules/Single line chart",
  component: Line,
  argTypes: {},
} as ComponentMeta<typeof Line>;

const Template: ComponentStory<typeof Line> = (args) => {
  return <Line {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "Single line chart",
  sumText: "5 000 kr",
  ratios: [0.2, 0.05, 0.3, 0.45, 0.1],
  colors: ["#ff00ff", "#00ffff", "#ffff00", "#f07f0f", "#007f0f"],
};

export const BudgetLineChart = Template.bind({});
BudgetLineChart.args = {
  title: "Budget line chart",
  sumText: "5 000 kr / 10 000 kr",
  ratios: [0.15, 0.7, 0.1, 0.1, 0.05],
  colors: ["#ff00ff", "#00ffff", "#ffff00", "#f07f0f", "#007f0f"],
};

export const Wireframe: ComponentStory<typeof Line> = (args) => {
  return <Wireframes type="pie-chart" />;
};
