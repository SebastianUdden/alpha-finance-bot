import { useRef, useState } from "react";
import styled from "styled-components";
import Icon from "../../atoms/icon/Icon";
import Input from "../../atoms/input/Input";
import Logo from "../../atoms/logo/Logo";
import Page from "../../organisms/page/Page";

export const validations = {
  notEmptyOrWhiteSpace: /(.|\s)*\S(.|\s)*/,
  allEmail:
    /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/,
  mostEmail: /^[^\s@]+@([^\s@.,]+\.)+[^\s@.,]{2,}$/,
};

const LoginPage = () => {
  const passwordRef = useRef<any>(null);
  const [showPassword, setShowPassword] = useState(false);
  const [validEmail, setValidEmail] = useState(false);
  const [validPassword, setValidPassword] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeEmail = (e: any) => {
    const regexp = new RegExp(validations.mostEmail);
    setValidEmail(regexp.test(e.target.value));
    setEmail(e.target.value);
  };

  const handleChangePassword = (e: any) => {
    const regexp = new RegExp(validations.notEmptyOrWhiteSpace);
    setValidPassword(regexp.test(e.target.value));
    setPassword(e.target.value);
  };

  return (
    <Page>
      <Wrapper>
        <Logo />
        <Inputs>
          <InputWrapper>
            <Input
              type="email"
              placeholder="E-mail"
              onChange={handleChangeEmail}
              value={email}
            />
            {validEmail && (
              <CheckmarkWrapper>
                <Icon type="check" />
              </CheckmarkWrapper>
            )}
          </InputWrapper>
          <InputWrapper>
            <Input
              ref={passwordRef}
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              onChange={handleChangePassword}
              value={password}
            />
            <VisibilityButton
              onClick={() => {
                const val = passwordRef.current.value;
                passwordRef.current.focus();
                setShowPassword(!showPassword);
                passwordRef.current.value = "";
                setTimeout(() => {
                  passwordRef.current.value = val;
                }, 5);
              }}
            >
              <Icon type={showPassword ? "eyeOff" : "eye"} />
            </VisibilityButton>
          </InputWrapper>
        </Inputs>
        <Button
          disabled={!validPassword || !validEmail}
          onClick={() => alert("Logging in!")}
        >
          Login
        </Button>
      </Wrapper>
    </Page>
  );
};

const Wrapper = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding-top: 100px;
`;
const Inputs = styled.div`
  margin-top: 100px;
`;
const InputWrapper = styled.div`
  position: relative;
`;
const CheckmarkWrapper = styled.div`
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(-80%) scale(1.5);
  color: ${(p) => p.theme.colors.tertiaryBrightGreen};
`;
const VisibilityButton = styled.button`
  border: none;
  padding: 0;
  margin: 0;
  background-color: inherit;
  position: absolute;
  top: 50%;
  right: 25px;
  transform: translateY(-80%) scale(1.5);
  color: ${(p) => p.theme.colors.fadedGrey};
  cursor: pointer;
`;
const Button = styled.button`
  width: 100%;
  padding: 20px;
  color: inherit;
  background-color: ${(p) => p.theme.colors.quartenaryDarkGreen};
  border: none;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  font-size: 20px;
  text-transform: uppercase;
  transition: background-color 1000ms ease, opacity 1000ms ease;
  :hover {
    cursor: pointer;
    transition: opacity 150ms ease;
    opacity: 0.7;
  }
  :active {
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    opacity: 0.4;
  }
  :disabled {
    box-shadow: none;
    background-color: ${(p) => p.theme.colors.elevatedBackground};
    opacity: 0.2;
    cursor: not-allowed;
  }
`;

export default LoginPage;
