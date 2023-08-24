export { actions as moviesActions } from "./slice";
export { default as moviesReducer } from "./slice";
import { combineEpics } from "redux-observable";
import {
  createMovieReviewAsyncEpic,
  editMovieReviewAsyncEpic,
  fetchReviewsAsyncEpic,
  moviesAsyncEpic,
} from "./epics";

export const moviesEpics = combineEpics(
  moviesAsyncEpic,
  fetchReviewsAsyncEpic,
  createMovieReviewAsyncEpic,
  editMovieReviewAsyncEpic
);
