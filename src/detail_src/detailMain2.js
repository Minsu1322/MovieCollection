import { searchMovies } from "../all_src/searchMovies.js";
import { toTheTop } from "../all_src/toTheTop.js";
import { detailInfo } from "./detailInfo.js";
import { addReview } from "./addReview2.js";
import { deleteReview } from "./deleteReview2.js";
import { fixReview } from "./fixReview2.js";

searchMovies();
toTheTop();
const movieId = await detailInfo();
addReview(movieId);
getReview(movieId);
deleteReview(movieId);
fixReview(movieId);
