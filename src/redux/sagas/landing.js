import unsplash from "../../misc/utils";
import {FETCH_ARTICLES, FETCH_STORIES } from "../../constants/actionTypes";
import {put, takeLatest } from "redux-saga/effects";
import {
  addActicles,
  articlesFailed,
  addStories,
  storiesFailed
} from "../actions/landing";

function* fetchNewArticles(action){
  const page = action.payload.page;
  try {
    const json= yield unsplash.photos.listPhotos(
      page, 5, "popular")
    .then((data)=>data.json());
     yield put(addActicles(json));
  } catch(e) {
    console.log(e);
  }

}
function* fetchStories(action){
  const page = action.payload.page;
  try {
    const json =
    yield unsplash.collections.listCollections(page, 8, "popular")
        .then(data=>data.json());
      yield put(addStories(json));
  } catch(e) {
    console.log(e);
  }

}


function* watch_articles() {
  yield takeLatest(FETCH_ARTICLES, fetchNewArticles);
}



function* watch_stories() {
  yield takeLatest(FETCH_STORIES, fetchStories);
}

export const watchArticles = watch_articles;
export const watchStories = watch_stories;
