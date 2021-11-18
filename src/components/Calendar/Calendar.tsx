/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { borders } from "../../styles/borders";
import { colors } from "../../variables/colors";
import { ExpandedDate } from "../ExpandedDate/ExpandedDate";
import { CalendarDays } from "./CalendarDays";
import { CalendarTitle } from "./CalendarTitle";
import { CalendarProvider } from "./useCalendarContext";

const calendar = css`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 1px;
  background: ${colors.border};
  box-sizing: border-box;

  ${borders.paperBorder}
`;

export const Calendar: FC = (props) => {
  return (
    <CalendarProvider>
      <CalendarTitle />
      <section css={calendar} {...props}>
        <CalendarDays />
      </section>
      <ExpandedDate />
    </CalendarProvider>
  );
};
