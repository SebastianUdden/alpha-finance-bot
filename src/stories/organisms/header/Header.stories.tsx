import { ComponentStory, ComponentMeta } from "@storybook/react";
import { useState } from "react";
import Header from "./Header";

export default {
  title: "Organisms/Header",
  component: Header,
} as ComponentMeta<typeof Header>;

const Template: ComponentStory<typeof Header> = (args) => {
  const [selectedTab, setSelectedTab] = useState<any>(args.tabs[0]);
  return (
    <Header
      {...args}
      onChange={(t) =>
        setSelectedTab(args.tabs.find((tab) => tab.text === t.text))
      }
      selectedTabIndex={args.tabs.findIndex((t) => t.text === selectedTab.text)}
    />
  );
};

export const Default = Template.bind({});
Default.args = {
  tabs: [
    {
      text: "Overview",
      type: "home",
    },
    {
      text: "Accounts",
      type: "trendingUp",
    },
    {
      text: "Bills",
      type: "trendingDown",
    },
    {
      text: "Budgets",
      type: "dollarSign",
    },
    {
      text: "Account",
      type: "barChart2",
    },
    {
      text: "Settings",
      type: "settings",
    },
    {
      text: "Stocks",
      type: "barChart",
    },
    {
      text: "Login",
      type: "user",
    },
  ],
};
