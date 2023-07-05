import styled from "styled-components";
import Button from "./Button";

const SecondaryButton = styled(Button)`
  border: ${(p) => `1px solid ${p.theme.colors.secondaryOrange}`};
  background-color: ${(p) => p.theme.colors.secondaryOrange};
  text-transform: uppercase;
`;

export default SecondaryButton;
