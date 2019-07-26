import landing from "./landing";
import explore from "./explore";
import {combineReducers} from "redux";

const reducers = combineReducers(
  explore,
  landing
);

export default reducers;
