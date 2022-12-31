import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, Routes, Route, BrowserRouter } from "react-router-dom";

import "./reset.css";
import "./index.css";

import Stocks from "./stocks/stocks";
import GuessGame from "./guess-the-number/guessnumber";
import TelephoneFormatter from "./telephone-formatter/telephoneformatter";
import TransferList from "./transferlist/transferlist";
import Theme, { ThemeContextProvider } from "./theme/theme";
import AlertPage from "./alert/alert";
import Rating from "./rating/rating";
import ChipInput from "./chips-input/chips-input";
import OtpInput from "./otp-input/otp-input";
import HomePage from "./pages/homepage";
import MainLayout from "./elements/layout/layout";

import TypingGame from "./typing/typing";
import Counter from "./counter/counter";
import PasswordStrength from "./password-strength/password-strenght";

const AppWrapper = () => {
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
};

const ThemeDemo = () => {
  return (
    <ThemeContextProvider>
      <Theme />
    </ThemeContextProvider>
  );
};

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route element={<AppWrapper />}>
        <Route path="/ratings" element={<Rating />} />
        <Route path="/transfer-list" element={<TransferList />} />
        <Route path="/chips-input" element={<ChipInput />} />
        <Route path="/guess-the-number" element={<GuessGame />} />
        <Route path="/alert" element={<AlertPage />} />
        <Route path="/telephone-formatter" element={<TelephoneFormatter />} />
        <Route path="/theme" element={<ThemeDemo />} />
        <Route path="/otp" element={<OtpInput />} />
        <Route path="/stocks" element={<Stocks />} />
        <Route path="/typing" element={<TypingGame />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/password" element={<PasswordStrength />} />
      </Route>
    </Routes>
  );
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  </React.StrictMode>
);
