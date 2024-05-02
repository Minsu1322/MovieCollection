export const review = () => {
  window.onload = function () {
    displayReview();
  };

  const submitBtn = document.querySelector(".submit-btn");

  submitBtn.addEventListener("click", (e) => {
    e.preventDefault();
    addReview();
  });

  let arr = [];

  function addReview() {
    const reviewText = document.querySelector("#review-text");
    const reviewId = document.querySelector("#reviewId");
    // const reviewPassword = document.querySelector("#reviewPW");

    const reviewInput = reviewText.value;

    if (reviewInput) {
      arr.push(reviewInput);
      localStorage.setItem("movies", JSON.stringify(arr));

      displayReview();
    } else {
      alert("리뷰를 입력해주세요.");
    }
  }

  function displayReview() {
    const reviewList = document.querySelector(".review-list");
    const reviews = JSON.parse(localStorage.getItem("movies")) || [];

    reviewList.innerHTML = ""
    reviews.forEach((review) => {
      let temp_html = `<div>${review}</div>
        
        `;
      reviewList.innerHTML += temp_html;
    });
  }
};
