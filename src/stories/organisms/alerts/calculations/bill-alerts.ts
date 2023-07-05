import { TransactionProps } from "../../../molecules/transaction/Transaction";
import { ONE_DAY } from "../../../time";
import { notifications } from "../notifications";

const dueTodayBills = (bills: TransactionProps[]) => {
  const due = bills.filter(
    (bill) =>
      new Date() > new Date(bill.date) &&
      new Date().getDate() === new Date(bill.date).getDate()
  );
  return due.map((d) =>
    notifications.bill.dueToday.replace("{name}", `*${d.title}*`)
  );
};

const dueTomorrowBills = (bills: TransactionProps[]) => {
  const due = bills.filter((bill) => {
    const tomorrow = new Date(new Date().getTime() + ONE_DAY).getDate();
    const billDate = new Date(bill.date).getDate();
    return tomorrow === billDate;
  });
  return due.map((d) =>
    notifications.bill.dueTomorrow.replace("{name}", `*${d.title}*`)
  );
};

const overdueBills = (bills: TransactionProps[]) => {
  const due = bills.filter(
    (bill) =>
      new Date() > new Date(bill.date) &&
      new Date().getDate() !== new Date(bill.date).getDate()
  );
  return due.map((d) => {
    const days = Math.floor(
      (new Date().getTime() - new Date(d.date).getTime()) / ONE_DAY
    );
    return notifications.bill.overdue
      .replace("{name}", `*${d.title}*`)
      .replace("{days}", `**${days.toString()} day${days > 1 ? "s" : ""}**`);
  });
};

export const getBillAlerts = (bills: TransactionProps[]) => {
  return [
    ...dueTodayBills(bills),
    ...dueTomorrowBills(bills),
    ...overdueBills(bills),
  ];
};
