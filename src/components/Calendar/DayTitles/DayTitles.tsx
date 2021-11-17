/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

const dayTitle = css`
  display: grid;
`;

export const DayTitles: FC = (props) => {
  return <div css={dayTitle} {...props}></div>;
};
