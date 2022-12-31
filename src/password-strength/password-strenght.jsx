import Header from "./../elements/header/header";
import Main from "./../elements/main/main";
import "./password.css";

import zxcvbn from "zxcvbn";
import { useState } from "react";

const PasswordStrength = () => {
  const [password, setPassword] = useState("");
  const [strength, setStrength] = useState(0);

  const status = { 25: "Weak", 50: "Weak", 75: "Medium", 100: "Strong" };

  const handleChange = (e) => {
    setPassword(e.target.value);
    const strength = zxcvbn(e.target.value).score;
    setStrength(25 * strength);
  };
  return (
    <>
      <Header title="Password Strenght" />
      <Main>
        <h3>Enter the password</h3>
        <input
          className="password"
          type="password"
          onChange={handleChange}
          value={password}
        />
        <div className="progress-container">
          <div className={"progress-bar " + `progress-bar-${strength}`}></div>
        </div>
        <p>{status[strength]}</p>
      </Main>
    </>
  );
};

export default PasswordStrength;
