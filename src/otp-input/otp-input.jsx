import { useRef, useEffect, useState } from "react";
import Header from "../elements/header/header";
import Input from "../elements/input";
import Main from "../elements/main/main";

import "./otp.css";

const OtpInput = () => {
  const inputs = [
    { key: 1, value: "" },
    { key: 2, value: "" },
    { key: 3, value: "" },
    { key: 4, value: "" },
    { key: 5, value: "" },
  ];
  const [currentInput, setCurrentInput] = useState(1);
  const [inputValues, setInputValue] = useState(inputs);
  const textInput = useRef(null);

  const handleInputChange = (e) => {
    if (isNaN(parseInt(e.target.value))) {
      setCurrentInput(currentInput);
      return;
    }
    const newInputs = inputValues.map((input) => {
      if (input.key === currentInput) {
        return { key: input.key, value: e.target.value };
      } else {
        return input;
      }
    });

    setCurrentInput(currentInput + 1);
    setInputValue(newInputs);
  };
  useEffect(() => {
    if (currentInput <= inputValues.length) {
      textInput.current.focus();
    }
  }, [currentInput]);
  return (
    <>
      <Header title="A simple OTP input" />
      <Main>
        <div className="otp">
          {inputValues.map(({ key, value }) => (
            <Input
              key={key}
              value={value}
              inputref={key === currentInput ? textInput : null}
              handleChange={handleInputChange}
            />
          ))}
        </div>
      </Main>
    </>
  );
};

export default OtpInput;
