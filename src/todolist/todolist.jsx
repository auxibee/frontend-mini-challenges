import Header from "../elements/header/header";
import Input from "../elements/input";
import Main from "../elements/main/main";
import Button from "../elements/button/button";
import { useReducer, useState } from "react";
import useEnterKey from "./../hooks/useEnterKey";

import "./todo.css";

const programmingLang = [
  { id: 1, name: "Javascript" },
  { id: 2, name: "React" },
  { id: 3, name: "Angular" },
  { id: 4, name: "Css" },
  { id: 5, name: "C#" },
  { id: 6, name: "Python" },
  { id: 7, name: "Flask" },
  { id: 8, name: "Java" },
];

const todoReducer = (state, action) => {
  switch (action.type) {
    case "addedTodo":
      const newTodos = [...state.items, action.todo];
      return { todo: "", items: newTodos };

    case "setTodo":
      return { ...state, todo: action.item };

    case "updateTodo":
      const updatedTodos = state.items.map((item) => {
        if (item.id == action.id) {
          return { ...item, name: action.name };
        } else {
          return item;
        }
      });

      return { ...state, items: updatedTodos };

    case "deleteTodo":
      const todos = state.items.filter((item) => item.id != action.id);
      return { ...state, items: todos };
  }
};

const TodoItem = ({ id, name, updateTodo, deleteTodo }) => {
  const [todo, setTodo] = useState("");

  const handleSetTodo = (id, todo) => {
    updateTodo(id, todo);
    setTodo("");
  };

  return (
    <li className="todo-item">
      {todo ? (
        <Input value={todo} handleChange={(e) => setTodo(e.target.value)} />
      ) : (
        <span>{name}</span>
      )}

      {todo ? (
        <Button handleClick={() => handleSetTodo(id, todo)}>✔</Button>
      ) : (
        <Button handleClick={() => setTodo(name)}>📝</Button>
      )}

      <Button handleClick={() => deleteTodo(id)}>✂</Button>
    </li>
  );
};

const TodoList = () => {
  const [todoItems, dispatch] = useReducer(todoReducer, {
    items: programmingLang,
    todo: "",
  });

  const handleAddTodo = (e) => {
    dispatch({
      type: "addedTodo",
      todo: {
        id: todoItems.items.length + 1,
        name: e.target.value,
      },
    });
  };

  const handleUpdateTodo = (id, name) => {
    dispatch({ type: "updateTodo", name: name, id: id });
  };

  const handleSetTodo = (e) => {
    dispatch({ type: "setTodo", item: e.target.value });
  };

  const handleDeleteTodo = (id) => {
    dispatch({ type: "deleteTodo", id: id });
  };

  useEnterKey(handleAddTodo);

  const items = todoItems.items.map(({ id, name }) => (
    <TodoItem
      key={id}
      id={id}
      name={name}
      updateTodo={handleUpdateTodo}
      deleteTodo={handleDeleteTodo}
    />
  ));
  return (
    <>
      <Header title="Todo List" />
      <Main>
        <section className="add-todo">
          <Input handleChange={handleSetTodo} value={todoItems.todo} />
        </section>
        <div className="todo-list">
          <ul>{items}</ul>
        </div>
      </Main>
    </>
  );
};

export default TodoList;
