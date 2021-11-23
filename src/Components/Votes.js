import { useState } from "react";
import { updateVote } from "../utils/apis";

export const Votes = ({ reviewVotes, reviewId }) => {
  const [votes, setVotes] = useState(reviewVotes);
  return (
    <h4 className="Votes">
      <p
        onClick={() => {
          updateVote(reviewId, { inc_votes: 1 }).then(() => {
            setVotes((prevVotes) => {
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
          updateVote(reviewId, { inc_votes: -1 }).then(() => {
            setVotes((prevVotes) => {
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
