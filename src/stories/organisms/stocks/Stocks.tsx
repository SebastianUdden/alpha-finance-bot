import styled from "styled-components";
import Banner from "../../molecules/banner/Banner";
import Stock, { StockProps } from "../../molecules/stock/Stock";

interface Props {
  title: string;
  stocks: StockProps[];
}

const Stocks = ({ title, stocks }: Props) => {
  return stocks.length > 0 ? (
    <Wrapper>
      {stocks.map((s) => (
        <Stock {...s} />
      ))}
    </Wrapper>
  ) : (
    <Banner
      title={`No ${title?.toLowerCase()} found`}
      buttonText="Add"
      onClick={() => alert("Click")}
    />
  );
};

const Wrapper = styled.div`
  /* grid-template-columns: 1fr 1fr 1fr; */
  gap: 10px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  @media (min-width: 600px) {
    gap: 20px;
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
  }
`;

export default Stocks;
