import styled from "styled-components";
import { StockProps } from "../../molecules/stock/Stock";
import Page from "../../organisms/page/Page";
import Stocks from "../../organisms/stocks/Stocks";

interface Props {
  title: string;
  stocks: StockProps[];
}

const StocksPage = ({ title, stocks }: Props) => {
  return (
    <Page>
      <Wrapper>
        {title && <Title>{title}</Title>}
        <Stocks title="Stocks" stocks={stocks} />
        {/* <Transactions
          values={transactions}
          selected={selectedValue}
          onSelect={(value?: TransactionProps) => setSelectedValue(value)}
        /> */}
      </Wrapper>
      {/* {selectedValue && <SelectedValue {...selectedValue} />} */}
    </Page>
  );
};

const Wrapper = styled.div`
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

export default StocksPage;
