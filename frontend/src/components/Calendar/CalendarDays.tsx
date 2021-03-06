import { FC } from "react";
import { getDayOfMonth, shortWeekDaysArray } from "../../helpers/date.helpers";
import { CalendarDay } from "./CalendarDay";
import { useCalendarContext } from "./useCalendarContext";

const CalendarDays: FC = (props) => {
  const { date } = useCalendarContext()!;

  const getDayText = (i: number) => {
    const dayOfWeek = i % 7; // 0 based day of week, 0 = sunday
    return i < 7 ? shortWeekDaysArray()[dayOfWeek] : getDayOfMonth(i, date);
  };

  const renderDaySquares = () => {
    return [...new Array(6 * 8 + 1)].map((d, i) => {
      const key = `calendarDay-${i}`;
      const dateText = getDayText(i);
      return (
        <CalendarDay key={key} day={parseInt(dateText as string)}>
          {dateText}
        </CalendarDay>
      );
    });
  };

  return <>{renderDaySquares()}</>;
};

export { CalendarDays };
