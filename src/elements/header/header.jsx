import { Link } from "react-router-dom";
import "./header.css";

const Header = ({ title, showFullPage = true }) => {
  return (
    <header>
      <div className="header-wrapper">
        <nav>{showFullPage && <Link to="/">Home</Link>}</nav>
        <h1>{title}</h1>
        <nav>{showFullPage && <Link to="/">GitHub</Link>}</nav>
      </div>
    </header>
  );
};

export default Header;
