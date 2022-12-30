import { useReducer } from "react";

import Button from "../elements/button/button";
import Checkbox from "../elements/checkbox";
import Header from "./../elements/header/header";

import "./transferlist.css";
import Main from "./../elements/main/main";

const l = [
  { id: 0, name: "js" },
  { id: 1, name: "html" },
  { id: 2, name: "css" },
  { id: 3, name: "ts" },
];
const r = [
  { id: 4, name: "react" },
  { id: 6, name: "vue" },
  { id: 7, name: "svelte" },
  { id: 8, name: "python" },
];

const transferListReducer = (state, action) => {
  switch (action.type) {
    case "moveAll":
      if (action.direction == "left") {
        return {
          ...state,
          rightPanelList: [],
          leftPanelList: [...state.leftPanelList, ...state.rightPanelList],
        };
      } else {
        return {
          ...state,
          leftPanelList: [],
          rightPanelList: [...state.rightPanelList, ...state.leftPanelList],
        };
      }

    case "moveItemsLeft":
      const rightPanelSelectedList = state.rightPanelSelected.map(
        (item) => item.name
      );

      const newRightPanelList = state.rightPanelList.filter(
        (item) => !rightPanelSelectedList.includes(item.name)
      );

      return {
        ...state,
        rightPanelSelected: [],
        rightPanelList: newRightPanelList,
        leftPanelList: [...state.leftPanelList, ...state.rightPanelSelected],
      };

    case "moveItemsRight":
      const leftPanelSelectedList = state.leftPanelSelected.map(
        (item) => item.name
      );

      const newLeftPanelList = state.leftPanelList.filter(
        (item) => !leftPanelSelectedList.includes(item.name)
      );
      return {
        ...state,
        leftPanelSelected: [],
        leftPanelList: newLeftPanelList,
        rightPanelList: [...state.rightPanelList, ...state.leftPanelSelected],
      };

    case "itemSelected":
      const itemInLeftPanelList = state.leftPanelList.filter(
        (item) => item.name === action.item
      );
      if (itemInLeftPanelList.length > 0) {
        return {
          ...state,
          leftPanelSelected: [
            ...state.leftPanelSelected,
            itemInLeftPanelList[0],
          ],
        };
      }

      const itemInRightPanelList = state.rightPanelList.filter(
        (item) => item.name === action.item
      );
      if (itemInRightPanelList.length > 0) {
        return {
          ...state,
          rightPanelSelected: [
            ...state.rightPanelSelected,
            itemInRightPanelList[0],
          ],
        };
      }

    case "itemRemoved":
      const itemInLeftPanel = state.leftPanelList.filter(
        (item) => item.name === action.item
      );
      if (itemInLeftPanel.length > 0) {
        const newSelectedItems = state.leftPanelSelected.filter(
          (item) => item.name != action.item
        );

        return { ...state, leftPanelSelected: newSelectedItems };
      }

      const itemInRightPanel = state.rightPanelList.filter(
        (item) => item.name === action.item
      );
      if (itemInRightPanel.length > 0) {
        const newSelectedItems = state.rightPanelSelected.filter(
          (item) => item.name != action.item
        );
        return { ...state, rightPanelSelected: newSelectedItems };
      }
  }
};

const TransferList = () => {
  const initialList = {
    leftPanelList: l,
    rightPanelList: r,
    leftPanelSelected: [],
    rightPanelSelected: [],
  };
  const [panelList, dispatch] = useReducer(transferListReducer, initialList);

  const handleItemSelected = (e) => {
    if (e.target.checked === true) {
      dispatch({ type: "itemSelected", item: e.target.value });
    } else {
      dispatch({ type: "itemRemoved", item: e.target.value });
    }
  };

  return (
    <>
      <Header title="Transfer List" />
      <Main>
        <div className="list-container">
          <div className="panel">
            <ul>
              {panelList.leftPanelList.map((item, index) => (
                <li key={item.name}>
                  <Checkbox
                    value={item.name}
                    label={item.name}
                    handleChange={handleItemSelected}
                  />
                </li>
              ))}
            </ul>
          </div>
          <div className="btn-container">
            <Button
              handleClick={() =>
                dispatch({ type: "moveAll", direction: "left" })
              }
              disabled={panelList.rightPanelList.length === 0}
            >
              {"<<"}
            </Button>
            <Button
              disabled={panelList.rightPanelSelected.length === 0}
              handleClick={() => dispatch({ type: "moveItemsLeft" })}
              value={"<"}
            >
              {"<"}
            </Button>
            <Button
              disabled={panelList.leftPanelSelected.length === 0}
              handleClick={() => dispatch({ type: "moveItemsRight" })}
              value={">"}
            >
              {">"}
            </Button>
            <Button
              disabled={panelList.leftPanelList.length === 0}
              handleClick={() =>
                dispatch({ type: "moveAll", direction: "right" })
              }
            >
              {">>"}
            </Button>
          </div>
          <div className="panel">
            <ul>
              {panelList.rightPanelList.map((item, index) => (
                <li key={item.name}>
                  <Checkbox
                    value={item.name}
                    label={item.name}
                    handleChange={handleItemSelected}
                  />
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Main>
    </>
  );
};

export default TransferList;
