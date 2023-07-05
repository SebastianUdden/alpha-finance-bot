import Values, { IValues } from "../../organisms/values/Values";
import Page from "../../organisms/page/Page";
import styled, { useTheme } from "styled-components";
import { createColors } from "../../utils";
import SelectedValue from "../../molecules/selected-value/SelectedValue";
import { ValueProps } from "../../molecules/value/Value";
import { useEffect, useState } from "react";

export interface AccountsPageProps {
  selected?: ValueProps;
  values: IValues;
  openAccountPage?: (account: ValueProps) => void;
}

const AccountsPage = ({
  selected,
  values,
  openAccountPage,
}: AccountsPageProps) => {
  const theme = useTheme();
  const [selectedValue, setSelectedValue] = useState<ValueProps>();
  const [colors] = useState(
    createColors(values.values.length, theme.palettes.green)
  );

  useEffect(() => {
    setSelectedValue(selected || values.values[0]);
  }, []);

  return (
    <Page>
      <Values
        {...values}
        selected={selectedValue}
        colors={colors}
        showLarge
        onSelect={(value: ValueProps) => {
          if (
            selectedValue &&
            openAccountPage &&
            value.id === selectedValue.id
          ) {
            openAccountPage(selectedValue);
            return;
          }
          setSelectedValue(value);
        }}
      />
      {selectedValue && openAccountPage && (
        <SelectedValue
          title={selectedValue.title || ""}
          value={selectedValue.value}
          fields={selectedValue.fields || []}
          cta="Open page"
          onCtaClick={() => openAccountPage(selectedValue)}
        />
      )}
      {selectedValue && !openAccountPage && (
        <SelectedValue
          title={selectedValue.title || ""}
          value={selectedValue.value}
          fields={selectedValue.fields || []}
        />
      )}
    </Page>
  );
};

export default AccountsPage;
