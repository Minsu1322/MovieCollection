export const toTheTop = () => {
  const $arrowBtn = document.querySelector(".arrowBtn");

  $arrowBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
};