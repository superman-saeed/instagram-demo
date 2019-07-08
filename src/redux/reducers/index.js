import {combineReducers} from "redux";
import * as feed from "./feed.js";
import explore from "./explore.js";

export default combineReducers({
  ...feed,
  explore
})
