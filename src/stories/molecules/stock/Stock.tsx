import { useState } from "react";
import styled from "styled-components";
import Movements from "../movements/Movements";

export interface Price {
  date?: string | Date;
  open: number;
  high: number;
  low: number;
  close: number;
}

interface PriceDate extends Price {
  date: string | Date;
}

export interface StockProps {
  ticker: string;
  dailyPrices: PriceDate[];
  company: string;
  description: string;
  market: string;
  showCandles?: boolean;
}

const Stock = ({
  ticker,
  dailyPrices,
  company,
  description,
  market,
  showCandles,
}: StockProps) => {
  const [showPercentage, setShowPercentage] = useState(false);
  return (
    <Wrapper onClick={() => setShowPercentage(!showPercentage)}>
      <Title>
        {company} ({ticker})
      </Title>
      <hr />
      <Price>{dailyPrices[dailyPrices.length - 1].close} kr</Price>
      <Movements
        showCandles={!!showCandles && !showPercentage}
        showPercentage={showPercentage}
        prices={dailyPrices}
      />
      <hr />
      <Text>{description}</Text>
      {showPercentage && (
        <>
          <hr />
          <Text>Market: {market}</Text>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.button<{ isSelected?: boolean }>`
  width: 100%;
  text-align: left;
  color: inherit;
  border: none;
  background-color: ${(p) => p.theme.colors.interactiveDarkGrey};
  padding: 20px;
  margin: 1px 0;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  border-radius: 12px;
  cursor: pointer;
  :hover {
    opacity: 0.9;
  }
  :active {
    opacity: 0.7;
  }
  ${(p) =>
    p.isSelected &&
    `
    background-color: ${p.theme.colors.background};
  `}
  @media (min-width: 600px) {
    width: 300px;
  }
`;
// const IconWrapper = styled.div`
//   margin-top: -5px;
//   color: ${(p) => p.theme.colors.fadedGrey};
// `;
// const Flex = styled.div<{ color: string }>`
//   max-width: 80%;
//   border-left: ${(p) => `5px solid ${p.color}`};
//   padding-left: 14px;
//   padding-top: 5px;
// `;
const Title = styled.p`
  font-size: 16px;
  margin: 0;
  letter-spacing: 2px;
`;
const Text = styled.p`
  margin: 10px 0 0;
  display: flex;
  align-items: center;
  color: ${(p) => p.theme.colors.fadedGrey};
  letter-spacing: 2px;
`;
const Price = styled.p`
  margin: 0;
  font-size: 30px;
`;
// const Dots = styled.div`
//   display: flex;
// `;
// const Dot = styled.div`
//   width: 4px;
//   height: 4px;
//   border-radius: 50%;
//   margin-right: 5px;
//   background-color: ${(p) => p.theme.colors.fadedGrey};
//   :last-of-type {
//     margin-right: 3px;
//   }
// `;
// const Currency = styled.span`
//   margin: -7px 10px 0 auto;
//   font-size: 18px;
// `;

export default Stock;
