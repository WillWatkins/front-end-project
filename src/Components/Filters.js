export const Filters = ({ setOrder, setSort_by }) => {
  const sortOptions = [
    { desc: "Date", apiRef: "created_at" },
    { desc: "Votes", apiRef: "votes" },
    { desc: "User", apiRef: "owner" },
    { desc: "Title", apiRef: "title" },
  ];
  const orderOptions = ["ASC", "DESC"];
  return (
    <div className="sortFiltContainer">
      <h3 className="SortBy">Sort:</h3>
      <ul className="sortByOptions">
        {sortOptions.map((option) => {
          return (
            <li
              className="navItem"
              onClick={() => {
                setSort_by(option.apiRef);
              }}
            >
              {option.desc}
            </li>
          );
        })}
      </ul>
      <h3 className="Filters">Order:</h3>
      <ul className="filterOptions">
        {orderOptions.map((option) => {
          return (
            <li
              className="navItem"
              onClick={() => {
                setOrder(option);
              }}
            >
              {option}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
