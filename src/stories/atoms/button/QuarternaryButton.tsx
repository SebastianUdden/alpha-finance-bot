import styled from "styled-components";
import Button from "./Button";

const QuartenaryButton = styled(Button)`
  border: ${(p) => `1px solid ${p.theme.colors.quartenaryBrightestBlue}`};
  background-color: ${(p) => p.theme.colors.quartenaryBrightestBlue};
  color: ${(p) => p.theme.colors.background};
  text-transform: uppercase;
  justify-content: space-between;
  padding: 6px 15px 6px 18px;
  margin-right: 10px;
  border-radius: 22px;
  font-weight: 300;
`;

export default QuartenaryButton;
