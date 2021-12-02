import { useEffect, useContext } from "react";
import { deleteCommentByCommentId, getCommentsByReviewId } from "../utils/apis";
import { CommentVotes } from "../Components/CommentVotes";
import { UserContext } from "../contexts/UserContext";

export const CommentsList = ({
  reviewId,
  comments,
  setComments,
  // order,
  // sort_by,
}) => {
  const { user } = useContext(UserContext);

  useEffect(() => {
    getCommentsByReviewId(reviewId).then((retrievedComments) => {
      setComments(retrievedComments);
    });
  }, [reviewId, setComments]);

  return (
    <div className="CommentsContainer">
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id} className="CommentsItemCard">
              <h3 className="Author">{comment.author}</h3>
              <h3
                hidden={user.username === comment.author ? false : true}
                onClick={() => {
                  deleteCommentByCommentId(comment.comment_id);
                  setComments((prevComments) => {
                    const currentComments = prevComments.filter(
                      (singleComment) =>
                        singleComment.comment_id !== comment.comment_id
                    );
                    return currentComments;
                  });
                }}
              >
                {" "}
                X{" "}
              </h3>
              <h4 className="Body">{comment.body}</h4>
              <CommentVotes
                inputVotes={comment.votes}
                commentId={comment.comment_id}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};
