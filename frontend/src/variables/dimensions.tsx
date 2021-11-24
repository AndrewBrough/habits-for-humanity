import { css } from "@emotion/react";
import { SerializedStyles } from "@emotion/utils";

export const screen = {
  desktop: `1200px`,
  tablet: `768px`,
};

export const maxPanelDimension = `50rem`;

export const breakpoints = {
  tablet: (delegateCss: SerializedStyles) => css`
    @media screen and (max-width: ${screen.tablet}) {
      ${delegateCss}
    }
  `,
  desktop: (delegateCss: SerializedStyles) => css`
    @media screen and (max-width: ${screen.tablet}) {
      ${delegateCss}
    }
  `,
};
