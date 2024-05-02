export const handleReview = async () => {

  document.addEventListener("DOMContentLoaded", function() {
    const reviewForm = document.getElementById("review-form");
    const reviewList = document.querySelector(".review-list");
    let reviews = [];
  

    //배열에 push, 출력
    function saveReview(author, password, text) {
      const id = reviews.length + 1;
      reviews.push({ id, author, password, text });
      renderReviews();
    }
  
    //리뷰 렌더(출력)
    function renderReviews() {
      reviewList.innerHTML = reviews.map(review => `
        <div>
          <span>작성자: ${review.author}</span>
          <span>리뷰 내용: ${review.text}</span>
          <button class="delete-btn" data-id="${review.id}">삭제</button>
        </div>
      `).join('');
    }


    // 리뷰삭제
    function deleteReview(id, password) {
      const index = reviews.findIndex(review => review.id === id && review.password === password);
      if (index !== -1) {
        reviews.splice(index, 1);
        renderReviews();
      } else {
        alert("비밀번호가 일치하지 않거나 리뷰가 존재하지 않습니다.");
      }
    }
  

    //값들 저장
    reviewForm.addEventListener("submit", function(event) {
      event.preventDefault();
      const author = document.getElementById("reviewId").value;
      const password = document.getElementById("reviewPW").value;
      const text = document.getElementById("review-text").value;
      if (author && password && text) {
        saveReview(author, password, text);
        reviewForm.reset();
      } else {
        alert("작성자, 비밀번호, 리뷰 내용을 모두 입력하세요.");
      }
    });
  
    //삭제
    reviewList.addEventListener("click", function(event) {
      if (event.target.classList.contains("delete-btn")) {
        const id = parseInt(event.target.dataset.id);
        const password = prompt("비밀번호를 입력하세요:");
        if (password) {
          deleteReview(id, password);
        }
      }
    });
  });
}