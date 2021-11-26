import { Link } from "react-router-dom";
import { UserContext } from "../contexts/UserContext";
import { useContext } from "react";

export const Header = ({ title }) => {
  const { user } = useContext(UserContext);
  const firstName = user.name.match(/[\w]+\s/);

  return (
    <header>
      <Link className="Home" to={"/"}>
        Home
      </Link>
      <h1 className="HeaderTitle">{title}</h1>
      <h2 className="User">{firstName}</h2>
    </header>
  );
};
