export const review = () => {
  window.onload = function () {
    // event.preventDefault();
    loadReviews();
  };

  const submitBtn = document.querySelector(".submit-btn");

  submitBtn.addEventListener("submit", (e) => {
    e.preventDefault();
    addReview();
  });

  function addReview() {
    const reviewText = document.querySelector("#reviewText");
    const reviewId = document.querySelector("#reviewId");
    const reviewPassword = document.querySelector("#reviewPassword");

    const reviewInput = reviewText.value;

    if (reviewInput) {
      const review = JSON.parse(localStorage.getItem("movies"));
      const reviews = review.push(reviewInput);
      localStorage.setItem(JSON.stringify(reviews));
      reviewInput.value = "";

      displayReview();
    } else {
      alert("리뷰를 입력해주세요.");
    }
  }

  function loadReviews() {
    displayReview();
  }

  function displayReview() {
    // event.preventDefault();
    const reviewContainer = document.querySelector(".review-container");
    const reviews = JSON.parse(localStorage.getItem("movies"));
    reviewContainer.innerHTML = "";

    reviews.forEach((review) => {
      const reviewElement = document.createElement("div");
      reviewElement.textContent = review;
      reviewContainer.appendChild(reviewElement);
    });
  }
};
