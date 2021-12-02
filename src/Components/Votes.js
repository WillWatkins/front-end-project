import { useState } from "react";
import { updateVote } from "../utils/apis";

export const Votes = ({ reviewVotes, reviewId }) => {
  const [votes, setVotes] = useState(reviewVotes);
  const [trackVote, setTrackVote] = useState(0);

  return (
    <h4 className="Votes">
      <p
        className="UpVote"
        onClick={() => {
          if (trackVote < 1) {
            updateVote(reviewId, { inc_votes: 1 }).then(() => {
              setVotes((prevVotes) => {
                return prevVotes + 1;
              });
            });
            setTrackVote((prevValue) => prevValue + 1);
          }
        }}
      >
        ⬆{" "}
      </p>
      <p className="Vote"> {votes}</p>
      <p
        className="DownVote"
        onClick={() => {
          if (trackVote > -1) {
            updateVote(reviewId, { inc_votes: -1 }).then(() => {
              setVotes((prevVotes) => {
                return prevVotes - 1;
              });
            });
            setTrackVote((prevValue) => prevValue - 1);
          }
        }}
      >
        ⬇
      </p>
    </h4>
  );
};
