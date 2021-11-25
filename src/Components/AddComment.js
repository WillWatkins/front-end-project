import { useState } from "react/cjs/react.development";
import { addComment } from "../utils/apis";

export const AddComment = ({ setComments, review_id }) => {
  const [isHidden, setIsHidden] = useState(true);

  if (isHidden) {
    return (
      <footer
        className="AddComment"
        onClick={() => {
          setIsHidden(false);
        }}
      >
        Add a Comment
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
            const author = document.getElementById("author").value;
            const body = document.getElementById("body").value;
            const comment = { body, author };
            addComment(review_id, comment).then((comment) => {
              setComments((currentComments) => {
                const newCommentsArray = [...currentComments, comment];
                return newCommentsArray;
              });
            });
            setIsHidden(true);
          }}
        >
          <fieldset>
            <legend>
              Input a review with your author name to add a comment
            </legend>
            <label htmlFor="author">Author: </label>
            <input type="text" id="author" name="author" required></input>
            <br />
            <label htmlFor="body">Comment: </label>
            <input type="text" id="body" name="body" required></input>
            <br />
            <button>Create new comment</button>
          </fieldset>
        </form>
      </footer>
    );
  }
};
