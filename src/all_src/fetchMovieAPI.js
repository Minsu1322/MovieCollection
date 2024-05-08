export const fetchMovieAPI = async () => {
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