export const Filters = ({ setOrder, setSort_by }) => {
  return (
    <div className="sortFiltContainer">
      <h3 className="SortBy">Sort By:</h3>
      <ul className="sortByOptions">
        <li
          className="navItem"
          onClick={() => {
            setSort_by("created_at");
          }}
        >
          Date
        </li>
        <li
          className="navItem"
          onClick={() => {
            setSort_by("votes");
          }}
        >
          Votes
        </li>
        <li
          className="navItem"
          onClick={() => {
            setSort_by("owner");
          }}
        >
          User
        </li>
        <li
          className="navItem"
          onClick={() => {
            setSort_by("title");
          }}
        >
          Review title
        </li>
      </ul>
      <h3 className="Filters">Order By:</h3>
      <ul className="filterOptions">
        <li
          className="navItem"
          key="ASC"
          onClick={() => {
            setOrder("ASC");
          }}
        >
          ASC
        </li>
        <li
          className="navItem"
          key="DESC"
          onClick={() => {
            setOrder("DESC");
          }}
        >
          DESC
        </li>
      </ul>
    </div>
  );
};
