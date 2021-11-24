import { addDays, format, startOfWeek } from "date-fns";

const getDaysInMonth = (
  year: number = new Date().getFullYear(),
  month: number = new Date().getMonth()
) => new Date(year, month + 1, 0).getDate(); // getDaysInCurrentMonth(2000, 1) -> 29

const firstDOW = startOfWeek(new Date());
const shortWeekDaysArray = () =>
  Array.from(Array(7)).map((e, i) => format(addDays(firstDOW, i), "EEE"));

/**
 * Takes the calendar tile index and returns the date expected on that tile
 * @param calendarTileIndex
 * @returns date of month text to render in a calendar tile, should align with the day of week/calendar tile index
 * eg. given 5 (friday tile), return 1 if the first is a friday
 */
const getDayOfMonth = (calendarTileIndex: number, date: Date) => {
  const tileIndex = calendarTileIndex - 7; // exclude the title row

  const d = new Date(date);
  d.setMonth(date.getMonth());
  d.setDate(1);
  const firstDayOfWeek = d.getDay();
  const calendarDay = tileIndex - firstDayOfWeek + 1;

  d.setMonth(date.getMonth() + 1);
  d.setDate(0);
  const lastOfMonth = d.getDate();
  return calendarDay > 0 && calendarDay <= lastOfMonth ? calendarDay : "";
};

export { getDaysInMonth, shortWeekDaysArray, getDayOfMonth };
