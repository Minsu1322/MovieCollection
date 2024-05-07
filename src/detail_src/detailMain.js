import { toTheTop } from "../all_src/toTheTop.js";
import { searchMovies } from "../all_src/searchMovies.js";
import { detailInfo } from "./detailInfo.js";
import { review } from "./review.js";

searchMovies();
toTheTop();
const movieId = await detailInfo();
review(movieId);
