import { fetchMovieAPI } from "./fetchMovieAPI.js";

export const detailInfo = async () => {
  const movieInfo = await fetchMovieAPI();

  let urlParams = new URLSearchParams(window.location.search);
  let movieId = urlParams.get("id");

  let movieObj = movieInfo.reduce((obj, movie) => {
    if (movie.id === Number(movieId)) obj = movie;
    return obj;
  }, {});

  

  document.getElementById("detail-poster").setAttribute("src", `https://image.tmdb.org/t/p/w500${movieObj.backdrop_path}`);
  document.getElementById("detail-title").innerHTML = movieObj.title;
  document.getElementById("detail-release").innerHTML = movieObj.release_date;
  document.getElementById("detail-average").innerHTML = movieObj.vote_average;
  document.getElementById("detail-popular").innerHTML = movieObj.vote_count;
  document.getElementById("detail-overview").innerHTML = movieObj.overview;



  console.log(movieObj);

}
