export const getReview = async (movieId) => {
  const reviewList = document.querySelector(".review-list");

  const reviews = JSON.parse(localStorage.getItem(movieId));

  reviewList.innerHTML = "";
  reviews.forEach((review) => {
    const id = review["ID"];
    const text = review["text"];
    const score = review["score"];
    let temp_html = `<div>작성자: ${id} 별점: ${score} 리뷰내용: ${text}
      <button class="delete-btn" data-id="${id}">삭제</button></div>`;
    reviewList.innerHTML += temp_html;
  });
};
