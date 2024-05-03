import { beginToFirebase } from "./beginToFirebase2.js";
import {
  query,
  collection,
  getDocs,
  updateDoc,
  where,
  limit,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getCurrentDate } from "./getCurrentDate2.js";

export const fixReview = (movieId) => {
  const db = beginToFirebase();

  const $reviewList = document.querySelector(".review-list");

  $reviewList.addEventListener("click", async (e) => {
    e.preventDefault();
    if (e.target.id === "fix-btn") {
      const reviewBottom =
        e.target.parentNode.parentNode.nextSibling.nextSibling;
      const fixComment = reviewBottom.children[1].textContent;

      const fixData = await getDocs(
        query(
          collection(db, `movie${movieId}`),
          where("comment", "==", fixComment),
          limit(1)
        )
      );

      const rightPW = fixData.docs[0].data().password;

      const $checkFixComBtn = e.target.nextSibling.nextSibling;

      const $checkPWBox =
        $checkFixComBtn.nextSibling.nextSibling.nextSibling.nextSibling;
      $checkPWBox.style.display = "flex";

      const $checkPW = $checkPWBox.querySelector("#checkPW");
      const $checkPWBtn = $checkPWBox.querySelector("#checkPW-btn");

      $checkPWBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        if ($checkPW.value === rightPW) {
          $checkPWBox.style.display = "none";
          $checkFixComBtn.style.display = "block";
          $checkFixComBtn.previousSibling.previousSibling.style.display =
            "none";
          reviewBottom.children[1].style.display = "none";
          reviewBottom.children[2].style.display = "flex";
          const textLength = reviewBottom.children[2].value.length;
          reviewBottom.children[2].focus();
          reviewBottom.children[2].setSelectionRange(textLength, textLength);

          $checkFixComBtn.addEventListener("click", async (e) => {
            let newComment = reviewBottom.children[2].value;
            console.log(newComment);
            let date = getCurrentDate();
            await updateDoc(fixData.docs[0].ref, {
              date: date,
              comment: newComment,
            });
            window.location.reload();
          });
        } else {
          alert("비밀번호가 일치하지 않습니다.");
        }
      });
    }
  });
};
