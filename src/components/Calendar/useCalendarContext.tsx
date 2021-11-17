import { createContext, FC, useContext, useState } from "react";

interface CalendarContextProps {
  date: Date;
  setDate: (date: Date) => void;
}

const CalendarContext = createContext<CalendarContextProps | null>(null);

const CalendarProvider: FC = ({ children }) => {
  const [date, setDate] = useState(new Date());
  const defaultValue: CalendarContextProps = {
    date,
    setDate,
  };
  return (
    <CalendarContext.Provider value={defaultValue}>
      {children}
    </CalendarContext.Provider>
  );
};

const useCalendarContext = () => {
  return useContext(CalendarContext);
};

export { CalendarProvider, CalendarContext, useCalendarContext };
