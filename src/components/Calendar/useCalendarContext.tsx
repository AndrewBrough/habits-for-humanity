import { createContext, FC, useContext } from "react";

interface CalendarContextProps {
  date: Date;
}

const defaultCalendarContextProps: CalendarContextProps = {
  date: new Date(),
};

const CalendarContext = createContext<CalendarContextProps>(
  defaultCalendarContextProps
);

const CalendarProvider: FC = ({ children }) => {
  return (
    <CalendarContext.Provider value={defaultCalendarContextProps}>
      {children}
    </CalendarContext.Provider>
  );
};

const useCalendarContext = () => {
  return useContext(CalendarContext);
};

export { CalendarProvider, CalendarContext, useCalendarContext };
