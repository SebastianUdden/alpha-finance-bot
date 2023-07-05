import styled from "styled-components";
import { Price } from "../stock/Stock";

const calculateTrueRange = (
  high: number,
  low: number,
  previousClose: number
) => {
  const trueRange = Math.max(
    high - low,
    Math.abs(high - previousClose),
    Math.abs(low - previousClose)
  );
  return trueRange;
};

const calculateATR = (prices: Price[], period: number) => {
  const atrDecimalAccuracy = 1000;
  let trueRanges = [];
  let atr = [];

  // Calculate True Range values for each period
  for (let i = 1; i < prices.length; i++) {
    let high = prices[i].high;
    let low = prices[i].low;
    let previousClose = prices[i - 1].close;
    let trueRange = Math.max(
      high - low,
      Math.abs(high - previousClose),
      Math.abs(low - previousClose)
    );
    trueRanges.push(trueRange);
  }
  console.log(trueRanges);

  // Calculate ATR for each period
  for (let j = period; j <= trueRanges.length; j++) {
    let sum = 0;
    for (let k = 0; k < period; k++) {
      sum += trueRanges[j - k];
    }
    let currentATR =
      Math.round((sum / period) * atrDecimalAccuracy) / atrDecimalAccuracy;
    atr.push(currentATR);
  }

  return atr.filter(Boolean);
};

interface IAverageTrueRange {
  prices: Price[];
  period?: number;
}

const AverageTrueRange = ({ prices, period = 14 }: IAverageTrueRange) => {
  const atr = calculateATR(prices, period);
  const maxPrice = Math.max.apply(
    null,
    atr.map((p) => p)
  );

  return atr.length ? (
    <>
      {JSON.stringify(atr)}
      <Wrapper height={maxPrice}>
        {atr.map((t, i) => {
          if (!atr[i + 1]) return null;
          const shift = 16;
          return (
            <line
              x1={i * shift}
              x2={i * shift + shift}
              y1={maxPrice - (t ?? 0)}
              y2={maxPrice - (atr[i + 1] ?? 0)}
              stroke="#fff"
              strokeWidth="3px"
              strokeLinecap="round"
            />
          );
        })}
      </Wrapper>
    </>
  ) : (
    <>Not enough values to provide ATR</>
  );
};

const Wrapper = styled.svg`
  padding: 5px;
  z-index: 0;
  opacity: 0.3;
`;

export default AverageTrueRange;
