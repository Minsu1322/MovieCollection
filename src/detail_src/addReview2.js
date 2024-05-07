import { beginToFirebase } from "./beginToFirebase2.js";
import {
  collection,
  addDoc,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getCurrentDate } from "./getCurrentDate.js";

export const addReview = (movieId) => {
  const db = beginToFirebase();

  const $submitBtn = document.querySelector(".submit-btn");
  const $username = document.querySelector("#reviewId");
  const $password = document.querySelector("#reviewPW");
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
};
