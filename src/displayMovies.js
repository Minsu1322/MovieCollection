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

  const $title = document.querySelectorAll(".card h1");
  const $score = document.querySelectorAll(".card p");
  console.log($title, $score);

  return { $title, $score };
};

const fetchMovieAPI = async () => {
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmM2NlNjg2MGZmOWMwNGJiOTYwYjMwODQ3Yzg4YWRjOCIsInN1YiI6IjY2Mjc3OGQ1NjNlNmZiMDE3ZWZkYjdkNyIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.IkI6KPSpGZAIJOmESZ7Nad4Q32_rMzFm9RB1YE57TYw",
    },
  };

  const { results } = await fetch(
    "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
    options
  ).then((response) => response.json());

  return results;
};
