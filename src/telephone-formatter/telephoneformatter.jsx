import Input from "../elements/input";
import { useState } from "react";
import Header from "../elements/header/header";
import Main from "../elements/main/main";

import "./telephoneformatter.css";

const TelephoneFormatter = () => {
  const [telephone, setTelephone] = useState("");
  const handleTelephoneFormat = (e) => {
    setTelephone(e.target.value);
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
