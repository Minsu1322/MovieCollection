export const review = () => {
  window.onload = function () {
    displayReview();
  };

  const submitBtn = document.querySelector(".submit-btn");

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addReview();
  });

  const reviewText = document.querySelector("#review-text");
  const reviewId = document.querySelector("#reviewId");
  const reviewPW = document.querySelector("#reviewPW");

  let arr = [];

  function addReview() {
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
      localStorage.setItem("movies", JSON.stringify(arr));
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
    const reviewList = document.querySelector(".review-list");
    const reviews = JSON.parse(localStorage.getItem("movies"));

    reviewList.innerHTML = "";
    reviews.forEach((review) => {
      const id = review["ID"];
      const text = review["text"];
      let temp_html = `<div>작성자: ${id} 리뷰내용: ${text}</div>`;
      reviewList.innerHTML += temp_html;
    });
  }
};
