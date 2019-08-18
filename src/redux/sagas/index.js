import {all} from "redux-saga/effects";
import landingSaga from "./landing";

export function* mySaga() {
  yield all(
    [landingSaga()]
  );
}
