import { useEffect, useState } from "react";
import { getReviewById } from "../utils/apis";
import { CommentsList } from "./CommentsList";
import { Filter } from "./Filter";
import { Header } from "./Header";
import { Votes } from "./Votes";
import { useParams } from "react-router";
import { AddComment } from "./AddComment";

export const Comments = () => {
  const { review_id } = useParams();
  const [currentReview, setCurrentReview] = useState({});
  const [isLoading, setIsLoading] = useState(true);
  const [err, setErr] = useState(null);

  const [comments, setComments] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    getReviewById(review_id)
      .then((review) => {
        setIsLoading(false);
        setErr(null);
        setCurrentReview(review);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
        setErr(err);
      });
  }, [review_id]);

  if (isLoading) return <p>Loading content...</p>;
  if (err) return <p>{err}</p>;
  return (
    <>
      <Header title="Comments" />
      <Filter />
      <main>
        <h2 className="heading">Review:</h2>
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
        <h2 className="heading">Comments:</h2>
        <CommentsList
          reviewId={review_id}
          setComments={setComments}
          comments={comments}
        ></CommentsList>
      </main>
      <AddComment review_id={review_id} setComments={setComments}></AddComment>
    </>
  );
};
