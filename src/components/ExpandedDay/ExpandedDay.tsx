/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

const expandedDay = css`
  position: absolute;
  width: 95%;
  padding: 1rem;
`;

interface ExpandedDayProps {
  date: Date;
}

const ExpandedDay: FC<ExpandedDayProps> = (props) => {
  return (
    <section css={expandedDay} {...props}>
      {props.children}
    </section>
  );
};

export { ExpandedDay };
