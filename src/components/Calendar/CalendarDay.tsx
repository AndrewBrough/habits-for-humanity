/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

const calendarDay = css`
  height: calc(100vw / 7);
  &:nth-child(2n + 1) {
    background: whitesmoke;
  }
`;

export const CalendarDay: FC = (props) => {
  return <div css={calendarDay} {...props} />;
};
