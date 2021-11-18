/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { resets } from "../../styles/resets";
import { shadows } from "../../styles/shadows";
import { useCalendarContext } from "./useCalendarContext";

const calendarDay = css`
  ${resets.button.unstyled};

  height: calc(100vw / 7 - 0.125rem);
  background: white;
  padding: 0.5rem;
  /* border-radius: 0.5rem; */

  &:hover,
  &:focus {
    ${shadows.paperShadow};
    transform: scale(1.05);
    z-index: 1;
  }
`;

interface CalendarDayProps {
  day: number | null;
}

export const CalendarDay: FC<CalendarDayProps> = ({ day, ...props }) => {
  const date = new Date();
  date.setDate(day!);

  const { setExpandedDate } = useCalendarContext()!;

  const onClick = () => {
    setExpandedDate(date);
  };

  return <button css={calendarDay} onClick={onClick} {...props} />;
};
