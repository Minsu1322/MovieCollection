import { beginToFirebase } from "./beginToFirebase2.js";
import {
  query,
  collection,
  getDocs,
  updateDoc,
  where,
  limit,
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { getCurrentDate } from "./getCurrentDate.js";

export const fixReview = (movieId) => {
  const db = beginToFirebase();

  const $reviewList = document.querySelector(".review-list");

  $reviewList.addEventListener("click", async (e) => {
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

      const $checkFixComBtn =
        e.target.nextSibling.nextSibling.nextSibling.nextSibling;

      const $checkPWBox1 = e.target.nextSibling.nextSibling;
      $checkPWBox1.style.display = "flex";

      const $div = $checkPWBox1.querySelector("div");
      const $checkPW1 = $checkPWBox1.querySelector("#checkPW1");
      const $checkPWBtn1 = $checkPWBox1.querySelector("#checkPW-btn1");

      $checkPW1.focus();

      const clickHandler = async (e) => {
        e.preventDefault();
        if (
          e.target !== $checkPWBox1 &&
          e.target !== $div &&
          e.target !== $checkPW1 &&
          e.target !== $checkPWBtn1 &&
          e.target.id !== "fix-btn"
        ) {
          $checkPWBox1.style.display = "none";
          $checkPW1.value = "";
          $checkPWBtn1.removeEventListener("click", clickPWHandler);
        }
      };

      document.addEventListener("click", clickHandler);

      const clickPWHandler = async (e) => {
        e.preventDefault();
        if ($checkPW1.value === rightPW) {
          $checkPWBox1.style.display = "none";
          $checkFixComBtn.style.display = "block";
          $checkPWBox1.previousSibling.previousSibling.style.display = "none";
          reviewBottom.children[1].style.display = "none";
          reviewBottom.children[2].style.display = "flex";
          const textLength = reviewBottom.children[2].value.length;
          reviewBottom.children[2].focus();
          reviewBottom.children[2].setSelectionRange(textLength, textLength);
          $checkFixComBtn.addEventListener("click", clickFixComBtnHandler);
          e.stopPropagation();
        } else {
          alert("비밀번호가 일치하지 않습니다.");
          $checkPW1.value = "";
          $checkPW1.focus();
          document.removeEventListener("click", clickHandler);
        }
        document.addEventListener("click", clickHandler);
      };

      $checkPWBtn1.addEventListener("click", clickPWHandler);

      const clickFixComBtnHandler = async () => {
        e.preventDefault();
        let newComment = reviewBottom.children[2].value;
        console.log(newComment);
        let date = getCurrentDate();
        await updateDoc(fixData.docs[0].ref, {
          date: date,
          comment: newComment,
        });
        window.location.reload();
      };
    }
  });
};
