import { fetchMovieAPI } from "../all_src/fetchMovieAPI.js";

export const detailInfo = async () => {
  const movieInfo = await fetchMovieAPI();

  let urlParams = new URLSearchParams(window.location.search);
  let movieId = urlParams.get("id");

  let movieObj = movieInfo.reduce((obj, movie) => {
    if (movie.id === Number(movieId)) obj = movie;
    return obj;
  }, {});

  document
    .getElementById("detail-poster")
    .setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500${movieObj.poster_path}`
    );
  document.getElementById("detail-title").innerHTML =
    movieObj.title.toUpperCase();
  document.getElementById(
    "detail-release"
  ).innerHTML = `개봉일: 🎬${movieObj.release_date}`;
  document.getElementById(
    "detail-average"
  ).innerHTML = `평점: ⭐️${movieObj.vote_average.toFixed(2)}`;
  document.getElementById(
    "detail-popular"
  ).innerHTML = `인기도: 💖${movieObj.popularity}`;
  document.getElementById("detail-overview").innerHTML = movieObj.overview;
  document
    .getElementById("detail-poster2")
    .setAttribute(
      "src",
      `https://image.tmdb.org/t/p/w500${movieObj.backdrop_path}`
    );

  return movieId;
};
