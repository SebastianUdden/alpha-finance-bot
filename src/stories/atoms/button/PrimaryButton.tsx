import styled from "styled-components";
import Button from "./Button";

const PrimaryButton = styled(Button)<{ darkMode?: boolean }>`
  text-transform: uppercase;
`;

export default PrimaryButton;
