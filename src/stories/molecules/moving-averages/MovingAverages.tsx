import styled from "styled-components";
import { Price } from "../stock/Stock";

const getMovingAverages = (prices: Price[], movingAverage: number) => {
  return prices
    .map((p, i) => {
      if (i + movingAverage > prices.length) return null;
      const priceSlice = prices.slice(i, i + movingAverage);
      return priceSlice.reduce((a, b) => a + b.close, 0) / movingAverage;
    })
    .filter(Boolean);
};

interface IMovingAverages {
  movingAverage: number;
  prices: Price[];
}

const MovingAverages = ({ movingAverage, prices }: IMovingAverages) => {
  const movingAvgs = getMovingAverages(prices, movingAverage);
  const maxPrice = Math.max.apply(
    null,
    prices.filter(Boolean).map((p) => p.high)
  );

  return (
    <>
      <Wrapper height={maxPrice}>
        {movingAvgs.map((ma, i) => {
          if (!movingAvgs[i + 1]) return null;
          const shift = 16;
          return (
            <line
              x1={i * shift}
              x2={i * shift + shift}
              y1={maxPrice - (ma ?? 0)}
              y2={maxPrice - (movingAvgs[i + 1] ?? 0)}
              stroke="#fff"
              strokeWidth="3px"
              strokeLinecap="round"
            />
          );
        })}
      </Wrapper>
    </>
  );
};

const Wrapper = styled.svg`
  padding: 5px;
  z-index: 0;
  opacity: 0.3;
`;

export default MovingAverages;
