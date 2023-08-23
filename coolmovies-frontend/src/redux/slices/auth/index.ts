export { actions as authActions } from "./slice";
export { default as authReducer } from "./slice";
import { combineEpics } from "redux-observable";
import { authAsyncEpic } from "./epics";

export const authEpics = combineEpics(authAsyncEpic);
