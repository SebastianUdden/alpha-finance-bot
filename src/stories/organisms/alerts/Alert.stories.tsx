import { ComponentStory, ComponentMeta } from "@storybook/react";
import Wireframes from "../../wireframe/Wireframes";
import Alerts from "./Alerts";

export default {
  title: "Organisms/Alerts",
  component: Alerts,
  argTypes: {},
} as ComponentMeta<typeof Alerts>;

const Template: ComponentStory<typeof Alerts> = (args) => {
  return <Alerts {...args} />;
};

export const Default = Template.bind({});
Default.args = {
  title: "Alerts",
  alerts: [
    "You've exceeded your budget by 500 kr!",
    "Where's the money?",
    "Time to save!",
  ],
};

export const Wireframe: ComponentStory<typeof Alerts> = (args) => {
  return <Wireframes type="alerts" />;
};
