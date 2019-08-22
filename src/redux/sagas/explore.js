import unsplash from "../../misc/utils";
import {FETCH_EXPLORES } from "../../constants/actionTypes";
import {put, takeLatest } from "redux-saga/effects";
import {
  addExplores

} from "../actions/explore";


function* fetchExplore(action){
  const page = action.payload.page;
  try {
    const json=  yield unsplash.collections.getCollectionPhotos(3053437, 1, 9, "popular")
    .then(data=>data.json());
    console.log(json);
     yield put(addExplores(json));
  } catch(e) {
    console.log(e);
  }

}

function* watch_explore() {
  yield takeLatest(FETCH_EXPLORES, fetchExplore);
}


export default watch_explore;
