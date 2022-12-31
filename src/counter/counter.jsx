import { useState } from "react";
import Button from "../elements/button/button";
import Header from "../elements/header/header";
import Input from "../elements/input";
import Main from "../elements/main/main";

import "./counter.css";

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [factor, setFactor] = useState("");

  const handleCounter = (e) => {
    let newCounter;
    if (e.target.value === "+") {
      newCounter = factor === "" ? counter + 1 : counter + parseInt(factor);
    } else {
      newCounter = factor === "" ? counter - 1 : counter - parseInt(factor);
    }
    setCounter(newCounter);
  };

  const handleReset = () => {
    setCounter(0);
    setFactor("");
  };

  return (
    <>
      <Header title="Counter" />
      <Main>
        <h1 className="count">{counter}</h1>
        <div className="btns">
          <Button value="+" handleClick={handleCounter}>
            +
          </Button>
          <Button value="-" handleClick={handleCounter}>
            -
          </Button>

          <p className="factor">
            increment/Decrement by:
            <Input
              value={factor}
              handleChange={(e) => setFactor(e.target.value)}
            />
          </p>
          <Button handleClick={handleReset}>reset</Button>
        </div>
      </Main>
    </>
  );
};

export default Counter;
