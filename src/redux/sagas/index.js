import {put,  takeEvery } from "redux-saga/effects";

function*  helloSaga(action){
  console.log(action.payload.sample);
  put({type:"simple dispatch", payload:{}});
}

export function* mySaga() {
  yield takeEvery("saga_test", helloSaga);
}
