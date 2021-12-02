import { useEffect, useState } from "react";
import { getUsers } from "../utils/apis";

export const Filters = (setFilter, setSortBy) => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    getUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  return (
    <div className="sortFiltContainer">
      <h3 className="SortBy">Sort By:</h3>
      <ul className="sortByOptions">
        <li
          className="navItem"
          onclick={() => {
            setSortBy();
          }}
        >
          Date
        </li>
        <li className="navItem">Votes</li>
      </ul>
      <h3 className="Filters">Filter by user:</h3>
      <ul className="filterOptions">
        {users.map((user) => {
          return (
            <li
              className="navItem"
              key={user.username}
              onClick={() => {
                setFilter(user.username);
              }}
            >
              {user.username}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
