import styled from "styled-components";
import Button from "./Button";

const TertiaryButton = styled(Button)`
  border: ${(p) => `1px solid ${p.theme.colors.tertiaryBrightBlue}`};
  background-color: ${(p) => p.theme.colors.tertiaryBrightBlue};
  text-transform: uppercase;
  padding: 6px 26px;
  margin-right: 10px;
  border-radius: 26px;
  font-weight: 400;
`;

export default TertiaryButton;
