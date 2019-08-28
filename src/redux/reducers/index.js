import landing from "./landing";
import explore from "./explore";
import navigation from "./navigation";
import {combineReducers} from "redux";

const reducers = combineReducers({
  explore,
  landing,
  navigation
});

export default reducers;
