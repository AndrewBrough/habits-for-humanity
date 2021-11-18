/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";

const mainLayout = css`
  font-family: "Roboto Slab", serif;
  font-size: 16px;
  padding: 1rem;
  * {
    box-sizing: border-box;
  }
`;

const MainLayout: FC = (props) => {
  return (
    <main css={mainLayout} {...props}>
      {props.children}
    </main>
  );
};

export { MainLayout };
