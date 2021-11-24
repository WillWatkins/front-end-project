import { useEffect, useState } from "react";
import { getReviewById } from "../utils/apis";
import { Filter } from "./Filter";
import { Header } from "./Header";
import { Votes } from "./Votes";

export const Comments = ({ reviewId }) => {
  const [currentReview, setCurrentReview] = useState({});
  useEffect(() => {
    getReviewById(reviewId).then((review) => {
      setCurrentReview(review);
    });
  }, [reviewId]);
  return (
    <>
      <Header title="Comments" />
      <Filter />
      <h2>Review:</h2>
      <li key={currentReview.title} className="reviewItemCard">
        <h4 className="Owner">{currentReview.owner}</h4>
        <h3 className="Title">{currentReview.title}</h3>
        <img
          src={currentReview.review_img_url}
          className="ReviewImg"
          alt={currentReview.title}
        />
        <h3 className="ReviewTextContainer">{currentReview.review_body}</h3>
        <Votes
          reviewVotes={currentReview.votes}
          reviewId={currentReview.review_id}
        />
        {/* <h4 className="Comments">Comments 💬</h4> */}
      </li>
      <h2>Comments:</h2>
    </>
  );
};
