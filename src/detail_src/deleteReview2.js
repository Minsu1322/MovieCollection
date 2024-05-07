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

      const $checkPWBox2 = e.target.nextSibling.nextSibling;
      $checkPWBox2.style.display = "flex";

      const $div = $checkPWBox2.querySelector("div");
      const $checkPW2 = $checkPWBox2.querySelector("#checkPW2");
      const $checkPWBtn2 = $checkPWBox2.querySelector("#checkPW-btn2");

      $checkPW2.focus();

      const clickHandler = async (e) => {
        if (
          e.target !== $checkPWBox2 &&
          e.target !== $div &&
          e.target !== $checkPW2 &&
          e.target !== $checkPWBtn2 &&
          e.target.id !== "delete-btn"
        ) {
          $checkPWBox2.style.display = "none";
          $checkPW2.value = "";
          $checkPWBtn2.removeEventListener("click", clickPWHandler);
        }
      };

      document.addEventListener("click", clickHandler);

      const clickPWHandler = async () => {
        if ($checkPW2.value === rightPW) {
          await deleteDoc(deleteData.docs[0].ref);
          window.location.reload();
        } else {
          alert("비밀번호가 일치하지 않습니다.");
          $checkPW2.value = "";
          $checkPW2.focus();
          document.removeEventListener("click", clickHandler);
        }
        document.addEventListener("click", clickHandler);
      };

      $checkPWBtn2.addEventListener("click", clickPWHandler);
    }
  });
};
