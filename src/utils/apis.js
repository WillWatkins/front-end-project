const axios = require("axios");

const ncGamesApi = axios.create({
  baseURL: "https://js-backend-project.herokuapp.com/api",
});

export const getCategories = () => {
  return ncGamesApi.get("/categories").then(({ data }) => {
    return data.categories;
  });
};

export const getReviews = (category, order, sort_by) => {
  return ncGamesApi
    .get("/reviews", { params: { category, sort_by, order } })
    .then(({ data }) => {
      return data.reviews;
    });
};

export const getReviewById = (reviewId) => {
  return ncGamesApi.get(`/reviews/${reviewId}`).then(({ data }) => {
    return data.review;
  });
};

export const addNewReview = (review) => {
  return ncGamesApi.post(`/reviews`, review);
};

export const updateVote = (reviewId, vote) => {
  return ncGamesApi.patch(`/reviews/${reviewId}`, vote);
};

export const getCommentsByReviewId = (reviewId, order, sort_by) => {
  console.log(order, sort_by);
  return ncGamesApi
    .get(`/reviews/${reviewId}/comments`, { params: { order, sort_by } })
    .then(({ data }) => {
      return data.comments;
    });
};

export const updateCommentVote = (commentId, vote) => {
  return ncGamesApi.patch(`/comments/${commentId}`, vote);
};

export const addComment = (reviewId, comment) => {
  return ncGamesApi
    .post(`/reviews/${reviewId}/comments`, comment)
    .then(({ data }) => {
      return data.comment;
    });
};

export const deleteCommentByCommentId = (commentId) => {
  return ncGamesApi.delete(`/comments/${commentId}`);
};

export const getUsers = () => {
  return ncGamesApi.get("/users").then(({ data }) => {
    return data.users;
  });
};
