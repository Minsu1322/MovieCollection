import { searchMovies } from "../all_src/searchMovies.js";
import { toTheTop } from "../all_src/toTheTop.js";
import { detailInfo } from "./detailInfo.js";
import { addReview } from "./addReview2.js";
import { getReview } from "./getReview.js";
import { deleteReview } from "./deleteReview.js";
import { fixReview } from "./fixReview.js";

searchMovies();
toTheTop();
const movieId = await detailInfo();
addReview(movieId);
getReview(movieId);
deleteReview(movieId);
fixReview(movieId);
