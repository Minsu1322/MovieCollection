import { detailInfo } from "./detailInfo.js";
import { getReview } from "./getReview.js";

export const addReview = async () => {
  const movieId = await detailInfo();

  const reviewText = document.querySelector("#review-text");
  const reviewId = document.querySelector("#reviewId");
  const reviewPW = document.querySelector("#reviewPW");
  const reviewScore = document.querySelector("#score");

  const reviewInput = reviewText.value;
  const reviewInputId = reviewId.value;
  const reviewInputPW = reviewPW.value;
  const reviewInputScore = reviewScore.value;

  let userReview = {
    ID: reviewInputId,
    PW: reviewInputPW,
    text: reviewInput,
    score: reviewInputScore,
  };

  if (reviewInput && reviewInputId && reviewInputPW && reviewInputScore) {
    const reviews = JSON.parse(localStorage.getItem(movieId)) || [];
    reviews.push(userReview);
    localStorage.setItem(movieId, JSON.stringify(reviews));
    getReview();
  } else if (reviewInput && reviewInputId) {
    alert("비밀번호를 입력해주세요.");
  } else if (reviewInput && reviewInputPW) {
    alert("아이디를 입력해주세요.");
  } else if (reviewInput) {
    alert("아이디와 비밀번호를 입력해주세요.");
  } else {
    alert("리뷰를 입력해주세요.");
  }
};
