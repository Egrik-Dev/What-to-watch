import {combineReducers} from "redux";
import {appState} from "./app-state/app-state";
import {loadData} from "./load-data/load-data";
import {user} from './user/user';

export const NameSpace = {
  LOAD_DATA: `LOAD_DATA`,
  APP_STATE: `APP_STATE`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.LOAD_DATA]: loadData,
  [NameSpace.APP_STATE]: appState,
  [NameSpace.USER]: user
});
