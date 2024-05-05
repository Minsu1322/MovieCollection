import { beginToFirebase } from "./beginToFirebase2.js";
import {
  query,
  collection,
  getDocs,
  deleteDoc,
  where,
  limit,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

export const deleteReview = (movieId) => {
  const db = beginToFirebase();

  const $reviewList = document.querySelector(".review-list");

  $reviewList.addEventListener("click", async (e) => {
    e.preventDefault();
    if (e.target.id === "delete-btn") {
      const deleteComment =
        e.target.parentNode.parentNode.nextSibling.nextSibling.children[1]
          .textContent;

      const deleteData = await getDocs(
        query(
          collection(db, `movie${movieId}`),
          where("comment", "==", deleteComment),
          limit(1)
        )
      );

      const rightPW = deleteData.docs[0].data().password;

      const $checkPWBox = e.target.nextSibling.nextSibling;
      $checkPWBox.style.display = "flex";

      const $checkPW = $checkPWBox.querySelector("#checkPW");
      const $checkPWBtn = $checkPWBox.querySelector("#checkPW-btn");

      $checkPW.focus();

      document.addEventListener("click", (e) => {
        if (e.target !== $checkPWBox && e.target !== $checkPW) {
          $checkPWBox.style.display = "none";
          $checkPW.value = "";
        }
      });

      $checkPWBtn.addEventListener("click", async (e) => {
        e.preventDefault();
        if ($checkPW.value === rightPW) {
          await deleteDoc(deleteData.docs[0].ref);
          window.location.reload();
        } else {
          alert("비밀번호가 일치하지 않습니다.");
          $checkPW.value = "";
        }
      });
    }
  });
};
