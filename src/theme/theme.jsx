// This is  implemented using usecontext hook

import { createContext } from "react";

import { useState } from "react";
import { useContext } from "react";
import Checkbox from "../elements/checkbox";
import Header from "../elements/header/header";
import Main from "../elements/main/main";

import "./theme.css";

const ThemeContext = createContext(null);

const { Provider } = ThemeContext;

export const ThemeContextProvider = ({ children }) => {
  const [theme, setTheme] = useState("");
  return <Provider value={{ theme, setTheme }}>{children}</Provider>;
};

const DarkContainer = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = (e) => {
    if (e.target.checked) {
      setTheme("dark-theme");
    } else {
      setTheme("");
    }
  };
  return (
    <div className="container">
      <div className={theme === "dark-theme" ? "dark-theme" : ""}>
        <Checkbox
          value={"dark"}
          label="Dark mode"
          handleChange={handleThemeChange}
        />
        <h3>This container color is controlled using theme value</h3>
      </div>
    </div>
  );
};
const Theme = () => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeChange = (e) => {
    if (e.target.checked) {
      setTheme("dark");
    } else {
      setTheme("");
    }
  };
  return (
    <>
      <Header title="Theme" />
      <Main>
        <div className={theme === "dark" ? "dark-theme" : ""}>
          <h1>Light and Dark Mode</h1>
          <div>
            <Checkbox
              value={"dark"}
              label="Dark mode"
              handleChange={handleThemeChange}
            />
            <h3>The Entire page color is controlled using theme value</h3>
            <DarkContainer />
          </div>
        </div>
      </Main>
    </>
  );
};

export default Theme;
