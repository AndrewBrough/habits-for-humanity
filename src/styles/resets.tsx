import { css } from "@emotion/react";
import { borders } from "./borders";

export const resets = {
  button: {
    unstyled: css`
      border: none;
      background: transparent;
      padding: 0;
      margin: 0;
      text-align: inherit;
      vertical-align: inherit;
      appearance: none;
      display: flex;
      &:active {
        ${borders.paperBorder};
      }
    `,
  },
};
