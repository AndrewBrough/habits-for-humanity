/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { getDaysInMonth, shortWeekDaysArray } from "../../helpers/date.helpers";

const calendar = css`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, calc(100% / 7));
`;

const dayTile = css`
  height: calc(100vw / 7);
  &:nth-child(2n + 1) {
    background: whitesmoke;
  }
`;

/**
 * A UI only calendar.
 * Renders a calendar and places the days of the current month in the appropriate day of the week
 * @param props
 * @returns
 *
 */
export const Calendar: FC = (props) => {
  const renderDays = () =>
    new Array(getDaysInMonth()).fill("").map((d, i) => {
      const dayOfMonth = i + 1;
      return (
        <div key={`dayOfMonth-${dayOfMonth}`} css={dayOfMonth}>
          {dayOfMonth}
        </div>
      );
    });

  /** Renders an empty calendar block */
  const renderDaySquares = () => {
    const weekdays = shortWeekDaysArray();

    return new Array(6 * 8).fill("").map((d, i) => {
      const dayOfWeek = i % 7; // 0 based day of week, 0 = sunday
      if (i < 7) {
        // title row
        return (
          <div key={`dayOfWeek-${dayOfWeek}-i`} css={dayTile}>
            {weekdays[dayOfWeek]}
          </div>
        );
      }

      return (
        <div key={`dayOfWeek-${dayOfWeek}-i`} css={dayTile}>
          {getDayOfMonth(i - 7)}
        </div>
      );
    });
  };

  const getDayOfMonth = (dayOfMonth: number) => dayOfMonth;

  return (
    <section css={calendar} {...props}>
      {renderDaySquares()}
    </section>
  );
};
