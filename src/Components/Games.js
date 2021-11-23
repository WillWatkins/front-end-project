import { useEffect, useState } from "react";
import { getReviews } from "../utils/apis";
import { Votes } from "./Votes";

export const Games = (category) => {
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviews(category).then((retrievedReviews) => {
      setReviews(retrievedReviews);
      console.log(retrievedReviews);
    });
  }, [category]);

  return (
    <main>
      <ul className="reviewsList">
        {reviews.map((review) => {
          return (
            <li key={review.title} className="reviewItemCard">
              <h4 className="Owner">{review.owner}</h4>
              <h3 className="Title">{review.title}</h3>
              <img
                src={review.review_img_url}
                className="ReviewImg"
                alt={review.title}
              />
              <h3 className="ReviewTextContainer">{review.review_body}</h3>
              <Votes reviewVotes={review.votes} reviewId={review.review_id} />
              <h4 className="Comments">View Comments</h4>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
