import { combineReducers } from "redux";
import { addsubReducer } from "./addsub";
import { countingReducer } from "./counting";

export const rootReducer = combineReducers({
  value: addsubReducer,
  count: countingReducer,
});
