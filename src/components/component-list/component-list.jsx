import { Link } from "react-router-dom";

const ComponentList = ({ pages }) => {
  return (
    <>
      <ul>
        {pages.map(({ name, link }) => (
          <li key={link}>
            <Link to={link}> {name} </Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default ComponentList;
