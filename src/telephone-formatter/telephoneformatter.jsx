import Input from "../elements/input";
import { useState, useRef } from "react";
import Header from "../elements/header/header";
import Main from "../elements/main/main";

import "./telephoneformatter.css";

const formatTelephone = (number) => {
  const subStr = number.slice(0, 3);

  if (subStr.length === 3 && subStr[0] !== "+") {
    return `+(${subStr}) - `;
  } else {
    return number;
  }
};

const TelephoneFormatter = () => {
  const [telephone, setTelephone] = useState("");

  const handleTelephoneFormat = (e) => {
    setTelephone(() => formatTelephone(e.target.value));
  };
  return (
    <>
      <Header title="Telephone Formater" />
      <Main>
        <div className="telephone-input">
          <Input
            value={telephone}
            handleChange={handleTelephoneFormat}
            placeholder="Telephone"
          />
          <p>+ (055) - 4567890</p>
        </div>
      </Main>
    </>
  );
};

export default TelephoneFormatter;
