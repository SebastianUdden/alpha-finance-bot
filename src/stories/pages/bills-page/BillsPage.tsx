import Values from "../../organisms/values/Values";
import Page from "../../organisms/page/Page";
import styled, { useTheme } from "styled-components";
import { createColors } from "../../utils";
import { useState } from "react";
import SelectedValue from "../../molecules/selected-value/SelectedValue";
import { ValueProps } from "../../molecules/value/Value";
import { ITransactions } from "../../organisms/transactions/Transactions";
import { ONE_DAY } from "../../time";

interface GetFieldsProps extends ValueProps {
  date?: Date | string;
}
const getFields = (selected: GetFieldsProps) => {
  const dueIn = Math.floor(
    (new Date().getTime() -
      new Date(selected.date || selected.text).getTime()) /
      ONE_DAY
  );
  return [
    {
      label: dueIn > 0 ? "Overdue by" : `Due${dueIn === 0 ? "" : " in"}`,
      value:
        dueIn === 0
          ? "Today"
          : `${Math.abs(dueIn)} day${dueIn > 1 || dueIn < 0 ? "s" : ""}`,
    },
  ];
};

const sortByDate = (a: any, b: any) => {
  if (new Date(a.date) > new Date(b.date)) return 1;
  if (new Date(a.date) < new Date(b.date)) return -1;
  return 0;
};

interface Props {
  selected?: ValueProps;
  bills: ITransactions;
}

const BillsPage = ({ selected, bills }: Props) => {
  const theme = useTheme();
  const [selectedValue, setSelectedValue] = useState<any>(
    selected || bills.values[0]
  );
  const [colors] = useState(
    createColors(bills.values.length, [
      ...theme.palettes.orange,
      ...theme.palettes.red,
    ])
  );

  return (
    <Page>
      <Values
        title={bills.title}
        values={bills.values.sort(sortByDate).map((v) => ({
          ...v,
          text: v.date.toString(),
        }))}
        selected={selectedValue}
        colors={colors}
        showLarge
        onSelect={(value: {
          title?: string;
          text: string;
          date?: Date | string;
          value: number;
        }) => setSelectedValue({ ...value, text: value.date })}
      />
      {selectedValue && (
        <SelectedValue
          {...selectedValue}
          fields={getFields(selectedValue)}
          cta="Mark as paid"
          onCtaClick={() => alert("PAID")}
        />
      )}
    </Page>
  );
};

export default BillsPage;
