import { displayMovies } from "./displayMovies.js";
import { toTheTop } from "./toTheTop.js";
import { searchMovies } from "./searchMovies.js";
import { moviesSort } from "./moviesSort.js";

// const cards = movieList.querySelectorAll(".card");
//   cards.forEach((card, index) => {
//     card.addEventListener("click", function () {
//       // alertMovie(movies[index].id);
//       // 누르면 상세 페이지로 이동
//     });
//   });

displayMovies();
searchMovies();
toTheTop();
moviesSort();