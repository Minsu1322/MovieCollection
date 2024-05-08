import { fetchMovieAPI } from "../all_src/fetchMovieAPI.js";

export const moviesSort = async () => {
  const movieInfo = await fetchMovieAPI();
  console.log(movieInfo);
  const $movieList = document.querySelector("#movie-list #movie-cards");
  const $sort = document.querySelector("#sort");

  $sort.addEventListener("change", (e) => {
    $movieList.innerHTML = "";
    let sortedMovieInfo = [];

    if (e.target.value === "name") {
      const titleSortArr = movieInfo.map((movie) => movie.title).sort();
      for (let i = 0; i < titleSortArr.length; i++) {
        movieInfo.forEach((movie) => {
          if (movie.title === titleSortArr[i]) sortedMovieInfo.push(movie);
        });
      }
    } else if (e.target.value === "score") {
      const scoreSortArr = movieInfo
        .map((movie) => [movie.vote_average, movie.title])
        .sort()
        .reverse();
      for (let i = 0; i < scoreSortArr.length; i++) {
        movieInfo.forEach((movie) => {
          if (movie.title === scoreSortArr[i][1]) sortedMovieInfo.push(movie);
        });
      }
    } else if (e.target.value === "date") {
      const dateSortArr = movieInfo
        .map((movie) => movie.release_date)
        .sort()
        .reverse();
      console.log(dateSortArr);
      for (let i = 0; i < dateSortArr.length; i++) {
        movieInfo.forEach((movie) => {
          if (movie.release_date === dateSortArr[i])
            sortedMovieInfo.push(movie);
        });
      }
    } else if (e.target.value === "popularity") {
      const popularitySortArr = movieInfo
        .map((movie) => movie.popularity)
        .sort((a, b) => a - b)
        .reverse();
      console.log(popularitySortArr);
      for (let i = 0; i < popularitySortArr.length; i++) {
        movieInfo.forEach((movie) => {
          if (movie.popularity === popularitySortArr[i])
            sortedMovieInfo.push(movie);
        });
      }
    }

    $movieList.innerHTML = sortedMovieInfo
      .map(
        (movie) => `
        <a href="./detailMovie2.html?id=${movie.id}" class="card">
          <img src="https://image.tmdb.org/t/p/w500${movie.poster_path}" alt="${movie.title}">
            <h1>${movie.title}</h1>
            <p>평점: ⭐️${movie.vote_average}</p>
        </a>
      `
      )
      .join("");
  });
};
