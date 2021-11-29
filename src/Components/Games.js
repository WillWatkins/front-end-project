import { useEffect, useState } from "react";
import { getReviews } from "../utils/apis";
import { Votes } from "./Votes";
import { Link } from "react-router-dom";
import { Filters } from "./Filters";

export const Games = ({ category, setReviewId }) => {
  const [reviews, setReviews] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const [filter, setFilter] = useState();
  const [sortBy, setSortBy] = useState();

  useEffect(() => {
    setIsLoading(true);
    getReviews(category, filter)
      .then((retrievedReviews) => {
        setIsLoading(false);
        setReviews(retrievedReviews);
      })
      .catch((err) => {
        setIsLoading(false);
        console.log(err);
      });
  }, [category, filter]);

  if (isLoading) return <p>Loading...</p>;
  return (
    <main className="gamesMain">
      <Filters setFilter={setFilter} setSortBy={setSortBy} />
      <ul className="reviewsList">
        {reviews.map((review) => {
          return (
            <li key={review.review_id} className="reviewItemCard">
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
                to={`/reviews/${review.review_id}`}
                onClick={() => {
                  setReviewId(review.review_id);
                }}
              >
                {review.comment_count}{" "}
                {review.comment_count === 1 ? "Comment" : "Comments"} 💬
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
};
