/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { shortWeekDaysArray } from "../../helpers/date.helpers";
import { CalendarDay } from "./CalendarDay";
import { useCalendarContext } from "./useCalendarContext";

const calendarDays = css``;

const CalendarDays: FC = (props) => {
  const { date } = useCalendarContext();
  /**
   * Takes the calendar tile index and returns the date expected on that tile
   * @param calendarTileIndex
   * @returns date of month text to render in a calendar tile, should align with the day of week/calendar tile index
   */
  const getDayOfMonth = (calendarTileIndex: number) => {
    const tileIndexMinusTitleRow = calendarTileIndex - 7; // exclude the title row

    const date = new Date();
    date.setMonth(date.getMonth());
    date.setDate(1);
    const firstDayOfWeek = date.getDay();
    // eg first is a 1:monday, return monday as 1
    const firstDayOfMonthOffset = (tileIndexMinusTitleRow % 7) - firstDayOfWeek;
    console.log({
      date,
      firstDayOfWeek,
      tileIndexMinusTitleRow,
      firstDayOfMonthOffset,
    });
    return tileIndexMinusTitleRow < 0
      ? tileIndexMinusTitleRow + firstDayOfMonthOffset
      : tileIndexMinusTitleRow;
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
    return new Array(6 * 8).fill("").map((d, i) => {
      const key = `calendarDay-${i}`;
      return <CalendarDay key={key}>{getDayText(i)}</CalendarDay>;
    });
  };

  return <>{renderDaySquares()}</>;
};

export { CalendarDays };
