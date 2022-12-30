import { useReducer, useRef, useEffect } from "react";
import Button from "../elements/button/button";

import Header from "./../elements/header/header";
import Main from "./../elements/main/main";

import "./guess.css";

const setInitialGameState = () => {
  return {
    guess: "",
    status: "",
    guessList: [],
    randomGuess: Math.floor(Math.random() * 100) + 1,
    inPlay: true,
  };
};

const gameReducer = (state, action) => {
  switch (action.type) {
    case "setGuess":
      return { ...state, guess: action.guess };

    case "checkGuess":
      if (state.guessList.length === 5) {
        return { ...state, inPlay: false, status: "Game over try again" };
      }

      if (parseInt(state.randomGuess) === parseInt(state.guess)) {
        return { ...state, status: "you have won", guess: "", inPlay: false };
      }

      const gameStatus =
        parseInt(state.guess) > parseInt(state.randomGuess)
          ? "Guess too large"
          : "Guess too small";

      return {
        ...state,
        status: gameStatus,
        guessList: [...state.guessList, state.guess],
        guess: "",
      };

    case "restartGame":
      return setInitialGameState();
  }
};

const GuessGame = () => {
  const initialGameState = setInitialGameState();

  const [gameState, dispatch] = useReducer(gameReducer, initialGameState);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <>
      <Header title="Guessing Game" />
      <Main>
        <h1 className="main-title">Enter a guess between 0 to 100</h1>
        <div className="game-input">
          <input
            value={gameState.guess}
            onChange={(e) =>
              dispatch({ type: "setGuess", guess: e.target.value })
            }
            ref={inputRef}
          />
        </div>
        <div className="game-btns">
          <Button
            disabled={!gameState.inPlay}
            handleClick={() => dispatch({ type: "checkGuess" })}
          >
            Submit
          </Button>
          <Button
            disabled={gameState.inPlay}
            handleClick={() => dispatch({ type: "restartGame" })}
          >
            Restart game
          </Button>
        </div>
        <div>
          <p>{gameState.status}</p>
          <div className="guesses">
            <span>Guesses: </span>
            <ul className="guesslist">
              {gameState.guessList.map((guess, index) => (
                <li key={index}>{guess}</li>
              ))}
            </ul>
          </div>
        </div>
      </Main>
    </>
  );
};

export default GuessGame;
