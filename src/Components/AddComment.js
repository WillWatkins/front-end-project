import { useContext, useState } from "react";
import { UserContext } from "../contexts/UserContext";
import { addComment } from "../utils/apis";

export const AddComment = ({ setComments, review_id }) => {
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
        Add a Comment
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
            const body = document.getElementById("body").value;
            const comment = { body, author: user.username };
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
            <legend>Input a comment to add to this review</legend>
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
