import { Link } from "react-router-dom";

export const Header = ({ title }) => {
  return (
    <header>
      <Link className="Home" to={"/"}>
        Home
      </Link>
      <h1 className="HeaderTitle">{title}</h1>
      <h2 className="User">User</h2>
    </header>
  );
};
