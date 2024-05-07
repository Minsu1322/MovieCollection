import { beginToFirebase } from "./beginToFirebase2.js";
import {
  collection,
  getDocs,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

// TODO: detailMain.js 파일에 함수 임포트 및 호출해야 함 -> O
// TODO: 이때, detailInfo() 함수로부터 movieId(movie.id) 받아와야 함 -> O
// TODO: 그러기 위해서는 detailInfo() 함수에서 movie.id를 리턴해야 함 -> O
export const getReview = async (movieId) => {
  const db = beginToFirebase();

  let docs = await getDocs(collection(db, `movie${movieId}`));
  const $reviewList = document.querySelector(".review-list");

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
            <p id="username">${username}</p>
            <p id="date">${date}</p>
          </div> 
          <div class="btn-box">
            <button id="fix-btn">수정</button>
            <button id="fix-complete-btn">수정 완료</button>
            <button id="delete-btn">삭제</button>
            <div class="checkPW-box">
              <div>비밀번호를 입력해주세요.</div>
              <div>
                <input type="password" id="checkPW"></input>
                <button id="checkPW-btn">입력</button>
              </div>
            </div>
          </div>
        </div>
        <div class="review-bottom">
          <p id="star-score">${score}</p>
          <p id="comment">${comment}</p>
          <textarea id="re-comment" name="" cols="100" rows="3">${comment}</textarea>
        </div>
      </li>`;

    $reviewList.innerHTML += temp_html;
  });
};
