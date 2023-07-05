import { BudgetProps } from "../../../molecules/budget/Budget";
import { notifications } from "../notifications";

// ONLY SHOW ON LAST DAY OF MONTH
const budgetHeld = (budgets: BudgetProps[]) => {
  // Input last day of month here to test e.g. "2023-03-31"
  const now = new Date();
  const thisMonth = now.getMonth();
  const lastDayOfMonth = new Date(now.getFullYear(), thisMonth + 1, 0);
  if (now.getDate() === lastDayOfMonth.getDate()) {
    const heldBudgets = budgets.filter((b) => b.budget >= b.value);
    return heldBudgets.map((dp) =>
      notifications.budget.budgetHeld.replace(
        "{name}",
        // @ts-ignore
        `*${dp.title?.toLowerCase()}*`
      )
    );
  }
  return [];
};

const budgetNPercentRemaining = (percent: number, budgets: BudgetProps[]) => {
  const nPercentRemaining = budgets.filter(
    (b) => b.budget > b.value && b.budget * (percent / 100) <= b.value
  );
  return nPercentRemaining.map((dp) =>
    notifications.budget.budgetNPercentRemaining
      .replace(
        "{name}",
        // @ts-ignore
        `*${dp.title?.toLowerCase()}*`
      )
      .replace("{n}", `**${Math.floor((dp.value / dp.budget) * 100)}%**`)
  );
};

const budgetDepleted = (budgets: BudgetProps[]) => {
  const depletedBudgets = budgets.filter((b) => b.budget < b.value);
  return depletedBudgets.map((dp) =>
    notifications.budget.budgetDepleted.replace(
      "{name}",
      // @ts-ignore
      `*${dp.title?.toLowerCase()} budget*`
    )
  );
};

export const getBudgetAlerts = (budgets: BudgetProps[]) => {
  return [
    ...budgetHeld(budgets),
    ...budgetDepleted(budgets),
    ...budgetNPercentRemaining(90, budgets),
  ];
};
