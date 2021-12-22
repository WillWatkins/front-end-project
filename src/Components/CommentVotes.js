import { useState } from "react";
import { updateCommentVote } from "../utils/apis";

export const CommentVotes = ({ inputVotes, commentId }) => {
  const [votes, setCommentVotes] = useState(inputVotes);
  const [trackVote, setTrackVote] = useState(0);

  const handleUpVote = () => {
    if (trackVote < 1) {
      updateCommentVote(commentId, { inc_votes: 1 }).then(() => {
        setCommentVotes((prevVotes) => {
          return prevVotes + 1;
        });
      });
      setTrackVote((prevValue) => prevValue + 1);
    }
  };

  const handleDownVote = () => {
    if (trackVote > -1) {
      updateCommentVote(commentId, { inc_votes: -1 }).then(() => {
        setCommentVotes((prevVotes) => {
          return prevVotes - 1;
        });
      });
      setTrackVote((prevValue) => prevValue - 1);
    }
  };

  return (
    <h4 className="Votes">
      <p
        onClick={handleUpVote}
        className={trackVote === 1 ? "UpVoteActive" : "UpVote"}
      >
        ⬆{" "}
      </p>
      <p> {votes}</p>
      <p
        onClick={handleDownVote}
        className={trackVote === -1 ? "DownVoteActive" : "DownVote"}
      >
        ⬇
      </p>
    </h4>
  );
};
