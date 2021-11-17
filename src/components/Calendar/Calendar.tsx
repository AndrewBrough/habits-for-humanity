/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { colors } from "../../variables/colors";
import { CalendarDays } from "./CalendarDays";
import { CalendarTitle } from "./CalendarTitle";
import { CalendarProvider } from "./useCalendarContext";

const calendar = css`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  background: ${colors.primary};
  border: 2px solid ${colors.primary};
  box-sizing: border-box;
`;

/**
 * Renders a calendar and places the days of the current month in the appropriate day of the week.
 * Provides data about the set date to child components
 */
export const Calendar: FC = (props) => {
  return (
    <CalendarProvider>
      <CalendarTitle />
      <section css={calendar} {...props}>
        <CalendarDays />
      </section>
    </CalendarProvider>
  );
};
