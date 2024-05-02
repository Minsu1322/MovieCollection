import { fetchMovieAPI } from "./fetchMovieAPI.js";

export const displayMovies = async () => {
  const movieInfo = await fetchMovieAPI();
  const $movieList = document.querySelector("#movie-list #movie-cards");

  $movieList.innerHTML = movieInfo
    .map(
      (movie) => `
      <div class="card">
        <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
          <h1>${movie.title}</h1>
          <p>평점: ⭐️${movie.vote_average}</p>
      </div>
    `
    )
    .join("");
};
