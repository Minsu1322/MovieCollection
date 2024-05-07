import { addReview } from "./addReview.js";
import { getReview } from "./getReview.js";
import { deleteReview } from "./deleteReview.js";

export const review = async () => {
  const submitBtn = document.querySelector(".submit-btn");
  const reviewList = document.querySelector(".review-list");

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addReview();
  });

  getReview();

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
