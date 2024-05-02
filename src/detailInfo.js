import { fetchMovieAPI } from "./fetchMovieAPI.js";

export const detailInfo = async () => {
  const movieInfo = await fetchMovieAPI();

  let urlParams = new URLSearchParams(window.location.search);
  let movieId = urlParams.get("id");

  let movieObj = movieInfo.reduce((obj, movie) => {
    if (movie.id === Number(movieId)) obj = movie;
    return obj;
  }, {});

  console.log(movieObj);
};
