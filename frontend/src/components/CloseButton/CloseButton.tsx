/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { resets } from "../../styles/resets";

const closeBtn = css`
  ${resets.button.unstyled};

  position: absolute;
  top: 1rem;
  right: 1rem;
  padding: 1.125rem;
  line-height: 0;
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
