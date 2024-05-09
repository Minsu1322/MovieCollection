import { beginToFirebase } from "./beginToFirebase2.js";
import {
  query,
  collection,
  getDocs,
  orderBy,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

export const getReview = async (movieId) => {
  const db = beginToFirebase();

  let docs = await getDocs(
    query(collection(db, `movie${movieId}`), orderBy("date", "desc"))
  );
  const $reviewList = document.querySelector(".review-list");
  $reviewList.innerHTML = "";

  docs.forEach((doc) => {
    let row = doc.data();

    let username = row["username"];
    let date = row["date"];
    let score = row["score"];
    let comment = row["comment"];

    // TODO: html 파일에 리뷰 리스트 태그를 div에서 ul로 바꾸기
    // TODO: 리뷰 리스트 공간 일정 크기로 해놓고 스크롤 생성하기(화면이 무제한으로 길어지는 걸 방지하기 위해)
    let temp_html = `
      <li class="review-box">
        <div class="review-top">
          <div class="name-date-box">
            <p class="username">${username}</p>
            <p class="date">${date}</p>
            <p class="star-score">${score}</p>
          </div> 
          <div class="btn-box">
            <button class="fix-complete-btn">수정 완료</button>
            <button class="fix-btn">수정</button>
            <div class="checkPW-box1">
              <div>비밀번호를 입력해주세요.</div>
              <div>
                <input type="password" class="checkPW1"></input>
                <button class="checkPW-btn1">입력</button>
              </div>
            </div>
            <button class="delete-btn">삭제</button>
            <div class="checkPW-box2">
              <div>비밀번호를 입력해주세요.</div>
              <div>
                <input type="password" class="checkPW2"></input>
                <button class="checkPW-btn2">입력</button>
              </div>
            </div>
          </div>
        </div>
        <div class="review-bottom">
          <p class="comment">${comment}</p>
          <textarea class="re-comment" name="" cols="100" rows="3">${comment}</textarea>
        </div>
      </li>`;

    $reviewList.innerHTML += temp_html;
  });
};
