import { FC } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CalendarPage } from "./CalendarPage/CalendarPage";
import { HistoryPage } from "./HistoryPage/HistoryPage";
import { ROUTES } from "./ROUTES.d";

export const Pages: FC = (props) => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<CalendarPage />} />
        <Route path={ROUTES.HISTORY} element={<HistoryPage />} />
        <Route path="/*" element={<Navigate to={ROUTES.HOME} />} />
      </Routes>
    </BrowserRouter>
  );
};
