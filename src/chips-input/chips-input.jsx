import Button from "../elements/button/button";
import Input from "../elements/input";
import { useReducer } from "react";
import Header from "../elements/header/header";
import useFocusInput from "../hooks/useFocusInput";
import useEnterKey from "./../hooks/useEnterKey";
import Main from "./../elements/main/main";

import "./chips.css";

const chipsReducer = (state, action) => {
  switch (action.type) {
    case "added_chip":
      return { chip: "", chips: [...state.chips, action.chip] };
    case "set_chip":
      return { ...state, chip: action.chip };
    case "removed_chip":
      const newChips = state.chips.filter(
        (index, chip) => chip !== parseInt(action.chip)
      );
      return { ...state, chips: newChips };
  }
};
const Chip = ({ name, value, handleClick }) => {
  return (
    <div>
      {name}{" "}
      <Button handleClick={handleClick} value={value}>
        &times;
      </Button>
    </div>
  );
};

const ChipInput = () => {
  const [chips, dispatch] = useReducer(chipsReducer, { chip: "", chips: [] });
  const inputRef = useFocusInput();
  useEnterKey(() => dispatch({ type: "added_chip", chip: chips.chip }));

  return (
    <>
      <Header title="A chips Input" />
      <Main>
        <div className="chip-input">
          <Input
            value={chips.chip}
            handleChange={(e) =>
              dispatch({ type: "set_chip", chip: e.target.value })
            }
            placeholder="Type and hit Enter"
            inputref={inputRef}
          />
        </div>
        {chips.chips.map((chip, index) => (
          <Chip
            key={index}
            name={chip}
            value={index}
            handleClick={(e) =>
              dispatch({ type: "removed_chip", chip: e.target.value })
            }
          />
        ))}
      </Main>
    </>
  );
};

export default ChipInput;
