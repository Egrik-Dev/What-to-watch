import {combineReducers} from "redux";
import {appState} from "./app-state/app-state";
import {loadData} from "./load-data/load-data";

export const NameSpace = {
  LOAD_DATA: `LOAD_DATA`,
  APP_STATE: `APP_STATE`
};

export default combineReducers({
  [NameSpace.LOAD_DATA]: loadData,
  [NameSpace.APP_STATE]: appState
});
