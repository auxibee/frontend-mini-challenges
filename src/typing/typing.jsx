import Button from "../elements/button/button";
import useKeyPress from "../hooks/useKeyPress";
import { useState, useEffect } from "react";
import Main from "../elements/main/main";
import Header from "./../elements/header/header";

import "./typing.css";

const setOne = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
const setTwo = ["q", "w", "e", "r", "t", "y", "u", "i", "o", "p"];
const setThree = ["a", "s", "d", "f", "g", "h", "j", "k", "l"];
const setFour = ["z", "x", "c", "v", "b", "n", "m"];

const sentences = [
  "i am going to shool wirllfs fsaf",
  "why i amf fahfhdfha fasf",
];

const KeyBoard = ({ keys, currentKey }) => {
  return (
    <div className="keyboard-keys">
      {keys.map((key) => (
        <Button
          key={key}
          value={key}
          style={{ background: key == currentKey ? "#444950" : "white" }}
        >
          {key}
        </Button>
      ))}
    </div>
  );
};

const WordsScreen = ({ value }) => {
  const firstLetter = value[0];
  const newValue = value.slice(1);
  return (
    <div className="words-screen">
      <span>{firstLetter}</span>
      {newValue}
    </div>
  );
};

const Timer = ({ startTimer, timer }) => {
  const [timeLeft, setTimeLeft] = useState(timer);
  let timeId = null;

  useEffect(() => {
    if (startTimer) {
      timeId = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
    }
    if (timeLeft == 0) {
      clearInterval(timeId);
    }
    return () => clearInterval(timeId);
  });

  return (
    <>
      {startTimer && <p className="time-left"> Time Remaining:{timeLeft}</p>}
      {!startTimer && <p className="time-left"> Time Remaining:{timeLeft}</p>}
    </>
  );
};

const TypingGame = () => {
  const [words, setWords] = useState(sentences[0]);
  const [wordsTypedCount, setWordsTypedCount] = useState(0);
  const [startTimer, setStartTimer] = useState(false);
  const [timer, setTimer] = useState(60);
  const [key, setKey] = useKeyPress();

  const handleReset = () => {
    setWordsTypedCount(0);
    setStartTimer(false);
    setWords(sentences[0]);
    setKey("");
    setTimer(60);
  };

  useEffect(() => {
    if (key) {
      setStartTimer(true);
    }

    if (key === words[0]) {
      const newWords = words.slice(1);
      if (newWords[0] === " ") {
        setWordsTypedCount(wordsTypedCount + 1);
        setWords(newWords.slice(1));
      } else {
        setWords(newWords);
      }
      setKey("");
    }
  }, [key]);

  return (
    <>
      <Header title="Typing Game" />
      <Main>
        <WordsScreen value={words} />
        <KeyBoard keys={setOne} currentKey={key} />
        <KeyBoard keys={setTwo} currentKey={key} />
        <KeyBoard keys={setThree} currentKey={key} />
        <KeyBoard keys={setFour} currentKey={key} />
        <Timer startTimer={startTimer} timer={timer} />
        <p>Typed Words: {wordsTypedCount}</p>
        <Button handleClick={handleReset}> Reset </Button>
      </Main>
    </>
  );
};

export default TypingGame;
