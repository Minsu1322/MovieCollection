<<<<<<< HEAD
export const addReview = async () => {
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
    localStorage.setItem(movieId, JSON.stringify(arr));
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
=======
import { beginToFirebase } from "./beginToFirebase.js";
import { collection, addDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getCurrentDate } from "./getCurrentDate.js";

// TODO: detailMain.js 파일에 함수 임포트 및 호출해야 함 -> O
// TODO: 이때, detailInfo() 함수로부터 movieId(movie.id) 받아와야 함 -> O
// TODO: 그러기 위해서는 detailInfo() 함수에서 movie.id를 리턴해야 함 -> O
export const addReview = (movieId) => {
  const db = beginToFirebase();

  // TODO: html 파일 보고 알맞은 선택자로 바꿔야 함 -> O
  const $submitBtn = document.querySelector(".submit-btn");
  const $username = document.querySelector("#reviewId");
  const $password = document.querySelector("#reviewPW");
  // TODO: html 파일에 평점 넣는 곳 추가해야 함 -> O
  const $score = document.querySelector("#score");
  const $comment = document.querySelector("#review-text");

  $submitBtn.addEventListener("click", async (e) => {
    e.preventDefault();
    // 사용자가 입력한 데이터를 가져옴
    let username = $username.value;
    let password = $password.value;
    let date = getCurrentDate();
    let score = $score.value;
    let comment = $comment.value;

    let doc = {
      username: username,
      password: password,
      date: date,
      score: score,
      comment: comment,
    };

    await addDoc(collection(db, `movie${movieId}`), doc);

    window.location.reload();
  });
>>>>>>> b09ff379bb0ddeb57ac16b3fb159faa804600d8f
};
