import { fetchMovieAPI } from "../all_src/fetchMovieAPI.js";

export const moviesSort = async () => {
  const movieInfo = await fetchMovieAPI();
  const $movieList = document.querySelector("#movie-list #movie-cards");
  const $sort = document.querySelector("#sort");

  $sort.addEventListener("change", (e) => {
    $movieList.innerHTML = "";
    let sortedMovieInfo = [];

    if (e.target.value === "name") {
      const titleSortArr = movieInfo.map((movie) => movie.title).sort();
      // 여기서 titleSort에 있는 순서대로 영화 카드를 보여줘야 함
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
      // 여기서 scoreSort에 있는 순서대로 영화 카드를 보여줘야 함
      for (let i = 0; i < scoreSortArr.length; i++) {
        movieInfo.forEach((movie) => {
          if (movie.title === scoreSortArr[i][1]) sortedMovieInfo.push(movie);
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
