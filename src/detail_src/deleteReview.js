import { getReview } from "./getReview.js";
import { openModal } from "./openModal.js";

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
    await openModal("비밀번호가 일치하지 않습니다.");
  }
};
