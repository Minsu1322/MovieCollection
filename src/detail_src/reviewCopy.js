import { detailInfo } from "./detailInfo.js";

export const review = async () => {
  const movieId = await detailInfo();

  const submitBtn = document.querySelector(".submit-btn");
  const reviewList = document.querySelector(".review-list");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addReview();
  });

  displayReview();

  addReview();

  function deleteReview(reviewInputId, reviewInputPW) {
    const reviews = JSON.parse(localStorage.getItem(movieId));
    const index = reviews.findIndex(
      (review) => review.ID === reviewInputId && review.PW === reviewInputPW
    );
    if (index !== -1) {
      reviews.splice(index, 1);
      localStorage.setItem(movieId, JSON.stringify(reviews));
      displayReview();
    } else {
      alert("비밀번호가 일치하지 않거나 리뷰가 존재하지 않습니다.");
    }
  }

  reviewList.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
      const reviewInputId = event.target.dataset.id;
      const reviewInputPW = prompt("비밀번호를 입력하세요:");
      if (reviewInputPW) {
        deleteReview(reviewInputId, reviewInputPW);
      }
    }
  });
};
