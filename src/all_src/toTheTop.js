export const toTheTop = () => {
  const $arrowBtn = document.querySelector(".arrowBtn");
  const scrollThreshold = window.innerHeight;

  window.addEventListener("scroll", () => {
    if (window.scrollY > scrollThreshold) {
      $arrowBtn.style.display = "block"; // 중간 이후에 버튼을 보이게 함
    } else {
      $arrowBtn.style.display = "none"; // 중간 이전에 버튼을 숨김
    }
  });


  $arrowBtn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });

};