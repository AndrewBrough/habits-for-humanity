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
  gap: 1px;
  background: ${colors.primary};
  border: 1px solid ${colors.primary};
  box-sizing: border-box;
`;

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
