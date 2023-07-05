import styled, { useTheme } from "styled-components";
import Page from "../../organisms/page/Page";
import Alerts, { AlertsProps } from "../../organisms/alerts/Alerts";
import Budgets, { BudgetsProps } from "../../organisms/budgets/Budgets";
import Values, { ValuesProps } from "../../organisms/values/Values";
import { createColors } from "../../utils";
import { ValueProps } from "../../molecules/value/Value";
import { BudgetProps } from "../../molecules/budget/Budget";
import { TransactionsProps } from "../../organisms/transactions/Transactions";

export interface OverviewPageProps {
  alerts: AlertsProps;
  accounts: ValuesProps;
  bills: TransactionsProps;
  budgets: BudgetsProps;
  onSelectItem?: (item?: ValueProps | BudgetProps) => void;
  onShowPage?: (title?: string) => void;
}

const OverviewPage = ({
  alerts,
  accounts,
  bills,
  budgets,
  onSelectItem,
  onShowPage,
}: OverviewPageProps) => {
  const theme = useTheme();
  return (
    <>
      <Page>
        <Grid>
          {alerts && (
            <Wide>
              <Alerts {...alerts} />
            </Wide>
          )}
          {accounts && (
            <Values
              {...accounts}
              colors={createColors(
                accounts.values.length,
                theme.palettes.green
              )}
              onSelect={(item) => {
                onShowPage && onShowPage(accounts.title);
                onSelectItem && onSelectItem(item);
              }}
              onShowPage={onShowPage}
            />
          )}
          {bills && (
            <Values
              title={bills.title}
              values={bills.values.map((v) => ({
                ...v,
                text: v.date.toString(),
              }))}
              colors={createColors(bills.values.length, [
                ...theme.palettes.orange,
                ...theme.palettes.red,
              ])}
              onSelect={(item) => {
                onShowPage && onShowPage(bills.title);
                onSelectItem && onSelectItem(item);
              }}
              onShowPage={onShowPage}
            />
          )}
          {budgets && (
            <Wide>
              <Budgets
                {...budgets}
                colors={createColors(budgets.budgets.length, [
                  ...theme.palettes.blue,
                  ...theme.palettes.purple,
                ])}
                onSelect={(item) => {
                  onShowPage && onShowPage(budgets.title);
                  onSelectItem && onSelectItem(item);
                }}
                onShowPage={onShowPage}
              />
            </Wide>
          )}
        </Grid>
      </Page>
    </>
  );
};

const Grid = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  @media (min-width: 1000px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;
const Wide = styled.div`
  grid-column: 1 / span 2;
`;

export default OverviewPage;
