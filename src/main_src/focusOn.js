export const focusOn = () => {
  const $searchInput = document.getElementById("search-section-movie");

  window.onload = () => {
    $searchInput.focus();
  };
};