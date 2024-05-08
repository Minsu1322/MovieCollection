import { focusOn } from "../all_src/focusOn.js";
import { goToSearchPage } from "../all_src/goToSearchPage.js";
import { toTheTop } from "../all_src/toTheTop.js";
import { detailInfo } from "./detailInfo.js";
import { addReview } from "./addReview2.js";
import { deleteReview } from "./deleteReview2.js";
import { fixReview } from "./fixReview2.js";
import { getReview } from "./getReview2.js";

focusOn();
goToSearchPage();
toTheTop();
const movieId = await detailInfo();
addReview(movieId);
getReview(movieId);
deleteReview(movieId);
fixReview(movieId);
