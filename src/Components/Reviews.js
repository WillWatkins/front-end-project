import { Header } from "./Header";
import { Nav } from "./Nav";
import { Games } from "./Games";
import { useEffect, useState } from "react";
import { getCategories } from "../utils/apis";

export const Reviews = () => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState([]);
  useEffect(() => {
    getCategories(category).then((retrievedCategories) => {
      setCategories(retrievedCategories);
    });
  }, [category]);
  return (
    <>
      <Header title="Games" />
      <Nav categories={categories} setCategory={setCategory}></Nav>
      <Games category={category}></Games>
    </>
  );
};
