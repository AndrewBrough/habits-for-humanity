/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { format } from "date-fns";
import { FC } from "react";
import { paper } from "../../styles/paper";
import { colors } from "../../variables/colors";
import { breakpoints } from "../../variables/dimensions";
import { useCalendarContext } from "../Calendar/useCalendarContext";
import { CloseButton } from "../CloseButton/CloseButton";

const gutterSize = 1;
const gutter = gutterSize + `rem`;
const expandedDateStyle = css`
  position: absolute;
  top: ${gutter};
  left: ${gutter};
  right: ${gutter};
  bottom: ${gutter};
  width: calc(100% - ${gutterSize * 2}rem);
  height: calc(100% - ${gutterSize * 2}rem);
  padding: 1.5rem;
  background: ${colors.background};
  z-index: 1;

  ${paper}

  ${breakpoints.tabletOnly}

  animation: open 0.2s ease-in-out forwards;
  @keyframes open {
    0% {
      transform: scale(0.5);
      opacity: 0;
    }
    100% {
      transform: scale(1);
      opacity: 1;
    }
  }
`;

const ExpandedDate: FC = (props) => {
  const { expandedDate, setExpandedDate } = useCalendarContext()!;

  if (!expandedDate) return null;

  const onClose = () => {
    setExpandedDate(null);
  };

  return (
    <section css={expandedDateStyle} {...props}>
      <CloseButton onClick={onClose} />
      {format(expandedDate, `EEEE, MMMM do`)}
      <br />
      {expandedDate.getFullYear()}
    </section>
  );
};

export { ExpandedDate };
