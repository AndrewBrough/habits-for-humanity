/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { format } from "date-fns";
import { FC } from "react";
import { useCalendarContext } from "./useCalendarContext";

const calenderTitle = css``;

const CalendarTitle: FC = (props) => {
  const { date } = useCalendarContext();
  return (
    <div css={calenderTitle} {...props}>
      <h4>{format(date, "MMMM")}</h4>
    </div>
  );
};

export { CalendarTitle };
