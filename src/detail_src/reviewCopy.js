import { detailInfo } from "./detailInfo.js";
import { addReview2 } from "./addreview.js";

export const review = async () => {
  const movieId = await detailInfo();

  const submitBtn = document.querySelector(".submit-btn");
  const reviewList = document.querySelector(".review-list");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addReview2();
  });

  const reviewText = document.querySelector("#review-text");
  const reviewId = document.querySelector("#reviewId");
  const reviewPW = document.querySelector("#reviewPW");

  let arr = [];
  displayReview();

  addReview2();

  function displayReview() {
    const reviews = JSON.parse(localStorage.getItem(movieId));

    reviewList.innerHTML = "";
    reviews.forEach((review) => {
      const id = review["ID"];
      const text = review["text"];
      // console.log[id];
      let temp_html = `<div>작성자: ${id} 리뷰내용: ${text}
      <button class="delete-btn" data-id="${id}">삭제</button></div>`;
      reviewList.innerHTML += temp_html;
    });
  }

  function deleteReview(reviewInputId, reviewInputPW) {
    const reviews = JSON.parse(localStorage.getItem(movieId));
    const index = reviews.findIndex(
      (review) => review.ID === reviewInputId && review.PW === reviewInputPW
    );
    if (index !== -1) {
      reviews.splice(index, 1);
      localStorage.setItem(movieId, JSON.stringify(reviews));
      arr = reviews;
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
