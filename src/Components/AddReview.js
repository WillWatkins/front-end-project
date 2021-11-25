import { useState } from "react/cjs/react.development";
import { addNewReview } from "../utils/apis";

export const AddReview = ({ categories }) => {
  const [isHidden, setIsHidden] = useState(true);

  if (isHidden) {
    return (
      <footer
        className="AddComment"
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
          className="AddComment"
          onClick={() => {
            setIsHidden(true);
          }}
        >
          Cancel
        </h4>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const owner = document.getElementById("owner").value;
            const title = document.getElementById("review_title").value;
            const review_body = document.getElementById("review_body").value;
            const designer = document.getElementById("designer").value;
            const category = document.getElementById("category").value;
            const review = { owner, title, review_body, designer, category };

            addNewReview(review);
          }}
        >
          <fieldset>
            <legend>
              Input a review title, body and select a category to submit a
              review
            </legend>
            <label htmlFor="owner">Username: </label>
            <input type="text" id="owner" name="owner" required></input>
            <br />
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
            <label htmlFor="designer">Name: </label>
            <input type="text" id="designer" name="designer" required></input>
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
