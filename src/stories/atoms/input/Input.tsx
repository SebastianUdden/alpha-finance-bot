import styled from "styled-components";

const Input = styled.input`
  box-sizing: border-box;
  width: 100%;
  padding: 20px;
  font-size: 18px;
  background-color: ${(p) => p.theme.colors.interactiveDarkGrey};
  color: ${(p) => p.theme.colors.white};
  border: none;
  margin-bottom: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export default Input;
