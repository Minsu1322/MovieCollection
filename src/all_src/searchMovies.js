import { fetchMovieAPI } from "./fetchMovieAPI.js";

export const searchMovies = async () => {
  const movieInfo = await fetchMovieAPI();

  let urlParams = new URLSearchParams(window.location.search);
  let searchTerm = urlParams.get("query");
  console.log(searchTerm);

  const $movieList = document.querySelector("#movie-list #movie-cards");

  $movieList.innerHTML = "";

  movieInfo.forEach((movie) => {
    console.log(movie);
    const title = movie.title.toLowerCase();
    if (title.includes(searchTerm.toLowerCase())) {
      let temp_html = `
        <a href="./detailMovie.html?id=${movie.id}" class="card">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <h1>${movie.title}</h1>
            <p>평점: ⭐️${movie.vote_average}</p>
        </a>
      `;
      $movieList.innerHTML += temp_html;
    }
  });
};

searchMovies();
