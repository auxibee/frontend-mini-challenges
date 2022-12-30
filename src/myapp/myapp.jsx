import { useState } from "react";

const Mybutton = ({ value, color, handleClick, children }) => {
  return (
    <button className={color} value={value} onClick={handleClick}>
      {children}
    </button>
  );
};

const SortButtons = ({ currentBtn, handleClick }) => {
  return (
    <>
      <Mybutton
        value={1}
        color={currentBtn == 1 ? "red" : "white"}
        handleClick={handleClick}
      >
        votes
      </Mybutton>
      <Mybutton
        value={2}
        color={currentBtn == 2 ? "red" : "white"}
        handleClick={handleClick}
      >
        views
      </Mybutton>
      <Mybutton
        value={3}
        color={currentBtn == 3 ? "red" : "white"}
        handleClick={handleClick}
      >
        votes
      </Mybutton>
      <Mybutton
        value={4}
        color={currentBtn == 4 ? "red" : "white"}
        handleClick={handleClick}
      >
        votes
      </Mybutton>
    </>
  );
};

const sortProducts = (key, list) => {
  if (key === "votes") return list.sort((a, b) => b.votes - a.votes);
  return list.sort((a, b) => b.views - a.views);
};

const Myapp = () => {
  const [currentBtn, setCurrentBtn] = useState(1);

  const handleClick = (e) => {
    setCurrentBtn(e.target.value);
  };

  const products = [
    { id: 1234, name: "mango", votes: 250, views: 300 },
    { id: 12, name: "pear", votes: 300, views: 450 },
    { id: 134, name: "orange", votes: 50, views: 1200 },
  ];
  const sortedProducts = sortProducts(
    currentBtn == 1 ? "votes" : "views",
    products
  );

  const productList = sortedProducts.map(({ id, name, votes, views }) => (
    <li key={id}>
      {name} | {votes} | {views}
    </li>
  ));
  return (
    <>
      <SortButtons currentBtn={currentBtn} handleClick={handleClick} />
      {productList}
    </>
  );
};

export default Myapp;
