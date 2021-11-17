/** @jsxRuntime classic */
/** @jsx jsx */
import { css, jsx } from "@emotion/react";
import { FC } from "react";

const btn = css`
  color: hotpink;
`;

export const ExampleButton: FC = (props) => {
  return (
    <button css={btn} {...props}>
      {props.children}
    </button>
  );
};
