import { useReducer } from "react";
import { useState } from "react";
import Checkbox from "../elements/checkbox";
import Header from "../elements/header/header";
import Select from "../elements/input/select";
import Main from "../elements/main/main";
import "./stocks.css";

const initialStocks = [
  {
    id: 1,
    ticker: "GOOG",
    name: "Google",
    type: "Tech",
    price: 1194.8,
  },
  {
    id: 2,
    ticker: "FB",
    name: "Facebook",
    type: "Tech",
    price: 168.85,
  },
  {
    id: 3,
    ticker: "TWTR",
    name: "Twitter",
    type: "Tech",
    price: 29.41,
  },
  {
    id: 4,
    ticker: "AMZN",
    name: "Amazon",
    type: "Tech",
    price: 2013.04,
  },
  {
    id: 5,
    ticker: "V",
    name: "Visa",
    type: "Finance",
    price: 150.05,
  },
  {
    id: 6,
    ticker: "BAC",
    name: "Bank of America",
    type: "Finance",
    price: 29.95,
  },
  {
    id: 7,
    ticker: "JPM",
    name: "JP Morgan",
    type: "Finance",
    price: 114.45,
  },
  {
    id: 8,
    ticker: "C",
    name: "Citi Bank",
    type: "Finance",
    price: 72.94,
  },
  {
    id: 9,
    ticker: "NKE",
    name: "Nike",
    type: "Sportswear",
    price: 84.56,
  },
  {
    id: 10,
    ticker: "UAA",
    name: "Under Armour",
    type: "Sportswear",
    price: 21.07,
  },
];

const stockReducer = (state, action) => {
  switch (action.type) {
    case "ADD_STOCK":
      const new_stock = action.stocks.filter(
        (stock) => stock.id === parseInt(action.id)
      );
      return action.myPortfolioStocks.concat(new_stock);

    case "REMOVE_STOCK":
      return action.myPortfolio.filter(
        (stock) => stock.id !== parseInt(action.id)
      );

    case "FILTER_BY":
      if (action.filter_by === "") return action.stocks;
      return action.stocks.filter((stock) => stock.type === action.filter_by);

    default:
      return state;
  }
};

const SortButtons = ({ handleSort }) => {
  return (
    <div>
      Sort by:
      <p>
        <Checkbox
          value="alphabetically"
          label="Alphabetically"
          handleChange={handleSort}
        />
        <Checkbox value="price" label="Price" handleChange={handleSort} />
      </p>
    </div>
  );
};

const FilterInput = ({ handleFilter }) => {
  return (
    <>
      <Select
        label="Filter by"
        options={[
          { label: "....", value: "" },
          { label: "Sportswear", value: "Sportswear" },
          { label: "Tech", value: "Tech" },
          { label: "Finance", value: "Finance" },
        ]}
        handleChange={handleFilter}
      />
    </>
  );
};

const StockItem = ({
  id,
  name,
  ticker,
  price,
  handleClick,
  actiontype,
  disabled,
}) => {
  return (
    <div className="stock-item">
      {name}

      <p>
        {ticker} | {price}
      </p>
      <button onClick={() => handleClick(id)} value={id} disabled={disabled}>
        {actiontype}
      </button>
    </div>
  );
};

const handleSorting = (sortType) => {
  switch (sortType) {
    case "price":
      return (a, b) => b.price - a.price;
    case "alphabetically":
      return (a, b) => a.name.localeCompare(b.name);
  }
};

const Stocks = () => {
  const [sortType, setSorttype] = useState("");
  const [stocks, dispatchStocks] = useReducer(stockReducer, initialStocks);
  const [myPortfolio, dispatchMyPortfolioStocks] = useReducer(stockReducer, []);

  const handleAddStock = (id) => {
    dispatchMyPortfolioStocks({
      type: "ADD_STOCK",
      id: id,
      stocks: stocks,
      myPortfolioStocks: myPortfolio,
    });
  };

  const handleRemoveStock = (id) => {
    dispatchMyPortfolioStocks({
      type: "REMOVE_STOCK",
      myPortfolio: myPortfolio,
      id: id,
    });
  };

  const handleSort = (e) => {
    setSorttype(e.target.value);
  };

  const handleFilter = (e) => {
    dispatchStocks({
      type: "FILTER_BY",
      stocks: initialStocks,
      filter_by: e.target.value,
    });
  };

  const stockList = stocks
    .sort(handleSorting(sortType))
    .map(({ id, ticker, name, price }) => {
      const inMyPortfolio = myPortfolio.filter((stock) => stock.id === id);

      const disabled = inMyPortfolio.length === 1 ? true : false;

      return (
        <StockItem
          key={id}
          id={id}
          name={name}
          ticker={ticker}
          price={price}
          handleClick={handleAddStock}
          actiontype="Add Stock"
          disabled={disabled}
        />
      );
    });

  const myPortfolioList = myPortfolio?.map(({ id, ticker, name, price }) => (
    <StockItem
      key={id}
      id={id}
      name={name}
      ticker={ticker}
      price={price}
      handleClick={handleRemoveStock}
      actiontype="Remove stock"
    />
  ));

  return (
    <>
      <Header title="Stock Portfolio" />
      <Main>
        <div className="stock-wrapper">
          <div className="filters">
            <SortButtons handleSort={handleSort} />
            <FilterInput handleFilter={handleFilter} />
          </div>
          <div className="stock-profile">
            <h1>Stocks Avialable</h1>
            <div>{stockList}</div>
          </div>

          <div className="stock-profile">
            <h1> My Portfolio</h1>
            <div>{myPortfolioList}</div>
          </div>
        </div>
      </Main>
    </>
  );
};

export default Stocks;
