import { Header } from "./Header";
import { Nav } from "./Nav";
import { Games } from "./Games";
import { useEffect, useState } from "react";
import { getCategories } from "../utils/apis";
import { AddReview } from "./AddReview";

export const Reviews = ({ setReviewId }) => {
  const [categories, setCategories] = useState([]);
  const [category, setCategory] = useState("");
  useEffect(() => {
    getCategories(category).then((retrievedCategories) => {
      setCategories(retrievedCategories);
    });
  }, [category]);
  return (
    <>
      <div className="sticky">
        <Header title="Games" />
        <Nav categories={categories} setCategory={setCategory}></Nav>
      </div>
      <Games category={category} setReviewId={setReviewId}></Games>
      <AddReview categories={categories}> </AddReview>
    </>
  );
};
