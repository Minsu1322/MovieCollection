// fetchMovieAPI() 함수가 필요하다..

export const moviesSort = async () => {
  const $movieList = document.querySelector("#movie-list #movie-cards");
  const $sort = document.querySelector("#sort");
  const movieInfo = await fetchMovieAPI();

  $sort.addEventListener("change", (e) => {
    $movieList.innerHTML = "";
    if (e.target.value === "name") {
      const titleSortArr = movieInfo.map((movie) => movie.title).sort();
      console.log(titleSortArr);
      // 여기서 titleSort에 있는 순서대로 영화 카드를 보여줘야 함
      let sortedMovieInfo = [];
      for (let i = 0; i < titleSortArr.length; i++) {
        sortedMovieInfo = movieInfo.filter(
          (movie) => movie.title === titleSortArr[i]
        );
      }
    } else if (e.target.value === "score") {
      const scoreSortArr = movieInfo
        .map((movie) => movie.score)
        .sort()
        .reverse();
      console.log(scoreSortArr);
      // 여기서 scoreSort에 있는 순서대로 영화 카드를 보여줘야 함
      let sortedMovieInfo = [];
      for (let i = 0; i < scoreSortArr.length; i++) {
        sortedMovieInfo = movieInfo.filter(
          (movie) => movie.vote_average === scoreSortArr[i]
        );
      }
    }
    $movieList.innerHTML = sortedMovieInfo
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
  });
};
