import styled from "styled-components";

interface ICandle {
  open: number;
  high: number;
  low: number;
  close: number;
}

const Candle = ({ open, high, low, close }: ICandle) => {
  const wickDiff = high - low;
  const bodyDiff = open - close;
  const isPositive = bodyDiff < 0;
  const positiveOffset = high - close;
  const negativeOffset = high - open;
  return (
    <Stack>
      <Item>
        <CandleWick height={Math.abs(wickDiff)} />
      </Item>
      <Item>
        <CandleBody
          isPositive={isPositive}
          height={Math.abs(bodyDiff)}
          offset={isPositive ? positiveOffset : negativeOffset}
        />
      </Item>
    </Stack>
  );
};

const Stack = styled.div`
  display: grid;
  grid-template-rows: 1fr;
  grid-template-columns: 1fr;
`;

const Item = styled.div`
  grid-row: 1;
  grid-column: 1;

  display: flex;
  justify-content: center;
  color: ${(p) => p.color};
`;

const CandleBody = styled.div<{
  height: number;
  isPositive: boolean;
  offset: number;
}>`
  width: 10px;
  height: ${(p) => p.height}px;
  background-color: ${(p) => p.theme.colors.tertiaryBrightRed};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  ${(p) =>
    p.isPositive &&
    `
        background-color: ${p.theme.colors.tertiaryBrightGreen};
    `}
  /* background-color: #222; */
  ${(p) =>
    p.offset &&
    `
    transform: translateY(${p.offset}px);
  `}
`;
const CandleWick = styled.div<{ height: number }>`
  width: 2px;
  height: ${(p) => p.height}px;
  background-color: white;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export default Candle;
