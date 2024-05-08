import { focusOn } from "../all_src/focusOn.js";
import { goToSearchPage } from "../all_src/goToSearchPage.js";
import { toTheTop } from "../all_src/toTheTop.js";
import { detailInfo } from "./detailInfo.js";
import { review } from "./review.js";

focusOn();
goToSearchPage();
toTheTop();
const movieId = await detailInfo();
review(movieId);
