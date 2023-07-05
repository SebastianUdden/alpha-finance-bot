import { BudgetProps } from "../../../molecules/budget/Budget";
import { TransactionProps } from "../../../molecules/transaction/Transaction";
import { ValueProps } from "../../../molecules/value/Value";
import { getAccountAlerts } from "./account-alerts";
import { getBillAlerts } from "./bill-alerts";
import { getBudgetAlerts } from "./budget-alerts";

export const alertCalculation = (
  accounts: ValueProps[],
  bills: TransactionProps[],
  budgets: BudgetProps[]
) => {
  const billAlerts = getBillAlerts(bills);
  const budgetAlerts = getBudgetAlerts(budgets);
  const accountAlerts = getAccountAlerts(accounts);
  return [...billAlerts, ...budgetAlerts, ...accountAlerts].filter(Boolean);
};
