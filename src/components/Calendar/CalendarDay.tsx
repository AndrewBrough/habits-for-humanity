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
  transform: scale(1) !important;
`;

const expandableDay = css`
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

  const isExpandable = !!day;

  const onClick = () => isExpandable && setExpandedDate(date);

  const styles = [calendarDay, isExpandable && expandableDay];

  return <button css={styles} onClick={onClick} {...props} />;
};
