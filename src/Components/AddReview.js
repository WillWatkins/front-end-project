import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { addNewReview } from "../utils/apis";

export const AddReview = ({ categories }) => {
  const [isHidden, setIsHidden] = useState(true);

  const { user } = useContext(UserContext);

  if (isHidden) {
    return (
      <footer
        className="AddElement"
        onClick={() => {
          setIsHidden(false);
        }}
      >
        Add a Review
      </footer>
    );
  } else {
    return (
      <footer>
        <h4
          className="AddElement"
          onClick={() => {
            setIsHidden(true);
          }}
        >
          Cancel
        </h4>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const title = document.getElementById("review_title").value;
            const review_body = document.getElementById("review_body").value;
            const category = document.getElementById("category").value;
            const review = {
              owner: user.username,
              title,
              review_body,
              designer: user.name,
              category,
            };

            addNewReview(review);
          }}
        >
          <fieldset>
            <legend>
              Input a review title, body and select a category to submit a
              review
            </legend>
            <label htmlFor="review_title">Review Title: </label>
            <input
              type="text"
              id="review_title"
              name="Review title"
              required
            ></input>
            <br />
            <label htmlFor="review_body">Review: </label>
            <input
              type="text"
              id="review_body"
              name="review_body"
              required
            ></input>
            <br />
            <label htmlFor="category">Select a category:</label>
            <select id="category" name="category">
              {categories.map((category) => {
                return (
                  <option value={category.slug} key={category.slug}>
                    {category.slug}
                  </option>
                );
              })}
            </select>
            <br />
            <button>Create new review</button>
          </fieldset>
        </form>
      </footer>
    );
  }
};
