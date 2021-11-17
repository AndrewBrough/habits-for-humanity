/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { shortWeekDaysArray } from "../../helpers/date.helpers";
import { CalendarDay } from "./CalendarDay";
import { useCalendarContext } from "./useCalendarContext";

const calendarDays = css``;

const CalendarDays: FC = (props) => {
  const { date } = useCalendarContext()!;
  /**
   * Takes the calendar tile index and returns the date expected on that tile
   * @param calendarTileIndex
   * @returns date of month text to render in a calendar tile, should align with the day of week/calendar tile index
   * eg. given 5 (friday tile), return 1 if the first is a friday
   */
  const getDayOfMonth = (calendarTileIndex: number) => {
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

  /**
   * @param i The index of the tile
   * @returns a text value day of the week, null or number for day of the month
   * Note: Will need to be refactored later to return a styled title row element
   * or a day of the month with styling for tracking, events and notes
   */
  const getDayText = (i: number) => {
    const dayOfWeek = i % 7; // 0 based day of week, 0 = sunday
    return i < 7 ? shortWeekDaysArray()[dayOfWeek] : getDayOfMonth(i);
  };

  /**
   * @returns an array of react elements, one for each square in the calendar layout
   */
  const renderDaySquares = () => {
    return new Array(6 * 8 + 1).fill("").map((d, i) => {
      const key = `calendarDay-${i}`;
      return <CalendarDay key={key}>{getDayText(i)}</CalendarDay>;
    });
  };

  return <>{renderDaySquares()}</>;
};

export { CalendarDays };
