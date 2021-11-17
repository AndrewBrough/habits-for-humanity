/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { format } from "date-fns";
import { FC } from "react";
import { useCalendarContext } from "./useCalendarContext";

const calenderTitle = css`
  display: flex;
  justify-content: space-between;
`;

const title = css`
  margin-right: auto;
`;

const CalendarTitle: FC = (props) => {
  const { date, setDate } = useCalendarContext()!;

  const onMonthChange = (dir: -1 | 1) => {
    const d = new Date(date);
    d.setMonth(date.getMonth() + dir);
    setDate(d);
  };

  return (
    <div css={calenderTitle} {...props}>
      <h4 css={title}>{format(date, "MMMM")}</h4>
      <button onClick={() => onMonthChange(-1)}>{`<`}</button>
      <button onClick={() => onMonthChange(1)}>{`>`}</button>
    </div>
  );
};

export { CalendarTitle };
