import { FC } from "react";
import { Calendar } from "../../components/Calendar/Calendar";

export const CalendarPage: FC = (props) => {
  return (
    <div {...props}>
      Calendar page
      <div>
        <Calendar />
      </div>
    </div>
  );
};
