export const searchMovies = () => {
  // const searchButton = document.querySelector("#search-btn");
  const searchInput = document.getElementById("search-section-movie");
  const searchForm = document.getElementById("search-section");
  // const cardSection = document.querySelectorAll("card");
  // console.log(searchInput);
  // console.log(searchForm);

  function filteredMovies(event) {
    event.preventDefault();
    const searchResult = searchInput.value;

    // 카드를 검색해서, display로 조정
    const movieCards = document.querySelectorAll(".card");

    movieCards.forEach((card) => {
      const title = card.querySelector("h1").textContent.toLowerCase();
      if (title.includes(searchResult.toLowerCase())) {
        card.style.display = "block"; // searchResult 포함하면 표시 / 아니면반대
      } else {
        card.style.display = "none";
      }
    });
  }
  searchForm.addEventListener("submit", filteredMovies);
};
