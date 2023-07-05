import { TransactionProps } from "../../../molecules/transaction/Transaction";
import { ValueProps } from "../../../molecules/value/Value";
import { notifications } from "../notifications";

const A_WEEK_AGO = new Date(Date.now() - 604800000);

const empty = (accounts: ValueProps[]) => {
  const list: ValueProps[] = accounts.filter(
    (account: ValueProps) => account.value <= 0
  );
  return list.map((x) =>
    // @ts-ignore
    notifications.account.empty.replace("{name}", `*${x.title}*`)
  );
};

const almostEmpty = (accounts: ValueProps[]) => {
  const list: ValueProps[] = accounts.filter(
    (account: ValueProps) => account.value <= 1000 && account.value > 0
  );
  return list.map((x) =>
    notifications.account.almostEmpty
      // @ts-ignore
      .replace("{name}", `*${x.title}*`)
      // @ts-ignore
      .replace("{n}", `**${Math.floor(x.value)} kr**`)
  );
};

const getLastWeeksTransactions = (transactions?: TransactionProps[]) =>
  transactions?.filter((t) => new Date(t.date) > A_WEEK_AGO) || [];

const getLastWeekPercentageChange = (account: ValueProps) => {
  const lwTransactions = getLastWeeksTransactions(account.transactions);
  if (lwTransactions.length > 0) {
    const lwChange = lwTransactions.reduce((a, b) => a + b.value, 0);
    const lwPercentageChange = Math.round((lwChange / account.value) * 100);
    return lwPercentageChange;
  }
  return 0;
};

const dropByNPercent = (accounts: ValueProps[]) => {
  const list = accounts.filter((account) => {
    if (account.transactions?.length) {
      const lwPercentageChange = getLastWeekPercentageChange(account);
      if (lwPercentageChange < -10) {
        return true;
      }
    }
  });
  return list.map((x) =>
    notifications.account.dropByNPercent
      // @ts-ignore
      .replace("{name}", `*${x.title}*`)
      // @ts-ignore
      .replace("{n}", `**${getLastWeekPercentageChange(x)}%**`)
  );
};

const replaceName = (value: string, name?: string) =>
  name ? value.replace("{name}", `*${name}*`) : value;
const replaceN = (value: string, n?: number) =>
  n ? value.replace("{n}", `**${n.toString()}%**`) : value;

const increaseByNPercent = (accounts: ValueProps[]) => {
  const list = accounts.filter((account) => {
    if (account.transactions?.length) {
      const lwPercentageChange = getLastWeekPercentageChange(account);
      if (lwPercentageChange > 10) {
        return true;
      }
    }
  });
  return list.map((x) =>
    replaceN(
      replaceName(notifications.account.increasedByNPercent, x.title),
      getLastWeekPercentageChange(x)
    )
  );
};

const summarizePerDay = (transactions: TransactionProps[]) => {
  const sumByDay = transactions.reduce((a: any, b) => {
    if (!a.length) return [{ value: b.value, date: b.date }];
    const bDate = new Date(b.date);
    const aDate = new Date(a[a.length - 1].date);
    if (aDate.getDay() === bDate.getDay()) {
      return [
        ...a.slice(0, a.length - 1),
        { ...a[a.length - 1], value: a[a.length - 1].value + b.value },
      ];
    }
    return [...a, { value: b.value, date: b.date }];
  }, []);
  return sumByDay;
};
const getSpendingPerDay = (account: ValueProps) => {
  const lw = getLastWeeksTransactions(account.transactions).filter(
    (t) => t.value < 0
  );
  return summarizePerDay(lw);
};
const getIncomePerDay = (account: ValueProps) => {
  const lw = getLastWeeksTransactions(account.transactions).filter(
    (t) => t.value > 0
  );
  return summarizePerDay(lw);
};

type DailyChange = {
  value: number;
  date: Date;
};
const getAverageChangePerDay = (changePerDay: DailyChange[]) => {
  if (changePerDay.length > 0) {
    const spendingThisWeek = changePerDay.reduce((a, b) => a + b.value, 0);
    const averageSpending = Math.round(spendingThisWeek / 7);
    return averageSpending;
  }
  return 0;
};

const getAverageSpendingPerDay = (account: ValueProps) => {
  const spendingPerDay: DailyChange[] = getSpendingPerDay(account);
  return getAverageChangePerDay(spendingPerDay);
};
const getAverageIncomePerDay = (account: ValueProps) => {
  const incomePerDay: DailyChange[] = getIncomePerDay(account);
  return getAverageChangePerDay(incomePerDay);
};

const averageSpendingThisWeek = (accounts: ValueProps[]) => {
  const averageSpendingPerAccount = accounts.map(getAverageSpendingPerDay);
  const averageSpendingTotal = Math.abs(
    averageSpendingPerAccount.reduce((a, b) => a + b, 0)
  );
  if (averageSpendingTotal === 0) return false;
  return notifications.account.averageSpendingThisWeek.replace(
    "{n}",
    // @ts-ignore
    `**${averageSpendingTotal} kr**`
  );
};

const averageIncomeThisWeek = (accounts: ValueProps[]) => {
  const averageIncomePerAccount = accounts.map(getAverageIncomePerDay);
  const averageIncomeTotal = Math.abs(
    averageIncomePerAccount.reduce((a, b) => a + b, 0)
  );
  if (averageIncomeTotal === 0) return false;
  return notifications.account.averageIncomeThisWeek.replace(
    "{n}",
    // @ts-ignore
    `**${averageIncomeTotal} kr**`
  );
};

export const getAccountAlerts = (accounts: ValueProps[]) => {
  return [
    averageSpendingThisWeek(accounts),
    averageIncomeThisWeek(accounts),
    ...dropByNPercent(accounts),
    ...increaseByNPercent(accounts),
    ...empty(accounts),
    ...almostEmpty(accounts),
  ];
};
