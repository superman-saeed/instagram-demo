import {all} from "redux-saga/effects";
import {watchArticles, watchStories} from "./landing";
import watchExplore from "./explore";

export function* mySaga() {
  yield all(
    [
      watchArticles(),
      watchStories(),
      watchExplore()
    ]
  );
}
