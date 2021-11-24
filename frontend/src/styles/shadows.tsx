import { css } from "@emotion/react";

export const shadows = {
  paperShadow: css`
    box-shadow: 0 0.125rem 1rem rgba(0, 0, 0, 0.3);
  `,
  hoverShadow: css`
    box-shadow: 0 0.125rem 0.5rem rgba(0, 0, 0, 0.3);
    z-index: 1;
  `,
};
