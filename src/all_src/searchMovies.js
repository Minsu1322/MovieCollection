import { fetchMovieAPI } from "./fetchMovieAPI.js";

export const searchMovies = async () => {
  const movieInfo = await fetchMovieAPI();

  let urlParams = new URLSearchParams(window.location.search);
  let searchTerm = urlParams.get("query");

  const $searchInput = document.getElementById("search-section-movie");
  const $searchMovie = document.querySelector(".search-movie");
  const $movieList = document.querySelector("#movie-list #movie-cards");

  $searchMovie.textContent = `"${searchTerm}"로 검색한 결과입니다.`;
  $movieList.innerHTML = "";

  movieInfo.forEach((movie) => {
    const title = movie.title.toLowerCase();
    if (title.includes(searchTerm.toLowerCase())) {
      let temp_html = `
        <a href="./detailMovie2.html?id=${movie.id}" class="card">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <h1>${movie.title}</h1>
            <p>평점: ⭐️${movie.vote_average}</p>
        </a>
      `;
      $movieList.innerHTML += temp_html;
    }
  });

  $searchInput.focus();

  if ($movieList.innerHTML === "") {
    $movieList.innerHTML += `
      <h1 class="search-h1">검색 결과가 없습니다.</h1>
    `;
  }
};

searchMovies();
