import {all} from "redux-saga/effects";
import {watchArticles, watchStories} from "./landing";

export function* mySaga() {
  yield all(
    [
      watchArticles(),
      watchStories()
    ]
  );
}
