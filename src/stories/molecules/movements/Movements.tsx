import styled from "styled-components";
import { Price } from "../stock/Stock";
import Candle from "../candle/Candle";
import MovingAverages from "../moving-averages/MovingAverages";

const calculateMovement = (prices: Price[]) => {
  const movm = prices.map((p, i) => {
    // const prevPrice = prices[i - 1]?.close;
    // const currPrice = p.close;
    const diff = p.close / p.open;
    const percentage = (diff - 1) * 1000;
    return Math.floor(percentage) / 10;
  });
  return movm;
};

interface Props {
  showCandles: boolean;
  showPercentage: boolean;
  prices: Price[];
}

const Movements = ({ showCandles, showPercentage, prices }: Props) => {
  const movements = calculateMovement(prices);
  // const max = Math.max.apply(null, movements.filter(Boolean));
  const maxPrice = Math.max.apply(
    null,
    prices.filter(Boolean).map((p) => p.high)
  );
  const lowPrice = Math.min.apply(
    null,
    prices.filter(Boolean).map((p) => p.low)
  );
  console.log({ showCandles });
  console.log({ prices });
  return (
    <Stack>
      <Item>
        <Wrapper
          flex={showCandles}
          height={showCandles ? maxPrice - lowPrice : 0}
        >
          {showCandles &&
            prices.length > 1 &&
            prices.map((p) => (
              <Offset offset={p.low - lowPrice}>
                <Candle {...p} />
              </Offset>
            ))}
          {!showCandles &&
            prices.length > 1 &&
            movements.map(
              (m, i) => (
                // showBars ? (
                //   <Bar isPositive={m > 0} height={Math.abs(m)} />
                // ) : (
                <Flex isPositive={m > 0}>
                  <Small>
                    {showPercentage
                      ? `${m}%`
                      : `${prices.slice(1)[i].close} kr`}
                  </Small>
                  {m > 0 ? <Arrow isUp>&uarr;</Arrow> : <Arrow>&darr;</Arrow>}
                </Flex>
              )
              // )
            )}
        </Wrapper>
      </Item>
      {showCandles && (
        <Item>
          <MovingAverages movingAverage={2} prices={prices} />
        </Item>
      )}
    </Stack>
  );
};

const Wrapper = styled.div<{
  flex?: boolean;
  height: number;
}>`
  margin: 10px 0 10px;
  width: 100%;
  display: grid;
  flex-wrap: wrap;
  border: none;
  gap: 6px;
  grid-template-columns: 1fr;
  @media (min-width: 600px) {
    grid-template-columns: 1fr 1fr 1fr;
  }
  ${(p) =>
    p.flex &&
    `
    display: flex;
    align-items: flex-end;
  `}
  ${(p) =>
    p.height &&
    `
    height: ${p.height}px;
  `}
`;
const Stack = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
`;

const Item = styled.div`
  grid-row: 1;
  grid-column: 1;

  display: flex;
  color: ${(p) => p.color};
`;
const Offset = styled.div<{ offset: number }>`
  ${(p) =>
    p.offset &&
    `
      transform: translateY(-${p.offset}px);
  `}
`;
const Arrow = styled.span<{ isUp?: boolean }>`
  display: inline-block;
  margin: 0 5px 5px;
  font-size: 16px;
  font-weight: 700;
  color: ${(p) => p.theme.colors.interactiveDarkGrey};
  /* ${(p) =>
    p.isUp &&
    `
    color: ${p.theme.colors.primary};
  `} */
`;
const Flex = styled.div<{ isPositive: boolean }>`
  box-sizing: border-box;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(p) =>
    p.isPositive
      ? p.theme.colors.tertiaryBrightGreen
      : p.theme.colors.tertiaryBrightRed};
  padding: 5px 5px 5px 10px;
  border-radius: 12px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;
const Small = styled.strong`
  font-size: 16px;
  font-weight: 300;
  color: ${(p) => p.theme.colors.interactiveDarkGrey};
  opacity: 0.8;
`;
const Bar = styled.div<{ height: number; isPositive?: boolean }>`
  width: 10px;
  height: ${(p) => p.height}px;
  background-color: ${(p) => p.theme.colors.tertiaryBrightRed};
  ${(p) =>
    p.isPositive &&
    `
    margin-top: -${p.height}px;
    background-color: ${p.theme.colors.tertiaryBrightGreen};
    `}
`;

export default Movements;
