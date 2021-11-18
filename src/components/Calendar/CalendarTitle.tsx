/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { format } from "date-fns";
import { FC } from "react";
import { resets } from "../../styles/resets";
import { useCalendarContext } from "./useCalendarContext";

const calenderTitle = css`
  /* display: flex;
  justify-content: space-around; */
  margin-bottom: 1rem;
  margin-top: 1rem;
`;

const title = css`
  display: inline-block;
  margin: 0;
  min-width: 5.2rem;
`;

const btn = css`
  ${resets.button.unstyled}
  display: inline-block;
  padding: 0.6rem;
  margin-left: 0.5rem;
  font-size: 1.2rem;
  line-height: 0;
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
      <button css={btn} onClick={() => onMonthChange(-1)}>{`<`}</button>
      <button css={btn} onClick={() => onMonthChange(1)}>{`>`}</button>
    </div>
  );
};

export { CalendarTitle };
