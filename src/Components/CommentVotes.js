import { useState } from "react";
import { updateCommentVote } from "../utils/apis";

export const CommentVotes = ({ inputVotes, commentId }) => {
  const [votes, setCommentVotes] = useState(inputVotes);

  return (
    <h4 className="Votes">
      <p
        onClick={() => {
          updateCommentVote(commentId, { inc_votes: 1 }).then(() => {
            setCommentVotes((prevVotes) => {
              return prevVotes + 1;
            });
          });
        }}
      >
        ⬆{" "}
      </p>
      <p> {votes}</p>
      <p
        onClick={() => {
          updateCommentVote(commentId, { inc_votes: -1 }).then(() => {
            setCommentVotes((prevVotes) => {
              return prevVotes - 1;
            });
          });
        }}
      >
        ⬇
      </p>
    </h4>
  );
};
