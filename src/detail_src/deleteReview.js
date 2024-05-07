import { getReview } from "./getReview.js";

export const deleteReview = async (reviewInputId, reviewInputPW, movieId) => {
  const reviews = JSON.parse(localStorage.getItem(movieId));
  const index = reviews.findIndex(
    (review) => review.ID === reviewInputId && review.PW === reviewInputPW
  );
  if (index !== -1) {
    reviews.splice(index, 1);
    localStorage.setItem(movieId, JSON.stringify(reviews));
    getReview(movieId);
  } else {
    alert("비밀번호가 일치하지 않거나 리뷰가 존재하지 않습니다.");
  }
};
