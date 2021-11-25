import { useEffect } from "react";
import { getCommentsByReviewId } from "../utils/apis";
import { CommentVotes } from "../Components/CommentVotes";

export const CommentsList = ({ reviewId, comments, setComments }) => {
  useEffect(() => {
    getCommentsByReviewId(reviewId).then((retrievedComments) => {
      setComments(retrievedComments);
    });
  }, [reviewId]);

  return (
    <div className="CommentsContainer">
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.comment_id} className="CommentsItemCard">
              <h3 className="Author">{comment.author}</h3>
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
