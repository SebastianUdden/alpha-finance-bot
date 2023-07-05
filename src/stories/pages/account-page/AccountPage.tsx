import { useState } from "react";
import styled from "styled-components";
import PathChart from "../../molecules/path-chart/PathChart";
import SelectedValue from "../../molecules/selected-value/SelectedValue";
import { TransactionProps } from "../../molecules/transaction/Transaction";
import Page from "../../organisms/page/Page";
import Transactions from "../../organisms/transactions/Transactions";

export interface AccountPageProps {
  id: string;
  selected?: TransactionProps;
  title?: string;
  text?: string;
  value: number;
  transactions: TransactionProps[];
}

const AccountPage = ({
  selected,
  title,
  text,
  value,
  transactions,
}: AccountPageProps) => {
  const [selectedValue, setSelectedValue] = useState<any>(
    selected || transactions[0]
  );
  const transactionsSumGraph = transactions.reduce(
    (a, b) => {
      return [
        ...a,
        a.length > 0
          ? {
              value: a[a.length - 1].value + b.value,
            }
          : b,
      ];
    },
    [{ value: 0 }]
  );
  return (
    <Page>
      <Wrapper>
        {title && <Title>{title}</Title>}
        {text && <Subtitle>{text}</Subtitle>}
        {transactions.length > 1 && (
          <>
            <PathChart
              dots={transactionsSumGraph.map((value: any) => ({
                value: value.value,
              }))}
            />
          </>
        )}
        <Value>{Math.floor(value)} kr</Value>
        <Transactions
          values={transactions}
          selected={selectedValue}
          onSelect={(value?: TransactionProps) => setSelectedValue(value)}
        />
      </Wrapper>
      {selectedValue && <SelectedValue {...selectedValue} />}
    </Page>
  );
};

const Wrapper = styled.div`
  background-color: ${(p) => p.theme.colors.elevatedBackground};
  border: 1px solid transparent;
`;
const Title = styled.h1`
  margin: 50px 10px 10px;
  letter-spacing: 1.6px;
  font-size: 20px;
  font-weight: 300;
  text-align: center;
  color: ${(p) => p.theme.colors.fadedGrey};
`;
const Subtitle = styled.p`
  margin: 10px 10px 40px;
  font-size: 16px;
  letter-spacing: 2.6px;
  font-weight: 400;
  text-align: center;
`;
const Value = styled.h3`
  font-size: 40px;
  text-align: center;
`;

export default AccountPage;
