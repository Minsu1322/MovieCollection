import { detailInfo } from "./detailInfo.js";

export const review = async () => {
  const movieInfo = await detailInfo();

  // console.log(movieInfo);

  const submitBtn = document.querySelector(".submit-btn");
  const reviewList = document.querySelector(".review-list");
  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addReview();
  });

  const reviewText = document.querySelector("#review-text");
  const reviewId = document.querySelector("#reviewId");
  const reviewPW = document.querySelector("#reviewPW");

  displayReview();

  function addReview() {
    const reviewInput = reviewText.value;
    const reviewInputId = reviewId.value;
    const reviewInputPW = reviewPW.value;

    if (reviewInput && reviewInputId && reviewInputPW) {
      let movieArr = JSON.parse(localStorage.getItem(`${movieInfo}`)) || [];

      let userReview = {
        ID: reviewInputId,
        PW: reviewInputPW,
        text: reviewInput,
      };

      movieArr.push(userReview);
      localStorage.setItem(`${movieInfo}`, JSON.stringify(movieArr));

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
  }

  function displayReview() {
    const reviews = JSON.parse(localStorage.getItem(`${movieInfo}`));

    reviewList.innerHTML = "";
    reviews.forEach((review) => {
      const id = review["ID"];
      const text = review["text"];
      console.log[id];
      let temp_html = `<div>작성자: ${id} 리뷰내용: ${text}
      <button class="delete-btn" data-id="${id}">삭제</button></div>`;
      reviewList.innerHTML += temp_html;
    });
  }

  function deleteReview(reviewInputId, reviewInputPW) {
    const reviews = JSON.parse(localStorage.getItem(movieInfo));
    const index = reviews.findIndex(
      (review) => review.ID === reviewInputId && review.PW === reviewInputPW
    );
    if (index !== -1) {
      reviews.splice(index, 1);
      localStorage.setItem(movieInfo, JSON.stringify(reviews));
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
