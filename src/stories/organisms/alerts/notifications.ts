export const notifications = {
  account: {
    empty: "{name} is empty",
    almostEmpty: "{name} is almost empty, {n} remaining.",
    dropByNPercent: "{name} have dropped by {n} in the last week",
    increasedByNPercent: "{name} has increased by {n} in the last week",
    averageSpendingThisWeek: "Average spending this week was {n} per day",
    averageIncomeThisWeek: "Average income this week was {n} per day",
  },
  budget: {
    budgetDepleted:
      "Your budget for {name} has been depleted, you should oversee it for next month.",
    budgetNPercentRemaining:
      "Heads up, you've used up {n} of the {name} this month!",
    budgetHeld: "Your budget for {name} was successful, keep up the good work!",
  },
  bill: {
    dueToday: "{name} is due **today**",
    dueTomorrow: "{name} is due tomorrow",
    overdue: "{name} is overdue by {days}!",
    categorySurpassedNPerMonth:
      "Your {category} fees have passed {n} per month",
  },
};
