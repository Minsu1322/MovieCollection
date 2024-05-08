import { getReview } from "./getReview.js";
import { getCurrentDate } from "./getCurrentDate.js";
import { openModal } from "./openModal.js";

export const addReview = async (movieId) => {
  const reviewText = document.querySelector("#review-text");
  const reviewId = document.querySelector("#reviewId");
  const reviewPW = document.querySelector("#reviewPW");
  const reviewScore = document.querySelector("#score");

  const reviewInput = reviewText.value;
  const reviewInputId = reviewId.value;
  const reviewInputPW = reviewPW.value;
  const reviewInputScore = reviewScore.value;
  const reviewCurrentDate = getCurrentDate();

  let userReview = {
    ID: reviewInputId,
    PW: reviewInputPW,
    date: reviewCurrentDate,
    score: reviewInputScore,
    text: reviewInput,
  };

  if (reviewInput && reviewInputId && reviewInputPW && reviewInputScore) {
    const reviews = JSON.parse(localStorage.getItem(movieId)) || [];
    reviews.push(userReview);
    localStorage.setItem(movieId, JSON.stringify(reviews));
    getReview(movieId);
  } else if (reviewInput && reviewInputId) {
    await openModal("비밀번호를 입력해주세요.");
    reviewPW.focus();
  } else if (reviewInput && reviewInputPW) {
    await openModal("이름을 입력해주세요.");
    reviewId.focus();
  } else if (reviewInput) {
    await openModal("이름과 비밀번호를 입력해주세요.");
    reviewId.focus();
  } else {
    await openModal("리뷰 내용을 작성해주세요.");
    reviewText.focus();
  }
};