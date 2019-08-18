import unsplash from "../../misc/utils";
import {addActicles, articlesFetchFails} from "../actions/landing";
import {FETCH_ARTICLES} from "../../constants/actionTypes";
import {put, takeLatest } from "redux-saga/effects";

function* fetchNewArticles(action){
  const page = action.payload.page;
  try {
    const json= yield unsplash.photos.listPhotos(
      page, 5, "popular")
    .then((data)=>data.json());
     yield put(addActicles(json));
     console.log(json);
  } catch(e) {
    console.log(e);
  }

}

function* watchArticleFetch() {
  yield takeLatest(FETCH_ARTICLES, fetchNewArticles);
}

export default watchArticleFetch;
