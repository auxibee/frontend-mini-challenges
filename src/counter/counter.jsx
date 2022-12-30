import { useState } from "react";
import Button from "../elements/button/button";
import Input from "../elements/input";

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
      <p>{counter}</p>
      <div>
        <Button value="+" handleClick={handleCounter}>
          +
        </Button>
        <Button value="-" handleClick={handleCounter}>
          -
        </Button>

        <p>
          increment/Decrement by:
          <Input
            value={factor}
            handleChange={(e) => setFactor(e.target.value)}
          />
        </p>
        <Button handleClick={handleReset}>reset</Button>
      </div>
    </>
  );
};

export default Counter;
