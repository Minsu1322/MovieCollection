// import { displayMovies } from "./displayMovies";

export const moviesSort = () => {
  const $sort = document.querySelector("#sort");
  // const {$title, $score} = displayMovies();
  // console.log($title);

  $sort.addEventListener("change", (e) => {
    if (e.target.value === "name") {
      console.log("이름순");
    } else if (e.target.value === "score") {
      console.log("평점순");
    }
  });
};
