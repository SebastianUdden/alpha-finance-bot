import { useEffect, useState } from "react";
import styled from "styled-components";
import { IBudgets } from "../../organisms/budgets/Budgets";
import Header, { HEADER_WIDTH, Tab } from "../../organisms/header/Header";
import { IValues } from "../../organisms/values/Values";
import AccountsPage from "../accounts-page/AccountsPage";
import BillsPage from "../bills-page/BillsPage";
import BudgetPage from "../budget-page/BudgetPage";
import AccountPage, { AccountPageProps } from "../account-page/AccountPage";
import LoginPage from "../login-page/LoginPage";
import OverviewPage from "../overview-page/OverviewPage";
import { ValueProps } from "../../molecules/value/Value";
import { TABS } from "./tabs";
import { alertCalculation } from "../../organisms/alerts/calculations/alert-calculations";
import { ITransactions } from "../../organisms/transactions/Transactions";
import StocksPage, { IStocksPage } from "../stocks-page/StocksPage";

interface Props {
  accounts: IValues;
  bills: ITransactions;
  budgets: IBudgets;
  transactions: AccountPageProps;
  stocks: IStocksPage;
}

const AllPages = ({ accounts, bills, budgets, stocks }: Props) => {
  const [alerts, setAlerts] = useState<string[]>([]);
  const [selectedAccount, setSelectedAccount] = useState<ValueProps>({
    id: "0",
    text: "default",
    value: 0,
    transactions: [],
  });
  const [selectedTab, setSelectedTab] = useState(
    TABS[Number(localStorage.getItem("selectedTabIndex")) || 0]
  );
  const [selectedItem, setSelectedItem] = useState();

  const handleOpenAccountPage = (value: ValueProps) => {
    setSelectedAccount(value);
    setSelectedTab({ type: "barChart2", text: "Account" });
  };

  useEffect(() => {
    if (accounts.values.length > 0) {
      setSelectedAccount(accounts.values[0]);
    }
  }, [accounts]);

  useEffect(() => {
    // @ts-ignore
    setAlerts(alertCalculation(accounts.values, bills.values, budgets.budgets));
  }, [accounts, bills, budgets]);

  // @ts-ignore
  const tabs: Tab[] = TABS.map((t) => {
    if (t.text === "Account") {
      return accounts?.values.length > 0 ? t : false;
    }
    if (t.text === "Settings") {
      return false;
    }
    if (t.text === "Login") {
      return false;
    }
    return t;
  }).filter(Boolean);

  return (
    <Grid>
      <Header
        tabs={tabs}
        onChange={(tab) => setSelectedTab(tab)}
        selectedTabIndex={tabs.findIndex((t) => t.text === selectedTab.text)}
      />
      {selectedTab.text === "Overview" && (
        <OverviewPage
          accounts={accounts}
          alerts={{ title: "Alerts", alerts }}
          bills={bills}
          budgets={budgets}
          onSelectItem={(item: any) => setSelectedItem(item)}
          onShowPage={(title) => {
            window.scrollTo(0, 0);
            setSelectedTab(tabs.find((t) => t.text === title) || tabs[0]);
          }}
        />
      )}
      {selectedTab.text === "Accounts" && (
        <AccountsPage
          values={accounts}
          selected={selectedItem}
          openAccountPage={handleOpenAccountPage}
        />
      )}
      {selectedTab.text === "Bills" && (
        <BillsPage bills={bills} selected={selectedItem} />
      )}
      {selectedTab.text === "Budgets" && (
        <BudgetPage budgets={budgets} selected={selectedItem} />
      )}
      {selectedTab.text === "Account" && (
        <AccountPage
          id={selectedAccount.id}
          title={selectedAccount.title}
          text={selectedAccount.text}
          value={selectedAccount.value}
          transactions={selectedAccount.transactions || []}
        />
      )}
      {selectedTab.text === "Stocks" && <StocksPage {...stocks} />}
      {selectedTab.text === "Login" && <LoginPage />}
    </Grid>
  );
};

const Grid = styled.div`
  @media (min-width: 1000px) {
    margin-left: ${HEADER_WIDTH};
  }
`;

export default AllPages;
