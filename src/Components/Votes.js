import { useState } from "react";
import { updateVote } from "../utils/apis";

export const Votes = ({ reviewVotes, reviewId }) => {
  const [votes, setVotes] = useState(reviewVotes);
  const [trackVote, setTrackVote] = useState(0);

  const handleUpVote = () => {
    if (trackVote < 1) {
      updateVote(reviewId, { inc_votes: 1 }).then(() => {
        setVotes((prevVotes) => {
          return prevVotes + 1;
        });
      });
      setTrackVote((prevValue) => prevValue + 1);
    }
  };

  const handleDownVote = () => {
    if (trackVote > -1) {
      updateVote(reviewId, { inc_votes: -1 }).then(() => {
        setVotes((prevVotes) => {
          return prevVotes - 1;
        });
      });
      setTrackVote((prevValue) => prevValue - 1);
    }
  };

  return (
    <h4 className="Votes">
      <p
        className={trackVote === 1 ? "UpVoteActive" : "UpVote"}
        onClick={handleUpVote}
      >
        ⬆{" "}
      </p>
      <p className="Vote"> {votes}</p>
      <p
        className={trackVote === -1 ? "DownVoteActive" : "DownVote"}
        onClick={handleDownVote}
      >
        ⬇
      </p>
    </h4>
  );
};
