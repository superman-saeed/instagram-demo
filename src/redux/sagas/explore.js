import unsplash from "../../misc/utils";
import {FETCH_EXPLORES } from "../../constants/actionTypes";
import {put, takeLatest } from "redux-saga/effects";
import {
  addExplores,
  exploresStatus
} from "../actions/explore";


function* fetchExplore(action){
  const page = action.payload.page;
  yield put(exploresStatus("pending"));
  try {
    const json=  yield unsplash.collections.getCollectionPhotos(3053437, page, 6, "popular")
    .then(data=>data.json());
     yield put(addExplores(json));
  } catch(e) {
     yield put(exploresStatus("failed"));
  }

}

function* watch_explore() {
  yield takeLatest(FETCH_EXPLORES, fetchExplore);
}


export default watch_explore;
