import { ComponentStory, ComponentMeta } from "@storybook/react";
import Wireframes from "../../wireframe/Wireframes";
import PieChart from "./PieChart";

export default {
  title: "Molecules/Pie chart",
  component: PieChart,
  argTypes: {},
} as ComponentMeta<typeof PieChart>;

const Template: ComponentStory<typeof PieChart> = (args) => {
  return <PieChart {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "Pie chart",
  sumText: "5 000 kr",
  ratios: [0.2, 0.05, 0.3, 0.45, 0.1],
  colors: ["#ff00ff", "#00ffff", "#ffff00", "#f07f0f", "#007f0f"],
};

export const BudgetPieChart = Template.bind({});
BudgetPieChart.args = {
  title: "Budget pie chart",
  sumText: "5 000 kr / 10 000 kr",
  ratios: [0.5, 0.4, 0.1],
  colors: ["#ff00ff", "#00ffff", "#ffff00"],
};

export const Wireframe: ComponentStory<typeof PieChart> = (args) => {
  return <Wireframes type="pie-chart" />;
};
