import { detailInfo } from "./detailInfo.js";
import { getCurrentDate } from "./getCurrentDate.js";

export const getReview = async () => {
  const movieId = await detailInfo();
  const reviewList = document.querySelector(".review-list");

  const reviews = JSON.parse(localStorage.getItem(movieId));

  reviewList.innerHTML = "";
  reviews.forEach((review) => {
    const id = review["ID"];
    const text = review["text"];
    const score = review["score"];
    const date = review["date"];
    let temp_html = `<div>${id} ${date} ${score} ${text}
      <button class="delete-btn" data-id="${id}">삭제</button></div>`;
    reviewList.innerHTML += temp_html;
  });
};

// `
//       <li class="review-box">
//         <div class="review-top">
//           <div class="name-date-box">
//             <p id="username">${username}</p>
//             <p id="date">${date}</p>
//           </div>
//           <div class="btn-box">
//             <button id="fix-btn">수정</button>
//             <button id="fix-complete-btn">수정 완료</button>
//             <button id="delete-btn">삭제</button>
//             <div class="checkPW-box">
//               <div>비밀번호를 입력해주세요.</div>
//               <div>
//                 <input type="password" id="checkPW"></input>
//                 <button id="checkPW-btn">입력</button>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div class="review-bottom">
//           <p id="star-score">${score}</p>
//           <p id="comment">${comment}</p>
//           <textarea id="re-comment" name="" cols="100" rows="3">${comment}</textarea>
//         </div>
//       </li>`;
