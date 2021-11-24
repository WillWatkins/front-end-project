import { useEffect, useState } from "react";
import { getReviews } from "../utils/apis";
import { Votes } from "./Votes";
import { Link } from "react-router-dom";

export const Games = ({ category, setReviewId }) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    getReviews(category)
      .then((retrievedReviews) => {
        setIsLoading(false);
        setReviews(retrievedReviews);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, [category]);

  if (isLoading) return <p>Loading...</p>;
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
              <Link
                className="Comments"
                to="/comments"
                onClick={() => {
                  setReviewId(review.review_id);
                }}
              >
                Comments 💬
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
