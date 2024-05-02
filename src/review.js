export const review = () => {
  window.onload = function () {
    loadReviews();
  };

  const btn = document.querySelector("#reviewBtn");

  btn.addEventListener("click", function (e) {
    addReview();
  });

  function addReview() {
    // 리뷰작성 함수
    const reviewInput = document.getElementById("reviewInput");
    const reviewText = reviewInput.value; // 인풋의 벨류를 가져와서 reviewText라고 지칭
    if (reviewText) {
      // reviewText에 문자가 입력되면
      const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
      //reviews라는 키를 갖는 value 문자열을 객체로 변환한 것을 reviews라는 곳에 넣어준다.
      reviews.push(reviewText);
      // 인풋된 text인 reviewText를 객체화 된 review 뒤에 넣어준다.
      localStorage.setItem("reviews", JSON.stringify(reviews));
      // 새로운 인풋이 업데이트 된 객체 인풋은 다시 문자열화 되서 reviews키에 다시 저장 되는데 이때 덮어씌어진다.
      reviewInput.value = ""; // 입력 필드 초기화
      displayReviews(); // 리뷰 목록 갱신
    } else {
      // 입력이 안되면
      alert("리뷰를 입력해주세요.");
    }
  }

  function loadReviews() {
    displayReviews(); // 새로고침이나 처음 들어올때 기존의 리뷰룰 보여주기 위해 존재
  }

  function displayReviews() {
    // 리뷰 보여주는 함수
    const reviewsContainer = document.getElementById("reviews-container");
    // html에 있는 id reviews-container를  review Container에 담는다.
    const reviews = JSON.parse(localStorage.getItem("reviews")) || [];
    // reviews 키에 담긴 벨류를 객체와 한것을 reviews에 담는다.
    reviewsContainer.innerHTML = "";
    // 목록 초기화

    reviews.forEach((review) => {
      // 리뷰를 붙여준다
      const reviewElement = document.createElement("div");
      reviewElement.textContent = review;
      reviewsContainer.appendChild(reviewElement);
    });
  }
};
