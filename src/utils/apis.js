const axios = require("axios");

const ncGamesApi = axios.create({
  baseURL: "https://js-backend-project.herokuapp.com/api",
});

export const getCategories = () => {
  return ncGamesApi.get("/categories").then(({ data }) => {
    return data.categories;
  });
};

export const getReviews = ({ category }) => {
  return ncGamesApi.get("/reviews").then(({ data }) => {
    if (category.length < 1) return data.reviews;
    else {
      return data.reviews.filter((review) => {
        return review.category === category;
      });
    }
  });
};

export const updateVote = (reviewId, vote) => {
  return ncGamesApi.patch(`/reviews/${reviewId}`, vote).then(({ data }) => {
    console.log(data);
  });
};
