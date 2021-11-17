/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { CalendarDays } from "./CalendarDays";
import { CalendarTitle } from "./CalendarTitle";
import { CalendarProvider } from "./useCalendarContext";

const calendar = css`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, calc(100% / 7));
`;

/**
 * A UI only calendar.
 * Renders a calendar and places the days of the current month in the appropriate day of the week
 * @param props
 * @returns
 *
 */
export const Calendar: FC = (props) => {
  // const renderDays = () =>
  //   new Array(getDaysInMonth()).fill("").map((d, i) => {
  //     const dayOfMonth = i + 1; // ALERTALERTALERTALERT this is important to get the non 0 indexed day of the month
  //     return (
  //       <div key={`dayOfMonth-${dayOfMonth}`} css={dayOfMonth}>
  //         {dayOfMonth}
  //       </div>
  //     );
  //   });

  return (
    <CalendarProvider>
      <CalendarTitle />
      <section css={calendar} {...props}>
        <CalendarDays />
      </section>
    </CalendarProvider>
  );
};
