/** @jsxImportSource @emotion/react */
import { css, Interpolation, Theme } from "@emotion/react";
import { FC } from "react";
import { resets } from "../../styles/resets";

const closeBtn = css`
  ${resets.button.unstyled};

  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 2rem;
  line-height: 0;
  border-radius: 5rem;
`;

const CloseButton: FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return (
    <button css={closeBtn} {...props}>
      X
    </button>
  );
};

export { CloseButton };
