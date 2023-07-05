import styled from "styled-components";
import Button from "../../atoms/button/Button";
import { formatCurrency } from "../../utils";

export type FieldProps = {
  label: string;
  value: string;
};

export interface SelectedValueProps {
  title: string;
  value: number;
  fields: FieldProps[];
  cta?: string;
  onCtaClick?: () => void;
}

const SelectedValue = ({
  title,
  value,
  fields,
  cta,
  onCtaClick,
}: SelectedValueProps) => {
  return (
    <Wrapper>
      <Field>
        <Label>{title}</Label>
        <Value>{formatCurrency(value)}</Value>
      </Field>
      {fields &&
        fields.map((field) => (
          <Field key={field.label}>
            <Label>{field.label}</Label>
            <Value>{field.value}</Value>
          </Field>
        ))}
      {cta && onCtaClick && (
        <>
          <br />
          <Button onClick={onCtaClick}>{cta}</Button>
        </>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  z-index: 99;
  box-sizing: border-box;
  padding: 15px 50px 40px;
  background-color: ${(p) => p.theme.colors.interactiveDarkGrey};
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
  /* bottom: 0;
  left: 0; */
  /* width: 100%; */
  @media (min-width: 1000px) {
    position: fixed;
    padding: 20px;
    top: 0;
    right: 0;
    left: auto;
    width: 20vw;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  color: ${(p) => p.theme.colors.white};
  border-bottom: ${(p) => `1px solid ${p.theme.colors.fadedGrey}`};
`;
const Label = styled.label`
  margin: 25px 0 10px;
  letter-spacing: 2px;
  opacity: 0.7;
`;
const Value = styled.p`
  margin: 0 0 10px;
  letter-spacing: 2px;
`;

export default SelectedValue;
