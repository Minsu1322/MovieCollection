import { detailInfo } from "./detailInfo.js";

export const addReview = async () => {
  const movieId = await detailInfo();

  const reviewInput = reviewText.value;
  const reviewInputId = reviewId.value;
  const reviewInputPW = reviewPW.value;

  let userReview = {
    ID: reviewInputId,
    PW: reviewInputPW,
    text: reviewInput,
  };

  if (reviewInput && reviewInputId && reviewInputPW) {
    arr.push(userReview);
    localStorage.setItem(movieId, JSON.stringify(arr));
    displayReview();
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
