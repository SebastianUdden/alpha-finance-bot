import { dateString } from "../../stories/time";
import { uuidv4 } from "../../stories/utils";

export const MOCK_BILLS = [
  {
    id: uuidv4(),
    title: "Rent",
    date: "2023-01-28",
    value: 1235,
  },
  {
    id: uuidv4(),
    title: "Car insurance",
    date: "2023-03-28",
    value: 600,
  },
  {
    id: uuidv4(),
    title: "Vacation insurance",
    date: "2023-04-10",
    value: 870,
  },
  {
    id: uuidv4(),
    title: "Rent 2",
    date: "2023-04-08",
    value: 235,
  },
  {
    id: uuidv4(),
    title: "Car insurance 2",
    date: "2023-04-02",
    value: 120,
  },
  {
    id: uuidv4(),
    title: "Vacation insurance 2",
    date: "2023-03-22",
    value: 370,
  },
  {
    id: uuidv4(),
    title: "Vacation insurance 3",
    date: "2023-03-19",
    value: 2870,
  },
  {
    id: uuidv4(),
    title: "Mastery tax",
    date: dateString(new Date()),
    value: 9870,
  },
];
