import Button from "../elements/button/button";
import "./progressbar.css";
import { useState, useEffect } from "react";
import Header from "../elements/header/header";
import Main from "../elements/main/main";

const ProgressBar = () => {
  const [start, setStart] = useState(false);
  const [width, setWidth] = useState(0);

  const handleReset = () => {
    setStart(false);
    setWidth(0);
  };

  useEffect(() => {
    let timer = null;
    if (start && width < 100) {
      timer = setInterval(() => setWidth(width + 1), 200);
    }

    return () => clearTimeout(timer);
  }, [start, width]);

  const wrapperStyle = {
    position: "relative",
    width: "14rem",
    height: "0.6rem",
    margin: "20px 0",
    outline: "1px solid #ccc",
  };

  const progressBarStyle = {
    width: `${width}%`,
    height: "100%",

    transition: "all 0.25s ease-in-out",
    backgroundColor: "#0074a6",
  };
  return (
    <>
      <Header title="Progress Bar" />
      <Main>
        <div style={wrapperStyle}>
          <div style={progressBarStyle}></div>
        </div>
        <div className="bar-btns">
          <Button className="start" handleClick={() => setStart(true)}>
            Start
          </Button>
          <Button className="stop" handleClick={() => setStart()}>
            Stop
          </Button>
          <Button className="reset" handleClick={handleReset}>
            Reset
          </Button>
        </div>
      </Main>
    </>
  );
};

export default ProgressBar;
