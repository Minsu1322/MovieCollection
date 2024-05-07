export const goToSearchPage = () => {
  const $searchForm = document.getElementById("search-section");
  const $searchInput = document.getElementById("search-section-movie");
  
  $searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const searchResult = $searchInput.value.trim(); // 입력된 검색어
    if (searchResult !== "") {
      window.location.href = `./search.html?query=${encodeURIComponent(
        searchResult
      )}`; // 검색어를 query 파라미터로 추가하여 새로운 페이지로 이동
    }
  });
};
