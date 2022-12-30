// This is intentionally implemented usecontext hook
import { createContext } from "react";
import Checkbox from "./../checkbox";
import { useState } from "react";
import { useContext } from "react";
import Header from "../header/header";
import Main from "../main/main";

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
      setTheme("dark-container");
    } else {
      setTheme("");
    }
  };
  return (
    <div className="container">
      <div className={theme === "dark-container" ? "theme-container-dark" : ""}>
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
        <div className={theme === "dark" ? "theme-main-container" : ""}>
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
