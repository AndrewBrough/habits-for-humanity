import { addDays, format, startOfWeek } from "date-fns";

const getDaysInMonth = (
  year: number = new Date().getFullYear(),
  month: number = new Date().getMonth()
) => new Date(year, month + 1, 0).getDate(); // getDaysInCurrentMonth(2000, 1) -> 29

const firstDOW = startOfWeek(new Date());
const shortWeekDaysArray = () =>
  Array.from(Array(7)).map((e, i) => format(addDays(firstDOW, i), "EEE"));

export { getDaysInMonth, shortWeekDaysArray };
