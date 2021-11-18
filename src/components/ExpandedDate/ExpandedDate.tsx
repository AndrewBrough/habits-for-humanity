/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { FC } from "react";
import { paper } from "../../styles/paper";
import { colors } from "../../variables/colors";
import { useCalendarContext } from "../Calendar/useCalendarContext";
import { CloseButton } from "../CloseButton/CloseButton";

const expandedDateStyle = css`
  position: absolute;
  top: 1rem;
  left: 1rem;
  right: 1rem;
  bottom: 1rem;
  width: calc(100% - 2rem);
  height: calc(100% - 2rem);
  padding: 2rem;
  background: ${colors.background};
  z-index: 1;

  ${paper}

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
      {expandedDate.getDate()}
    </section>
  );
};

export { ExpandedDate };
