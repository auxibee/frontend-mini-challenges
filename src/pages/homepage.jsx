import ComponentList from "../components/component-list/component-list";
import Header from "./../elements/header/header";
import Main from "./../elements/main/main";

const pages = [
  { name: "Ratings", link: "ratings" },
  { name: "Transfer List", link: "transfer-list" },
  { name: "Chips Input", link: "chips-input" },
  { name: "Guess The Number", link: "guess-the-number" },
  { name: "Alert", link: "alert" },
  { name: "Telephone Formater", link: "telephone-formatter" },
  { name: "Theme", link: "theme" },
  { name: "Otp", link: "otp" },
  { name: "Stocks", link: "stocks" },
  { name: "Typing Game", link: "typing" },
  { name: "Counter", link: "counter" },
  { name: "Password Strength", link: "password" },
  { name: "Todo List", link: "todo" },
];

const HomePage = () => {
  return (
    <>
      <Header
        title="Frontend Mini Challenges - React Version"
        showFullPage={false}
      />

      <Main>
        <ComponentList pages={pages} />
      </Main>
    </>
  );
};

export default HomePage;
