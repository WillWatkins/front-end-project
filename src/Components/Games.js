import { useEffect, useState } from "react";
import { getReviews } from "../utils/apis";
import { Votes } from "./Votes";
import { Link } from "react-router-dom";
import { Filters } from "./Filters";

export const Games = ({ category, setReviewId }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  const [reviews, setReviews] = useState([]);
  const [order, setOrder] = useState();
  const [sort_by, setSort_by] = useState();
  console.log("GAMES SORT ORDER: ", sort_by, order);

  useEffect(() => {
    setIsLoading(true);
    getReviews(category, order, sort_by)
      .then((retrievedReviews) => {
        setIsLoading(false);
        setErr(null);
        setReviews(retrievedReviews);
      })
      .catch((err) => {
        setIsLoading(false);
        setErr(err);
      });
  }, [category, order, sort_by]);

  function formatDate(time) {
    let day = time.substring(8, 10);
    let month = time.substring(5, 7);
    let year = time.substring(0, 4);

    return `${day}-${month}-${year}`;
  }

  if (isLoading) return <p className="loading">Loading...</p>;
  if (err) return <p className="loading">{err}</p>;
  return (
    <main className="gamesMain">
      <Filters setOrder={setOrder} setSort_by={setSort_by} />
      <ul className="reviewsList">
        {reviews.map((review) => {
          return (
            <li key={review.review_id} className="reviewItemCard">
              <h4 className="Owner">{review.owner}</h4>
              <h3 className="TimeAndCategory">
                {`${review.category}  ${formatDate(review.created_at)}`}
              </h3>
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
