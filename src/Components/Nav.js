export const Nav = ({ categories, setCategory }) => {
  return (
    <nav>
      <ul className="navContainer">
        {categories.map((category) => {
          return (
            <li
              className="navItem"
              key={category.slug}
              onClick={() => {
                setCategory((prevCategory) => {
                  return (prevCategory = category.slug);
                });
              }}
            >
              {category.slug}
            </li>
          );
        })}
      </ul>
    </nav>
  );
};
