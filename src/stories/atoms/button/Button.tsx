import styled from "styled-components";

type Size = "small" | "medium" | "large";

const Button = styled.button<{
  size?: Size;
  wide?: boolean;
  darkMode?: boolean;
}>`
  font-family: Clan;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 26px;
  letter-spacing: 1.5px;
  font-weight: 400;
  width: 100%;
  color: ${(p) => p.theme.colors.white};
  border: none;
  background-color: ${(p) => p.theme.colors.primary};
  font-size: 12px;
  padding: 10px 36px;
  border-radius: 25px;
  letter-spacing: 1.5px;
  cursor: pointer;
  text-transform: uppercase;
  ${(p) =>
    p.size === "small" &&
    `
    font-size: 11px;
    padding: 6px 36px;
    border-radius: 28px;
  `}
  ${(p) =>
    p.size === "large" &&
    `
    font-size: 14px;
    padding: 14px 36px;
    border-radius: 31px;
  `}
  ${(p) =>
    p.wide &&
    `
    width: 100%;
  `}
`;

export default Button;
