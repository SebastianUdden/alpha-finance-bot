import Page from "../../organisms/page/Page";
import styled, { useTheme } from "styled-components";
import Budgets, { IBudgets } from "../../organisms/budgets/Budgets";
import { createColors } from "../../utils";
import { BudgetProps } from "../../molecules/budget/Budget";
import { useState } from "react";
import SelectedValue from "../../molecules/selected-value/SelectedValue";
import { ONE_DAY } from "../../time";

const getFields = (selected: BudgetProps) => {
  const remaining = selected.budget - selected.value;
  const now = new Date();
  const thisMonth = now.getMonth();
  const lastDayOfMonth = new Date(now.getFullYear(), thisMonth + 1, 0);
  const daysRemaining = Math.floor(
    (lastDayOfMonth.getTime() - now.getTime()) / ONE_DAY
  );
  const weeksRemaining = Math.floor(daysRemaining / 7);
  return [
    {
      label: "Remaining budget",
      value: `${remaining} kr`,
    },
    weeksRemaining !== 0
      ? {
          label: "Remaining/week",
          value: `${Math.floor(remaining / weeksRemaining)} kr`,
        }
      : false,
    {
      label: "Remaining/day",
      value: `${Math.floor(remaining / daysRemaining)} kr`,
    },
  ].filter(Boolean);
};

interface Props {
  selected?: BudgetProps;
  budgets: IBudgets;
}

const BudgetPage = ({ selected, budgets }: Props) => {
  const theme = useTheme();
  const [selectedValue, setSelectedValue] = useState<any>(
    selected || budgets.budgets[0]
  );
  const [colors] = useState(
    createColors(budgets.budgets.length, [
      ...theme.palettes.blue,
      ...theme.palettes.purple,
    ])
  );

  return (
    <Page>
      <Budgets
        {...budgets}
        selected={selectedValue}
        colors={colors}
        showLarge
        onSelect={(value?: BudgetProps) => setSelectedValue(value)}
      />
      {selectedValue && (
        <SelectedValue {...selectedValue} fields={getFields(selectedValue)} />
      )}
    </Page>
  );
};

export default BudgetPage;
