import { css } from "@emotion/react";

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
      transform: scale(1);
      transition: all 0.2s ease-in-out;
      &:focus,
      &:hover {
        transform: scale(1.1);
      }
      &:active {
        && {
          transform: scale(0.9);
        }
      }
    `,
  },
};
