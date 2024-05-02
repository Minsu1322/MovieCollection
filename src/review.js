export const review = () => {
  const reviewForm = document.getElementById("review-form");
  const reviewList = document.querySelector(".review-list");
  const reviewTextarea = document.getElementById('review-text');
  const saveButton = document.querySelector('btn');

  function saveReivews(event){
    event.preventDefault();
    const reviewText = reviewTextarea.value;

    if (reviewText !== '') {
      localStorage.setItem("review", reviewText);
      alert('리뷰가 저장되었습니다!');
    } else {
      alert('리뷰를 입력해주세요!');
    }
  };

  reviewList.addEventListener("submit", saveReivews);
}

  // const reviewList = {
    //   text: newReviews,
    //   id: ID,
    //   password
    // }