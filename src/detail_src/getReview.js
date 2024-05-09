export const getReview = async (movieId) => {
  const reviewList = document.querySelector(".review-list");

  const reviews = JSON.parse(localStorage.getItem(movieId));

  reviewList.innerHTML = "";
  reviews.reverse().forEach((review) => {
    const id = review["ID"];
    const text = review["text"];
    const date = review["date"];
    const score = review["score"];
    let temp_html = `
      <div>        
         <span class="userName">${id}</span> &ensp;<span class="date">${date}</span> &ensp; ${score}<button class="delete-btn" data-id="${id}">삭제</button>
         <br>${text}        
      </div>`;

    reviewList.innerHTML += temp_html;
  });
};
