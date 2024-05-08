export const openModal = async (content) => {
  return new Promise((resolve) => {
    const $modalBox = document.querySelector(".modal-box");
    const $message = document.querySelector(".message");
    const $checkBtn = document.querySelector(".check-btn");
    $modalBox.style.display = "flex";
    $message.textContent = content;
    $checkBtn.focus();
    $checkBtn.addEventListener("click", () => {
      $modalBox.style.display = "none";
      resolve(); // 모달이 닫힌 후에 resolve
    });
  });
};