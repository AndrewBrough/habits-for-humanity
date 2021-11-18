/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

const calendarDay = css`
  height: calc(100vw / 7 - 0.125rem);
  background: white;
  padding: 0.5rem;
  box-sizing: border-box;
`;

export const CalendarDay: FC = (props) => {
  return <div css={calendarDay} {...props} />;
};
